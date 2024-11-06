// import Image from "next/image"
import styles from "./page.module.css";

export default function Home() {
  const nome = 'Isalinda'
  return (
    <div >
      <h1>Página Principal</h1>
      <p>Parágrafo Pagina Inicial</p>
      <p>Autor: {nome}</p>
    </div>
  );
}
