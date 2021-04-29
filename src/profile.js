import React from 'react';
import Icon from './img/github-icon.png';
import './style.css';
import { useState, useEffect } from 'react';

export default function Profile(){
    const [user, setUser] = useState({
        photo: Icon, 
        name: "GitPerfs", 
        followers: 0,
        following: 0,
        bio: `Digite o nome do usuário no campo 
        de pesquisa e clique em "Buscar" para ver informações sobre ele. Be Happy!`,
        company: "Github"
    });

    useEffect(() =>{
        document.querySelector("input[name=search]")
        .addEventListener("click", async function(e){
            let inputValor = document.querySelector("input[type=text]");
            const url = await "https://api.github.com/users/";
            let usr = await inputValor.value;
            const request = await fetch(url+usr);
            let responseJson = await request.json();
            inputValor.value = "";
            setUser({
                photo: responseJson.avatar_url,
                name: responseJson.name,
                followers: responseJson.followers,
                following: responseJson.following,
                bio: responseJson.bio,
                company: responseJson.company
            });
        });
    });

    return(
        <div id="profile-card">
            <div id="profile-photo-container" >
                <img id="profile-photo" width="100%" height="100%" src={user.photo} alt="Foto de Perfil"></img>
            </div>
            <h2 id="profile-name">{user.name}</h2>
            <h4 id="profile-followers">Seguidores: {user.followers}</h4>
            <h4 id="profile-following">Seguindo: {user.following}</h4>
            <h4 id="profile-bio">Bio:</h4>
            <p id="profile-bio">{user.bio}</p>
            <h4 id="profile-company">Company: {user.company}</h4>
        </div>);
}
