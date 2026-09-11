---
title: '2D Soft-Body Physics Simulation Library'
shortDescription: 'A reusable C++17 soft-body physics library with standalone simulations, Python visualization, and Godot integration.'
month: 12
year: 2025
technologies:
  - C++
  - Verlet integration
  - Godot 4 GDExtension
  - CMake
  - SCons
  - GoogleTest
  - Python
  - Matplotlib
  - Doxygen
logo: '/images/projects/softbody/logo.png'
image: '/images/projects/softbody/animation.gif'
github: 'https://github.com/mariethoz/SoftbodiesSimulation_ISC'

buttons:
  - text: 'Documentation'
    link: 'https://mariethoz.github.io/SoftbodiesSimulation_ISC/'
    icon: '/images/projects/softbody/logo.png'
---

## Overview

### Description

This project is a 2D soft-body physics simulation library developed as a semester project for the Bachelor's degree in Computer Science and Communication. It models deformable objects with particles, Verlet integration, distance constraints, and collision handling. The library can run as standalone C++ software, produce data for Python visualizations, and integrate with Godot through a C++ GDExtension.

The simulation core is kept independent from its visualizations, so the same physics can be inspected in standalone programs, analyzed with Python, or rendered inside Godot.

### Status

The repository contains a released version, `v1.0.1`. It includes a standalone simulation, demonstration programs, a Godot demo, generated API documentation, automated C++ build and test configuration, and unit tests. The project was completed in December 2025.

### My role

I contributed as a developer, implementing and documenting the simulation library, its test suite, visualization workflow, and Godot integration.

## My Works

### Simulation architecture

I structured the core as separate C++ abstractions for particles, soft bodies, constraints, simulations, and world colliders. The simulation remains independent from visualization and game-engine code, allowing it to be reused by standalone programs, Python workflows, and Godot.

### Particle and constraint simulation

I implemented the particle-based simulation pipeline using Verlet integration, global forces, and iterative distance constraints. Soft bodies support configurable mass, stiffness, damping, friction, restitution, and pinned particles so their behavior can be tuned for different experiments.

### Soft-body geometry

I developed the polygon-to-mesh workflow that creates deformable bodies from polygon outlines. It subdivides polygon edges, generates particles and constraints, preserves border information, and supports both manually constructed bodies and higher-level factory creation.

### Collision handling

I added collision support for planes and inner or outer circular boundaries, including friction, restitution, pinned-particle handling, and positional collision response. The simulation also handles interactions between particles belonging to different soft bodies.

### Serialization and state management

I implemented JSON serialization and loading for simulation objects, soft bodies, and colliders so simulation state can be saved and reconstructed. I also defined explicit ownership and cleanup behavior for bodies, particles, constraints, and colliders.

### Godot integration

I connected the C++ simulation library to Godot through GDExtension. The integration exposes simulation, soft-body, particle, constraint, and collider classes to the Godot editor and runtime, with `Node2D`-based wrappers and polygon rendering for soft bodies.

![Godot scene tree for the soft-body demo](/images/projects/softbody/godot-tree.png)

![Soft-body simulation running in Godot](/images/projects/softbody/godot-softbody.png)

The Godot demo provides an interactive environment for experimenting with the native simulation and its scene integration.

### Build and packaging

I configured CMake for the standalone C++ library, demos, and test executable, and SCons for combining the Godot bindings with the simulation library into the shared library used by the demo project. I also configured GitHub Actions to build the project and run tests on pushes.

### Testing and analysis tools

I created GoogleTest coverage for vector and particle behavior, constraint solving, soft-body construction and updates, simulation stepping, gravity, pinning, and world and body collisions. I also developed Python scripts with pandas and Matplotlib for animation and time-series analysis of simulation output.

### Documentation

I documented the architecture, ownership rules, API conventions, and build workflows with Doxygen and a developer guide, making the codebase easier to extend and maintain.

The project follows a layered architecture: `Simulation` orchestrates time steps and colliders, `SoftBody` owns particles and constraints, and `WorldCollider` implementations handle interactions with the environment. This keeps the physics library reusable across the standalone executable, Python tooling, and Godot bindings.

![Soft-body simulation architecture](/images/projects/softbody/uml.svg)

Ownership is explicit throughout the core. `Simulation` owns soft bodies and world colliders, while each `SoftBody` owns its particles and constraints. Cleanup is centralized in `Simulation::clear()`, which makes lifetime rules easier to reason about when simulations are reset or reconstructed from serialized state.

The developer guide also documents the Doxygen workflow, the CMake and SCons build paths, and the GoogleTest process. After building the standalone project, tests can be run with `ctest` from the build directory; new tests follow the same one-file-per-class structure used by the existing suite.

## Results

The delivered product is a reusable C++17 soft-body simulation library with standalone examples, automated tests, Python visualization tools, generated API documentation, and a Godot plugin/demo distributed through a GDExtension build.

Deformable polygon bodies can be generated from outlines and simulated with configurable physical parameters. The engine handles gravity, iterative distance constraints, friction, restitution, world boundaries, and body-to-body collisions. The same simulation core remains separate from visualization and can be used by standalone C++ programs, Python analysis workflows, and Godot.

Overall, the project demonstrates how a small physics engine can be structured as an independent library and then reused across command-line examples, data-analysis scripts, and an interactive game-engine integration.

## Retrospective

The most challenging part of this project was understanding and implementing the logic behind a soft-body simulation. I had to connect particles, Verlet integration, distance constraints, forces, and collisions into a system that produced stable and believable behaviour. This required more than implementing each feature individually: their interaction determined whether the simulated body behaved correctly.

The separation between the C++ simulation and the Godot rendering was the next major difficulty. Keeping the physics independent from the visualisation was the right architectural choice, but making both sides communicate reliably was not straightforward. The integration became more complex because I tried to expose and generate the complete soft body as a polygon for rendering in Godot. This made the boundary between the native simulation state and the engine representation more demanding than a simpler visualisation would have been.

In retrospect, I would have defined the data exchanged between the simulator and the renderer earlier and started with a simpler representation before building the complete polygon workflow. This project taught me that a clean separation between systems is valuable, but the communication contract between those systems must remain simple enough to implement and validate. It also strengthened my understanding of how physics logic, memory ownership, build systems, and engine integration influence one another in a reusable C++ library.
