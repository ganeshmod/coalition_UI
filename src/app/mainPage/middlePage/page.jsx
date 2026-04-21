"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Chart_Page from "./chart/page";

function MiddlePage({ allPatients }) {
  const [bpData, setBpData] = useState(null);

  const [selectedOption, setSelectedOption] = useState(0);
  const extractedData = allPatients?.[3]?.diagnosis_history;
  const startIndex = selectedOption * 6;
  const endIndex = startIndex + 6;
  const filteredData = extractedData?.slice(startIndex, endIndex) || [];
  useEffect(() => {
    if (filteredData.length > 0) {
      setBpData(filteredData[0]); 
    }
  }, [selectedOption, allPatients]);
  return (
    <div className="flex flex-col w-6/12">
      <div className=" h-auto bg-white mt-3 p-4  ">
        <h1 className="text-black font-bold text-[24px]">Diagnosis History</h1>
        <div className="bg-[#F4F0FE] p-4 rounded-md my-4  gap-3 flex  justify-between">
          <div className=" w-9/12 ">
            <div className=" flex items-center justify-between mb-2">
              <h1 className="text-[black] font-bold text-[18px]">
                Blood Pressure
              </h1>
              <select
                name="blood_pressure"
                id="blood_pressure"
                className=" border-gray-300 text-[black]"
                onChange={(e) => setSelectedOption(Number(e.target.value))}
              >
                <option value={0}>Last 6 Months</option>
                <option value={1}>Last 12 Months</option>
                <option value={2}>Last 18 Months</option>
                <option value={3}>Last 24 Months</option>
              </select>
            </div>
            <Chart_Page
              allPatients={allPatients}
              selectedOption={selectedOption}
              bpData={bpData}
              setBpData={setBpData}
            />
          </div>
          <div className="w-3/12 flex flex-col gap-4 ">
            <div>
              <div className="flex items-center gap-3">
                <div className="sysDev"></div>
                <p className="text-black text-bold text-[18px]">Systolic</p>
              </div>
              <h1 className="text-black text-[22px] font-bold">
                {bpData?.blood_pressure?.systolic?.value || 0}
              </h1>
              <p className="text-black">
                {" "}
                {bpData?.blood_pressure?.systolic?.levels || ""}
              </p>
            </div>
            <div className="line"></div>
            <div>
              <div className="flex items-center gap-3">
                <div className="diaDev"></div>
                <p className="text-black text-bold text-[18px]">Diastolic</p>
              </div>
              <h1 className="text-black text-[22px] font-bold">
                {bpData?.blood_pressure?.diastolic?.value || 0}
              </h1>
              <p className="text-black">
                {" "}
                {bpData?.blood_pressure?.diastolic?.levels || ""}
              </p>
            </div>
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-3  gap-4 p-5">
          <div className="bg-[#E0F3FA] p-4 rounded-md">
            <Image
              src="/Image/respiratory rate.svg"
              alt="Respiratory Rate"
              width={96}
              height={96}
              className="object-cover"
            />
            <h1 className="text-[16px] text-[#072635]">Respiratory Rate</h1>
            <h3 className="text-[#072635] text-[30px] font-extrabold ">
              {bpData?.respiratory_rate?.value || 0} bpm
            </h3>
            <h5 className="text-[14px] text-[#072635]">
              {" "}
              {bpData?.respiratory_rate?.levels || ""}
            </h5>
          </div>
          <div className="bg-[#FFE6E9] p-4 rounded-md">
            <Image
              src="/Image/temperature.svg"
              alt="Temperature"
              width={96}
              height={96}
              className="object-cover"
            />
            <h1 className="text-[16px] text-[#072635]">Temperature</h1>
            <h3 className="text-[#072635] text-[30px] font-extrabold ">
              {bpData?.temperature?.value || 0}°C
            </h3>
            <h5 className="text-[14px] text-[#072635]">
              {" "}
              {bpData?.temperature?.levels || ""}
            </h5>
          </div>
          <div className="bg-[#FFE6F1] p-4 rounded-md">
            <Image
              src="/Image/heartBPM.svg"
              alt="Heart Rate"
              width={96}
              height={96}
              className="object-cover"
            />
            <h1 className="text-[16px] text-[#072635]">Heart Rate</h1>
            <h3 className="text-[#072635] text-[30px] font-extrabold ">
              {bpData?.heart_rate?.value || 0} {"bpm"}
            </h3>
            <h5 className="text-[14px] text-[#072635]">
              {" "}
              {bpData?.heart_rate?.levels || ""}
            </h5>
          </div>
        </div>
      </div>
      <div className=" h-auto bg-white mt-3 p-4 ">
        <h1 className="text-black font-bold text-[24px]">Diagnostic List</h1>

        <div>
          <div className="bg-[#F6F7F8] rounded-2xl p-3 flex items-center justify-between">
            <h3 className="text-[14px] font-bold text-[#072635]">
              Problem/Diagnosis
            </h3>
            <h3 className="text-[14px] font-bold text-[#072635]">
              Description
            </h3>
            <h3 className="text-[14px] font-bold text-[#072635]">Status</h3>
          </div>
          <div className="h-50 overflow-auto">
            {allPatients[3]?.diagnostic_list?.map((diagnosis, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 mt-3"
              >
                <h3 className="text-[14px] font-normal text-[#072635]">
                  {diagnosis?.name}
                </h3>
                <h3 className="text-[14px] font-normal text-[#072635]">
                  {diagnosis?.description}
                </h3>
                <h3 className="text-[14px] font-normal text-[#072635]">
                  {diagnosis?.status}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddlePage;
