"use client";

import Image from "next/image";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Calendar from "@/components/Calendar";

export default function Home() {
  return (
    <div className='app'>
      <Banner />
      <Calendar />
      <Footer />
    </div>
  );
}
