import React from 'react';
import './style.css';

export default function Header(props){
    return(
        <header>
            <div id="search">
                <input type="text" name="name" placeholder="Digite o nome do usuário" onChange={props.onChange}></input>
                <input type="submit" name="search" value="Buscar" onClick={props.onClick}></input>   
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
