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
      {/* <p className="text-justify">
        I am <b>Ashish Soni</b>, a passionate and skilled full stack web
        developer with expertise in <b>React.js</b>, <b>TailwindCSS</b>,{" "}
        <b>Redux Toolkit</b>, and <b>Appwrite</b>. I have a solid foundation in
        <b>JavaScript</b>, <b>Python</b>, and <b>C++</b>, and have built dynamic
        applications including
        <b>Enlighten</b> — a feature-rich blog app with secure authentication,
        rich text editing, and intuitive UI/UX.
        <br />I am proficient in <b>Data Structures and Algorithms</b> with 1000+
        problems solved on
        <b>LeetCode</b> and a <b>4-star rating on HackerRank</b>.
        <br />
        As a{" "}
        <b>Development Team Member of Google Developers Group (GDG) GLBITM</b>,
        I actively contribute to the developer community and recently organized
        a workshop on building full-stack AI-integrated applications.
        <br />I am constantly seeking to enhance user experience through
        thoughtful <b>UI/UX design</b>
        and efficient <b>state management</b>. I also enjoy writing{" "}
        <b>poetry and blogs</b> in my free time.
      </p>
 */}

      <p className="text-justify">
        I am <b>Ashish Soni</b>, a passionate and goal-oriented{" "}
        <b>Full Stack Web Developer</b>
        with a strong foundation in <b>Data Structures & Algorithms</b> and{" "}
        <b>System Design</b>. I’ve solved over <b>1300 DSA problems</b>, earned
        the <b>LeetCode Knight Badge</b>, and achieved a{" "}
        <b>peak rating of 1856</b>. I ranked <b>725 globally</b>
        in a LeetCode Weekly Contest and secured <b>1st place</b> in{" "}
        <b>HackQuest</b>, consistently ranking in the <b>top 5%</b> across
        competitive platforms.
        <br />
        <br />
        My development experience centers around building high-performance,
        scalable applications using the <b>MERN stack</b>. Projects like{" "}
        <b>CODELAB</b> — an AI-powered collaborative code editor — and{" "}
        <b>CODEX NETWORK</b>— a real-time programming community platform —
        demonstrate my expertise in <b>React.js</b>, <b>Node.js</b>,{" "}
        <b>WebSockets</b>, and <b>OpenAI API integration</b>.
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
      </p>

      <div className="flex gap-4 mt-5">
        <LinkPreview
          // url="https://www.linkedin.com/in/ashishxsoni"
          imageSrc="/images/Linkedin-2.png"
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
