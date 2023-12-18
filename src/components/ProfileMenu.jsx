import React from "react";
import { Button } from "@tremor/react";

const ProfileMenu = () => {
  return (
    <div className="flex flex-col">
      <Button
        className="mb-4 font-semibold text-oksigen-brand-blackX opacity-100 !rounded-full antialiased hover:rounded-full 
        transition-all duration-300 hover:text-oksigen-brand-blue !p-4 hover:bg-oksigen-brand-blue !hover:p-4 hover:bg-opacity-5"
        variant="light"
      >
        Ubah Detail Profil
      </Button>
      <Button
        className="mb-4 font-semibold text-oksigen-brand-blackX opacity-100 !rounded-full antialiased hover:rounded-full 
        transition-all duration-300 hover:text-oksigen-brand-blue !p-4 hover:bg-oksigen-brand-blue !hover:p-4 hover:bg-opacity-5"
        variant="light"
      >
        Ubah Password
      </Button>
    </div>
  );
};

export default ProfileMenu;
