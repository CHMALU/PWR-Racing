"use client";

import Department from "./Department";
import BottomBar from "./BottomBar";

const DepartmentsSubsection = () => {
  return (
    <div>
      <div className="grid-rows-2 relative border-none">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Department department="mechanical" objectPositionY="40%" />
          <Department department="composites" objectPositionY="75%" />
          <Department department="marketing" objectPositionY="25%" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <Department department="software" objectPositionY="60%" />
          <Department department="electrical" objectPositionY="60%" />
          <Department department="vehicle performance" objectPositionY="50%" />
          <Department department="business" objectPositionY="20%" />
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default DepartmentsSubsection;
