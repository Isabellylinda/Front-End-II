"use client";

import { useState } from "react";

export default function State() {
    const [conteudo, setConteudo] = useState("Bom dia");

    const atualizarConteudo = () => {
        setConteudo("Boa tarde");
    };

    return (
        <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{conteudo}</p>
            <button
                onClick={atualizarConteudo}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    cursor: "pointer",
                    marginTop: "10px",
                }}
            >
                Atualizar
            </button>
        </div>
    );
}
