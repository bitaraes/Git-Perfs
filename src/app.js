import React, {useState} from 'react';
import './style.css';
import Header from './header';
import Profile from './profile';
import ReposItem from './itemRepos';
import Footer from './footer';
import Icon from './img/github-icon.png';

export default function App(props){

    const [usr, setUsr] = useState()
    const [user, setUser] = useState({
        photo: Icon, 
        name: "GitPerfs", 
        followers: 0,
        following: 0,
        bio: `Digite o nome do usuário no campo 
        de pesquisa e clique em "Buscar" para ver informações sobre ele. Be Happy!`,
        company: "Github"
    });

    async function onSearch(){
        const url = await "https://api.github.com/users/";
        const request = await fetch(url+usr);
        let responseJson = await request.json();
        console.log(responseJson)
        setUser({
            photo: responseJson.avatar_url,
            name: responseJson.name,
            followers: responseJson.followers,
            following: responseJson.following,
            bio: responseJson.bio,
            company: responseJson.company
        });
    }

    return(
    <div>
        <Header onClick={onSearch} onChange={(e) => {setUsr(e.target.value)}}/>
        <div className="container">
          <Profile user={user}/>
          <div id="repos-container">
              <ReposItem />
          </div>
        </div>
        <Footer />
    </div>
    )
}