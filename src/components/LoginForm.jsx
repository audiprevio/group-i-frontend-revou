"use client";

import { useState } from "react";
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
import OksigenLogoNoText from "../app/assets/oksigennocap.svg";
import Image from "next/image";

const LoginForm = () => {
  const router = useRouter();
  const [organization_email, setOrganizationEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organization_email: organization_email,
          password: password,
          pic_role_institution: 'user', // Automatically assign 'user' role
        }),
      });


      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      // Save the token, e.g. in local storage
      localStorage.setItem('token', data.token);

      // Redirect to the map page
      router.push('/premium-map');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-[26rem] py-10 px-12 rounded-2xl shadow-xl border-blue-100 border-[1px] border-opacity-50 shadow-blue-100">
      <Image
        src={OksigenLogoNoText}
        alt="logo oksigen"
        className="shadow-none antialiased w-[4rem] mb-[1rem]"
      />
      <Title className="!text-3xl font-medium pb-2 text-oksigen-brand-blackX">
        Masuk Oksigen
      </Title>
      <TextInput
        error={!!error}
        errorMessage={error}
        placeholder="Email Organisasi"
        className="mb-4 h-12 !rounded-2xl"
        value={organization_email}
        onChange={e => setOrganizationEmail(e.target.value)}
      />
      <TextInput
        error={!!error}
        errorMessage={error}
        placeholder="Password"
        type="password"
        className="mb-10 h-12 !rounded-2xl"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        className="w-full mb-4 opacity-100 h-[3rem] !rounded-full"
        onClick={() => router.push("/premium-map")}
        type="submit"
      >
        Masuk
      </Button>
      <Button
        className="w-full mb-10 opacity-100 text-oksigen-brand-secondary rounded-3xl"
        onClick={() => router.push("/premium-map")}
        variant="light"
      >
        Lupa Password
      </Button>
      <Button
        className="w-full opacity-75"
        onClick={() => router.push("/register")}
        variant="light"
      >
        Belum Punya Akun? Daftar disini
      </Button>
    </div>
  );
};

export default LoginForm;
