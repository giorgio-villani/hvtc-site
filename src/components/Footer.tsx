"use client";

import styles from "@/styles/main.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h4>Social Media</h4>
      <span className={styles.icon}>
        <Link href='https://www.instagram.com/hvtclxb/'>
          <Image alt='insta' height={30} width={30} src='./instagram.svg' />
        </Link>
      </span>
      <span className={styles.icon}>
        <Link href='https://tiktok.com/@masondrums'>
          <Image alt='tiktok' height={30} width={30} src='./tiktok.svg' />
        </Link>
      </span>
    </div>
  );
};

export default Footer;
