import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo
        text="ashishxsoni@gmail.com"
        href="mailto:ashishxsoni@gmail.com"
        Image={HiOutlineMail}
      />
      <SingleInfo
        text="+91 9761696105"
        href="tel:+919761696105"
        Image={FiPhone}
      />
      <SingleInfo text="Greater Noida, U.P" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
