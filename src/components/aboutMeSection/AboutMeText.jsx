import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import SingleContactSocial from "../contactMeSection/SingleContactSocial";
import { LinkPreview } from "../ui/link-preview";

const AboutMeText = () => {
  return (
    <div className="flex flex-col text-md max-w-[90%] md:items-start sm:items-center md:text-left sm:text-center">
      <p className="text-justify">
        I’m <b>Ashish Soni</b>, a <b>System Engineer at Tata Consultancy
        Services (TCS Prime)</b> specializing in <b>Data Engineering</b>. I’ve
        completed TCS’s training in the domain, gaining hands-on experience
        with <b>PySpark</b>, <b>Databricks</b>, <b>Apache Kafka</b>,{" "}
        <b>Apache Airflow</b>, <b>Data Warehousing</b> and{" "}
        <b>ETL/ELT pipelines</b>, and I’m a{" "}
        <b>Databricks Certified Data Engineer Associate</b>.
        <br />
        <br />
        During training, I built an <b>e-commerce data pipeline</b> using the{" "}
        <b>Medallion Architecture</b> (Bronze, Silver, Gold) to turn raw
        datasets into business-ready KPIs, and a <b>banking customer churn
        analysis</b> that flagged inactive, low-balance accounts, both using{" "}
        <b>PySpark and SQL on Databricks</b> with dashboards for insights. I’m
        now looking to work on real-world data engineering projects.
        <br />
        <br />
        Before this, I was a <b>Software Engineering Intern at Automation
        Anywhere</b>, where I built test automation with <b>Cypress</b> and{" "}
        <b>Playwright</b> and optimized <b>CI/CD</b> pipelines. I also build
        full-stack apps with <b>React.js</b>, <b>Node.js</b> and{" "}
        <b>Next.js</b>, including <b>MEDIVERSE</b>, a healthcare consultation
        platform, and <b>CODELAB</b>, a real-time collaborative code editor.
        <br />
        <br />
        I have a strong grasp of <b>Data Structures & Algorithms</b>: I’ve
        solved <b>1300+ problems</b>, hold a <b>LeetCode Knight Badge</b> with
        a <b>peak rating of 1955</b>, and have led <b>DSA workshops</b> as a{" "}
        <b>Competitive Programming Lead</b> at{" "}
        <b>Google Developers Group GLBITM</b>. Outside of work, I enjoy writing{" "}
        <b>technical blogs</b> and <b>poetry</b>.
      </p>

      <div className="flex gap-4 mt-5">
        <LinkPreview
          // url="https://www.linkedin.com/in/ashishxsoni"
          imageSrc="/images/Linkedin.png"
          isStatic={true}
          height={325}
          width={300}
        >
          <SingleContactSocial
            link="https://www.linkedin.com/in/ashishxsoni/"
            Icon={FaLinkedinIn}
            bgColor="bg-[#0A66C2]"
            fill="#fff"
          />
        </LinkPreview>
        <LinkPreview url="https://github.com/ashishxsoni">
          <SingleContactSocial
            link="https://github.com/ashishxsoni/"
            Icon={FiGithub}
            bgColor="bg-[#000]"
            fill="#fff"
          />
        </LinkPreview>
        <LinkPreview
          imageSrc="/images/blog.png"
          isStatic={true}
          height={300}
          width={300}
        >
          <SingleContactSocial
            link="https://hashnode.com/@ashishxsoni"
            Icon={FaHashnode}
            bgColor="bg-[#fff]"
            fill="#2962FF"
          />
        </LinkPreview>
        <LinkPreview url="https://leetcode.com/u/ashishxsoni/">
          <SingleContactSocial
            link="https://leetcode.com/u/ashishxsoni/"
            Icon={SiLeetcode}
            bgColor="bg-[#000]"
            fill="#FF8C00"
          />
        </LinkPreview>
        <LinkPreview imageSrc="/images/insta.png" isStatic={true}>
          <SingleContactSocial
            link="https://www.instagram.com/ashishxsoni/"
            Icon={FaInstagram}
            bgColor="bg-gradient-to-r from-[#833ab4] via-[#c13584] via-[#e1306c] via-[#fd1d1d] via-[#f77737] to-[#fcb045]"
            fill="#fff"
          />
        </LinkPreview>
      </div>
      <div className="shadow-whiteShadow absolute top-[5%] left-0 -z-10 opacity-50"></div>
    </div>
  );
};

export default AboutMeText;
