"use client";

import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const PartnersButton = () => {
  const router = useRouter();

  return (
    <div className="my-8 flex gap-4 md:w-1/3">
      <Button
        label="Zostań Partnerem"
        onClick={() => router.push("/partners/joinus")}
      />
      <Button outline label="Kontakt" onClick={() => router.push("/contact")} />
    </div>
  );
};

export default PartnersButton;
