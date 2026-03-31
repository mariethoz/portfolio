<!-- ## **Week Summary - Week 3** -->

### Refining the Robot Pipeline  
- Continued improving the **robot‑side processing pipeline**, aiming for a more structured and reliable flow from input data to executed robot motion.  
- Designed a **UML diagram** to formalize the architecture, clarify module responsibilities, and support smoother collaboration across the team.

### Real‑Robot Testing on a 3D‑Printed Trapezoid  
- Drawing tests were carried out on a **3D-printed trapezoid** to validate the conversion process on a simple 3D shape.  
- **Result:**  
    - The robot drew accurately on the **top surface**, confirming that the **position conversion** is functioning correctly.
    - After correcting the conversion, the robot was able to draw on the **side surfaces**, confirming that the **orientation conversion** is functioning correctly.
- **Observation:**
    - The lines are not drawn neatly, which could be explained by the bending of the 3D-printed surfaces.
    - Also, the letters are not closed because the last coordinate does not match the first.
- Collection of **precise physical measurements** to facilitate calibration and debugging in the simulation.

### Object‑Space to Robot‑Space Orientation Fix  
- Spent considerable time investigating the persistent orientation issue, which was particularly confusing because the underlying math appeared correct.  
- **Root cause identified:**  
    - A misunderstanding of the robot’s **angle representation format**.  
    - The system was assumed to use **Euler angles**, but the robot actually expects a **rotation vector**.  
- Correcting this interpretation resolved the long‑standing orientation mismatch and clarified the robot’s unexpected behavior.

### Retrospective
- The robot pipeline is becoming clearer and better structured, particularly thanks to the UML diagram.  
- The tests on the 3D trapezoid are encouraging: the position and orientation conversion is finally working correctly.  
- The orientation error stemmed from a misinterpretation of the angle format, which was a real eye-opener.  
- The lines are still imperfect, but the causes have been identified and are manageable.  
- Despite the delay compared to the initial schedule, I feel that our understanding of the system is progressing rapidly and that the foundations are becoming solid.

### Focus for Week 4  
- Further refine and stabilize the robot pipeline to make testing more systematic and repeatable.  
- Begin exploring the robot’s **force sensor**, with potential applications in:  
    - Contact detection  
    - Pressure control during drawing  
    - Improving reliability on curved or angled surfaces  