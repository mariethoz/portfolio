[initial planning]: https://toys-r-us-rex.github.io/Duckify/presentations/20260217_initial_planning.pdf
[milestones]: https://toys-r-us-rex.github.io/Duckify/planning/steps_milestones.pdf
[1]: ../duckify/week1.md
[2]: ../duckify/week2.md

[latex‑typst]: ../proofs/latex_typst.md

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

[robot code]: https://github.com/Toys-R-Us-Rex/Duckify/blob/feat/add-arguments-main-robot/robot/robot_main.py

[approval]: ../proofs/approval.pdf

# 🤝 Soft Skills

## Planning & Organisation

### **Project workflow structuring**

I contributed to structuring the robotics workflow by identifying key technical challenges and prioritising essential steps such as calibration and coordinate transformations before creative experimentation. This ensured that the team focused on critical dependencies early in the project. The planning is documented in [initial planning], [milestones], and my personal log [1], demonstrating my ability to organise a technical project in team.

---

### **Git workflow**

To ensure consistent collaboration, we defined and followed a shared git workflow (branching, pull requests, and reviews). I actively applied this [git-policy] throughout development, contributing to stable integration and reducing conflicts. This demonstrates my ability to work within structured development processes.

---

## Communication & Collaboration

**Effective team coordination**

I contributed to maintaining clear communication across the teams by participating in daily meetings and aligning work with shared guidelines [git-policy]. This helped ensure consistency between parallel developments and reduced integration issues. Evidence of coordination is visible in selected meeting notes ([PV 1],[PV 2],[PV 3],[PV 4]).

---

**Translating technical constraints**

I explained robotic constraints to non-technical teams [presentation], including limitations related to reachability and precision. I also supported these explanations with technical reports on [calibration] and [conversion]. This enabled other teams to adapt their designs to realistic execution constraints.

---

**Technical documentation helper**

I created a simplified tutorial notebook [notebook] explaining the robot library (motion/gripper control, TCP calibration, coordinate systems). This resource supported onboarding and reduced the learning curve for other team members.

---

## Adaptability & Professionalism

**Team reorganisation**

Following a team reorganisation, I was assigned to maintain continuity in the robotics work. This docummented into my weekly log [2] and this short [PV]. I initially faced coordination issues that led to delays, but adapted my workflow to stabilise development and ensure successful integration. This demonstrates my ability to handle changing project conditions.

---

**Team Standards and Evolving Practices**

I adapted to shared development practices by applying the agreed Git workflow ([git-policy]) and contributing through pull requests ([PR 1], [PR 2]). I also transitioned from LaTeX to Typst ([latex‑typst]) in alignment with the team’s chosen standard for report writing. These actions demonstrate my ability to adopt team conventions, maintain consistency across the codebase, and integrate my work smoothly within a collaborative environment.

---

## Knowledge Sharing

**Robot workflow presentation**

I contributed to presenting the robot workflow to other teams ([presentation],  [UML state machine], [UML class]), explaining key concepts such as TCP calibration [calibration] and coordinate [conversion]. This helped establish a shared understanding of how the system operates and supports cross-team collaboration.

---

## Decision-Making & Critical Thinking

**Change of calibration methods**

I decided to abandon camera-based calibration due to its sensitivity to lighting and lack of precision, and replaced it with a pivot calibration method. This decision was based on research and [comparaison] of calibration methodes and documented in weekly logs [2]. It demonstrates my ability to evaluate solutions and select appropriate approaches.

---

**From supervised to independent testing**

Due to limited expert availability, robot testing was initially supervised. Based on the reliability of our setup, I was later authorised to conduct tests independently ([approval],  [robot code]). This reflects both accountability in my work and trust gained through consistent results.

