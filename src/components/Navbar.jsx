"use client";

import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
import LogoOksigen from "../app/assets/logo oksigen.svg";
import Avatar from "../app/assets/avatar.png";
import { Text, Title, Card } from "@tremor/react";
import Image from "next/image";

const Navbar = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="bg-white  py-4 pl-8 pr-4 flex flex-row items-center justify-between relative z-1000">
      <div className="flex flex-row justify-center items-center">
        <Image src={LogoOksigen} alt="logo oksigen" className="mr-10" />
        <Text className="px-8 !text-sm font-medium text-oksigen-brand-blackX hover:text-oksigen-brand-blue cursor-pointer">
          OksigenMap
        </Text>
        <Text className="px-8 text-sm font-medium text-oksigen-brand-blackX hover:text-oksigen-brand-blue cursor-pointer">
          Layanan
        </Text>
        <Text className="px-8 text-sm font-medium text-oksigen-brand-blackX hover:text-oksigen-brand-blue cursor-pointer">
          Dokumentasi
        </Text>
        <Text className="px-8 text-sm font-medium text-oksigen-brand-blackX hover:text-oksigen-brand-blue cursor-pointer">
          API
        </Text>
        <Text className="px-8 text-sm font-medium text-oksigen-brand-blackX hover:text-oksigen-brand-blue cursor-pointer">
          Bantuan
        </Text>
      </div>
      <div className="flex flex-row justify-center items-start">
        <div
          className="flex items-end flex-col"
          onClick={toggleCardVisibility}
          style={{ cursor: "pointer" }}
        >
          <Title
            className="!text-sm !font-semibold text-oksigen-brand-blackX mr-2
       hover:bg-oksigen-brand-blue hover:bg-opacity-5 
       hover:py-2 hover:px-4 px-4 py-2 hover:rounded-tremor-full transition-all duration-300 hover:text-oksigen-brand-blue"
          >
            <b className="font-normal">Hi,</b> Kementrian Lingkungan Hidup
          </Title>
        </div>
        {isCardVisible && (
          <div className="absolute top-full right-8 mt-2 items-">
            <Card className="!rounded-3xl flex items-end justify-end flex-col gap-">
              <Text className="!text-oksigen-brand-blackX !hover:text-oksigen-brand-blue cursor-pointer">Atur Profil</Text>
              <Text>Langganan Oksigen+</Text>
              <Text>Keluar</Text>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
