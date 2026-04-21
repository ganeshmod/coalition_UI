"use client";
import Image from "next/image";
import Header from "./header/page";
import MainPage from "./mainPage/page";
 import axios, { all } from 'axios';
import { useEffect, useState } from "react";

export default function Home() {
  const[allPatients,setAllPatients] = useState([]);
  console.log(allPatients)
  useEffect(()=>{
    axios.get('/api/users').then(res=>setAllPatients(res.data)).catch(err=>console.log(err))
  },[])
  return (
    <div className="p-5">

      <Header/>
      <MainPage allPatients={allPatients}/>
    </div>
  );
}
