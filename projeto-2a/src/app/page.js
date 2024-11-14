import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const nome = 'Isalinda';
  return (
    <div>
      <h1>Página Principal</h1>
      <p>Parágrafo da Página Inicial</p>
      <p>Autor: {nome}</p> 
      <Image
        className={styles.imagem}
        src="/images/OIP.jpg"
        alt="Imagem da Hello Kitty"
        width={350}
        height={400}
      />
    </div>
  );
}
