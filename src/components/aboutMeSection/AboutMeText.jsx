import { Link } from "react-scroll";
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
      {/*  <p className="text-justify">
        I am <b>Ashish Soni</b>, a passionate{" "}
        <b>Full Stack Web Developer </b>
        with a strong foundation in <b>Data Structures & Algorithms</b> and{" "}
        <b>MERN Stack</b>. I’ve solved over <b>1300 DSA problems</b>, earned
        the <b>LeetCode Knight Badge</b>, and achieved a{" "}
        <b>peak rating of 1955</b>.
        <br />
        <br />
        My development experience centers around building high-performance,
        scalable applications using the <b>MERN stack</b>. Projects like{" "}
        <b>CODELAB</b> — an AI-powered collaborative code editor — and{" "}
        <b>CODEX NETWORK</b>— a real-time programming community platform —
        demonstrate my expertise in <b>React.js</b>, <b>Node.js</b>,{" "}
        <b>WebSockets</b>, and <b>API integration</b>.
        <br />
        <br />I also have deep hands-on experience with <b>Java</b> and{" "}
        <b>C++</b> for algorithmic problem-solving, and I regularly apply these
        languages in technical interviews and contests. As a{" "}
        <b>Competitive Programming Lead</b>
        at <b>Google Developers Group GLBITM</b>, I’ve organized DSA workshops
        and helped expand the team’s coding culture.
        <br />
        <br />I enjoy creating meaningful digital experiences through intuitive{" "}
        <b>UI/UX design</b>, optimizing state management with{" "}
        <b>Redux Toolkit</b>, and mentoring peers. In my spare time, I express
        creativity through <b>poetry</b> and <b>technical blogging</b>, sharing
        insights with the broader dev community.
      </p> */}

      <p className="text-justify">
        I’m <b>Ashish Soni</b>, a passionate <b>Full Stack Web Developer</b>{" "}
        with a strong grasp of <b>Data Structures & Algorithms</b> and the{" "}
        <b>MERN Stack</b>. I’ve solved over <b>1300+ DSA problems</b>, hold a{" "}
        <b>LeetCode Knight Badge</b>, and reached a <b>peak rating of 1955</b>.
        <br />
        <br />
        My development experience centers around building high-performance,
        scalable applications using the <b>MERN stack</b>. Projects like{" "}
        <b>CODELAB</b> — an AI-powered collaborative code editor — and{" "}
        <b>CODEX NETWORK</b>— a real-time programming community platform —
        demonstrate my expertise in <b>React.js</b>, <b>Node.js</b>,{" "}
        <b>WebSockets</b>, and <b>API integration</b>.
        <br />
        <br />I also bring strong proficiency in <b>Java</b> and <b>C++</b> for
        problem-solving, and have led <b>DSA workshops</b> as a{" "}
        <b>Competitive Programming Lead</b> at{" "}
        <b>Google Developers Group GLBITM</b>.
        <br />
        <br />
        Outside of coding, I enjoy crafting <b>UI/UX designs</b>, exploring{" "}
        <b>Redux Toolkit</b>, writing <b>technical blogs</b>, and sharing ideas
        through <b>poetry</b>.
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
