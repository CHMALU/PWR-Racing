"use client";

import Text from "@/app/components/Text";
import toast from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa";
import { useHandleLocaleRedirect } from "@/app/components/HandleLocaleRedirect"; // Import customowego hooka

interface EmailActionProps {
  email: string;
}

const EmailAction: React.FC<EmailActionProps> = ({ email }) => {
  const handleMail = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.location.href = `mailto:${email}`;
    } else {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          toast.success(`E-mail skopiowany do schowka! ${email}`);
        })
        .catch((err) => {
          toast.error("Nie udało się skopiować maila.");
        });
    }
  };

  return (
    <span
      onClick={handleMail}
      className="group flex items-center pl-1 text-customRed tracking-tighter cursor-pointer"
    >
      <FaEnvelope className="mr-2" size="18px" />
      <Text color="black" hoverColor="red">
        {email}
      </Text>
    </span>
  );
};

interface AdminProps {
  text: string;
}
const Admin: React.FC<AdminProps> = ({ text }) => {
  const handleLocaleRedirect = useHandleLocaleRedirect(); // Użycie customowego hooka

  const handleNavigation = () => {
    handleLocaleRedirect("/admin");
  };

  return (
    <div onClick={handleNavigation} className="cursor-pointer">
      <Text bold medium>
        {text}
      </Text>
    </div>
  );
};

export { EmailAction, Admin };
