"use client";

import Image from "next/image";
import Container from "../../Container";
import Text from "../../Text";
import Button from "../../Button";
import Title from "../../Title";
import { useRouter } from "next/navigation";

const TeamSection = () => {
  const router = useRouter();
  return (
    <div id="section-team" className=" relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/team/Bg.jpeg"
          alt="Tło sekcji"
          layout="fill"
          objectFit="cover"
          quality={50}
          style={{ filter: "grayscale(100%)" }}
        />
        {/* Warstwa przyciemniająca */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
      <Container paddingType="l">
        <div className=" flex flex-col lg:flex-row items-center gap-8 md:gap-20 py-8 md:py-16 w-auto overflow-hidden">
          <div className="">
            <Title size="subtitle" color="gray">
              ZESPÓŁ
            </Title>
            <Title size="big">RAZEM MOŻEMY WSZYSTKO</Title>
            <div className=" my-6">
              <Text color="white">
                Młodzi, ambitni, zaangażowani, odważni. Te słowa
                opisują studentów Politechniki Wrocławskiej, a w szczególności
                członków PWR Racing Team. Nasz zespół posiada strukturę niczym
                poważna firma. Na jego czele stoi lider zespołu. To właśnie na
                nim spoczywa największa odpowiedzialność. Bezpośrednio podlega
                mu lider techniczny, któremu z kolei podlegają liderzy
                poszczególnych działów, wyłączając marketing, którego szef jest
                podporządkowany liderowi zespołu. Dla reszty członków
                przełożonym jest lider ich działu.
              </Text>
            </div>
            <div className="flex gap-4 mt-8">
              <Button
                label="Więcej o bolidzie"
                onClick={() => router.push(`/bolid`)}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className=" w-[400px] h-[300px] md:h-[400px] relative">
              <Image
                src="/images/team/team1.jpeg"
                alt="bolid"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" hidden sm:block w-[400px] h-[300px] md:h-[400px] relative">
              <Image
                src="/images/team/team2.jpeg"
                alt="bolid"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" hidden lg:block w-[200px] h-[400px] relative">
              <Image
                src="/images/team/team3.jpeg"
                alt="bolid"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TeamSection;
