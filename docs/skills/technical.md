[1]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/feat/tutorial-robot-controler/tuto/tuto_robot.ipynb
[2]: https://github.com/Toys-R-Us-Rex/ur3e-control/tree/feat/tutorial-robot-controler
[2.1]: https://github.com/Toys-R-Us-Rex/ur3e-control/tree/feat/pipeline-merge/src
[2.2]: https://github.com/Toys-R-Us-Rex/ur3e-control/tree/feat/pipeline-merge/

[3]: https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/meetings/daily/2026-02-19.typ
[4]: https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/presentations/20260220_robotic_arm.pdf
[5]: https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/presentations/20260220_duckify_meeting_week_1.pdf

[6]: https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/meetings/daily/2026-02-27.typ

[7]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/dev/transformation_euler-normal/docs/reports/calibration.pdf
[8]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/dev/transformation_euler-normal/docs/reports/transformation.pdf
[9]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/dev/transformation_euler-normal/docs/uml_drawt/robot_algo.png
[10]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/dev/transformation_euler-normal/docs/uml_drawt/robot_func.png

# 🔧 Technical Skills
<!-- 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" width="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="50"/>
<span style="background:white; border-radius:50%; padding:0px; display:inline-flex; align-items:center; justify-content:center; height:50px; width:50px;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50"/>
</span>
-->

## Analyse

- Robot python library understanding

    I evaluated the robot’s Python wrapper library-built to simplify interaction with its underlying ROS/C++ system-and produced a tutorial notebook that documents the essential functions needed for our workflow. The notebook covers TCP calibration, base coordinate systems, basic robot motions, gripper operation, and initial camera features, providing the team with a clear and accessible onboarding resource.

[1]  [2]


## Modelisation

- Robot Pipeline Modeling

    I modeled the robotics pipeline, defining the transformation steps, required input data, and execution logic needed for reliable robot motion. This structured framework now serves as a reference architecture for the team, guiding future implementation and ensuring consistent handling of paths, positions, and orientations.

[9]  [10]

## Implementation

- TCP Calibration Implementation

    I implemented the Tool Center Point (TCP) calibration procedure, ensuring the robot could accurately interpret the tool’s position relative to its base. The calibration was validated through a fixed‑point visual test, confirming precise alignment and demonstrating reliable, repeatable tool‑pose understanding during motion.

[2]  [2.1]  [2.2]  [7]

- Coordinate System Conversion

    I implemented a coordinate‑system conversion pipeline that translated object‑space positions and normals into robot TCP coordinates, ensuring consistent orientation handling between digital models and physical execution. This work demonstrated my ability to manage complex spatial transformations and maintain accuracy in both positional and rotational mappings.

[2.1]  [2.2]  [8]

## Evaluation

- Drawing test on 3D surfaces

    I conducted drawing tests on plate 3D surfaces using a real robot arm, developing and validating motion paths that ensured accurate tool–surface interaction. This work demonstrated my ability to integrate robotics control, spatial reasoning, and experimental validation into a functional workflow.

[TODO]
