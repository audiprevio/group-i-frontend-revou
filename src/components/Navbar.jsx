"use client";
import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
import { Icon, Text, Title } from "@tremor/react";

const Navbar = () => {
  return (
    <div className="border-b-[1px] border-[#e5e5e5] py-2 px-8 flex flex-row items-center justify-between">
      <div className="flex flex-row justify-center items-center">
      <h1 className="text-3xl font-bold pr-6">HirupX</h1>
      <Text className="px-4 text-lg  hover:text-tremor-brand cursor-pointer">
        HirupMap
      </Text>
      <Text className="px-4 text-lg  hover:text-tremor-brand cursor-pointer">
        Layanan
      </Text>
      <Text className="px-4 text-lg  hover:text-tremor-brand cursor-pointer">
        API
      </Text>
      <Text className="px-4 text-lg  hover:text-tremor-brand cursor-pointer">
        Bantuan
      </Text>
      <Text className="px-4 text-lg hover:text-tremor-brand cursor-pointer">
        Tentang Kami
      </Text>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex items-end flex-col">
          <Title className="text-lg">Kementrian Lingkungan Hidup</Title>
        </div>
        <Icon size="xl" icon={UserCircleIcon} />
      </div>
    </div>
  );
};

export default Navbar;
