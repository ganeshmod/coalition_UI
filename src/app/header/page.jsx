"use client";
import Image from "next/image";
import React, { useState } from "react";

function Header() {
  const [Isactive, setIsActive] = useState(1);
  return (
    <div className="w-full h-18 bg-white rounded-4xl opacity-[1] p-3 flex items-center justify-between">
      <div>
        <Image
          src="/Image/TestLogo.svg"
          alt="company_logo"
          height={48}
          width={210}
          className="object-cover"
        />
      </div>
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center gap-4  ">
          <li
            className={`${Isactive == 0 ? "bg-[#01F0D0] p-2 px-2 rounded-4xl py-2" : ""} flex flex-row items-center gap-2 justify-center`}
            onClick={() => setIsActive(0)}
          >
            <i className="icon-home"></i>
            <span className="text-black text-[14px] font-bold ">Overview</span>
          </li>
          <li
            className={`${Isactive == 1 ? "bg-[#01F0D0] p-2 px-2 rounded-4xl py-2" : ""} flex flex-row items-center gap-2 justify-center`}
            onClick={() => setIsActive(1)}
          >
            <i className="icon-patient"></i>
            <span className="text-black text-[14px] font-bold">Patients</span>
          </li>
          <li
            className={`${Isactive == 2 ? "bg-[#01F0D0] p-2 px-2 rounded-4xl py-2" : ""} flex flex-row items-center gap-2 justify-center`}
            onClick={() => setIsActive(2)}
          >
            <i className="icon-card"></i>
            <span className="text-black text-[14px] font-bold"> Schedule</span>
          </li>
          <li
            className={`${Isactive == 3 ? "bg-[#01F0D0] p-2 px-2 rounded-4xl py-2" : ""} flex flex-row items-center gap-2 justify-center`}
            onClick={() => setIsActive(3)}
          >
            <i className="icon-chat"></i>
            <span className="text-black text-[14px] font-bold">Message</span>
          </li>
          <li
            className={`${Isactive == 4 ? "bg-[#01F0D0] p-2 px-2 rounded-4xl py-2" : ""} flex flex-row items-center gap-2 justify-center`}
            onClick={() => setIsActive(4)}
          >
            <i className="icon-card"></i>
            <span className="text-black text-[14px] font-bold">
              Transactions
            </span>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-3 ">
        <Image
          src="/Image/doctor_profile.jpg"
          alt="doctor_profile"
          width={44}
          height={44}
          className="object-cover"
        />
        <span>
          <p className="text-black text-[14px] font-bold">Dr.Jose Simmons</p>
          <p className="text-mauve-400 text-[14px] font-bold">
            General Practioner
          </p>
        </span>
        <div className="hori_line"></div>
        <i className="icon-setting"></i>
        <i className="icon-dot"></i>
        
      </div>
    </div>
  );
}

export default Header;
