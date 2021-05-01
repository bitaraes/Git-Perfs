import React from 'react';

export default function ReposItem(props){
    return(
           <a id="repos-item" href={props.repos.html_url}>
                <h2>{props.repos.name}</h2>
                <div className="repos-inform" id="stars">Stars: {props.repos.stargazers_count}</div>
                <div className="repos-inform" id="watch">Watch: {props.repos.watchers_count}</div>
                <div className="repos-inform" id="forks">Forks: {props.repos.forks_count}</div>
            </a>
    );
}