"use client";

import {
  Card,
  Title,
  Metric,
  Text,
  TextInput,
  Divider,
  Button,
} from "@tremor/react";
import { useRouter } from "next/navigation";
import OksigenLogoPremium from "../app/assets/oksigenplus.svg";
import Image from "next/image";

const RegistFormPremium = () => {
  const router = useRouter();

  return (
    <div className="w-[24rem]">
      <Image
        src={OksigenLogoPremium}
        alt="logo oksigen"
        className="shadow-none antialiased w-[4rem] mb-[1rem]src/components/RegistForm.jsx"
      />
      <Title className="!text-3xl font-medium pb-2 text-oksigen-brand-bluePremium">
        Buat Akun Oksigen Plus
      </Title>
      <Text className="text-oksigen-brand-secondary text-xs leading-5 mb-[1.5rem]">
        Masuk dengan akun Oksigen Anda untuk mulai menggunakan OksigenMap
        sekarang
      </Text>
      <TextInput
        error={false}
        errorMessage="Wrong username"
        placeholder="Nama Organisasi"
        className="mb-4 h-12 !rounded-2xl"
      />
      <TextInput
        error={false}
        errorMessage="Wrong username"
        placeholder="Email Organisasi"
        className="mb-4 h-12 !rounded-2xl"
      />
      <div className="flex flex-row gap-2 w-full">
        <TextInput
          error={false}
          errorMessage="Wrong username"
          placeholder="Nama Depan"
          className="mb-4 h-12 !rounded-2xl"
        />
        <TextInput
          error={false}
          errorMessage="Wrong username"
          placeholder="Nama Belakang"
          className="mb-4 h-12 !rounded-2xl"
        />
      </div>
      <TextInput
        error={false}
        errorMessage="Wrong username"
        placeholder="Password"
        type="password"
        className="mb-10 h-12 !rounded-2xl"
      />
      <Button
        className="w-full mb-4 opacity-100 !rounded-full h-[3rem]"
        onClick={() => router.push("/premium-map")}
      >
        Bayar
      </Button>
    </div>
  );
};

export default RegistFormPremium;
