"use client";

import React, { useState, useEffect } from "react";
import LogoOksigen from "../app/assets/logo oksigen.svg";
import { Text, Title, Card } from "@tremor/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_OKSIGEN_API_BASE_URL}/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setProfile(response.data.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const logout = () => {
    // Clear the JWT token
    localStorage.removeItem("token"); // replace 'token' with the key you used to store the JWT token

    console.log("Before router.push");

    // Redirect to the login page
    router.push("/login");

    console.log("After router.push");
  };
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
        Hi
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
          <b className="font-normal">Hi,</b> {profile?.organization_name} {profile?.isPremium && '(premium)'}
        </Title>
      </div>
        {isCardVisible && (
          <div className="absolute top-full right-8 mt-2 items-">
            <Card className="!rounded-3xl flex items-end justify-end flex-col gap-">
              <Text className="!text-oksigen-brand-blackX !hover:text-oksigen-brand-blue cursor-pointer">
                Atur Profil
              </Text>
              <Text className="mt-4">Langganan Oksigen+</Text>
              <div onClick={logout}>
                <Text className="mt-4 cursor-pointer">Keluar</Text>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
