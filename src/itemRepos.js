import React, {useState, useEffect}from 'react';

export default function ReposItem(){
    let htmlModel = "";
    let htmlSet = "";
    const [repos, setRepos] = useState({html:htmlSet});

    useEffect(() =>{
        document.querySelector("input[name=search]")
        .addEventListener("click", async function(e){
            const url = await "https://api.github.com/users/";
            let usr = await document.querySelector("input[type=text]").value+"/repos?per_page=8";
            const request = await fetch(url+usr);
            let responseJson = await request.json();

            responseJson.map((atual) => {
                htmlModel = `<div id="repos-item">
                <h2>${atual.name}</h2>
                <div className="repos-inform" id="stars">Stars: ${atual.stargazers_count}</div>
                <div className="repos-inform" id="watch">Watch: ${atual.watchers_count}</div>
                <div className="repos-inform" id="forks">Forks: ${atual.forks_count}</div>
                </div>`;
                htmlSet += htmlModel;
            });

            setRepos({
                html:htmlSet
            });
            
        });
    })

    return(
        <div>
            {
                !document.querySelector("div[id=repos-container]") ? "" : document.querySelector("div[id=repos-container]").innerHTML = repos.html
            }
        </div>
    );
}