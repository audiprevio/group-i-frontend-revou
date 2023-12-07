"use client";

import { Card, Metric, Text } from "@tremor/react";

const CustomCard = () => (
  <Card className="w-[300px] h-[120px] mx-auto rounded-lg" decoration="top" decorationColor="indigo">
    <Text>Sales</Text>
    <Metric>$ 34,743</Metric>
  </Card>
);

export default CustomCard;