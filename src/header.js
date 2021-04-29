import React from 'react';
import './style.css';

export default function Header(){
    return(
        <header>
            <div id="search">
                <input type="text" name="name" placeholder="Digite o nome do usuário"></input>
                <input type="submit" name="search" value="Buscar"></input>   
            </div>  
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">Sobre</a></li>
                </ul>
            </nav>
        </header>
    );
}
