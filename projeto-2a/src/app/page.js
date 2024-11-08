// import Image from "next/image"
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'Isalinda'
  return (
    <div >
      <h1>Página Principal</h1>
      <p>Parágrafo Pagina Inicial</p>
       <p>Autor: {nome}</p> 
       <Image className={styles.imagem} src= "/images/OIP.jpg" alt= "Imagem da hello kity" width={350} height={400} /> 

    </div>
  );
}
