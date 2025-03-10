"use client";

import Slider from "@/app/components/Section/BolidSection/Slider";

interface ParamsParamsClientSlider {
  teamId: string;
  showRt15e?: boolean;
}
const ClientSlider: React.FC<ParamsParamsClientSlider> = ({
  teamId,
  showRt15e,
}) => {
  return <Slider showRt15e currentBolid={teamId} darkMode></Slider>;
};

export default ClientSlider;
