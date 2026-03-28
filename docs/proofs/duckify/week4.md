## **Week Summary - Week 4**

### Pipeline Architecture & Tools
- Continued refining the **UML diagram** for the robot pipeline to better formalize data flow and module interactions.
- Explored **PyBullet** as a potential alternative simulation environment; investigation delegated to PY for deeper evaluation.

### Force Sensor Investigation
- Began exploring the robot’s **force sensor** capabilities.
- First step: understanding **how to log force data** reliably for later analysis and integration into the pipeline.

### Data Logging & Traceability
- Implemented a **custom logger / datastore** with:
  - **History tracking**
  - **File versioning**
  - A shared interface to allow different parts of the robot pipeline to communicate and store test results.
- This provides a structured way to trace experiments, debug issues, and compare calibration attempts.

### Pipeline Assembly & Integration
- Assembled all validated components of the robot pipeline into a unified workflow:
  - Calibration  
  - Coordinate transformations  
  - Gazebo simulation  
  - Real‑robot control  
- This marks the first time the full pipeline is stitched together end‑to‑end.

### Real‑Robot Testing
- Conducted integration tests on the physical robot.
- Issues encountered:
  - **Force datastore collection error**, preventing proper logging of sensor data.
  - Motion and drawing **look correct**, but the drawing **does not land on the duck**.
    - This suggests a remaining misalignment in calibration or coordinate transformation.

### Focus for Week 5
- Clean and reorganize the codebase to improve readability and maintainability.
- Complete the **full integration** of the robot pipeline, ensuring all modules communicate smoothly and reliably.
