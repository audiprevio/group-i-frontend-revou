"use client";

import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
} from "@tremor/react";

import CustomCard from "./CustomCard";

export default function SkeletonComponent() {
  return (
    <main className="w-[90vw]">
      <Title className="px-1 py-1 !text-4xl">Dashboard</Title>
      <Text className="px-1">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
      </Text>
      <TabGroup className="mt-1">
        <TabList className="flex justify-between gap-6 mt-1 w-[90vw]">
        <Tab className="px-0.5 w-1/3ç">
            <Card className="w-[19.5rem]">
              {/* Placeholder to set height */}
              <div className="h-28" />
            </Card>
          </Tab>
          <Tab className="px-0.5">
            <Card className="w-[19.5rem]">
              {/* Placeholder to set height */}
              <div className="h-28" />
            </Card>
          </Tab>
          <Tab className="px-0.5">
            <Card className="w-[19.5rem]">
              {/* Placeholder to set height */}
              <div className="h-28 w-full" />
            </Card>
          </Tab>
        </TabList>
        <TabPanels className="px-2">
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-80" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
