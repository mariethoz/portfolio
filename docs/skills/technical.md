[1]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/feat/tutorial-robot-controler/tuto/tuto_robot.ipynb
[2]: https://github.com/Toys-R-Us-Rex/ur3e-control/tree/feat/tutorial-robot-controler
[2.1]: https://github.com/Toys-R-Us-Rex/ur3e-control/tree/feat/pipeline-merge/src
[2.2]: https://github.com/Toys-R-Us-Rex/ur3e-control/tree/feat/pipeline-merge/

[3]: https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/meetings/daily/2026-02-19.typ
[4]: https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/presentations/20260220_robotic_arm.pdf
[5]: https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/presentations/20260220_duckify_meeting_week_1.pdf

[6]: https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/meetings/daily/2026-02-27.typ


# 🔧 Technical Skills

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" width="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="50"/>
<span style="background:white; border-radius:50%; padding:0px; display:inline-flex; align-items:center; justify-content:center; height:50px; width:50px;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50"/>
</span>

## Analyse

- Robots generally use **ROS-based systems** programmed in C++.
    As this can be complex to handle directly, a Python wrapper library is provided to control the robot more easily.
- Part of my work was to understand this library and evaluate whether it fit the project’s needs. I wrote a small **tutorial notebook** covering the basics:
    - Tool Center Point (TCP) calibration, allowing the robot to understand its position in space
    - The robot base coordinate systems and basic movements
    - How the gripper works
    - Some basic features of the embedded camera

[1]  [2]

## Modelisation

- Robot Pipeline Modeling
    Transformation steps between coordinate systems
    - I modeled the robotics pipeline, defining the main steps required in code to reach the team’s objective.
        - Input data required by the robot (paths, positions, orientations)
        - Execution logic for robot movements
        - This pipeline serves as a reference for further development and helps structure future implementation.


## Implementation

- TCP Calibration Implementation
    This step is critical, as accurate TCP calibration directly impacts painting precision and repeatability.
    - I worked on the implementation of the Tool Center Point (TCP) calibration.
    - The calibration was validated through a visual test, where the robot moves around a fixed point in space while keeping the tool aligned.
    - This confirmed that the robot correctly understands the position of its tool relative to its base.

- Coordinate System Conversion
    This highlighted the complexity of orientation handling and the importance of consistent coordinate systems between digital models and physical execution.
    - I worked on converting object coordinates into robot TCP coordinates.
    - The conversion currently works correctly for position values (x, y, z).
    - Rotation values (rx, ry, rz) are still under investigation and not fully functional yet.

[2.2] [2.1]