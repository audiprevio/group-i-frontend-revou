"use client";

import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
  Icon,
  DatePicker,
  DatePickerValue,
  Divider,
  Subtitle
} from "@tremor/react";
import { MapIcon } from "@heroicons/react/solid";
import { CustomAreaChart } from "./CustomAreaChart";

export default function SkeletonComponent() {
  return (
    <main className="w-full h-[100vh] flex items-start justify-start flex-col m-0 pt-4">
        <div className="flex flex-col w-full">
        <Text>Area yang dipilih:</Text>
          <Title className="text-[#0F141A]">
            Jakarta
          </Title>
          <br />
          <Text>Tanggal yang dipilih:</Text>
          <Title className="text-[#0F141A] px-0">
           31/12/23
          </Title>
        </div>
      <Divider className="my-2 w-[200%] ml-[-4rem]" />
      <TabGroup className="mt-6">
        <TabList className="items-start flex">
          <Tab className="pl-0">Rangkuman</Tab>
          <Tab>Kualitas Udara</Tab>
          <Tab>Kasus ISPA</Tab>
          <Tab>Biaya Klaim ISPA</Tab>
        </TabList>
        {/* ISI TABEL KUALITAS UDARA */}
        <TabPanels>
          <TabPanel>
            <div className="mt-6">
            <Text className="leading-5 text-xs pb-4">
                Untuk informasi lebih lanjut klik kartu-kartu dibawah ini:
              </Text>
              <Card className="p-4 mb-5 h-30 flex flex-row items-center justify-start gap-4">
                <div>
                  <Card className="bg-[#2C181E] w-[11rem] text-center justify-center align-center flex flex-col shadow-none border-none h-24">
                    <h1 className="text-4xl text-white font-semibold mb-2">
                      400
                    </h1>
                    <p className="text-white text-xs">US AQI</p>
                  </Card>
                </div>
                <div className="justify-start flex flex-col w-full">
                  <p className="text-[#536471] text-xs">
                    Kualitas Udara Hari ini
                  </p>
                  <Title className=" text-[#2C181E] font-semibold">
                    Berbahaya
                  </Title>
                  <div className="flex justify-end">
                    <p className="text-[#536471] pt-8 text-xs opacity-50">
                      Data dari IQAir
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 mb-5 h-30  flex flex-row items-center justify-start gap-4">
                <div>
                  <Card className="bg-[#ffe7e7] w-[11rem] text-center justify-center align-center flex flex-col !shadow-none !border-none h-24">
                    <h1 className="text-4xl text-[#0F141A] font-semibold mb-2">
                      2403
                    </h1>
                    <p className="text-[#0F141A] text-xs">Kasus</p>
                  </Card>
                </div>
                <div className="justify-start flex flex-col w-full">
                  <Title className=" text-[#0F141A] font-semibold whitespace-pre-line">
                    Kasus ISPA
                  </Title>
                  <Text className="text-xs">
                    Infeksi Saluran Pernafasan Atas
                  </Text>
                  <div className="flex justify-end">
                    <p className="text-[#536471] pt-8 text-xs opacity-50">
                      Data olahan Tim HirupX
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 mb-5 h-30 flex flex-row items-center justify-start gap-4">
                <div>
                  <Card className="bg-[#ffe7e7] p-0 w-[11rem] text-center justify-center align-center flex flex-col !shadow-none !border-none h-24">
                    <h1 className="text-3xl text-[#0F141A] font-semibold mb-2">
                      1,5milyar
                    </h1>
                    <p className="text-[#0F141A] text-xs">Rupiah</p>
                  </Card>
                </div>
                <div className="justify-start flex flex-col w-full ">
                  <Title className=" text-[#0F141A] font-semibold whitespace-pre-line">
                    Biaya Klaim ISPA
                  </Title>
                  <Text className="text-xs">
                    Infeksi Saluran Pernafasan Atas
                  </Text>
                  <div className="flex justify-end">
                    <p className="text-[#536471] pt-8 text-xs opacity-50">
                      Data olahan Tim HirupX
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card className="mb-5 h-30 flex flex-row items-center justify-start gap-4 p-4 ">
                <div>
                  <Card className="bg-[#2C181E] w-[11rem] text-center justify-center align-center flex flex-col shadow-none border-none h-24">
                    <h1 className="text-4xl text-white font-semibold mb-2">
                      400
                    </h1>
                    <p className="text-white text-xs">US AQI</p>
                  </Card>
                </div>
                <div className="justify-start flex flex-col w-full">
                  <p className="text-[#536471] text-xs">
                    Kualitas Udara Hari ini
                  </p>
                  <Title className="text-3xl text-[#2C181E] font-semibold">
                    Berbahaya
                  </Title>
                  <div className="flex justify-end">
                    <Text className="text-[#536471] pt-8 text-xs opacity-50">
                      Data dari IQAir
                    </Text>
                  </div>
                </div>
              </Card>
              <Text className="leading-5 text-xs">
                Data kualitas udara di atas diambil dari IQAir berdasarkan
                standar US Air Quality Index. Penilaian Kualitas Udara juga
                merujuk panduan IQAir.
              </Text>
              <Divider />
              <div>
                <p className="text-[#536471] text-sm">Kualitas Udara periode</p>
                <h1 className="text-xl text-[#0F141A] font-semibold mb-2">
                  1 Desember - 31 Desember 2023
                </h1>
                <CustomAreaChart className="!border-[#FAFCFD]"/>
              </div>
            </div>
          </TabPanel>
          {/* ISI TABEL KASUS ISPA */}
          <TabPanel>
            <div className="mt-6">
            <Card className="p-4 mb-5 h-30  flex flex-row items-center justify-start gap-4">
                <div>
                  <Card className="bg-[#ffe7e7] w-[11rem] text-center justify-center align-center flex flex-col !shadow-none !border-none h-24">
                    <h1 className="text-4xl text-[#0F141A] font-semibold mb-2">
                      2403
                    </h1>
                    <p className="text-[#0F141A] text-xs">Kasus</p>
                  </Card>
                </div>
                <div className="justify-start flex flex-col w-full">
                  <Title className=" text-[#0F141A] font-semibold whitespace-pre-line">
                    Kasus ISPA
                  </Title>
                  <Text className="text-xs">
                    Infeksi Saluran Pernafasan Atas
                  </Text>
                  <div className="flex justify-end">
                    <p className="text-[#536471] pt-8 text-xs opacity-50">
                      Data olahan Tim HirupX
                    </p>
                  </div>
                </div>
              </Card>
              <Text className="leading-5 text-xs w-90">
                Data kasus ISPA merupakan hasil olahan Tim HirupX dari kumpulan laporan rumah sakit di area yang Anda pilih.
              </Text>
              <Divider />
              <div>
                <Text className="text-[#536471] text-sm">
                  Kasus ISPA pada periode
                </Text>
                <Title className="text-xl text-[#0F141A] font-semibold mb-2">
                  1 Desember - 31 Desember 2023
                </Title>
                <CustomAreaChart className="!border-[#FAFCFD]"/>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
            <Card className="p-4 mb-5 h-30 flex flex-row items-center justify-start gap-4">
                <div>
                  <Card className="bg-[#ffe7e7] p-0 w-[11rem] text-center justify-center align-center flex flex-col !shadow-none !border-none h-24">
                    <h1 className="text-3xl text-[#0F141A] font-semibold mb-2">
                      1,5milyar
                    </h1>
                    <p className="text-[#0F141A] text-xs">Rupiah</p>
                  </Card>
                </div>
                <div className="justify-start flex flex-col w-full ">
                  <Title className=" text-[#0F141A] font-semibold whitespace-pre-line">
                    Biaya Klaim ISPA
                  </Title>
                  <Text className="text-xs">
                    Infeksi Saluran Pernafasan Atas
                  </Text>
                  <div className="flex justify-end">
                    <p className="text-[#536471] pt-8 text-xs opacity-50">
                      Data olahan Tim HirupX
                    </p>
                  </div>
                </div>
              </Card>
              <Text className="leading-5 text-xs w-90">
                Data klaim ISPA berasal dari data klaim BPJS di daerah yang Anda pilih yang terkait dengan infeksi saluran pernafasan atas.
              </Text>
              <Divider />
              <div>
                <Text className="text-[#536471] text-sm">
                  Biaya Klaim ISPA pada periode
                </Text>
                <Title className="text-xl text-[#0F141A] font-semibold mb-2">
                  1 Desember - 31 Desember 2023
                </Title>
                <CustomAreaChart className="!border-[#FAFCFD]"/>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
