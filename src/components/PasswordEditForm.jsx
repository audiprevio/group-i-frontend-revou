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
import OksigenLogoNoText from "../../src/app/assets/oksigennocap.svg";
import Image from "next/image";

const PasswordEditForm = () => {

  return (
    <div className="w-[24rem]">
      <Title className="!text-3xl font-medium pb-2 text-oksigen-brand-blackX">
        Ubah Password
      </Title>
      <Text className="text-oksigen-brand-secondary text-xs leading-5 mb-[1.5rem]">
        Ganti password Anda melalui form dibawah ini. Klik simpan untuk menyimpan perubahan.
      </Text>
      <TextInput
        error={false}
        errorMessage="Wrong username"
        placeholder="Password Lama"
        className="mb-4 h-12 !rounded-2xl"
        type="password"
      />
      <TextInput
        error={false}
        errorMessage="Wrong username"
        placeholder="Password Baru"
        className="mb-4 h-12 !rounded-2xl"
        type="password"
      />
      <Button
        className="w-full mb-4 opacity-100 !rounded-full h-[3rem]"
      >
        Simpan
      </Button>
    </div>
  );
};

export default PasswordEditForm;
