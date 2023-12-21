"use client";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
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
import SuperadminLogoNoText from "../app/assets/superadminnotext.svg";
import Image from "next/image";
import jwt from 'jsonwebtoken';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5, 'Password should be at least 5 characters').required('Required'),
});

const SuperadminLoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_OKSIGEN_API_BASE_URL}/auth/login`,
        {
          organization_email: values.email,
          password: values.password
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        router.push("/admindash");
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log(error);
      setErrors({ submit: error.message });
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <div className="w-[26rem] py-10 px-12 rounded-2xl shadow-xl border-oksigen-brand-grey border-[1px] border-opacity-25 shadow-oksigen-brand-superadmin">
            <Image
              src={SuperadminLogoNoText}
              alt="logo oksigen"
              className="shadow-none antialiased w-[4rem] mb-[1rem"
            />
            <Title className="!text-3xl font-medium pb-2 text-oksigen-brand-fadeGrey pt-4">
              Masuk OksigenAdmin
            </Title>
            <div>
              <Field name="email" type="email" placeholder="Email Organisasi" className="mb-4 h-12 !rounded-2xl" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="Password" className="mb-10 h-12 !rounded-2xl" />
              <ErrorMessage name="password" component="div" />
            </div>
            <Button
              className="w-full mb-4 opacity-100 h-[3rem] !rounded-full"
              type="submit"
              disabled={isSubmitting}
            >
              Masuk
            </Button>
            {errors.submit && <div>{errors.submit}</div>}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SuperadminLoginForm;