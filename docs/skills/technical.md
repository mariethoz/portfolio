[1]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/feat/tutorial-robot-controler/tuto/tuto_robot.ipynb
[2]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/docs/reports/calibration.pdf
[3]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/docs/reports/transformation.pdf

[4]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/docs/uml_drawt/robot_algo.png
[5]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/docs/uml_drawt/robot_seq.png
[6]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/docs/uml_drawt/robot_func.png
[7]: 404
<!-- In progress 
[7]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/docs/uml/robot_func.png
-->

[8]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/src/calibration.py
[9]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/src/transformation.py
[10]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/src/logger.py

[11]: 404
<!-- In progress 
[11]: some video of the experiments
-->
[12]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/Duckify_main_.py
[13]: 404
[14]: 404
<!-- In progress 
[13]: still to do
[14]: still to do
-->

[15]: ../proofs/datastore.md
[16]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/robot_main.py


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

    I evaluated the robot’s Python wrapper library-built to simplify interaction with its underlying ROS/C++ system-and produced a tutorial notebook [1] that documents the essential functions needed for our workflow. The notebook covers **TCP calibration** [2], base **coordinate transfromation** [3], basic robot motions, gripper operation, and initial camera features, providing the team with a clear and accessible onboarding resource.


## Modelisation

- Robot Pipeline Modeling

    I modeled the robotics pipeline by defining the execution logic [4], processing sequence [5], and the required input/output data for accurate motion on a 3D object. This work produced an initial **UML architecture** [6] that guided the implementation and evolved throughout the project into the final system design [7].

## Implementation

- TCP Calibration Implementation

    I implemented the Tool Center Point (TCP) calibration [2] [8] procedure, ensuring the robot could accurately interpret the tool’s position relative to its base. The calibration was validated through a fixed‑point visual test, confirming precise alignment and demonstrating reliable, repeatable tool‑pose understanding during motion.

- Coordinate System Conversion

    I implemented a coordinate‑system conversion pipeline that translated object‑space positions and normals into robot TCP coordinates [3] [9], ensuring consistent orientation handling between digital models and physical execution. This work demonstrated my ability to manage complex spatial transformations and maintain accuracy in both positional and rotational mappings.

## Evaluation

- Drawing test on 3D surfaces

    I conducted drawing tests on plate 3D surfaces using a real robot arm [11], developing and validating motion paths that ensured accurate tool–surface interaction. This work demonstrated my ability to integrate robotics control, spatial reasoning, and experimental validation into a functional workflow.

- Record and store data during experiments

    I developed a custom logging system [10] that captures, stores, and reloads data from UR3e robot experiments, ensuring every test is traceable and allowing debugging or analysis to continue without rerunning the full pipeline. This streamlined setup preserves crucial experiment history and significantly speeds up iteration when issues arise.

- Test pipeline on real robot

    I built the core structure of our robot testing pipeline [12] and developed validation tests to verify TCP calibration [13] and coordinate‑transformation accuracy [14]. Running these tests on the real robot ensured the software pipeline performed reliably under real‑world conditions and helped surface issues early in development.


## Coordinate a processing workflow

- Historical Tracking, Version Control, Traceability

    To improve reliability in experimental workflows, I built a data management system [15] focused on traceability, versioning, and reproducibility.
    It enables consistent handling of calibration data while keeping the architecture simple and extensible.
    This system was used during robot testing and enabled post-experiment analysis, as well as the generation of realistic data for simulation and error correction.

- Designing a Flexible and Fault‑Tolerant Experimental Workflow

    To structure the experimental workflow, I implemented a modular execution pipeline where each stage operates as an independent unit.
    A helper function [16] orchestrates execution with configurable error-handling strategies (stop, continue, fallback), ensuring robustness without coupling to specific components.
    This approach enabled stable execution during robot experiments, while maintaining flexibility and clear visibility over each processing step.
