"use client";

import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

interface ButtonsSectionProps {
  dict: any;
}

const ButtonsSection: React.FC<ButtonsSectionProps> = ({ dict }) => {
  const router = useRouter();

  const handleFormsClick = () => {
    window.open(
      "https://docs.google.com/forms/d/1EGLPpMqqDQ15weFgiAibdRCAght7lzGOT00tMSNVsBA/edit",
      "_blank"
    ); // Otwiera Facebooka w nowej karcie
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/PWRRacingTeam", "_blank"); // Otwiera Facebooka w nowej karcie
  };

  return (
    <div className="my-16 flex gap-4 md:w-1/3">
      <Button label="Dołącz do nas" onClick={handleFormsClick} />
      <Button
        outline
        label="Dowiedz się więcej"
        onClick={handleFacebookClick}
      />
    </div>
  );
};

export default ButtonsSection;
