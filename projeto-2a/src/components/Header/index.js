'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Image src="/isa.png" alt="Logo Isa" className={styles.logoImage} width={50} height={50} />
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <span className={isOpen ? styles.menuOpen : ""}></span>
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.showNav : ""}`}>
        <ul>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

