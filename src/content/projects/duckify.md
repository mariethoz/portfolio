---
title: 'Duckify: AI-Generated Duck Drawing with a Robot Arm'
shortDescription: 'An academic R&D project that turns AI-generated textures into robot trajectories and draws them on a 3D-printed duck.'
month: 04
year: 2026
technologies:
  - Python
  - URBasic
  - UR robot
  - Docker
  - GitHUB
  - SCRUM
logo: '/images/projects/duckify/logo.svg'
image: '/images/projects/duckify/ISC.jpg'
github: 'https://github.com/Toys-R-Us-Rex/Duckify'
buttons:
  - text: 'Robot control repository'
    link: 'https://github.com/Toys-R-Us-Rex/ur3e-control'
  - text: 'Raw Documentation'
    link: 'https://toys-r-us-rex.github.io/Duckify/'
---

## Overview

### Description

Duckify was an academic research and development project combining generative AI, 3D data processing, and robotics. The complete system converted an AI-generated texture into trajectories and reproduced the drawing on the curved surface of a 3D-printed duck using a Universal Robots arm and a defined set of colors.

The project was split between the main [Duckify repository](https://github.com/Toys-R-Us-Rex/Duckify) and the [`ur3e-control` repository](https://github.com/Toys-R-Us-Rex/ur3e-control). The main repository coordinated the broader system, while `ur3e-control` contained the robot-control development work.

### Status

Completed in April 2026. A minimum viable product was developed.

### My role

I was appointed Robot Team Lead, so I primarily developed the robot subsystem and coordinated its interfaces with the other teams.

As developer, my work covered calibration, coordinate transformation, simulation, integration, logging, documentation, and physical testing.

## My Works

### Robot calibration

The robot needed to know the position of the drawing tool relative to its flange before it could accurately draw on the 3D-printed duck. I evaluated hand-eye and pivot calibration and selected pivot calibration because it required less additional hardware for our setup.

I implemented the procedure for recording multiple robot poses with the pen tip fixed in space, solving for the tool transformation, checking the pen calibration, and reusing or updating stored calibration data.

The work is documented in the [pivot versus hand-eye comparison](https://toys-r-us-rex.github.io/Duckify/architecture/robot/calibration/pivot_camera.pdf) and the [TCP pivot-calibration report](https://toys-r-us-rex.github.io/Duckify/architecture/robot/calibration/calibration.pdf).

### Coordinate transformation

Tracing trajectories were defined in the duck's local coordinate system, while the robot operated in its own workspace frame. I used reference points on the support and the 3D-printed duck to compute the rigid transformation between those frames, then applied it to trajectory positions and orientations.

During validation, I found that the robot expected rotation vectors rather than Euler angles. I corrected the transformation pipeline and documented the distinction in the [object-to-robot conversion report](https://toys-r-us-rex.github.io/Duckify/architecture/robot/conversion/conversion.pdf).

### Robot execution pipeline

I developed a stage-based robot pipeline that separates calibration, transformation, filtering, path execution, pen control, collision checks, and robot communication. Each stage has explicit inputs, outputs, configuration, and failure handling.

The pipeline supports manual and automatic operation, custom transformations and rotations, simulation runs, and drawing on both sides of the duck.

![Robot pipeline architecture](/images/projects/duckify/robot-pipeline.svg)

Each stage has its own inputs, outputs and failure modes. I also implemented experiment logging and configurable CLI execution. The resulting architecture made the robot workflow modular, reproducible and easier to integrate with the other subsystems.

### Simulation, safety, and observability

The robot is not a virtual machine that can simply be reset after a failure. Testing therefore had to be carried out with rigor and attention to safety.

Tests were first run in simulation and then validated by an expert before being executed on the physical robot. During each test, an operator was ready to trigger the emergency stop if necessary.

Later in the project, a colleague and I were appointed to take responsibility for robot testing, allowing us to perform routine tests without requiring expert validation for every run. The [testing approval document](/documents/projects/duckify/approval.pdf) records that permission.

[Notebook](https://github.com/Toys-R-Us-Rex/ur3e-control/blob/archived/robot_tutorial/tuto/tuto_robot.ipynb): Example tutorial on the use or the URBasic library.

### Integration and team coordination

The robot was only one part of the overall system, making coordination between teams essential to ensure that the different subsystems could work together reliably.

I worked with the other team leads to define subsystem interfaces, input and output formats, and the GitHub workflow for branches, commits, pull requests, and reviews. Examples of my work following our [GitHub-Policy](https://toys-r-us-rex.github.io/Duckify/architecture/github_policy.pdf) include [Pull Request 91](https://github.com/Toys-R-Us-Rex/Duckify/pull/91) and [Pull Request 123](https://github.com/Toys-R-Us-Rex/Duckify/pull/123).

The SCRUM-inspired organisation, with teams responsible for the main subsystems, helped keep the teams focused on their respective tasks while maintaining effective cross-team communication. This is reflected in the [daily meeting reports](https://toys-r-us-rex.github.io/Duckify/), including the reports from [February 26](https://toys-r-us-rex.github.io/Duckify/meetings/daily/2026-02-26.pdf), [March 9](https://toys-r-us-rex.github.io/Duckify/meetings/daily/2026-03-09.pdf), [March 24](https://toys-r-us-rex.github.io/Duckify/meetings/daily/2026-03-24.pdf), and [March 25](https://toys-r-us-rex.github.io/Duckify/meetings/daily/2026-03-25.pdf).

## Reports

### DataStore

The robot workflow needed reliable storage for calibration data, transformations, trajectories, and experiment logs. I designed a lightweight [`DataStore` implementation](https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/src/logger.py) with structured logging, versioned data storage, and flexible save/load mechanisms.

The store uses indexed files such as `calibration_0.pkl`, `calibration_1.pkl`, and `calibration_2.pkl` to prevent accidental overwrites and make previous calibration runs available for comparison or rollback. It also creates directories automatically and supports custom paths.

The design keeps internal file-indexing and path handling separate from the public API used by calibration and robotics modules. Possible future improvements include replacing pickle with a portable format, adding experiment metadata, and providing a history browser.

[Read the full DataStore report](/reports/datastore/) for its architecture, data flow, and design tradeoffs.

### LaTeX to Typst

I also documented the transition from LaTeX to Typst while comparing both formats with Markdown. The report covers document structure, sections, abstracts, tables of contents, mathematical equations, figures, lists, comments, appendices, and source-code blocks.

The practical examples came from the Duckify calibration and conversion reports. The source versions are available as [Typst calibration](https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/architecture/robot/calibration/calibration.typ), [Typst conversion](https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/architecture/robot/conversion/conversion.tex), [LaTeX calibration](https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/architecture/robot/calibration/calibration.tex), and [LaTeX conversion](https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/architecture/robot/conversion/conversion.tex). The generated PDF reports ([Calibration](https://toys-r-us-rex.github.io/Duckify/architecture/robot/calibration/calibration.pdf), [Conversion](https://toys-r-us-rex.github.io/Duckify/architecture/robot/conversion/conversion.pdf)) show the final documented workflow.

[Read the full LaTeX-to-Typst report](/reports/latex-typst/) for the detailed comparison, examples, and links to the source and PDF reports.

## Results

### Final product

The completed system reproduced AI-generated textures on the curved surface of a 3D-printed duck using a robot arm and a defined set of drawing colors.

### Key results

- Delivered a modular robot-control pipeline covering calibration, transformation, path execution, pen control, logging, and safety checks.
- Converted object-space trajectories into robot-space motions suitable for drawing on the duck.
- Added simulation and stored experiment data to support repeatable validation before physical execution.
- Completed physical robot testing without incidents, injuries, or equipment damage.

The final output can be seen in this project demonstration:

<video width="100%" controls>
  <source src="/portfolio/documents/projects/duckify/ISC_Paint.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Retrospective

This project strengthened my practical skills in robotics, from calibration and coordinate transformations to robot control and system integration. Taking the Robot Team Lead role also taught me how important clear interfaces and communication are when working across multiple teams.

The project also exposed weaknesses in my early technical assessment. I initially misunderstood the robot's orientation format, and mapping trajectories onto a curved surface required more work than I had initially expected. These issues could have been identified earlier through more thorough investigation and validation of assumptions.

If I were to approach a similar project again, I would start with a short no-code exploration phase to map data flows, identify edge cases, validate technical assumptions, and assess the complexity of the main components. I would also define team responsibilities and subsystem interfaces earlier to provide a more stable foundation for development.
