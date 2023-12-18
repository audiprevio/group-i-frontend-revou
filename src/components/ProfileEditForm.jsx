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

const ProfileEditForm = () => {

  return (
    <div className="w-[24rem]">
      <Title className="!text-3xl font-medium pb-2 text-oksigen-brand-blackX">
        Ubah Detail Profil
      </Title>
      <Text className="text-oksigen-brand-secondary text-xs leading-5 mb-[1.5rem]">
        Ganti detail profil Anda dibawah ini. Klik simpan untuk menyimpan perubahan.
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
          className="mb-8 h-12 !rounded-2xl"
        />
      </div>
      <Button
        className="w-full mb-4 opacity-100 !rounded-full h-[3rem]"
      >
        Simpan
      </Button>
    </div>
  );
};

export default ProfileEditForm;
