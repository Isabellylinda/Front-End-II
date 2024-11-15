'use client';

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meu Logo</div>
      <div className={`${styles.menuIcon} ${menuAberto ? styles.open : ''}`} onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`${styles.nav} ${menuAberto ? styles.show : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
