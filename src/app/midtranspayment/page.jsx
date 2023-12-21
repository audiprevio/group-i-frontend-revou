import React from "react";
import MidtransPaymentDummy from "../../components/MidtransPaymentDummy";
import PremiumPackageInfo from "../../components/PremiumPackageInfo";

const page = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row l">
      <div className="h-full w-1/2 bg-gradient-to-b from-[#e6e4ff] to-bg-white !bg-gradient-opacity-5 !bg-opacity-10">          
      <div className="flex items-center justify-center mt-[0.5rem] ">
            <MidtransPaymentDummy />
          </div>
        </div>
        <div className="w-1/2 h-[100vh] bg-oksigen-brand-blue bg-opacity-10">
          <div className="flex items-center justify-center mt-[4rem]">x
            <PremiumPackageInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
