"use client";
import Image from "next/image";
import React, { useState } from "react";
import MiddlePage from "./middlePage/page";
import RightPage from "./RightPage/page";

function MainPage({ allPatients }) {
  
  return (
    <div className="flex gap-3 ">
     <div className="w-3/12 h-125 bg-white mt-3 rounded-md p-3 overflow-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-normal text-gray-800 mb-4 text-[24px]">
          Patients
        </h1>
        <i className="icon-search"></i>
      </div>
     

      {allPatients.map((patient, index) => (
        <div key={index}
          className={`${index == 3? "bg-[#D8FCF7] p-2 rounded " : ""} flex items-center justify-between my-6`}
        >
          <div className="flex items-center gap-3">
            <Image
              src={patient?.profile_picture}
              alt="doctor_profile"
              width={44}
              height={44}
              className="object-cover"
            />
            <div>
              <p className="text-black">{patient?.name}</p>
              <p className="text-mauve-400">
                {patient?.gender},<span>{patient?.age}</span>
              </p>
            </div>
          </div>
          <div>
            <i className="icon-hori_dot"></i>
          </div>
        </div>
      ))}
    </div>
    <MiddlePage allPatients={allPatients}/>
    <RightPage allPatients={allPatients}/>
    </div>
   
  );
}

export default MainPage;
