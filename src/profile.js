import React from 'react';
import './style.css';

export default function Profile(props){
    return(
        <div id="profile-card">
            <div id="profile-photo-container" >
                <img id="profile-photo" width="100%" height="100%" src={props.user.photo} alt="Foto de Perfil"></img>
            </div>
            <h2 id="profile-name">{props.user.name}</h2>
            <h4 id="profile-followers">Seguidores: {props.user.followers}</h4>
            <h4 id="profile-following">Seguindo: {props.user.following}</h4>
            <h4 id="profile-bio">Bio:</h4>
            <p id="profile-bio">{props.user.bio}</p>
            <h4 id="profile-company">Company: {props.user.company}</h4>
        </div>);
}
