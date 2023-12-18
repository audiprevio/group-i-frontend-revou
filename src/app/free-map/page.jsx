import Customcard from "@/components/CustomCard";
import React from "react";
import dynamic from "next/dynamic";
import MapComponent from "@/components/MapComponent";
import { Divider } from "@tremor/react";
import { AQITracker } from "@/components/AQITracker";
import { ISPACaseTracker } from "@/components/ISPACaseTracker";
import { ISPACostTracker } from "@/components/ISPACostTracker";
import { DataGrid } from "@/components/DataGrid";
import SkeletonFreeComponent from "@/components/SkeletonFree";
import Navbar from "@/components/Navbar";

const DynamicMap = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="h-[100vh]">
      <div className="h-[9vh]">
        <Navbar />
      </div>
      <div className="flex flex-row">
        <div className="pr-10 pb-10 mr-0 w-1/2 pl-8 flex flex-col items-start justify-start pt-0 mt-0 h-[90vh] overflow-y-scroll overflow-x-hidden">
          <SkeletonFreeComponent />
        </div>
        <div className="w-1/2 mt-0 pt-0">
          <DynamicMap />
        </div>
      </div>
    </div>
  );
};

//

export default page;
