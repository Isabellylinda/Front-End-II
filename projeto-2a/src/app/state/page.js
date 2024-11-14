// state/page.js
import { useState } from "react";

export default function State() {
    const [conteudo, setConteudo] = useState("Bom dia");
    const [name, setName] = useState("");
    const [showDiv, setShowDiv] = useState(true);

    const controlarParagrafo = () => {
        setConteudo("Boa tarde!");
    };

    const controlarInput = (evento) => {
        setName(evento.target.value);
    };

    return (
        <div>
            <p>{conteudo}</p>
            <button onClick={controlarParagrafo}>Mudar</button>
            <button onClick={() => setShowDiv(!showDiv)}>
                {showDiv ? "Esconder" : "Mostrar"}
            </button>
            {showDiv && (
                <div>
                    <p>Nome: {name}</p>
                    <input type="text" onChange={controlarInput} />
                </div>
            )}
        </div>
    );
}
