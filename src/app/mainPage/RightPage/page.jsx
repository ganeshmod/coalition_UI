import { all } from "axios";
import Image from "next/image";
import React from "react";

function RightPage({ allPatients }) {
  return (
    <div className="w-3/12  flex flex-col gap-3">
      <div className="h-auto bg-white p-4 mt-3 rounded-sm">
        <div className="flex flex-col items-center gap-y-1">
          {allPatients?.[3]?.profile_picture && (
            <Image
              src={allPatients[3].profile_picture}
              alt="profile_picture"
              width={200}
              height={200}
              objectFit="cover"
            />
          )}
          <h1 className=" text-[#072635] font-bold text-[24px]">
            {allPatients[3]?.name}
          </h1>
        </div>
        <div className="flex items-center gap-3 my-2">
          <i className="icon-birth"> </i>
          <div>
            <h1 className="text-[14px] text-[#072635]  "> Date of Birth </h1>
            <p className="font-semibold text-[14px] text-[black]">
              {allPatients[3]?.date_of_birth}{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 my-2">
          <i className="icon-female"> </i>
          <div>
            <h1 className="text-[14px] text-[#072635]  "> Gender </h1>
            <p className="font-semibold text-[14px] text-[black]">
              {allPatients[3]?.gender}{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 my-2">
          <i className="icon-phone"> </i>
          <div>
            <h1 className="text-[14px] text-[#072635]  "> Contact Info. </h1>
            <p className="font-semibold text-[14px] text-[black]">
              {" "}
              {allPatients[3]?.phone_number}{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 my-2">
          <i className="icon-phone"> </i>
          <div>
            <h1 className="text-[14px] text-[#072635]  ">
              {" "}
              Emergency Contacts{" "}
            </h1>
            <p className="font-semibold text-[14px] text-[black]">
              {allPatients[3]?.emergency_contact}{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 my-2">
          <i className="icon-insurance"> </i>
          <div>
            <h1 className="text-[14px] text-[#072635]  ">
              Insurance Providers{" "}
            </h1>
            <p className="font-semibold text-[14px] text-[black]">
              {allPatients[3]?.insurance_type}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto bg-white p-4 mt-3 rounded-sm">
        <h1 className="text-black font-bold text-[24px]">Lab Results</h1>
        <div className="h-25 overflow-auto">
          {allPatients[3]?.lab_results?.map((lab_result, index) => (
            <div
              key={index}
              className="flex items-center justify-between mt-4 p-2"
            >
              <h3 className="text-[14px] font-normal text-[#072635]">
                {lab_result}
              </h3>
              <i className="icon-download"></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightPage;
