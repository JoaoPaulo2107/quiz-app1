import React from 'react';
import "./Quiz.css"


const  Quiz = () => {
  return(
    <div className='container'>
        <h1>Quiz app</h1>
        <hr />
        <h2>Qual é a função principal de um sistema operacional?</h2>
        <ul>
            <li>Executar jogos online</li>
            <li>Proteger o computador contra vírus</li>
            <li>Gerenciar os recursos do computador e permitir a execução de programas</li>
            <li>"Criar websites automaticamente</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 qustions</div>
    </div>
  )
}

export default Quiz