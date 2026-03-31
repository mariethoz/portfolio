<!--## **Weekly Summary - Week 1**-->

### Project Foundations  
- Built a solid understanding of the end‑to‑end pipeline: generating an AI‑created duck texture, mapping it onto a 3D‑printed duck, and executing the drawing using a robot arm.  
- Contributed to defining the initial project structure and early milestones.
- Participated in forming four specialized sub‑teams:
    - **GenAI:** Texture generation from prompts.
    - **Tracing:** Path extraction and conversion into duck‑space.
    - **3D Print:** Pen holder, duck support, and physical prototypes.  
    - **Robot (my focus):** Executing the drawing on the physical duck.

### Technical Ramp‑Up  
- Explored and validated the **Gazebo simulation environment**, ensuring the robot arm can be launched, controlled, and tested reliably.
    - I should use WSL to run the docker.
- Studied the **URBasic** Python library and produced an internal tutorial covering essential robot commands to accelerate team onboarding.
- Introduction to the robot with the experts.

### Robot Team Progress  
- Began investigating **Tool Center Point (TCP) calibration**, a critical requirement for accurate drawing on curved surfaces.  
- Evaluated a **camera‑based calibration method**; early findings indicate it may not be suited for this project.

### Retrospective
- I think the planning and organisation are sound.
- We have put in place the tools needed to operate the robot.
- I have some doubts about using the camera for TCP calibration.

### Focus for Week 2  
- Continue developing a robust **TCP calibration workflow**.  
- Start defining how to **locate and orient the duck in robot space**, including extracting the coordinates required for precise drawing execution.