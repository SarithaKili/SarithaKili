import {
  
  
  designer,
  uiux,
  AI,
  VR,
  thegrearindiankitchen,
  lab,
  gbin_home,
  ai_llm
  

} from "../assets";


export const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "experience",
    title: "experiences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer & Software Engineer",
    icon: designer,
  },
  {
    title: "UI/UX Designer ",
    icon: uiux,
  },
  {
    title: "ML | LLM | AI Enthusiast ",
    icon: AI,
  },
  {
    title: "Learning for life with immersive AR/VR ",
    icon: VR,
  },
];


const experiences = [
  {
    title: "Human Computer Interaction - GBin E-waste management",
    company_name: "Figma | CSS | React",
    
    iconBg: "#383E56",
    date: "Dec 2024 - jan 2025",
    points: [
      "Focused on creating a user-friendly app for e-waste management.",
      "Optimized interface using HCI and UI/UX principles for a seamless experience.",
      "Ensured the app was responsive and functional on various devices.",
      "Collaborated closely with teams to implement efficient, high-quality features."
    ],
    image: gbin_home,
    link: "https://github.com/SarithaKili/GBin-HCI-project"
  },
  {
    title: "Food Delivery Website - The Great indian Kitchen",
    company_name: "React JS | CSS | MongoDB | Express | Node JS | Stripe",
   
    iconBg: "#E6DEDD",
    date: "oct 2024 - jan 2025",
    points: [
      "Built a full-stack food delivery app with React.js and Node.js.",
      "Integrated Stripe for secure online payments and shopping cart functionalities.",
      "Designed an intuitive admin panel for managing users, orders, and products.",
      "Implemented real-time order tracking and ensured cross-browser compatibility."
    ],
    image: thegrearindiankitchen,
    link:"https://github.com/SarithaKili/FullstackDev",
  },
  {
    title: "Gen-AI Prompt From URL with LLM",
    company_name: "Python | LangChain | OpenAI API | FAISS (VB)",
    
    iconBg: "#383E56",
    date: "Jan 2025 ",
    points: [
      "Processed documents and URLs for AI-driven insights.",
      "Leveraged FAISS for vector-based similarity search and context retrieval.",
      "Created embeddings and chunked data for efficient AI handling.",
      "Utilized OpenAI API and LangChain for advanced natural language querying."
    ],
    image: ai_llm,
    link:"https://github.com/SarithaKili/Gen-AI_PromptFromURL_LLM",
  },
  {
    title: "Computer Lab 02 Booking App - Associated with UOJ",
    company_name: "React JS | Java Spring Boot (microservices architecture) | MySQL | Microsoft Entra ID | Azure Cloud | JIRA",
  
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Developed and maintained a lab booking system with React.js and Spring Boot.",
      "Integrated Microsoft Entra ID for secure user authentication and Azure Cloud for deployment.",
      "Ensured responsive design and cross-browser compatibility.",
      "Collaborated with cross-functional teams and participated in code reviews."
    ],
    image: lab,
    link:"https://github.com/SarithaKili/CO2-lab-booking-app-backend",
  },
];


export { services, experiences };