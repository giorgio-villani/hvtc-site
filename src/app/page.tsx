"use client";

import Image from "next/image";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Calendar from "@/components/Calendar";

import { useEffect, useState } from "react";

export default function Home() {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (mount) {
    return (
      <div className='app'>
        <Banner />
        <Calendar />
        <Footer />
      </div>
    );
  }
}
