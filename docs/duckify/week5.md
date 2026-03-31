<!-- ## **Week Summary - Week 5** -->

### Global Robot Pipeline Integration
- Integrated all major components of the **robot pipeline** into a unified multi‑stage workflow:
    - Calibration  
    - Coordinate Transformation  
    - Filtering  
    - Conversion  
    - Pathfinding  
    - Gazebo Simulation  
    - Real‑Robot Execution  
- The pipeline is now **almost ready for integration** with the other project teams (GenAI, Tracing, 3D Print).

### Drawing Offset Corrections
- Identified and corrected an **offset issue** that affected drawing accuracy.
- Improved alignment between the robot’s planned path and the actual drawing on the duck.

### Real‑Robot Testing
- Successfully managed to **draw a circle on the duck**, marking a major milestone.
- However, the robot still required **manual positioning** close to the starting point of the drawing.
    - Indicates that initial approach and positioning logic still need refinement.

### Retrospective
- The robot pipeline is now almost complete and fully integrated end-to-end, marking a significant step forward in the workflow.  
- Correcting the offset has significantly improved the accuracy of the drawing, and successfully drawing a circle on the duck is a major milestone.  
- The robot still requires manual positioning, indicating that the approach logic needs to be refined.  
- Overall, integration is progressing well and the system is beginning to take shape as a coherent solution, ready to be discussed with the other teams.

### Focus for Week 6
- Adapt the robot pipeline for **full integration** with the other teams’ outputs.
- Add **multi‑pen support** to the pipeline (pen switching, calibration, workflow logic).
- Fix issues in the **force datastore**, ensuring reliable logging.
