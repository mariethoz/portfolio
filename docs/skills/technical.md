[initial planning]: https://toys-r-us-rex.github.io/Duckify/presentations/20260217_initial_planning.pdf
[milestones]: https://toys-r-us-rex.github.io/Duckify/planning/steps_milestones.pdf
[1]: ../duckify/week1.md
[2]: ../duckify/week2.md

[latex‑typst]: ../proofs/latex_typst.md
[datastore]: ../proofs/datastore.md
[force]: 404

[git-policy]: https://toys-r-us-rex.github.io/Duckify/architecture/github_policy.pdf
[PR 1]: https://github.com/Toys-R-Us-Rex/Duckify/pull/91
[PR 2]: https://github.com/Toys-R-Us-Rex/Duckify/pull/123

[presentation]: https://toys-r-us-rex.github.io/Duckify/presentations/20260220_robotic_arm.pdf

[notebook]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/archived/robot_tutorial/tuto/tuto_robot.ipynb

[PV]: https://toys-r-us-rex.github.io/Duckify/meetings/daily/2026-02-27.pdf
[PV 1]: https://toys-r-us-rex.github.io/Duckify/meetings/daily/2026-02-26.pdf
[PV 2]: https://toys-r-us-rex.github.io/Duckify/meetings/daily/2026-03-09.pdf
[PV 3]: https://toys-r-us-rex.github.io/Duckify/meetings/daily/2026-03-24.pdf
[PV 4]: https://toys-r-us-rex.github.io/Duckify/meetings/daily/2026-03-25.pdf

[calibration]: https://toys-r-us-rex.github.io/Duckify/architecture/robot/calibration/calibration.pdf
[conversion]: https://toys-r-us-rex.github.io/Duckify/architecture/robot/conversion/conversion.pdf
[comparaison]: https://toys-r-us-rex.github.io/Duckify/architecture/robot/calibration/pivot_camera.pdf


[UML state machine]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/docs/uml_drawt/robot_algo.png
[UML class]: https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/docs/uml_drawt/uml_pipeline.png

[code robot]: https://github.com/Toys-R-Us-Rex/Duckify/blob/feat/add-arguments-main-robot/robot/robot_main.py
[code calibration]: https://github.com/Toys-R-Us-Rex/Duckify/blob/main/robot/src/calibration.py
[code transformation]: https://github.com/Toys-R-Us-Rex/Duckify/blob/main/robot/src/transformation.py
[code stage]: https://github.com/Toys-R-Us-Rex/Duckify/blob/feat/add-arguments-main-robot/robot/src/stage.py

[labo circle]: ../proofs/18032026_circle.pdf
[labo multipen]: ../proofs/26032026_multipen.pdf
[labo guide]: ../proofs/labo_protocol.pdf

[approval]: ../proofs/approval.pdf

<!-- 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" width="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="50"/>
<span style="background:white; border-radius:50%; padding:0px; display:inline-flex; align-items:center; justify-content:center; height:50px; width:50px;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50"/>
</span>
-->

# 🔧 Technical Skills

---

## Analyse

**Robot python library understanding**

I evaluated the robot’s Python wrapper library-built to simplify interaction with its underlying ROS/C++ system-and produced a tutorial [notebook] that documents the essential functions needed for our workflow. The notebook covers TCP [calibration], base coordinate [transfromation], basic robot motions, gripper operation, and initial camera features, providing the team with a clear and accessible onboarding resource.

---

## Modelisation

**Robot pipeline modelling**

I designed the robotics pipeline by defining the execution logic, data flow, and required inputs/outputs for drawing on a 3D object. This helped structure the system and anticipate integration issues before implementation. The architecture is formalised in UML diagrams; [UML state machine], [UML class], demonstrating my ability to model a complex system.

---

## Implementation

**TCP calibration**

I implemented the TCP calibration code [code calibration] to ensure accurate tool positioning relative to the robot base. The calibration was validated through a fixed-point visual test [video calibration], confirming precision and repeatability. This artefact showcases my ability to design, implement, and verify robotic calibration procedures with both software and hardware rigor.

---

**Coordinate conversion pipeline**

I implemented a transformation pipeline converting object-space data into robot TCP coordinates, see [conversion] report, ensuring consistency between digital models ([code transformation]) and physical execution . This required handling both position and orientation data and resolving issues related to rotation representation. This demonstrates my ability to implement complex spatial transformations.

---

## Evaluation

**Real robot validation**

I conducted structured validation tests on the real robot, including motion verification and drawing tests on 3D surfaces ([labo circle], [labo multipen]). These tests confirmed that calibration and coordinate transformations behave correctly under real conditions. This demonstrates my ability to evaluate system performance through experimentation.

---

**Debugging and error identification**

During testing, I identified and corrected multiple issues, including incorrect transformation matrices, orientation inconsistencies, and self-collisions in motion planning. These problems were analysed and resolved through iterative testing [labo circle], [labo multipen]. This demonstrates my ability to diagnose and fix complex system errors.

---

**Test pipeline on real robot**

I built the core structure of our robot testing pipeline ([code robot]) and developed validation tests to verify TCP calibration and coordinate‑transformation accuracy. Running these tests on the real robot ensured the software pipeline performed reliably under real‑world conditions and helped surface issues early in development

---

## Leverage Heterogeneous and Multimodal Data

**Data integration**

I worked with heterogeneous data sources such as 3D geometry, robot coordinates, calibration parameters, and experimental logs. I ensured consistency between these elements by implementing a coordinate‑space conversion [conversion] within the robot pipeline and a custom datastore [datastore] for structured logging. This artefact demonstrates my ability to organise and align multiple data types within a coherent workflow for robotic applications.

---

## Orchestrate Data Processing Workflows

**Execution pipeline**

I implemented a modular execution pipeline where each stage (calibration, transformation, simulation, execution) operates independently ([UML state machine]). A controller function manages execution flow and error-handling strategies ([code stage]). This enables flexible and robust processing of robot tasks.

---

**Traceability and reproducibility**

I developed a data management system [datastore] to track experiment history, version results, and reload previous states. This allows efficient debugging and comparison of different calibration and execution strategies. It demonstrates my ability to structure reproducible experimental workflows.

---

## Apply Software Engineering to Data Systems

**Custom logging system**

I implemented a custom logging system [datastore] to record and reload experiment data during robot testing. This reduces the need to rerun the full pipeline and ensures traceability of all experiments. It demonstrates the application of software engineering practices to improve efficiency and reliability.

---

<!--**Force‑data acquisition module**

I implemented a module that collects force measurements from the robot controller and stores them in structured CSV files. This enables efficient offline analysis [force] of interaction forces without rerunning experiments and integrates cleanly with the broader robot pipeline. The artefact demonstrates my ability to design reliable data‑acquisition components that support downstream processing and evaluation.

--->

**Code quality and integration**

I improved code quality by adding type hints, documentation, and modular structure [code stage], and contributed to integration through pull requests [PR 2] following the Git policy [git-policy]. This ensured maintainability and smooth collaboration within the shared codebase. It demonstrates good software engineering practices in a team environment.
