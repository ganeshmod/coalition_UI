"use client";
import React, { useState } from "react";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Chart_Page({ allPatients, selectedOption,setBpData}) {
 
  const extractedData = allPatients?.[3]?.diagnosis_history;
  const startIndex = selectedOption * 6;
  const endIndex = startIndex + 6;
  const filteredData = extractedData?.slice(startIndex, endIndex) || [];

  const label = filteredData.map((item) => {
    const month = item?.month;
    const year = item?.year;
    return `${month} ${year}`;
  });

  const SysData = filteredData.map((item) => {
    const sysValue = item?.blood_pressure?.systolic?.value;
    return sysValue;
  });
  const DaiData = filteredData.map((item) => {
    const daiValue = item?.blood_pressure?.diastolic?.value;
    return daiValue;
  });

  const data = {
    labels: label,
    datasets: [
      {
        label: "Systolic",
        data: SysData,
        borderColor: "#C26EB4",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: DaiData,
        borderColor: "#7E6CAB",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    onClick: (event, elements, chart) => {
      if (!elements.length) return;

      const index = elements[0].index;

      const clickedData = filteredData[index];
      setBpData(clickedData);
    },

    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
