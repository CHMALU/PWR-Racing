"use client";

import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

interface PartnersButtonProps {
  dict: { becomePartner: string; contact: string };
}

const PartnersButton: React.FC<PartnersButtonProps> = ({ dict }) => {
  const router = useRouter();

  return (
    <div className="my-8 flex gap-4 md:w-1/3">
      <Button label={dict.becomePartner} redirectPath="/partners/joinus" />
      <Button outline label={dict.contact} redirectPath="/contact" />
    </div>
  );
};

export default PartnersButton;
