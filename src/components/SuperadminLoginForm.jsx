"use client";

import { Card, Title, Metric, Text, TextInput, Divider, Button } from "@tremor/react";
import { useRouter } from 'next/navigation'
import SuperadminLogoNoText from '../app/assets/superadminnotext.svg'
import Image from 'next/image'

const SuperadminLoginForm = () => {
    const router = useRouter()

  return (
    <div
      className="w-[26rem] py-10 px-12 rounded-2xl shadow-xl border-oksigen-brand-grey border-[1px] border-opacity-25 shadow-oksigen-brand-superadmin"
    >
      <Image src={SuperadminLogoNoText} alt="logo oksigen" className="shadow-none antialiased w-[4rem] mb-[1rem"/>
      <Title className="!text-3xl font-medium pb-2 text-oksigen-brand-fadeGrey pt-4">Masuk OksigenAdmin</Title>
      <Text className="text-oksigen-brand-fadeGrey text-xs leading-5 mb-[1.5rem]">Masuk dengan akun Oksigen Anda untuk mulai menggunakan OksigenMap sekarang</Text>
      <TextInput error={false} errorMessage="Wrong username" placeholder="Email Organisasi" className="mb-4 h-12 !rounded-2xl"/>
      <TextInput error={false} errorMessage="Wrong username" placeholder="Password" type="password" className="mb-10 h-12 !rounded-2xl"/>
      <Button className="w-full mb-4 opacity-100 h-[3rem] !rounded-full" onClick={() => router.push('/premium-map')}>Masuk</Button>
      <Button className="w-full mb-10 opacity-100 text-oksigen-brand-fadeGrey rounded-3xl" onClick={() => router.push('/premium-map')} variant="light">Lupa Password</Button>
    </div>
  );
};

export default SuperadminLoginForm;
