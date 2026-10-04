export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  leetcode: string;
  resumeUrl: string;
  profileImage: string;
  profilePlaceholderInitial: string;
  statusBadge: string;
  heroPillBadge: string;
  rotatingTitles: string[];
}

export const siteConfig: SiteConfig = {
  name: "Dejashini T. P.",
  shortName: "Dejashini",
  tagline: "Building useful technology, one idea at a time.",
  headline: "Building Smart Digital Experiences with AI and Code.",
  subheadline:
    "I'm an aspiring AI Full Stack Engineer passionate about building intelligent applications, modern websites, and practical software solutions. I combine artificial intelligence, machine learning, and full-stack development to transform ideas into useful digital products.",
  email: "dejashini123@gmail.com",
  phone: "+91 8608464321",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/dejashini-t-p",
  github: "https://github.com/Dejashini123",
  leetcode: "https://leetcode.com/u/Dejashini",
  resumeUrl: "/documents/Resume_Dejashini.pdf",
  profileImage: "/images/profile.jpeg",
  profilePlaceholderInitial: "D",
  statusBadge: "Open to Freelance Projects & Opportunities",
  heroPillBadge: "AI • SOFTWARE • INNOVATION",
  rotatingTitles: [
    "AI Full Stack Developer",
    "Machine Learning Enthusiast",
    "Computer Vision Developer",
    "Python & React Developer",
    "Freelance Technology Developer",
  ],
};
