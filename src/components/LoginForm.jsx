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
  const [organizationEmailError, setOrganizationEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const isFormIncomplete = !organization_email || !password;
  const isFormInvalid = organizationEmailError || passwordError;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error states
    setOrganizationEmailError(false);
    setPasswordError(false);

    // Check for errors
    if (!organization_email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(organization_email)) setOrganizationEmailError(true);
    if (!password) setPasswordError(true);

    // If any error is detected, stop form submission
    if (organizationEmailError || passwordError) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3005/auth/login', {
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

      console.log('Response data:', data); // Add this line
      
      if (!response.ok) {
        throw new Error(data.error);
      }

      // Save the token, e.g. in local storage
      localStorage.setItem('token', data.token);

      // Set the token in the Authorization header for future requests
      // This is just an example, you might need to adjust this depending on how you handle API requests in your application
      fetch.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      // Redirect to the map page
      router.push('/basic-map');
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
      <form onSubmit={handleSubmit}>
        <TextInput
          error={organizationEmailError}
          errorMessage="Invalid email"
          placeholder="Email Organisasi"
          className="mb-4 h-12 !rounded-2xl"
          value={organization_email}
          onChange={e => setOrganizationEmail(e.target.value)}
        />
        <TextInput
          error={passwordError}
          errorMessage="Password is required"
          placeholder="Password"
          type="password"
          className="mb-10 h-12 !rounded-2xl"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          className={`w-full mb-4 opacity-100 h-[3rem] !rounded-full ${isFormIncomplete || isFormInvalid ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'}`}
          onClick={() => router.push("/basic-map")}
          type="submit"
          disabled={isFormIncomplete || isFormInvalid}
        >
          Masuk
        </Button>
      </form>
      <Button
        className="w-full mb-10 opacity-100 text-oksigen-brand-secondary rounded-3xl"
        onClick={() => router.push("/password-reset")}
        variant="light"
      >
        Lupa Password
      </Button>
      <Button
        className="w-full opacity-75"
        onClick={() => router.push("/register-basic")}
        variant="light"
      >
        Belum Punya Akun? Daftar disini
      </Button>
    </div>
  );
};

export default LoginForm;
