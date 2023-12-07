import Customcard from "@/components/CustomCard";
import React from "react";
import dynamic from "next/dynamic";
import MapComponent from "@/components/MapComponent";
import { Divider } from "@tremor/react";
import { AQITracker } from "@/components/AQITracker";
import { ISPACaseTracker } from "@/components/ISPACaseTracker";
import { ISPACostTracker } from "@/components/ISPACostTracker";
import { DataGrid } from "@/components/DataGrid";
import SkeletonComponent from "@/components/Skeleton";

const DynamicMap = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <div className="pt-10">
        <DynamicMap />
      </div>
      <div>
        <SkeletonComponent />
      </div>
      <Divider />
      <div>
        <AQITracker />
        <ISPACaseTracker />
        <ISPACostTracker />
      </div>
    </div>
  );
};

export default page;
