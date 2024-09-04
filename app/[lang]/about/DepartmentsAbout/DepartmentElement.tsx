import Image from "next/image";
import Text from "@/app/components/Text";
import Container from "@/app/components/Container";
import Title from "@/app/components/Title";

interface ResponsibilityItemProps {
  iconPath: string;
  text: string;
  textColor: "black" | "white" | "red" | "gray";
}

const ResponsibilityItem: React.FC<ResponsibilityItemProps> = ({
  iconPath,
  text,
  textColor,
}) => (
  <div className="flex gap-3">
    <Image src={iconPath} alt="icon" width="22" height="22" />
    <Text color={textColor}>{text}</Text>
  </div>
);

interface DepartmentElementProps {
  department: string;
  responsibilities: { text: string; icon: string }[];
  text: string;
  index: number;
  lightMode?: boolean;
}

const DepartmentElement: React.FC<DepartmentElementProps> = ({
  department,
  responsibilities,
  text,
  index,
  lightMode,
}) => {
  const bgColor = lightMode
    ? index % 2 === 0
      ? "bg-neutral-300"
      : "bg-white"
    : index % 2 === 0
    ? "bg-black"
    : "bg-neutral-700";

  const textColor = lightMode ? "black" : "white";

  return (
    <div id={department} className={bgColor}>
      <Container paddingType={index % 2 === 0 ? "l" : "r"}>
        <div
          className={`${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          } flex flex-col md:flex-row w-full justify-between gap-8 md:gap-20 my-8 md:my-0`}
        >
          <div className="flex flex-col md:w-5/12 md:py-20">
            <div className="uppercase mb-4">
              <Title color={textColor} size="big">
                {department}
              </Title>
            </div>
            <Text color={textColor}>{text}</Text>
            <div className="flex flex-col gap-4 mt-10">
              <Text color={textColor} bold>
                W naszym dziale zajmiesz się:
              </Text>
              <div className="flex flex-col gap-2">
                {responsibilities.map((responsibility, idx) => (
                  <ResponsibilityItem
                    key={idx}
                    iconPath={`/images/departments/${responsibility.icon}`}
                    text={responsibility.text}
                    textColor={textColor}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="relative md:w-[40rem] h-[20rem] md:h-auto">
            <Image
              src={`/images/departments/${department}.png`}
              alt="department image"
              layout="fill"
              objectFit="cover"
              objectPosition="center 20%"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DepartmentElement;
