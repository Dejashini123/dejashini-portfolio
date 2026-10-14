export interface ScreenshotItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  aspect?: string;
  isPlaceholder?: boolean;
}

export interface MetricItem {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  themeColor: {
    primary: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accentGlow: string;
  };
  technologies: string[];
  summary: string;
  problem: string;
  solution: string;
  myContributions: string[];
  keyFeatures: string[];
  metrics: MetricItem[];
  githubUrl: string;
  liveDemoUrl?: string; // Vercel live app for Forest Carbon
  environmentType: "live-app" | "localhost-iot" | "localhost-websocket";
  environmentLabel: string;
  mainImage: string;
  gallery: ScreenshotItem[];
}

export interface SkillItem {
  name: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    iconBg: string;
  };
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  contributions: string[];
  metrics: MetricItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  score: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  offerings: string[];
  accentColor: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  iconName: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  details: string;
  iconName: string;
  category: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  credentialUrl?: string;
  image?: string;
  skillsCovered: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "forest-carbon-ai",
    slug: "forest-carbon-ai",
    title: "Forest Carbon AI",
    subtitle: "Satellite-Based Forest Carbon Stock Estimation",
    themeColor: {
      primary: "#10B981", // Emerald / Forest Green
      border: "rgba(16, 185, 129, 0.3)",
      badgeBg: "rgba(16, 185, 129, 0.15)",
      badgeText: "#34D399",
      accentGlow: "0 0 35px -5px rgba(16, 185, 129, 0.3)",
    },
    technologies: [
      "Python",
      "React",
      "FastAPI",
      "Google Earth Engine",
      "Sentinel-2",
      "NASA GEDI",
      "Random Forest",
      "SHAP",
    ],
    summary:
      "An end-to-end machine learning web application designed to estimate forest carbon stock using satellite imagery, geospatial analysis, and predictive Random Forest modeling.",
    problem:
      "Understanding forest carbon stock across large geographical regions requires processing complex satellite data and identifying meaningful relationships between vegetation characteristics and biomass.",
    solution:
      "Developed a geospatial machine learning pipeline that combines satellite-derived features and biomass information to estimate forest carbon stock and present results through an interactive web application deployed on Vercel.",
    myContributions: [
      "Engineered data ingestion pipelines using Google Earth Engine API to extract multi-spectral bands from Sentinel-2 satellite imagery.",
      "Fused optical remote-sensing indices (NDVI, EVI, NDRE) with NASA GEDI L2B LiDAR canopy height and biomass samples across 3,126 coordinates.",
      "Trained and evaluated Random Forest regression models to predict Aboveground Biomass (AGB) and forest carbon density.",
      "Integrated SHAP (SHapley Additive exPlanations) values to interpret feature importance and explain spatial prediction variance.",
      "Architected the full-stack interface featuring an interactive geospatial map visualization with a FastAPI inference backend and React dashboard.",
    ],
    keyFeatures: [
      "Satellite imagery analysis using Google Earth Engine API",
      "Geospatial dataset containing 3,126 samples and 12 remote-sensing features",
      "Integration of Sentinel-2 multi-spectral imagery and NASA GEDI LiDAR biomass data",
      "Random Forest regression for carbon stock estimation",
      "React-based frontend with interactive geospatial map layers",
      "FastAPI backend for high-throughput raster processing",
      "SHAP-based model explainability and feature contribution plots",
      "Automated professional PDF report export functionality",
    ],
    metrics: [
      { label: "R² Score", value: "0.39", description: "Geospatial regression holdout accuracy" },
      { label: "MAE", value: "30.24", description: "Mean Absolute Error (Mg/ha)" },
      { label: "RMSE", value: "43.25", description: "Root Mean Squared Error (Mg/ha)" },
      { label: "Dataset Scale", value: "3,126", description: "Remote-sensing spatial coordinates" },
    ],
    githubUrl: "https://github.com/Dejashini123/ForestCarbonAI",
    liveDemoUrl: "https://forest-carbon-ai.vercel.app", // Verified active deployed URL
    environmentType: "live-app",
    environmentLabel: "Live Web Application (Vercel)",
    mainImage: "/images/projects/forest1.png",
    gallery: [
      {
        id: "fc-1",
        title: "Forest Carbon AI — Web Application",
        caption: "Live production web application landing page displaying 3D Earth globe visualization and core model benchmarks (R² 0.39, 3126+ samples).",
        src: "/images/projects/forest1.png",
      },
      {
        id: "fc-2",
        title: "Live GIS Prediction & Spatial Mapping",
        caption: "Interactive Leaflet geospatial mapping interface allowing polygon selection and regional carbon stock analysis over Southern India.",
        src: "/images/projects/forest2.png",
      },
      {
        id: "fc-3",
        title: "Random Forest Analytics & Dataset Ingestion",
        caption: "Model dashboard showing CSV dataset upload, continuous carbon distribution curves across 3,126 predictions, and PDF report export.",
        src: "/images/projects/forest3.png",
      },
    ],
  },
  {
    id: "smart-traffic",
    slug: "smart-traffic",
    title: "AI Smart Traffic & Piezoelectric Energy System",
    subtitle: "Intelligent Traffic Detection and Energy Harvesting",
    themeColor: {
      primary: "#DCA996", // Dusty Peach
      border: "rgba(220, 169, 150, 0.3)",
      badgeBg: "rgba(220, 169, 150, 0.15)",
      badgeText: "#EFC8B8",
      accentGlow: "0 0 35px -5px rgba(220, 169, 150, 0.35)",
    },
    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "IoT",
      "Computer Vision",
      "Embedded Systems",
    ],
    summary:
      "A smart traffic management system combining real-time YOLOv8 vehicle detection with piezoelectric roadway energy harvesting for sustainable intersection control.",
    problem:
      "Urban intersections suffer from inefficient fixed-timer signals that cause congestion and excessive fuel consumption, while roadway kinetic energy from passing vehicles remains completely unutilized.",
    solution:
      "Built a hybrid intelligent system pairing real-time YOLOv8 vehicle detection with an electromechanical piezoelectric transducer platform that harvests kinetic vehicle energy to power low-voltage intersection telemetry.",
    myContributions: [
      "Curated and labeled a dataset of over 1,200 traffic camera images spanning cars, buses, trucks, motorcycles, and pedestrians.",
      "Trained and fine-tuned YOLOv8 custom weights with augmentations (mosaic, HSV jitter, random crop).",
      "Achieved 91% mAP through hyperparameter optimization and confidence calibration.",
      "Engineered an automated false-positive suppression filter resulting in an 18% reduction in misclassified background clutter.",
      "Developed the multi-lane zoning logic (TOP, BOTTOM, LEFT, RIGHT) and emergency vehicle priority override.",
      "Presented and demonstrated the working system and report live at the 24-Hour National Hackathon (EcoTronics).",
    ],
    keyFeatures: [
      "Real-time YOLOv8 vehicle detection running on video streams via OpenCV",
      "Directional lane zoning (TOP, BOTTOM, LEFT, RIGHT) with dynamic queue counters",
      "Emergency vehicle priority detection with immediate green phase trigger",
      "Trained with more than 1,200 carefully annotated traffic images",
      "91% mAP achieved during rigorous model evaluation",
      "18% reduction in false detections through hyperparameter tuning",
      "Physical piezoelectric energy-harvesting circuit prototype",
      "Hardware microcontroller with active signal phase LED indicators",
    ],
    metrics: [
      { label: "Model Accuracy", value: "91% mAP", description: "Mean Average Precision across vehicle classes" },
      { label: "False Alarm Reduction", value: "18%", description: "Through confidence tuning and NMS optimization" },
      { label: "Training Dataset", value: "1,200+", description: "Annotated multi-class traffic scenes" },
      { label: "Hackathon Circuit", value: "24-Hr", description: "Demonstrated live at National Hackathon" },
    ],
    githubUrl: "https://github.com/Dejashini123/AI-Smart-Traffic-Piezo-System",
    environmentType: "localhost-iot",
    environmentLabel: "Localhost & IoT Hardware Environment",
    mainImage: "/images/projects/traffic1.jpg",
    gallery: [
      {
        id: "st-1",
        title: "Live OpenCV Traffic Control System",
        caption: "VS Code environment executing python yolo_traffic.py with directional lane zones (TOP, BOTTOM, LEFT, RIGHT), queue counting, and emergency vehicle detection.",
        src: "/images/projects/traffic1.jpg",
      },
      {
        id: "st-2",
        title: "National Hackathon Presentation (EcoTronics)",
        caption: "Dejashini presenting the project report and system architecture live to the evaluation panel at the 24-hour National Hackathon.",
        src: "/images/projects/traffic2.jpg",
      },
      {
        id: "st-4",
        title: "Model Training Curves & Loss Optimization",
        caption: "Empirical precision-recall, bounding box loss, and mAP@50 curves across training epochs.",
        src: "/images/projects/traffic_results.png",
      },
      {
        id: "st-5",
        title: "Piezoelectric Hardware Circuit Setup",
        caption: "Physical benchtop prototype featuring piezoelectric transducers, bridge rectifiers, and voltage regulator.",
        src: "/images/projects/piezo_model1.jpeg",
      },
      {
        id: "st-6",
        title: "Signal Phase Control — Red Phase State",
        caption: "Integrated microcontroller circuit board with LED indicators responding to simulated traffic density.",
        src: "/images/projects/piezo_model2.jpeg",
      },
      {
        id: "st-7",
        title: "Signal Phase Control — Green Clearance State",
        caption: "Dynamic lane clearance state triggered by high vehicle volume in prioritized test lane.",
        src: "/images/projects/piezo_model3.jpeg",
      },
    ],
  },
  {
    id: "ai-moderation-engine",
    slug: "ai-moderation-engine",
    title: "AI-Powered Moderation Engine (AI Shield)",
    subtitle: "Real-Time Text and Voice Content Moderation",
    themeColor: {
      primary: "#B9A5CF", // Deep Lavender
      border: "rgba(185, 165, 207, 0.3)",
      badgeBg: "rgba(185, 165, 207, 0.15)",
      badgeText: "#DCD2E9",
      accentGlow: "0 0 35px -5px rgba(185, 165, 207, 0.35)",
    },
    technologies: [
      "Python",
      "WebSockets",
      "Transformers",
      "Whisper AI",
      "JWT Authentication",
      "FastAPI",
    ],
    summary:
      "A real-time content moderation platform designed to process text feeds and live chat streams with sub-second toxicity interception and automated user enforcement.",
    problem:
      "Interactive social feeds and live chat applications struggle to detect hate speech, toxicity, and harassment at scale without creating noticeable delays in user conversations.",
    solution:
      "Engineered AI Shield, an asynchronous moderation platform using WebSockets for streaming I/O, transformer-based text classifiers for context-aware toxicity detection, and automated enforcement blocking violators in real time.",
    myContributions: [
      "Designed an asynchronous WebSocket server architecture targeted for 500+ concurrent real-time connections.",
      "Built the full interactive user application interface with Feed, Chat, and Media moderation modules.",
      "Implemented automated toxicity interception policies that trigger real-time timeouts and temporary user bans upon violation.",
      "Integrated Transformer models for multi-label text moderation (harassment, toxic speech, spam).",
      "Configured chunked audio processing pipelines integrating Whisper AI for speech-to-text transcription.",
      "Implemented stateless JWT authentication and role-based access control for client connections.",
    ],
    keyFeatures: [
      "Real-time message streaming using WebSockets",
      "Interactive application interface (Feed, Live Chat, Media Stream)",
      "Automated instant abuse interception with temporary block enforcement",
      "Sub-200ms latency target for text moderation inference",
      "Transformer-based NLP moderation for context-aware classification",
      "Whisper AI speech-to-text integration for voice streams",
      "JWT authentication and secure token validation for clients",
    ],
    metrics: [
      { label: "Concurrency Target", value: "500+", description: "Concurrent WebSocket stream capacity" },
      { label: "Target Latency", value: "<200ms", description: "Round-trip moderation evaluation" },
      { label: "Modality", value: "Text + Voice", description: "Unified NLP and Speech-to-Text" },
      { label: "Enforcement", value: "Real-Time", description: "Instant automated abuse blocking" },
    ],
    githubUrl: "https://github.com/Dejashini123/ai-moderation-engine",
    environmentType: "localhost-websocket",
    environmentLabel: "Localhost WebSocket Engine (127.0.0.1:8000)",
    mainImage: "/images/projects/moderation1.jpg",
    gallery: [
      {
        id: "mod-1",
        title: "AI Shield — Feed & Media Moderation Dashboard",
        caption: "Local application interface (127.0.0.1:8000/app) showing post creation, media attachment filtering, and public community feed monitoring.",
        src: "/images/projects/moderation1.jpg",
      },
      {
        id: "mod-2",
        title: "Live Chat Toxicity Interception & Temporary Block",
        caption: "Automated real-time safety enforcement modal alerting violator: 'Temporarily blocked for 1 minute' after detecting toxic chat input.",
        src: "/images/projects/moderation2.jpg",
      },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used for systems, scripting, and application engineering.",
    colorScheme: {
      bg: "from-stone-500/10 to-amber-500/10",
      border: "border-stone-500/20",
      text: "text-stone-700",
      iconBg: "bg-stone-500/10",
    },
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "C" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    colorScheme: {
      bg: "from-amber-500/10 to-stone-500/10",
      border: "border-stone-300/20",
      text: "text-stone-700",
      iconBg: "bg-stone-500/10",
    },
    skills: [
      { name: "React" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend Development",
    description: "Scalable APIs, authentication mechanisms, and real-time sockets.",
    colorScheme: {
      bg: "from-stone-600/10 to-stone-700/10",
      border: "border-stone-400/20",
      text: "text-stone-800",
      iconBg: "bg-stone-600/10",
    },
    skills: [
      { name: "FastAPI" },
      { name: "RESTful APIs" },
      { name: "WebSockets" },
      { name: "JWT Authentication" },
    ],
  },
  {
    category: "AI and Machine Learning",
    description: "Predictive modeling, computer vision pipelines, and explainability.",
    colorScheme: {
      bg: "from-emerald-500/10 to-teal-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
    },
    skills: [
      { name: "Machine Learning" },
      { name: "Computer Vision" },
      { name: "YOLOv8" },
      { name: "OpenCV" },
      { name: "Random Forest" },
      { name: "SHAP" },
    ],
  },
  {
    category: "Generative AI and NLP",
    description: "Modern language models, speech recognition, and fine-tuning workflows.",
    colorScheme: {
      bg: "from-pink-500/10 to-rose-500/10",
      border: "border-pink-500/20",
      text: "text-pink-400",
      iconBg: "bg-pink-500/10",
    },
    skills: [
      { name: "Transformer-based NLP" },
      { name: "Large Language Model Integration" },
      { name: "Whisper AI" },
      { name: "Model Fine-tuning & Optimization" },
    ],
  },
  {
    category: "Tools and Core Concepts",
    description: "Software engineering fundamentals, testing, and modern dev tools.",
    colorScheme: {
      bg: "from-amber-500/10 to-orange-500/10",
      border: "border-amber-500/20",
      text: "text-amber-400",
      iconBg: "bg-amber-500/10",
    },
    skills: [
      { name: "Git and GitHub" },
      { name: "Postman" },
      { name: "Maven" },
      { name: "VS Code" },
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "Software Design Principles" },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Artificial Intelligence Intern",
    company: "REtech Solutions Pvt. Ltd.",
    period: "June 2025 – July 2025",
    type: "Internship",
    location: "Chennai, India",
    description:
      "Worked on computer vision and AI-based object detection solutions, applying deep learning techniques to improve detection performance and streamline inference workflows.",
    contributions: [
      "Trained and fine-tuned YOLOv8 on a curated dataset of 2,000+ images across five distinct classes.",
      "Achieved 88% mAP@50, 89% precision, and 86% recall through systematic hyperparameter tuning.",
      "Developed a real-time computer vision inference pipeline using Python, YOLOv8, and OpenCV.",
      "Applied preprocessing and data augmentation techniques to boost model performance on variable lighting conditions.",
      "Helped move an object detection prototype toward production-ready use, reducing manual review effort significantly.",
    ],
    metrics: [
      { label: "mAP@50", value: "88%", description: "Mean Average Precision achieved" },
      { label: "Precision", value: "89%", description: "Positive prediction rate" },
      { label: "Recall", value: "86%", description: "Object coverage rate" },
      { label: "Dataset Scale", value: "2,000+", description: "Images across 5 classes" },
    ],
  },
];

export const educationData: EducationItem = {
  institution: "Saveetha Engineering College",
  degree: "B.E. Electronics and Communication Engineering",
  field: "Electronics, Embedded Systems & Intelligent Computing",
  duration: "2024 – 2028",
  score: "CGPA: 8.74 / 10",
  highlights: [
    "Rigorous coursework in Digital Signal Processing, Microcontrollers, and Network Protocols.",
    "Active participation in technical hackathons and competitive programming circuits.",
    "Integrated engineering fundamentals with practical AI and full-stack software development.",
  ],
};

export const approachPillars = [
  "Understand the real problem before choosing the technology.",
  "Build practical and maintainable solutions.",
  "Combine AI capabilities with user-friendly interfaces.",
  "Keep learning and improving my development skills.",
  "Communicate clearly and collaborate effectively.",
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    title: "Website Development",
    iconName: "Globe",
    accentColor: "#DCA996",
    description:
      "I create modern, responsive, and user-friendly websites for individuals, startups, and small businesses.",
    offerings: [
      "Personal and business portfolio websites",
      "Responsive, high-converting landing pages",
      "React frontend development & state management",
      "Clean RESTful API integration",
      "Website improvements, redesigns & interface updates",
    ],
  },
  {
    id: "python-automation",
    title: "Python Automation",
    iconName: "Terminal",
    accentColor: "#342633",
    description:
      "I help simplify repetitive work with custom Python scripts and automation tools.",
    offerings: [
      "Repetitive task automation & workflow scripts",
      "Data processing, parsing & organization pipelines",
      "Custom Python utility packages & CLI tools",
      "Automated reporting and data export tools",
      "Third-party API integration and data synchronization",
    ],
  },
  {
    id: "ai-ml-solutions",
    title: "AI & Machine Learning Solutions",
    iconName: "Cpu",
    accentColor: "#B9A5CF",
    description:
      "I develop practical AI-powered prototypes and applications tailored to project requirements.",
    offerings: [
      "End-to-end Machine learning prototypes",
      "Computer vision & object detection applications (YOLO, OpenCV)",
      "AI feature integration into existing web systems",
      "High-throughput model inference APIs with FastAPI",
      "AI-powered exploratory dashboards and analytics tools",
    ],
  },
];

export const whyWorkWithMeData: ValuePillar[] = [
  {
    title: "Practical Problem-Solving",
    description:
      "I focus on understanding the actual problem before choosing the right technology, ensuring straightforward, maintainable results.",
    iconName: "Target",
  },
  {
    title: "AI and Full-Stack Perspective",
    description:
      "My experience bridges machine learning, backend pipelines, and modern frontend integration into cohesive, functional products.",
    iconName: "Layers",
  },
  {
    title: "Clear Communication",
    description:
      "I value understanding requirements, sharing progress updates proactively, and keeping project discussions honest and straightforward.",
    iconName: "MessageSquare",
  },
  {
    title: "Continuous Learning",
    description:
      "I am motivated to explore modern tools, improve implementation techniques, and adapt flexibly to changing project demands.",
    iconName: "Sparkles",
  },
];

export const achievementsData: AchievementItem[] = [
  {
    title: "50+ DSA Problems Solved",
    organization: "LeetCode",
    details:
      "Consistent problem-solving covering Arrays, Strings, Trees, Dynamic Programming, and Graph algorithms.",
    iconName: "Code2",
    category: "Competitive Coding",
  },
  {
    title: "24-Hour National Hackathon",
    organization: "National Technical Circuit (EcoTronics)",
    details:
      "Built and demonstrated an AI-based Smart Traffic Management System with physical prototype live to the judging panel within 24 hours.",
    iconName: "Zap",
    category: "Hackathon",
  },
  {
    title: "Smart India Hackathon 2026",
    organization: "Ministry of Education & AICTE",
    details:
      "Participated with an AI system for anomaly and fraud detection in MPLADS fund implementation.",
    iconName: "Award",
    category: "National Competition",
  },
  {
    title: "AI Internship at REtech Solutions",
    organization: "REtech Solutions Pvt. Ltd.",
    details:
      "Delivered measurable YOLOv8 model evaluation metrics: 88% mAP@50, 89% precision, and 86% recall.",
    iconName: "TrendingUp",
    category: "Industry Experience",
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: "aws-ml-foundations",
    name: "AWS Educate — Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    image: "/images/certificates/aws_ml_foundations.png",
    credentialUrl: "https://www.credly.com",
    skillsCovered: ["Machine Learning Concepts", "AWS ML Services", "Cloud Fundamentals"],
  },
  {
    id: "ibm-ml-python",
    name: "IBM — Machine Learning with Python",
    issuer: "IBM",
    image: "/images/certificates/certificate_alt.jpeg",
    credentialUrl: "https://www.coursera.org",
    skillsCovered: ["Supervised Learning", "Classification", "Regression", "Clustering"],
  },
  {
    id: "ibm-eda-ml",
    name: "IBM — Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    image: "/images/certificates/certificate_alt.jpeg",
    credentialUrl: "https://www.coursera.org",
    skillsCovered: ["Feature Engineering", "Data Cleaning", "Hypothesis Testing", "Data Visualization"],
  },
  {
    id: "jpmc-swe",
    name: "JPMorganChase — Software Engineering Job Simulation",
    issuer: "Forage",
    image: "/images/certificates/certificate_alt.jpeg",
    credentialUrl: "https://www.theforage.com",
    skillsCovered: ["Interface Implementation", "Financial Data Streaming", "Component Architecture"],
  },
  {
    id: "lt-edutech-microcontroller",
    name: "L&T EduTech — Microcontroller and Industrial Applications",
    issuer: "Larsen & Toubro EduTech",
    image: "/images/certificates/hackathon_ecotronics.jpeg",
    credentialUrl: "https://lntedutech.com",
    skillsCovered: ["Embedded C", "Microcontrollers", "Hardware Interfacing", "Sensor Integration"],
  },
];
