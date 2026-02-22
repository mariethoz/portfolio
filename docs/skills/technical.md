[🟦]: docs/planning/steps_milestones.typ
[🟩]: https://duckify.atlassian.net/jira/software/projects/JIRA/boards/1/backlog
[🟪]: https://github.com/ISC-HEI/ur3e-control
[🟧]: https://github.com/Toys-R-Us-Rex/Duckify/tree/feat/tutorial-robot-controler
[🟫]: https://github.com/Toys-R-Us-Rex/Duckify/tree/doc/presentation

# 🔧 Technical Skills

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="50"/>
<span style="background:white; border-radius:50%; padding:0px; display:inline-flex; align-items:center; justify-content:center; height:50px; width:50px;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50"/>
</span>

## Analyse

- Robots generally use **ROS-based systems** programmed in C++.
    As this can be complex to handle directly, a Python wrapper library is provided to control the robot more easily.
- Part of my work was to understand this library and evaluate whether it fit the project’s needs. I wrote a small **tutorial notebook** covering the basics:
    - Tool Center Point (TCP) calibration, allowing the robot to understand its position in space
    - The two robot base coordinate systems and basic movements
    - How the gripper works
    - Some basic features of the embedded camera

[🟧]