import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaCss3Alt,
  FaGithub,
  FaPython,
  FaDocker,
  FaJenkins,
  FaLinux,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { VscAzure } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiApachespark,
  SiDatabricks,
  SiApachekafka,
  SiApacheairflow,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostman,
  SiPlaywright,
  SiCypress,
} from "react-icons/si";

export const skills = [
  // Data Engineering
  {
    skill: "Python",
    icon: FaPython,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#3776ab] hover:to-[#ffd43b]",
  },
  {
    skill: "SQL",
    icon: FaDatabase,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#4479a1] hover:to-[#2c5282]",
  },
  {
    skill: "PySpark",
    icon: SiApachespark,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#e25a1c] hover:to-[#f58c3c]",
  },
  {
    skill: "Databricks",
    icon: SiDatabricks,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#ff3621] hover:to-[#c42a1a]",
  },
  {
    skill: "Apache Kafka",
    icon: SiApachekafka,
    hoverColor: "hover:bg-gradient-to-r hover:from-gray-700 hover:to-black",
  },
  {
    skill: "Apache Airflow",
    icon: SiApacheairflow,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#017cee] hover:to-[#00ad46]",
  },
  {
    skill: "PostgreSQL",
    icon: SiPostgresql,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#336791] hover:to-[#254c6b]",
  },
  {
    skill: "MySQL",
    icon: SiMysql,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#00758f] hover:to-[#f29111]",
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#4db33d] hover:to-[#2e7d32]",
  },

  // Cloud & DevOps
  {
    skill: "Azure",
    icon: VscAzure,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#0078d4] hover:to-[#005a9e]",
  },
  {
    skill: "AWS",
    icon: FaAws,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#ff9900] hover:to-[#cc7a00]",
  },
  {
    skill: "Docker",
    icon: FaDocker,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#2496ed] hover:to-[#1a6fb0]",
  },
  {
    skill: "Jenkins",
    icon: FaJenkins,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#d24939] hover:to-[#a63326]",
  },
  {
    skill: "Linux",
    icon: FaLinux,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#fcc624] hover:to-[#333]",
  },

  // Languages
  {
    skill: "Java",
    icon: FaJava,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#f89820] hover:to-[#b07219]",
  },
  {
    skill: "C++",
    icon: TbBrandCpp,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#00599c] hover:to-[#002c59]",
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#f7df1e] hover:to-[#e4c700]",
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#3178c6] hover:to-[#235a97]",
  },

  // Web
  {
    skill: "ReactJS",
    icon: FaReact,
    hoverColor: "hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500",
  },
  {
    skill: "NextJs",
    icon: SiNextdotjs,
    hoverColor: "hover:bg-gradient-to-r hover:from-gray-800 hover:to-black",
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#68a063] hover:to-[#3c873a]",
  },
  {
    skill: "ExpressJs",
    icon: SiExpress,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#333333] hover:to-black",
  },
  {
    skill: "HTML",
    icon: FaHtml5,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#e44d26] hover:to-[#f16529]",
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#264de4] hover:to-[#2965f1]",
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#38bdf8] hover:to-[#0ea5e9]",
  },

  // Testing & Tools
  {
    skill: "Playwright",
    icon: SiPlaywright,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#2ead33] hover:to-[#1d7a22]",
  },
  {
    skill: "Cypress",
    icon: SiCypress,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#17202c] hover:to-[#69d3a7]",
  },
  {
    skill: "Git",
    icon: FaGitAlt,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#f1502f] hover:to-[#e44d26]",
  },
  {
    skill: "Github",
    icon: FaGithub,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#333] hover:to-black",
  },
  {
    skill: "Postman API",
    icon: SiPostman,
    hoverColor: "hover:bg-gradient-to-r hover:from-[#ff6c37] hover:to-[#ef5b25]",
  },
];

// Small-screen list is derived from the main list, so the two never drift apart
export const skillsSM = skills.map(({ skill, icon }) => ({ skill, icon }));
