"use client";

import Image from "next/image";
import React, { useState } from "react";
import TileHeading from "./TileHeading";

interface UserCardProps {
  dictionary: {
    zadzwon: string;
    napisz: string;
  };
  opiekun?: boolean;
  member: {
    name: string;
    surname: string;
    currentRole: string;
    phoneNumber?: string | null;
    email?: string | null;
  };
  teamId: string;
  roleHistory: {
    [key: string]: {
      role: string;
      bolidName: string;
      department: string;
    }[];
  };
}

const UserCard: React.FC<UserCardProps> = ({
  dictionary,
  opiekun,
  member,
  teamId,
  roleHistory,
}) => {
  const placeholderImage = "/images/TeamPlaceholder.jpg";

  // Generowanie ścieżki do obrazka członka zespołu
  const generatedMemberImageSrc = `https://storage.googleapis.com/pwr-rt/${
    teamId === "RT11b" ? "RT11" : teamId
  }/${encodeURIComponent(
    member.name[0].toUpperCase() + member.name.slice(1)
  )}%20${encodeURIComponent(
    member.surname[0].toUpperCase() + member.surname.slice(1)
  )}.jpg`;

  // Użycie stanu do dynamicznej zmiany obrazka w razie błędu
  const [memberImageSrc, setMemberImageSrc] = useState(generatedMemberImageSrc);

  const handleImgError = () => {
    // Po błędzie ustawiamy ścieżkę do obrazka zastępczego
    setMemberImageSrc(placeholderImage);
  };

  return (
    <div className="relative group w-full">
      <div className="absolute inset-0 z-0 w-full h-full rounded-full blur-3xl bg-white opacity-10"></div>
      <div className="relative rounded-md overflow-hidden bg-black pb-14">
        <div className=" absolute w-full h-[350px]">
          {/* Możesz wykorzystać obrazek zastępczy jako tło */}
          <Image
            src="/images/TeamPlaceholder.jpg"
            alt={`Zdjęcie ${member.name} ${member.surname}`}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
            placeholder="blur"
            blurDataURL={placeholderImage}
            onError={handleImgError}
          />
        </div>
        <div className="relative h-[350px]">
          <Image
            src={memberImageSrc}
            alt={`Zdjęcie ${member.name} ${member.surname}`}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
            placeholder="blur"
            blurDataURL={placeholderImage}
            onError={handleImgError}
          />
        </div>
        <TileHeading
          opiekun={opiekun}
          member={member}
          roleHistory={roleHistory}
          phoneNumber={member.phoneNumber}
          email={member.email}
          dictionary={dictionary}
        />
      </div>
    </div>
  );
};

export default UserCard;
