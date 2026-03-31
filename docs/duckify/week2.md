<!-- ## **Week Summary - Week 2** -->

### Documentation & Team Enablement  
- Continued developing the **URBasic tutorial**, expanding the set of basic commands and examples to support the team’s onboarding.

### TCP Calibration

**Camera calibration**

- The camera‑based TCP calibration was discontinued due to:
    - Insufficient camera quality.
    - High sensitivity to lighting conditions.
    - Overall unreliability for precise calibration.

**Pivot Calibration**

- Adopted a more robust method: **manually pointing the tool tip to the same physical point** to compute the TCP.
- Important discovery:  

    - The robot’s **initial offset must be removed** before calibration, otherwise the process fails.

- Suggested improvement:

    - **3D‑print a calibration tool** that mimics the pen tip for more accurate and repeatable calibration.

### Coordinate Conversion Debugging  
- Investigated the transformation pipeline from **object space to robot space**.  
- Current tests show inconsistencies in the conversion, indicating an error somewhere in the transformation chain. Further debugging is planned.

### Collaboration With the Tracing Team  
- Defined the data interface between Tracing and Robot teams.  
- Confirmed that the robot will receive, in JSON format:

    - **Color**  
    - **Position**  
    - **Orientation** (normal vector)

### Interaction With the Physical Robot  
- Successfully executed initial hardware tests:

    - Succesful Pivot calibration
    - Moved the robot along predefined trajectories; Draw on a sheet.

- Identified an issue with **world‑space to robot‑space** conversion during real‑robot tests, reinforcing the need for deeper investigation.

### Retrospective
- The data received from the Tracing team is now clearly defined, which clarifies the data flow.  
- Camera calibration has been successfully replaced by the pivot method, which is more robust and sufficient for the project.  
- The conversion from **object-space to robot-space** is more complex than anticipated and still requires further work.  
- Although not all objectives have been met, I remain confident about the overall progress of the team.

### Focus for Week 3  
- Correct the **world‑space to robot‑space conversion** pipeline.  
- Step into a leadership role within the Robot team:

    - Coordinate integration with other sub‑teams  
    - Establish internal workflows and responsibilities  
