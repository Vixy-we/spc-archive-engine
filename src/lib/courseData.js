export const courseData = [
    {
        "number": "1",
        "title": "Introduction to Robotics and Robotic Systems",
        "topics": [
            {
                "id": "1.1",
                "title": "Historical development and evolution of robotics",
                "content": "<p>Robotics traces back to early automatons and science fiction. The word “robot” first appeared in Karel Čapek’s 1920 play <em>Rossum’s Universal Robots</em>.  The first industrial robot was <strong>Unimate</strong>, developed by George Devol (patented in 1956) and deployed at a GM plant in 1961.  Robotics history is often described in “generations”: early robots (1950–67) had fixed logic; later ones (1968–77) added programmability and basic feedback; by the 2000s robots gained advanced computing and AI.  For example, <strong>Shakey</strong> (1966–72) at SRI was the first mobile robot with vision and planning.</p><p>1970s <strong>Shakey the robot</strong>, the first mobile robot that could perceive and navigate using sensors.   Robotics advanced through key milestones (Unimate, PUMA, SCARA, etc.), evolving from simple mechanical arms to today’s AI-enabled systems.</p>"
            },
            {
                "id": "1.2",
                "title": "Types of robots and their applications",
                "content": "<p>Robots come in many forms. Broad categories include:</p><ul><li><strong>Industrial manipulators</strong> – Fixed-base robots (articulated arms, Cartesian/gantry, SCARA, delta/parallel, cylindrical) used for welding, assembly, painting, picking and placing in factories. For example, Cartesian gantries handle heavy lifting, SCARA robots excel at fast assembly, and articulated arms do welding.  </li><li><strong>Mobile robots</strong> – Ground vehicles (wheeled, tracked, legged) and aerial drones. Wheeled robots (differential-drive, Ackermann-steering, omnidirectional) are used in logistics or inspection; tracked robots work in rugged terrain; legged robots (bipeds, quadrupeds) adapt to rough ground; aerial UAVs (quadcopters, fixed-wing) handle aerial surveillance and delivery.  </li><li><strong>Service robots</strong> – For non-industrial tasks. <em>Consumer service</em> robots include home cleaners (robot vacuums), lawn mowers, and social companion bots. <em>Professional service</em> robots include warehouse AGVs, delivery robots, surgical robots (e.g. da Vinci), agricultural drones, and even underwater ROVs. These assist humans in cleaning, healthcare, delivery, exploration, etc. For instance, NASA’s Mars rovers autonomously navigate terrain to gather data, illustrating how robots extend human reach.  </li><li><strong>Humanoids and social robots</strong> – Human-like robots (e.g. ASIMO, Atlas) used for research, entertainment, or interaction. They often feature sensors and actuators to mimic human motion and are used in experiments on human-robot interaction.  </li><li><strong>Collaborative robots (cobots)</strong> – Designed to work safely alongside humans, with force-limiting and safety features. Cobots now make up about 11% of the robotics market, and standards like ISO/TS 15066 require built-in safety (speed/force limits, monitored stop) when humans are near.  </li></ul><p>Each robot type is specialized: industrial arms maximize precision and payload, drones achieve mobility and range, and service bots emphasize autonomy and user safety. Applications range from manufacturing (welding, painting, assembly) to extreme environments (space rovers, deep-sea probes).</p>"
            },
            {
                "id": "1.3",
                "title": "Components of robotic systems",
                "content": "<p>A robot system integrates hardware and software.  Core components are:</p><ul><li><strong>Sensors:</strong> Detect the robot’s state and environment (cameras, LiDAR, encoders, IMUs, force sensors). Sensors gather data (position, orientation, force, vision) to inform the controller.  </li><li><strong>Actuators:</strong> Devices that produce motion or force (electric motors, hydraulic/pneumatic cylinders). They convert control signals into mechanical action (rotation, linear motion) for the robot’s limbs or wheels.  </li><li><strong>Control unit (processor):</strong> The “brain” running control algorithms. It reads sensor inputs, computes commands (often using microcontrollers or computers), and sends signals to actuators.  </li><li><strong>Software and algorithms:</strong> Firmware and software (often on platforms like ROS) implement kinematics, planning, and control logic. This includes motion planning, feedback control (PID, etc.), and higher-level decision-making.  </li><li><strong>Power supply:</strong> Provides energy (batteries, power adapters). It must meet the voltage and current needs of actuators and electronics.  </li></ul><p>For example, one source summarizes five main parts of a robot: sensors, control units, software, actuators, and power system. An industrial robot’s definition emphasizes a “multipurpose manipulator” with a programmable controller, illustrating these integrated components.</p>"
            },
            {
                "id": "1.4",
                "title": "Ethical considerations and social impact of\nrobotics",
                "content": "<p>The rise of robotics has both positive and negative social effects. On one hand, robots <strong>enhance safety and efficiency</strong>: they can perform dangerous, dirty or repetitive tasks (saving human workers from harm), boost productivity, and create new high-tech jobs. For example, IFR argues that robots often <strong>complement</strong> workers and raise productivity (less than 10% of jobs are fully automatable). Some studies find robot adoption increases output without reducing total employment.</p><p>On the other hand, there are real concerns:   <li><strong>Job displacement:</strong> Automation can <strong>eliminate certain jobs</strong>, especially routine manufacturing roles. Studies differ: one found robots cost 420,000–720,000 U.S. factory jobs from 1990–2014, while another saw little net job loss. In practice, routine tasks decline but new tech jobs emerge. Yug, it’s a trade-off: productivity versus displacement.  </li> <li><strong>Privacy and surveillance:</strong> Robots with cameras or sensors can invade privacy. For example, delivery drones or home assistant robots might constantly scan surroundings. Failures to protect privacy can “erode public trust”. New standards and transparent design are needed as robots “identify and interact with people” in public spaces.  </li> <li><strong>Safety:</strong> Robots in factories or vehicles can pose hazards if misused or if controls fail. Collaborative robots mitigate this with strict safety standards (ISO/TS 15066), but autonomous systems (self-driving cars, drones) still carry accident risks.  </li> <li><strong>Autonomy and accountability:</strong> Ethical dilemmas arise if robots (or AI) make life-or-death decisions. For instance, lethal autonomous weapons (the “killer robot” debate) raise the issue that “a machine should not be allowed to make a decision over life and death”. This is a major ethical concern in military and policing applications.  </li> <li><strong>Social change and inequality:</strong> The benefits of robotics (efficiency, wealth) may concentrate with technology owners, potentially widening inequality. Some analyses warn of <strong>uneven impact</strong> – those with STEM skills benefit, while others may struggle.  </li></p><p>In summary, robotics can <strong>improve quality of life and workplace safety</strong>, but must be managed to avoid negative outcomes. Responsible design, regulation, and workforce retraining can help balance the trade-offs.</p>"
            }
        ]
    },
    {
        "number": "2",
        "title": "Robot Kinematics – Forward and Inverse Kinematics",
        "topics": [
            {
                "id": "2.1",
                "title": "Spatial descriptions and transformations",
                "content": "<p>Robotics relies on precise 3D geometry. Each robot link’s position and orientation are described using coordinate frames and transformations. We use <strong>degrees of freedom (DOF)</strong> to count independent motions (e.g. a 6-DOF arm). Coordinate frames (axes) attach to links and define their poses.  By combining <strong>translations and rotations</strong> (e.g. using 4×4 homogeneous transformation matrices), we can relate one link’s frame to another. For example, a 4×4 matrix can represent a shift and rotation in one operation. This makes it easy to compute a robot’s pose: by chaining frame transformations, the end-effector’s (tool’s) position and orientation are obtained from the joint angles.</p><p>Key points:  <li>Coordinates can be specified by Cartesian (x,y,z) positions and Euler angles/quaternions for orientation.  </li> <li><strong>Homogeneous transforms</strong> (4×4 matrices) elegantly encode both rotation and translation for each link. Concatenating these matrices gives the overall pose in space.  </li> <li>Properly defined frame conventions (e.g. joint axes alignments) ensure the math is consistent.</li></p>"
            },
            {
                "id": "2.2",
                "title": "Forward kinematics: Denavit-Hartenberg\nconvention",
                "content": "<p><strong>Forward kinematics (FK)</strong> means computing the end-effector’s pose from given joint parameters. In other words, given each joint angle or displacement, you determine where the robot’s hand is in space. A standard method for serial link robots is the <strong>Denavit–Hartenberg (DH) convention</strong>, introduced in 1955. DH provides a systematic way to assign coordinate frames to each link so that each successive link-frame can be related by four parameters (θ, d, a, α). Using these, we build a chain of transformations from the base to the tool. Mathematically, FK is simply multiplying all these link transforms together to get the final position/orientation.</p><p>For example, Wikipedia explains: <em>“Forward kinematics refers to the use of the kinematic equations… to compute the position of the end-effector from specified joint values.”</em>. In practice, you set up each link’s DH parameters and compute the 4×4 transformation matrices. The product of these matrices gives the tool’s pose relative to the base. This is usually a straightforward (though sometimes lengthy) calculation.</p>"
            },
            {
                "id": "2.3",
                "title": "Inverse kinematics: Analytical and numerical\nmethods",
                "content": "<p><strong>Inverse kinematics (IK)</strong> is the reverse problem: given a desired end-effector pose, find the joint values that achieve it. It’s typically harder because there may be multiple (or no) solutions. As one source notes, IK “computes the joint parameters that achieve a specified position of the end-effector”.  Robots with many joints (especially 6 or more) lead to complex nonlinear equations.</p><p>There are two main IK approaches:  <li><strong>Analytical IK:</strong> Derive closed-form equations (using geometry/trigonometry). Works for simpler robots or special configurations. It yields exact solutions quickly but may be intractable for complex arms.  </li> <li><strong>Numerical IK:</strong> Use iterative algorithms (e.g. Newton-Raphson, Jacobian pseudo-inverse, or optimization) to converge on a solution. This can handle almost any robot but may converge slowly or get stuck. MathWorks notes that multi-joint robots often have multiple IK solutions, so methods include gradient-based search or optimization. </li></p><p>In summary, IK is solved either by finding an explicit formula for joint angles or by iterative searching. Analytical methods are fast for simple cases, while numeric methods (like gradient descent or Jacobian-based solvers) are used for general 6-DOF arms.</p>"
            },
            {
                "id": "2.4",
                "title": "Velocity kinematics and static forces",
                "content": "<p>Once the joint positions are known, we often care about velocities and forces. The <strong>Jacobian matrix</strong> is the key tool: it linearly relates joint rates to end-effector velocity. In formula, <strong>v = J(q)·q̇</strong>, where <em>q̇</em> are joint velocities and <em>v</em> is the end-effector’s linear/angular velocity. In other words, the Jacobian converts a vector of joint speeds into the tool’s speed and direction. This is essential for controlling motion: for instance, if motors spin at certain rates, the Jacobian tells us how fast the gripper moves (linear and angular).</p><p>By the same token, <strong>static forces</strong> can be mapped using the Jacobian transpose. According to the principle of virtual work, the joint torques τ required to produce a force F at the end-effector satisfy <strong>τ = J(q)ᵀ·F</strong>. This means the Jacobian transpose converts an end-effector wrench (force/torque) back into joint torques. One summary notes that “the Jacobian matrix is a powerful tool mapping joint velocities to end-effector velocities… The Jacobian transpose relates end-effector forces to joint torques”.</p><p>In practice, the Jacobian also tells us about singularities (if det(J)=0, some motions are impossible) and is used in control (both velocity control and force control) to ensure smooth, feasible movement.</p>"
            }
        ],
        "review": `
        <h3>What's this unit all about?</h3>
        <ul>
            <li>Explores the mathematical relationships between the joint angles and the end-effector position and orientation of a robotic arm</li>
            <li>Introduces two fundamental approaches: forward kinematics and inverse kinematics</li>
            <li>Forward kinematics calculates the end-effector pose given joint angles</li>
            <li>Inverse kinematics determines joint angles required to achieve a desired end-effector pose</li>
            <li>Covers the essential concepts, equations, and techniques for solving kinematic problems in robotics</li>
            <li>Emphasizes the practical applications of kinematics in robotic arm control and manipulation tasks</li>
        </ul>

        <h3>Key Concepts and Terminology</h3>
        <ul>
            <li><strong>Degrees of Freedom (DOF):</strong> the number of independent parameters that define the configuration of a robotic system</li>
            <li><strong>Joint space:</strong> the space defined by the joint angles of a robotic arm</li>
            <li><strong>Cartesian space:</strong> the space defined by the position and orientation of the end-effector</li>
            <li><strong>Homogeneous transformation matrices:</strong> 4x4 matrices used to represent the relative position and orientation between coordinate frames</li>
            <li><strong>Denavit-Hartenberg (DH) parameters:</strong> a convention for assigning coordinate frames to robotic links and joints</li>
            <li><strong>Jacobian matrix:</strong> a matrix that relates the joint velocities to the end-effector velocities</li>
            <li><strong>Singularities:</strong> configurations where the Jacobian matrix becomes rank-deficient, leading to loss of degrees of freedom</li>
        </ul>

        <h3>Forward Kinematics: The Basics</h3>
        <ul>
             <li>Involves calculating the position and orientation of the end-effector given the joint angles of the robotic arm</li>
             <li>Utilizes the kinematic equations derived from the robot's geometric structure and joint configurations</li>
             <li>Follows a sequential approach, starting from the base frame and propagating through each joint to the end-effector frame</li>
             <li>Employs homogeneous transformation matrices to represent the relative transformations between adjacent links</li>
        </ul>

        <h3>Inverse Kinematics: Working Backwards</h3>
        <ul>
            <li>Focuses on determining the joint angles required to achieve a desired end-effector position and orientation</li>
            <li>Starts with the desired end-effector pose and works backwards to find the corresponding joint angles</li>
            <li>Can be more challenging than forward kinematics due to the existence of multiple solutions (redundancy) or no solutions (unreachable poses)</li>
            <li>Analytical methods (geometric/algebraic) for simple geometries; Numerical methods for complex structures.</li>
        </ul>
        
        <p><em>(See full PDF for mathematical models and detailed FAQs)</em></p>
    `
    },
    {
        "number": "3",
        "title": "Robot Dynamics and Control",
        "topics": [
            {
                "id": "3.1",
                "title": "Lagrangian dynamics for robotic systems",
                "content": "<p>To predict how a robot moves under forces, we use dynamics. A common approach is <strong>Lagrangian mechanics</strong>. Define the Lagrangian <em>L = K – P</em>, where <em>K</em> is kinetic energy and <em>P</em> is potential energy of the robot. Then apply the Euler–Lagrange equations: <em>d/dt(∂L/∂q̇) – ∂L/∂q = F</em>, where <em>q</em> are joint coordinates and <em>F</em> are generalized forces (torques). This yields the equations of motion for the robot. As one lecture notes, this process “applies the Euler–Lagrange equation, yielding the dynamics of the robotic system”.</p><p>The result is typically written in matrix form: <strong>M(q)·q̈ + C(q, q̇)·q̇ + G(q) = τ</strong>, where <em>M</em> is the inertia matrix, <em>C</em> contains Coriolis/centrifugal terms, <em>G</em> is gravity torques, and τ are the joint torques. These parameters come from the Lagrangian formulation. (The exact expressions depend on the robot’s link masses and geometry.) In summary, Lagrangian dynamics provide a systematic way to derive a robot’s motion equations, forming the basis for advanced control and simulation.</p>"
            },
            {
                "id": "3.2",
                "title": "PID control and trajectory tracking",
                "content": "<p>In practice, robots are controlled using feedback loops. A very common controller is <strong>PID (Proportional–Integral–Derivative)</strong> control. A PID controller adjusts an actuator input based on the current error (P-term), the accumulated error (I-term), and the rate of change of error (D-term). This helps the robot reach and maintain a desired position or velocity. For example, a motor position controller might use PID to correct for any difference between the desired angle and actual angle.</p><p>For trajectory tracking, we plan a path for the end-effector (a sequence of positions/orientations over time) and use control to follow it. Typically, one computes a reference trajectory (possibly through inverse kinematics), then uses a feedback controller (like PID on each joint) to minimize deviation. Often a feedforward term from the robot dynamics is added.  The common approach is: generate a smooth path (via polynomials or splines), then command joint angles as functions of time, with PID loops on each joint to follow those commands. In other words, the robot <strong>tracks</strong> the trajectory by continuous feedback. (For instance, one source mentions using computed-torque (feedforward) plus PID to follow planned paths.)</p>"
            },
            {
                "id": "3.3",
                "title": "Force control and impedance control",
                "content": "<p>Sometimes robots must <strong>control contact forces</strong> rather than just positions. This is crucial in tasks like assembly or human-robot interaction.  <strong>Force control</strong> makes the robot apply a specified force on the environment (e.g. pressing with 5 N). <strong>Impedance control</strong> makes the robot behave with a virtual mechanical impedance (spring-damper), regulating how motion and force relate. In impedance control, if the robot pushes on something, it yields according to a defined stiffness and damping.</p><p>For example, robotics study guides note that “force and impedance control are crucial for robots interacting with their environment”. Force control is used when a precise force is needed (e.g. polishing, safe contact), whereas impedance control is used when the robot must absorb disturbances or comply (e.g. handing over a tool). One source explains that impedance control “regulates the dynamic relationship between motion and forces,” effectively shaping the robot’s response when it contacts something. Both methods allow safe and accurate interaction: pure force control holds force fixed, while impedance control allows safe compliance (a rigid spring-like behavior).</p>"
            },
            {
                "id": "3.4",
                "title": "Adaptive and robust control techniques",
                "content": "<p>Real-world robots face uncertainties: unknown payloads, changing friction, or modeling errors. <strong>Adaptive control</strong> and <strong>robust control</strong> address this. Adaptive controllers adjust their parameters on-the-fly to “learn” the correct behavior. For example, if a robot picks up a heavy load, an adaptive controller updates its control gains to compensate. In practice, one designs an adaptive law (e.g. Model Reference Adaptive Control) to handle parameter variations.</p><p><strong>Robust control</strong> designs controllers to tolerate worst-case uncertainties. For instance, H-infinity or sliding mode controllers ensure stability even if some model parameters are unknown or vary within bounds. The goal is guaranteed performance despite errors. One overview notes that adaptive control “dynamically adjusts parameters… to maintain performance despite uncertainties,” while robust control focuses on maintaining stability and performance in the face of disturbances.  In robotics, such techniques are used to ensure precise motion even if the robot’s dynamics change (e.g. wear, payload) or to handle unmodeled dynamics safely.</p>"
            }
        ]
    },
    {
        "number": "4",
        "title": "Actuators and Sensors in Robotic Systems",
        "topics": [
            {
                "id": "4.1",
                "title": "Electric, hydraulic, and pneumatic actuators",
                "content": "<p>Robots use different actuators depending on power and precision needs:</p><ul><li><strong>Electric actuators (motors):</strong> Most common (DC, servo, stepper, brushless). They convert electrical energy into rotary or linear motion via electromagnetism. Electric motors offer high precision, good speed control and are relatively quiet. They are ideal for precise positioning (e.g. servo motors in robot arms).  </li><li><strong>Hydraulic actuators:</strong> Use pressurized liquid to generate large forces. A pump drives fluid into cylinders or motors, producing very high power and strength (industrial presses, heavy machinery). Hydraulics are heavy and require pumps/hose, but excel where huge force is needed (lifting, heavy construction).  </li><li><strong>Pneumatic actuators:</strong> Use compressed air. They are simpler and lighter than hydraulics but generate lower force. Pneumatics can move very fast and are intrinsically compliant (the air cushions impacts). They’re used for quick pick-and-place or gripping (air cylinders, vacuum grippers).  </li></ul><p>A summary notes that <em>“electric actuators excel in precision tasks, hydraulics excel in heavy lifting, and pneumatic actuators offer speed and simplicity”</em>.  Each has trade-offs: electric motors need control electronics, hydraulics need maintenance (fluid leaks), pneumatics need an air compressor. Engineers choose based on the task: precise fine motion (electric), brute strength (hydraulic), or fast pneumatic motion (air cylinders).</p>"
            },
            {
                "id": "4.2",
                "title": "Proprioceptive and exteroceptive sensors",
                "content": "<ul><li><strong>Proprioceptive sensors</strong> measure the robot’s internal state: joint encoders (angles/positions), gyroscopes/IMUs (orientation/acceleration), torque sensors, and temperature gauges. They tell the controller “where the robot is” (e.g. joint angle from an encoder, speed from a tachometer) or how it’s moving. These sensors are crucial for feedback control. They generally have high precision on internal variables but can drift or suffer biases.  </li><li><strong>Exteroceptive sensors</strong> sense the external environment: cameras (vision), LiDAR, ultrasonic/infrared rangefinders, tactile touch sensors, GPS. They allow the robot to perceive the world (identify objects, avoid obstacles, localize itself). For example, cameras capture images, LiDAR measures distances to surroundings, and touch sensors detect contact. These provide rich information but are subject to noise from lighting, reflections, etc.</li></ul><p>As one source summarizes, proprioceptive sensors “measure the robot’s internal conditions, while exteroceptive sensors gather data about its surroundings”.  Another notes that proprioceptive inputs offer <em>precise internal measurements</em> (with some drift), whereas exteroceptive inputs are <em>rich</em> but “can be affected by environmental conditions”. Typical examples: encoders and IMUs vs. cameras and LiDAR. A good design fuses both types: the robot uses proprioceptive data for accurate motion control and exteroceptive data for perception and navigation.</p>"
            },
            {
                "id": "4.3",
                "title": "Sensor fusion and data processing",
                "content": "<p>Robots often combine multiple sensors to overcome individual limitations. <strong>Sensor fusion</strong> means merging data (e.g. via Kalman filters) to get a more accurate estimate of state. For instance, fusing an IMU (fast but drifting) with a camera’s visual odometry (rich but noisy) can give robust pose estimation. Fusion reduces uncertainty: noisy or partial data from one sensor can be corrected by another.</p><p>Data processing pipelines involve filtering, feature extraction, and sensor alignment. As noted, “sensor fusion combines data for more accurate understanding, leveraging strengths of different sensors (camera, LiDAR, IMU, GPS) and reducing uncertainty”. For example, a mobile robot might fuse wheel odometry with GPS and LiDAR scans to localize itself.  Common techniques include the Kalman filter or particle filter for real-time estimation. In all cases, fusion enhances perception: the combined result is better than any single sensor alone.</p>"
            },
            {
                "id": "4.4",
                "title": "Interfacing sensors and actuators with control\nsystems",
                "content": "<p>Integrating hardware requires both physical and software interfaces. Key aspects:  <li><strong>Communication protocols:</strong> Microcontrollers and devices communicate via buses like I²C, SPI, UART, CAN, or Ethernet. For instance, IMUs might send data over SPI to a microcontroller; multiple motor drivers might use CAN bus to handle high loads. These protocols ensure data moves reliably between sensors, processors, and actuators.  </li> <li><strong>Signal conditioning:</strong> Many sensors (like analog force sensors or microphones) need ADCs (analog-to-digital converters) to digitize signals. Similarly, actuators often need drivers or amplifiers (e.g. motor drivers from PWM signals). Hardware like DACs, ADCs, voltage regulators, and amplifiers are used to adapt signals to the correct levels.  </li> <li><strong>Controllers and software:</strong> Microcontrollers or single-board computers (e.g. Arduino, Raspberry Pi) run the control code. They poll sensors, run control loops, and send commands to actuators. Software frameworks (ROS, custom code) implement the algorithms. Libraries and drivers handle low-level interfacing, and real-time OSs may be used for predictable timing. </li> <li><strong>Calibration and synchronization:</strong> Sensors often require calibration (e.g. camera intrinsics, IMU bias) and careful timing. Synchronizing sensor data (timestamping) is crucial for correct fusion and control.</li></p><p>In summary, interfacing involves selecting the right hardware protocols and writing firmware/software that acquires and processes data. As one guide notes, “integration involves protocols, hardware interfaces, signal conditioning to ensure reliable data exchange and control”. Proper interfacing ensures that sensor readings are accurate and actuator commands are executed promptly.</p>"
            }
        ]
    },
    {
        "number": "5",
        "title": "Robotic Manipulators – Design and Applications",
        "topics": [
            {
                "id": "5.1",
                "title": "Serial and parallel manipulator architectures",
                "content": "<p>Manipulators are often classified by their link structure:</p><ul><li><strong>Serial manipulators:</strong> These are chains of joints from base to end-effector. Almost all common industrial arms (SCARA, articulated, cylindrical) are serial robots. Each joint contributes one DOF in series, giving a large reachable workspace. For example, an articulated 6-DOF arm (like a human arm) can reach around obstacles but has cumulative error and limited stiffness. SCARA and Cartesian (gantry) are also serial: SCARA has parallel rotary joints good for fast XY motion; Cartesian has linear slides for heavy-payload lifting.  </li><li><strong>Parallel manipulators:</strong> These have multiple kinematic chains (limbs) connecting the base to a common end-effector platform. Famous examples are <strong>Delta robots</strong> (pick-and-place) and <strong>Stewart platforms</strong> (flight simulators). Parallel robots tend to have high stiffness and precision (load shared by multiple limbs), but smaller workspaces and more complex kinematics. They can be very fast (Delta robots) and carry heavy loads relative to weight. </li></ul><p>An ISO classification mentions <strong>Cartesian, SCARA, articulated, parallel, cylindrical, and spherical robots</strong>.  In practice, serial arms dominate manufacturing due to their flexibility, while parallel arms are chosen where rigidity and speed are key. For instance, pick-and-place operations in packaging often use 3-axis Cartesian gantries or delta robots (parallel) for speed.</p><p><strong>AdeptOne SCARA robot</strong> (1984), the first high-speed direct-drive SCARA manipulator. SCARA robots (Selective Compliance) are serial manipulators optimized for assembly tasks.   To summarize, choosing a manipulator architecture involves trading off workspace, stiffness, speed, and complexity.</p>"
            },
            {
                "id": "5.2",
                "title": "Workspace analysis and singularities",
                "content": "<p>A robot’s <strong>workspace</strong> is the set of all positions (and orientations) the end-effector can reach. One distinguishes the <em>reachable workspace</em> (all points it can touch) from the <em>dexterous workspace</em> (points where the end-effector can assume all orientations). Engineers analyze this to ensure coverage of the desired area. For example, a long-arm may reach far but might not reach under itself.</p><p>Singularities are configurations where the robot loses a degree of freedom or control. Mathematically, a singularity occurs when the Jacobian matrix loses rank (determinant = 0). In a singular pose, the arm cannot move in certain directions (motion becomes uncontrollable or requires infinite joint rates). Common singularities: stretched-out elbows (arm fully extended), wrist alignments. At singularities the robot might rapidly accelerate (instability) or jam.</p><p>For example, one review notes: <em>“Workspace analysis visualizes reachable and dexterous regions; singularities are configurations where the robot loses a degree of freedom, causing control issues”</em>. In practice, robot controllers avoid singularities during trajectory planning. Tools like Monte Carlo sampling or analytical formulas can map the workspace and highlight singular regions. Understanding both workspace and singularities is critical to ensure the robot can reach and move properly for its tasks.</p>"
            },
            {
                "id": "5.3",
                "title": "End-effector design and tool integration",
                "content": "<p>The <strong>end-effector</strong> (robot’s “hand”) must be chosen for the task. End-effectors include mechanical grippers (two-finger, three-finger, adaptive), vacuum cups, magnetic grippers, welding torches, spray nozzles, screwdrivers, cameras, etc. The design depends on the payload, shape of objects, and required precision. For example, parallel-jaw grippers are common for box-like parts, while custom fixtures might be needed for irregular shapes.</p><p>Modern manipulators often allow quick-change end-effectors for flexibility. Integrated sensors (force, vision) at the wrist can enhance performance (force feedback, visual servoing). One guide emphasizes that “End-effectors… must be carefully designed. Integration of sensors/actuators in end-effectors provides feedback and motion, enhancing capability”. For instance, a gripper might have a built-in camera or force sensor.</p><p>Common end-effector examples include: <strong>grippers</strong> (mechanical jaws, vacuum pumps, magnets) and <strong>tools</strong> (welders, paint sprayers, cutters).  In manufacturing, changing from a welding torch to a paint sprayer on a robot arm is routine. Service robots might use specialized hands or suction devices (e.g. the Mars rovers have drills and scoops). The key is selecting or designing an end-effector with the right form, force, and degrees of freedom for the job.</p>"
            },
            {
                "id": "5.4",
                "title": "Applications in manufacturing and service\nrobotics",
                "content": "<p><strong>Manufacturing robotics:</strong> Industrial manipulators are widely used in factories for tasks like arc welding, spot welding, cutting, assembly, painting, material handling, and packaging. For example, even small production runs can be automated for welding or assembly using flexible robot cells. Robots excel at repetitive, dangerous, or precision tasks – auto-body welding and electronics assembly are classic examples. Quality control (e.g. machine-vision inspection) is also a growing robotic application (covered in Unit 10).</p><p><strong>Service robotics:</strong> Robots are increasingly used outside factories. Logistics companies deploy hundreds of AGVs (Autonomous Guided Vehicles) in warehouses for transport. Emerging uses include last-mile delivery robots and autonomous forklifts. In emergency response, search-and-rescue robots (ground or aerial) assist in disasters.  According to IFR, service robots now handle tasks from cleaning and delivery to medical assistance. For instance, robots are used for disinfection, surgery support, and even hospitality (food-serving robots).</p><p>Some examples from IFR: logistics robots (warehouse AGVs and delivery drones) streamline supply chains; inspection robots are used in construction and maintenance to document and 3D-print structures.  As one report notes, “mobile robots in construction can do 3D printing, drilling or even welding faster than human labor”. Robots also perform inspection and assembly with high precision. In service domains, there are robots for eldercare, telepresence, and entertainment (though social acceptance varies).</p><p>In summary, robotic manipulators are central to modern automation – from <strong>factory floors</strong> (e.g. car plants) to <strong>service roles</strong> (e.g. hospitals, warehouses). They increase throughput and consistency in manufacturing, and are opening new possibilities in healthcare, logistics and exploration.</p>"
            }
        ]
    },
    {
        "number": "6",
        "title": "Mobile Robots: Wheeled, Legged, and Aerial",
        "topics": [
            {
                "id": "6.1",
                "title": "Locomotion principles for wheeled and tracked\nrobots",
                "content": "<p>Wheeled robots use various drive configurations: <strong>differential drive</strong> (two driven wheels, like a Roomba), <strong>Ackermann steering</strong> (car-like), <strong>omnidirectional wheels</strong> (e.g. Mecanum, Kiwi wheels) for holonomic motion, and <strong>skid-steer or tracked</strong> (like a bulldozer). Each has trade-offs: differential is simple but nonholonomic (cannot move sideways), Ackermann drives straight well, omnidirectional can move laterally. Tracked robots (continuous treads) perform well on rough or soft terrain but have more slippage.</p><p>For example, robotics resources note: “Wheel configurations include differential drive, Ackermann steering, omnidirectional, etc., each with pros/cons. Tracked robots excel on rough terrain, requiring careful track design”.  Engineers balance speed, stability, and complexity: omnidirectional wheels give agility (useful in tight spaces), while tracks provide traction outdoors. Key design metrics include ground pressure, maximum speed, and turning radius.</p>"
            },
            {
                "id": "6.2",
                "title": "Legged robot kinematics and gait planning",
                "content": "<p>Legged robots (bipeds, quadrupeds, hexapods) model animal locomotion. Kinematically, each leg has joints and can be treated similarly to a manipulator to compute foot trajectories. The robot’s center of mass and support polygon (the area under its feet) determine stability. Gait planning involves sequencing leg movements: e.g. a biped might use a walking gait (shifting weight from one foot to the other) or running (with flight phase); a hexapod might use a tripod gait (three legs on ground at a time).</p><p>Legged robots exploit dynamics and energy storage (springs in joints) to move efficiently. Research notes that legged machines mimic biological motion to handle uneven terrain by flexing and adjusting contacts. Designers focus on leg kinematics (reach and configuration) and gait algorithms. For instance, static gaits keep the robot always balanced; dynamic gaits (like trotting) rely on momentum. Effective gait planning ensures that the sequence of leg motions keeps the robot upright and moving toward its goal.</p>"
            },
            {
                "id": "6.3",
                "title": "Unmanned aerial vehicles: quadrotors and drones",
                "content": "<p><strong>UAVs (drones)</strong> come in many forms, the most common being quadrotors (four-rotor helicopters). Flight relies on four main forces: lift, thrust, drag, and weight.  A quadrotor controls motion by varying rotor speeds to pitch, roll, yaw and ascend/descend. Key components include the airframe, motors/propellers, ESCs (electronic speed controllers), and a flight controller (running control algorithms). For example, one source explains that a UAV’s flight involves these forces and components working together.</p><p>Drones are widely used for aerial imaging, surveying, and mapping. They can hover, fly at various altitudes, and carry cameras or sensors. According to recent reviews, UAVs are “highly utilized in… photography, search-and-rescue, inspection of power lines and constructions”. Quadcopters excel at vertical takeoff/landing and maneuverability, whereas fixed-wing drones cover long distances. Navigation and control involve stabilizing the attitude (using gyros/accelerometers) and controlling position via GPS or visual odometry.</p><p>Modern <strong>quadrotor drone</strong> (multirotor UAV) carrying a camera. UAVs like this use variable rotor speeds to maneuver in 3D space.</p>"
            },
            {
                "id": "6.4",
                "title": "Navigation and localization techniques",
                "content": "<p>A mobile robot must know where it is (localization) and how to avoid obstacles. <strong>Localization</strong> uses sensors (wheel odometry, GPS, vision, LiDAR) to estimate the robot’s position. Techniques include dead-reckoning (integrating motion), SLAM (building a map while localizing), and sensor fusion (e.g. combining IMU and camera). <strong>Mapping</strong> creates a representation of the environment (grid map, topological map) which is used for planning. <strong>Path planning</strong> then finds a route through the map. Finally, <strong>obstacle avoidance</strong> uses real-time sensors (LiDAR, sonar) to detect and avoid unexpected obstacles.</p><p>In robotics education it’s noted that navigation combines “localization, mapping, path planning, and obstacle avoidance”. For example, a common pipeline is: use SLAM (with LiDAR or vision) to build a map and track pose; plan a global path with A* or RRT in that map; then use local sensors to avoid dynamic obstacles. Odometry and sensor fusion (Kalman filters) are often used to get a reliable pose estimate.</p><p>Key concepts: <li><strong>Localization:</strong> e.g. Kalman filter or particle filter to fuse wheel encoder + GPS + vision for pose.  </li> <li><strong>Mapping:</strong> e.g. SLAM using LiDAR or RGB-D camera to build 2D/3D maps.  </li> <li><strong>Planning:</strong> e.g. A* search on a grid or RRT for a global path.  </li> <li><strong>Obstacle avoidance:</strong> e.g. reactive control or dynamic window approach using laser/ultrasonic sensors.  </li></p><p>Together, these allow a robot to navigate autonomously in complex environments.</p>"
            }
        ]
    },
    {
        "number": "7",
        "title": "Motion Planning and Trajectory Generation",
        "topics": [
            {
                "id": "7.1",
                "title": "Configuration space and obstacles",
                "content": "<p>When planning robot motion, it helps to think in <strong>configuration space (C-space)</strong>. A robot’s pose (its joint angles or body position) is a point in a multidimensional space (with dimension = DOF). In this space, obstacles in the environment become <strong>C-space obstacles</strong>: regions where the robot’s body would intersect an obstacle. Planning then reduces to finding a path for a point robot in C-space that avoids these forbidden regions. This simplifies complex geometry. For instance, a 2D point robot navigating around circular obstacles has equivalent circular forbidden zones in C-space.</p><p>Robotics notes explain: <em>“C-space represents all possible robot states as points… Physical obstacles are mapped to C-space obstacles… making collision-free planning easier”</em>. In practice, for a planar arm, one computes the set of joint-angle combinations that would cause a collision; those combinations are avoided. The rest of C-space is free space for planning. By working in C-space, planners can use well-known search algorithms and geometric tools to ensure the robot won’t hit anything.</p>"
            },
            {
                "id": "7.2",
                "title": "Sampling-based and optimization-based planning\nmethods",
                "content": "<p>There are two broad planning approaches:</p><ul><li><strong>Sampling-based planning:</strong> Methods like Probabilistic Roadmaps (PRM) and Rapidly-Exploring Random Trees (RRT) randomly sample C-space to build a graph or tree of feasible configurations. They do <em>not</em> explicitly compute all obstacle boundaries. For example, PRM randomly generates valid (collision-free) points and connects nearby points to form a roadmap. RRT grows a tree from the start by adding random samples, efficiently exploring large spaces. These methods are “probabilistically complete” (they find a path if one exists, given enough time) and work well in high-dimensional spaces. They handle complex geometry well, but may produce jerky, non-optimal paths that need smoothing.  </li></ul><ul><li><strong>Optimization-based planning:</strong> Formulate planning as an optimization problem. Here the path is parameterized (e.g. by waypoints or spline coefficients) and an objective (like path length or smoothness) is minimized, subject to constraints (collision avoidance, velocity limits). Techniques include gradient descent, convex optimization, and model predictive control. These yield smooth, optimal paths and can incorporate dynamics, but often require a good initial guess and can get stuck in local minima.  </li></ul><p>In essence, sampling methods emphasize completeness and simplicity (random exploration of free space), while optimization methods emphasize smooth, optimal trajectories (solving a mathematical program). Both are widely used: robotics planners often use RRT* or PRM followed by trajectory optimization for final smoothing.</p>"
            },
            {
                "id": "7.3",
                "title": "Path planning algorithms: A*, RRT, and PRM",
                "content": "<p>Three foundational algorithms stand out:</p><ul><li><strong>A<em> (A-star):</strong> A graph search algorithm often used on grids or graphs. A</em> uses a heuristic (an estimate of remaining cost) to guide a search from the start to the goal. It is guaranteed to find an optimal shortest path if the heuristic is admissible. A* is deterministic and works well in low-dimensional spaces (like 2D grids for a ground robot).  </li></ul><ul><li><strong>RRT (Rapidly-Exploring Random Tree):</strong> This sampling algorithm builds a tree rooted at the start configuration. It randomly samples points in C-space and incrementally grows the tree toward those samples. RRT quickly explores large, high-dimensional spaces, making it suitable for complex robot arms. Variants like RRT* converge to optimal paths over time.  </li></ul><ul><li><strong>PRM (Probabilistic Roadmap):</strong> This is a two-phase sampling method. In the offline phase, random samples in free space are connected (if collision-free) to form a roadmap graph. In the query phase, the start and goal are connected to the roadmap and a graph search (like A*) finds a path. PRM is useful when many queries in the same environment are needed.  </li></ul><p>Each algorithm has pros and cons. For example, A* is exact but scales poorly in high dimensions. RRT/PRM handle high dimensions but give probabilistic guarantees. Understanding their trade-offs is important in robot navigation.</p>"
            },
            {
                "id": "7.4",
                "title": "Trajectory generation and smoothing",
                "content": "<p>Once a path (geometric route) is found, it must be turned into a <strong>trajectory</strong> – a time-indexed motion plan. This involves assigning timing to waypoints and smoothing to respect the robot’s kinematic/dynamic limits. Typically:</p><p>1. <strong>Interpolate waypoints:</strong> Use polynomials or splines to create a continuous curve through the path points. For example, cubic or quintic polynomials ensure smooth velocity/acceleration profiles.   2. <strong>Apply smoothing:</strong> Optimize the curve to minimize jerk or energy. Techniques include spline fitting (B-splines, Bézier) and trajectory optimization (gradient-based, MPC).   3. <strong>Respect constraints:</strong> Ensure velocity, acceleration, and robot joint limits are met. The trajectory is adjusted (time-parameterized) so motors can physically follow it.</p><p>A robotics guide summarizes: <em>“Trajectory generation adds timing to create a smooth, feasible motion. It involves interpolating between waypoints, smoothing the path, and considering the robot’s physical limitations.”</em>.  The goal is to balance smoothness, speed, and safety. For instance, minimizing acceleration changes (jerk) yields comfortable motions, but sometimes a sharper turn (higher jerk) is needed for speed. In practice, planners often do a final optimization step (like convex optimization or numeric optimization) to fine-tune the timing for smoothness and constraint satisfaction.</p>"
            }
        ]
    },
    {
        "number": "8",
        "title": "Computer Vision in Robotics",
        "topics": [
            {
                "id": "8.1",
                "title": "Image processing and feature extraction",
                "content": "<p>Robots use vision to interpret their surroundings. The vision pipeline starts with <strong>image acquisition</strong> (cameras, stereo rigs), followed by preprocessing (noise reduction, undistortion). Basic image processing techniques include filtering (e.g. Gaussian blur to reduce noise), thresholding (separate foreground/background), and edge detection (Canny, Sobel) to highlight object boundaries. These improve image quality and isolate important regions.</p><p>Next comes <strong>feature extraction</strong>: identifying key visual elements. For example, corner detectors (Harris, FAST) find interest points; blob detectors (SIFT, SURF) extract scale-invariant descriptors; and color/texture features (histograms, LBP) describe regions. These features serve as inputs for higher-level tasks. As one survey notes, “advanced feature extraction allows robots to recognize and analyze complex visual patterns” once basic processing is done.</p><p>In summary, image processing turns raw camera data into a form robots can use. Steps include converting images to grayscale/HSV, smoothing, segmenting, then extracting features (points, lines, textures) for recognition or mapping. These algorithms must balance accuracy and computation since robots often process images in real time.</p>"
            },
            {
                "id": "8.2",
                "title": "3D vision and depth perception",
                "content": "<p>To navigate and manipulate, robots need depth information. <strong>3D vision</strong> techniques reconstruct the three-dimensional structure from 2D images. Common methods include:   <li><strong>Stereo vision:</strong> Using two cameras (like human eyes), disparity between images yields depth via triangulation. By matching keypoints in the left/right images, the distance of each point can be computed.  </li> <li><strong>Structure from Motion (SfM):</strong> Using a moving monocular camera (or multiple views) to infer 3D by tracking points and computing camera motion.  </li> <li><strong>Depth sensors:</strong> Such as LiDAR or Time-of-Flight (ToF) cameras, which directly measure distance using lasers or infrared.  </li> <li><strong>Point cloud processing:</strong> Combining many depth measurements into a 3D point cloud (as used by devices like Kinect or Intel RealSense).  </li></p><p>Robotics texts explain that 3D vision “enables machines to perceive depth and spatial relationships”. This is crucial for tasks like object recognition (knowing how far objects are) and path planning. Advanced methods (stereo, SfM, LIDAR) produce 3D maps, but face challenges like occlusions or reflective surfaces. Sensor fusion (e.g. combining stereo with inertial data) and improved algorithms are continually boosting accuracy. In practice, a robot might fuse stereo camera depth with LiDAR scans to build a reliable 3D model of the environment.</p>"
            },
            {
                "id": "8.3",
                "title": "Object detection and recognition",
                "content": "<p>Robots identify and locate objects using vision. <strong>Object detection</strong> algorithms (often deep learning CNNs like YOLO, SSD or Faster R-CNN) scan camera images to find bounding boxes around known objects. <strong>Recognition/classification</strong> then labels them (e.g. recognizing a “chair” or “person”). Modern approaches rely on large training datasets. For instance, a robot might use a trained neural network to detect humans and stop for safety, or to locate parts on a conveyor belt. Performance is measured by precision/recall and speed.</p><p>Traditional methods (feature matching with SIFT/SURF descriptors) gave way to neural networks for real-time detection. These detectors can operate on live video, enabling tasks like visual servoing and obstacle detection. In practice, robots use frameworks (OpenCV, TensorFlow) to run these algorithms. Although advanced, object detection can still produce false positives/negatives, so many systems incorporate redundancy (multiple sensors) and confidence thresholds to be robust.</p>"
            },
            {
                "id": "8.4",
                "title": "Visual servoing and tracking",
                "content": "<p>Visual servoing uses camera feedback for control. For example, a robot arm with an end-camera may adjust its pose in real-time to keep an object centered in view (eye-in-hand control) or maintain orientation relative to a landmark (eye-to-hand control). This closes the loop using vision: if the object moves, the robot reacts to re-center or track it.</p><p>Tracking involves following a moving target over time. Techniques range from simple color or template matching to advanced methods like Kalman/particle filters on detected object positions. For example, a warehouse robot might use a camera to lock onto an AprilTag or QR code on a pallet and steer to it. Visual servo and tracking allow robots to handle dynamic scenes (a target that is moving) and achieve tasks like object following or aiming. Key challenges include latency (vision processing time) and robustness to lighting changes.</p><p>In practice, visual servoing is limited to relatively slow motions (to allow the camera to catch up), but it is powerful for fine adjustments. Combined with other sensors, it gives robots precise control when touching or manipulating objects they can see.</p>"
            }
        ]
    },
    {
        "number": "9",
        "title": "Machine Learning Applications in Robotics",
        "topics": [
            {
                "id": "9.1",
                "title": "Supervised and unsupervised learning for\nrobotics",
                "content": "<p>Machine learning equips robots to make sense of data. In <strong>supervised learning</strong>, robots are trained on labeled examples. For instance, a robot vision system can be trained on thousands of images labeled “pedestrian” or “car” to then classify new images. Supervised ML is widely used for perception tasks: object recognition, semantic segmentation, and so on.</p><p>In <strong>unsupervised learning</strong>, the robot finds patterns without labels. Clustering or anomaly detection might be used, e.g. a robot mapping an environment could cluster similar features, or detect when a sensor reading looks unusual (fault detection).</p><p>A key trend is deep learning (neural networks) powering both supervised and unsupervised tasks. Robots now use convolutional neural nets for perception and autoencoders for compression or anomaly detection. The advantage is high accuracy with raw data, but it requires large data and computation.</p>"
            },
            {
                "id": "9.2",
                "title": "Reinforcement learning and robot control",
                "content": "<p><strong>Reinforcement Learning (RL)</strong> lets robots learn actions by trial and error. A reward function (e.g. reaching a goal gives positive reward) guides the policy. Robotics applications include learning to walk (reward for moving forward without falling), or learning control policies for manipulation tasks. For example, a drone might use RL to learn stable hovering by receiving rewards for staying upright. In recent years, simulation has enabled robots to use RL safely: they practice in a simulator and transfer policies to the real robot (possibly fine-tuning on the real platform). RL can adapt to complex dynamics but often requires many trials or good simulators.</p>"
            },
            {
                "id": "9.3",
                "title": "Deep learning for perception and decision-\nmaking",
                "content": "<p>Deep neural networks (DNNs) revolutionize perception. Robotics uses Convolutional Neural Networks (CNNs) for image tasks (detection, segmentation) and Recurrent Neural Nets (RNNs) or Transformers for sequences (speech, dialogue). For decision-making, deep RL (e.g. Deep Q-Networks) combines perception with control. For instance, a robot could use a CNN to process camera images and then a neural controller to decide a steering command. Transfer learning (using a network pretrained on large datasets like ImageNet) is common to jump-start robot vision.</p><p>Deep learning demands lots of data and computing power, but it achieves state-of-the-art in tasks like vision and language. For robotics, it is used in autonomous driving (end-to-end networks mapping camera to steering) and grasp planning (predicting grasp points from images) among others.</p>"
            },
            {
                "id": "9.4",
                "title": "Transfer learning and sim-to-real techniques",
                "content": "<p>Robots often train in simulation (for safety and speed) and then operate in the real world. <strong>Sim-to-real</strong> transfer addresses the gap: simulated physics and visuals aren’t perfect, so policies may fail on real hardware. Techniques include domain randomization (randomize simulation appearance/physics so the learned policy is robust) and system identification (tuning the simulator to match the real robot).</p><p><strong>Transfer learning</strong> means taking knowledge from one task or domain to another. For example, a vision model trained on internet images might be fine-tuned for a robot’s camera. Or skills learned on one robot can be adapted to another (with a different morphology). These approaches help reduce the need for massive real-world training data.</p>"
            }
        ]
    },
    {
        "number": "10",
        "title": "Industrial Robotics and Automation",
        "topics": [
            {
                "id": "10.1",
                "title": "Industrial robot programming and interfaces",
                "content": "<p>Industrial robots are programmed via <strong>teach pendants</strong>, offline software, or code. Traditional languages (e.g. ABB’s RAPID, KUKA’s KRL, FANUC’s TP) allow specifying waypoints, speed, and I/O actions. Modern systems also offer graphical or simulation-based programming. Interfaces range from physical operators (pedals, joysticks) to network APIs (EtherCAT, Modbus). A key aspect is integration with PLCs and vision systems for tasks like pick-and-place.</p>"
            },
            {
                "id": "10.2",
                "title": "Robot cell design and safety considerations",
                "content": "<p>Robot cells (the workspaces) must be designed with safety in mind. This includes physical barriers, interlocks, emergency stops, and light curtains. Standards (e.g. ISO 10218 for industrial robot safety) dictate safe separation of humans and robots. Cells are laid out to avoid pinch points and allow maintenance access. Safety also involves software limits (speed limits, monitored stops) to prevent dangerous motion.</p>"
            },
            {
                "id": "10.3",
                "title": "Collaborative robots and human-robot interaction",
                "content": "<p>Cobots are designed to work alongside people. They use force-limited actuators or safety-rated monitored stops to avoid injury. HRI (human-robot interaction) covers how robots perceive and respond to humans (vision-based detection of humans, intuitive teach-by-demonstration interfaces). Collaborative tasks must be slow and smooth when humans are near, trading off speed for safety. Standards like ISO/TS 15066 define safe contact forces for collaborative operation.</p>"
            },
            {
                "id": "10.4",
                "title": "Quality control and inspection applications",
                "content": "<p>Robots automate QC in manufacturing: machine-vision systems on robot arms inspect parts for defects, measure dimensions, or test function. They provide consistent, 100% inspection where humans might miss details. For example, a camera-equipped robot can scan circuit boards for solder defects or a laser scanner can verify part geometry to tight tolerances. Automation in inspection improves yield and reduces costs.</p>"
            }
        ]
    },
    {
        "number": "11",
        "title": "Emerging Robotic Technologies and Applications",
        "topics": [
            {
                "id": "11.1",
                "title": "Soft robotics and bio-inspired designs",
                "content": "<p>Soft robots use flexible, compliant materials (rubber, textiles) instead of rigid links. Inspired by octopus arms or elephant trunks, they can squeeze through tight spaces and handle delicate objects. They often use pneumatic networks or shape-memory alloys. This makes them inherently safe and adaptable, but also less precise and with lower force. Bio-inspired designs also include legged robots patterned after animals for agile locomotion, or flying robots mimicking birds. Soft/bio-robots hold promise in search-and-rescue, medical (flexible endoscopes), and consumer robotics (gentle grippers). The trade-off is that softness makes control and modeling more complex.</p>"
            },
            {
                "id": "11.2",
                "title": "Swarm robotics and multi-robot systems",
                "content": "<p>Swarm robotics studies how many simple robots can cooperate. Inspired by ants or bees, swarms distribute a task among units using local communication. Benefits include robustness (if one fails, others continue) and scalability. For example, a swarm of small drones could survey an area faster than one large drone. Coordination algorithms (like consensus or swarm intelligence) are key. Challenges involve ensuring reliable communication, avoiding interference, and controlling emergent behavior. Swarms are being explored for tasks like environmental monitoring or search (multiple robots covering area) and warehouse automation (teams of AGVs).</p>"
            },
            {
                "id": "11.3",
                "title": "Medical and rehabilitation robotics",
                "content": "<p>Robots increasingly assist in medicine. <strong>Surgical robots</strong> (like the da Vinci) allow minimally invasive procedures with higher precision. <strong>Rehabilitation robots</strong> (exoskeletons, prosthetic limbs) help patients recover movement or replace lost limbs. Tele-operated robots perform remote diagnoses or drug delivery. The impact is improved outcomes and access, but concerns include ensuring safety in life-critical tasks and managing the high cost of equipment. Research continues on smart prosthetics that adapt to the user’s intentions via EMG or brain signals.</p>"
            },
            {
                "id": "11.4",
                "title": "Space and underwater robotics",
                "content": "<p>Space robots include planetary rovers (Mars rovers like Curiosity/Perseverance) and robotic arms on spacecraft/space stations (e.g. Canadarm on the ISS). They must operate in extreme conditions (vacuum, radiation) and often autonomously due to communication delays. Underwater robots (ROVs/AUVs) explore oceans. Both domains demand robust autonomy and communication (acoustic or satellite). Robots enable exploration where humans cannot go: for example, Mars rovers study geology remotely. These applications push robotics innovation (long-range autonomy, ruggedization) but also face high risk and cost.</p>"
            }
        ]
    },
    {
        "number": "12",
        "title": "Robotics Lab – Programming and Simulation",
        "topics": [
            {
                "id": "12.1",
                "title": "Robot Operating System (ROS) fundamentals",
                "content": "<p>ROS is a middleware framework for robots. It provides standardized tools and libraries for messaging between processes (nodes). Key concepts: nodes (processes), topics (publish/subscribe message buses), services (request/response), and the ROS master (nameserver). ROS also supplies common drivers (camera, LIDAR), robot models, and visualization tools (RViz). It enables rapid prototyping: for example, a depth camera driver can publish images to a topic, and a separate node can subscribe and perform obstacle detection, all without custom inter-process plumbing. ROS’s ecosystem (packages for SLAM, navigation, etc.) makes it easier to experiment with algorithms in simulation or on hardware.</p>"
            },
            {
                "id": "12.2",
                "title": "Simulation environments: Gazebo and V-REP",
                "content": "<p>Simulation lets students test robotics code safely. <strong>Gazebo</strong> (often used with ROS) simulates physics (ODE, Bullet) in 3D worlds. It models sensors (cameras, lasers) and allows realistic robot models (URDF). <strong>V-REP (CoppeliaSim)</strong> is another simulator with a built-in Lua interface. In labs, one might design a robot in simulation, implement controls, and see how it behaves before deploying on a real robot. These simulators help visualize kinematics, debug sensor processing, and automate testing without risking hardware.</p>"
            },
            {
                "id": "12.3",
                "title": "Sensor data processing and actuator control",
                "content": "<p>Lab exercises often involve reading sensor data (camera images, encoders, IMUs) and processing it (filtering, feature extraction). For example, students might use a ROS node to subscribe to encoder counts and implement odometry calculations. Actuator control involves sending commands to motors (velocity or position targets). Programming microcontrollers or motor drivers to interpret ROS commands is common. Tasks might include writing a PID control loop on an Arduino to regulate motor speed based on encoder feedback. Emphasis is on the end-to-end loop: sensing → computing → actuation.</p>"
            },
            {
                "id": "12.4",
                "title": "Implementation of basic robotic algorithms",
                "content": "<p>In the lab, students implement core algorithms: forward kinematics on a simple manipulator, path planning on a grid, or SLAM using a laser scan. For instance, one might program A* on a 2D map and test it on a simulated mobile robot. Trajectory generation experiments might have students compute cubic polynomial motions and command a servo to follow. The goal is to tie theory to practice: for example, verify a kinematic model by moving a robot to predicted positions. Debugging through simulation and hardware testing is key.</p>"
            }
        ]
    },
    {
        "number": "13",
        "title": "Robotics: Hardware Integration Lab",
        "topics": [
            {
                "id": "13.1",
                "title": "Microcontroller programming for robotics",
                "content": "<p>Robotics often uses microcontrollers (Arduino, STM32, etc.) for low-level control. Programming them involves writing firmware (in C/C++ or MicroPython) to read sensors, compute control, and drive actuators. For example, students learn to read an analog sensor via ADC and light an LED, or to control motor speed with PWM signals. Real-time aspects are emphasized: loops must run at sufficient frequency for control.</p>"
            },
            {
                "id": "13.2",
                "title": "Interfacing sensors and actuators with embedded\nsystems",
                "content": "<p>This builds on 12.4. It involves wiring sensors (encoders, IMUs, ultrasonic) to microcontroller pins and calibrating them. For actuators, it involves connecting motor drivers or servo lines. A student might mount a wheel encoder on a DC motor, read pulses via interrupt, and publish velocity commands accordingly. Combining multiple sensors, they might fuse encoder and IMU data on the microcontroller for better pose estimation.</p>"
            },
            {
                "id": "13.3",
                "title": "Robot assembly and calibration techniques",
                "content": "<p>Hands-on labs include assembling a robot kit or arm. Calibration is crucial: ensuring joints register correctly and sensors align with the robot’s geometry. For instance, calibrating a camera might involve finding its intrinsic matrix. Robot assembly might cover belt tensioning, encoder mounting, and alignment. Precise assembly ensures the theoretical kinematic model matches reality.</p>"
            },
            {
                "id": "13.4",
                "title": "Testing and troubleshooting robotic systems",
                "content": "<p>Troubleshooting is a core skill. Students test each component: do the motors respond to commands? Are sensor readings valid? They practice using oscilloscopes or logic analyzers for debugging signals, and software tools for monitoring (ROS rqt_plot, serial monitors). Building a checklist (power, ground, connections) and isolating issues (e.g. sensor noise vs code bug) is part of lab training.</p>"
            }
        ]
    },
    {
        "number": "14",
        "title": "Robotics: Design, Build, and Present Project",
        "topics": [
            {
                "id": "14.1",
                "title": "Project planning and requirements analysis",
                "content": "<p>The final project simulates a real engineering task. Students start by identifying requirements: what should the robot achieve? Who are the users? They must plan scope, timeline, and resources. For example, designing a line-following robot would start by defining sensors needed, speed requirements, and environment. A Gantt chart or project document is often created.</p>"
            },
            {
                "id": "14.2",
                "title": "System design and component selection",
                "content": "<p>This involves deciding on the mechanical design (chassis, wheels, arms) and selecting parts: motors (with torque specs), microcontroller, sensors (camera, IR), battery, etc. Trade-offs (cost vs performance, weight vs battery life) are evaluated. Often CAD is used to design frames.  For instance, choosing stepper vs DC motors depends on required precision and torque.</p>"
            },
            {
                "id": "14.3",
                "title": "Integration of hardware and software\ncomponents",
                "content": "<p>Students integrate sensors, actuators, and computing. For example, mounting a camera on the robot, wiring it to the onboard computer running ROS, and testing the data flow. They write or combine software modules: sensor drivers, control loops, communication between parts. Integration testing checks that all subsystems (mechanical, electrical, software) work together. Issues like electrical noise, timing mismatches, or software bugs often arise and must be fixed.</p>"
            },
            {
                "id": "14.4",
                "title": "Performance evaluation and project documentation",
                "content": "<p>Finally, teams test the robot against the specifications (speed tests, task success rates). They measure performance (e.g. accuracy of line following, time to complete a maze) and compare to goals. They also document the project: writing a report and giving a presentation. This includes design rationale, problems encountered, test results, and future improvements. Peer code review and demonstrations are common.</p><p><strong>Yug</strong>, this covers the in-depth topics you listed, balancing both benefits and challenges. Let me know if you want more detail on any part!</p>"
            }
        ]
    },
    {
        "id": "intro",
        "title": "General Info",
        "content": "What do you learn in Robotics? Robotics covers the design, construction, and operation of robots... (See PDF for full text)"
    }
];
