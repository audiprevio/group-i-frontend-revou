import React from "react";
import Navbar from "../../components/Navbar";
import PremiumEntryComponent from "../../components/PremiumEntryComponent";
import PremiumPackageInfo from "../../components/PremiumPackageInfoNoSwitch";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-row ">
      <div className="h-full w-1/2 bg-gradient-to-b from-[#e6e4ff] to-bg-white !bg-gradient-opacity-5 !bg-opacity-10">          <div className="flex items-center justify-center mt-[4rem]">
            <PremiumEntryComponent />
          </div>
        </div>
        <div className="w-1/2 h-[90vh] bg-oksigen-brand-blue bg-opacity-10">
          <div className="flex items-center justify-center mt-[4rem]">x
            <PremiumPackageInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
