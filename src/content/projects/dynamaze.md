---
title: 'Cycle Hunters Robotics Control System'
shortDescription: 'A multi-agent robotics system for two Alphabot2 teams racing through a labyrinth with shared camera and UR-robot support.'
month: 05
year: 2026
technologies:
  - Python
  - SPADE/XMPP
  - Aiohttp
  - SQLite
  - Docker
  - OpenCV
  - Alphabot2
  - UR robot
logo: '/images/projects/dynamaze/logo.jpeg'
github: 'https://github.com/DynaMaze305/cycle_hunters'
---

## Overview

### Description

Cycle Hunters is an academic robotics project in which two teams develop autonomous Alphabot2 robots for a labyrinth. Each Alphabot2 navigates independently from its starting point toward its assigned destination. The teams race to determine which autonomous robot reaches its destination first. A ceiling camera and a UR robot are shared by both teams: the camera provides a common view of the course, while the UR robot removes potential obstacles from an Alphabot2's trajectory.

The control system coordinates the robots, camera, navigation, telemetry, timekeeping, and shared resources through SPADE agents and XMPP messaging. A web dashboard provides operational controls and live race data, while Docker and Prosody configurations support local and deployed execution.

### Status

The project was completed in May 2026.

### My role

I contributed to the robot-control platform and its supporting operations tooling, including work in the `SpadeRunner` and `URRobot` repositories. My work focused on the dashboard, telemetry, agent communication, navigation integration, runtime infrastructure, and UR robot agent needed to operate the shared system.

### Competition setup

The project was organized around a race between two teams, each responsible for developing an autonomous Alphabot2. Each team received a starting point and a destination in the labyrinth. After the race began, the robots navigated without manual driving; the winner was the robot that reached its assigned destination in the shortest time.

The teams did not own all of the infrastructure independently. They shared the ceiling camera used to observe the course and a UR robot responsible for removing potential obstacles from the Alphabot2 trajectory. This made coordination and resource ownership part of the engineering problem: commands, telemetry, robot selection, penalties, timing, and shared-equipment actions all had to reach the correct agent without disrupting the other team.

## My Works

### Shared-resource integration

The ceiling camera and UR robot were common to both teams, so their services needed clear interfaces and correct message routing. I contributed to the integration around the shared UR robot, which could remove potential obstacles from an Alphabot2 trajectory while preserving the separation between the two teams' robot controls and destinations.

I also created the base UR robot agent and its runtime scaffolding, including the agent entry point, test agent, requirements, Docker configuration, Compose configuration, and deployment scripts. I subsequently corrected the agent behavior around place-position handling and related integration errors.

### Architecture and team interfaces

I helped design the system architecture with my group by dividing the platform into clear responsibilities: dashboard presentation, persistent telemetry, agent communication, Alphabot2 control, camera and navigation services, shared UR-robot control, and deployment infrastructure. This decomposition gave each team a defined place to develop while keeping the interfaces between the autonomous robots and shared services explicit.

I also contributed to defining how the components communicate. SPADE agents use XMPP to exchange commands and status, web services expose the operational interface, and SQLite provides telemetry persistence across sessions. The design had to account for both teams using the same ceiling camera and UR robot, so ownership, robot selection, timing, and obstacle-removal requests could not be treated as isolated team concerns.

![Cycle Hunters system principles](/images/projects/dynamaze/principle.svg)

The architecture supports distributed execution: local services can be started with Docker Compose and Prosody, while robot-facing components can use environment-specific configuration for Alphabot2 or UR robot execution. Designing these boundaries made it possible to evolve the dashboard, agents, robot integrations, and deployment scripts without placing all of the race logic in one component.

### Telemetry and operational observability

I developed the telemetry dashboard and its rendering components, starting with sensor and control views and evolving them into reusable components. The dashboard included analog and digital graphs, motor information, battery and obstacle displays, sliders, robot controls, and live race state.

![Robot hardware architecture](/images/projects/dynamaze/hardware.svg)

I connected the dashboard to telemetry agents and corrected message routing, JID configuration, environment-specific defaults, and agent startup behavior so commands and status updates reached the appropriate components. I also introduced a SQLite datastore and updated the telemetry agent and dashboard views to use it, allowing measurements to be persisted across sessions instead of remaining only in memory.

During this work, I identified a flaw in the Alphabot2 battery measurement design: the voltage-divider ratio overloaded the sensor input, making it impossible to measure the current battery voltage accurately. This clarified an important reliability boundary in the hardware-facing telemetry.

![Alphabot battery detail](/images/projects/dynamaze/divider.png)

### Deployment and runtime infrastructure

I added scripts and container configuration for local and robot execution, including Dockerfiles, Docker Compose services, environment-based configuration, file synchronization, and a local Prosody XMPP server configuration. I also added a user guide for the runtime scripts.

This made the distributed system easier to reproduce across development machines and robot environments, while giving the agents a consistent runtime for integration and testing.

## Results

### Final product

The work delivered a working prototype of a distributed robotics control environment for the two-team Alphabot2 labyrinth race. It included SPADE/XMPP agents, a browser-accessible telemetry dashboard, persistent telemetry storage, shared camera and navigation integration points, UR-robot control for obstacle handling, and containerized runtime configurations for local and robot execution.

### Key results

- Added reusable dashboard components for robot controls, telemetry graphs, motor data, battery state, obstacles, LEDs, and timing.
- Added SQLite-backed telemetry persistence across sessions.
- Added Docker and Compose workflows for local services, Alphabot2 execution, and Prosody-based XMPP communication.
- Added a base UR robot agent and connected its configuration to the wider agent system for shared obstacle-removal operations.

The system gave both teams and the operators a central interface for monitoring Alphabot2 state, managing the race, issuing commands, and coordinating shared equipment. The persistence and deployment work also created a foundation for repeatable testing and operation across local and robot environments.

## Retrospective

I particularly enjoyed working with SPADE. The normal communication between agents was not especially difficult, and the agent definitions provided a clear structure for the distributed system. The more challenging cases were transferring images and sending large or urgent signals, such as emergency messages between agents. These situations exposed the limits of the communication design more clearly than ordinary commands and telemetry did.

In retrospect, the three-agent split used to manage each Alphabot2 needed more architectural reflection before implementation. The responsibilities were separated, but the communication between the agents and the runner was not always well coordinated. A central agent responsible for coordinating the other agents and managing communication with the runner could have simplified the system. Alternatively, a single agent could have managed each Alphabot2 while other agents handled shared services. Both approaches would have reduced the amount of coordination required between independently responsible agents.

The sensor work was particularly rewarding. I was happy to work close to the Alphabot2 hardware, and finding the battery-measurement bug showed me the value of checking whether sensor data is physically meaningful rather than assuming that a working software interface guarantees correct measurements.

This project taught me that distributed systems benefit from careful architectural decisions before implementation, especially when they must handle large data, emergency signals, and shared resources. If I approached a similar project again, I would map the communication flows and failure cases first, then choose agent boundaries that keep urgent and high-volume communication as direct and simple as possible.
