import styles from "./sobre.module.css"

export default function sobre() {
    return(
        <main>
            <h1> Sobre</h1>
            <p className= {styles.paragrafo}> Minha Segunda Pagina</p>
            <p id= {styles.paragrafoUnico}>Meu parágrafo especial</p>
        </main>
    )
}