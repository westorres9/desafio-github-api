import { NavLink, useNavigate } from 'react-router-dom';
import './styles.css';
import React, {useState} from "react";
import axios from "axios";

type FormData = {
    username: string;
};

type ProfileGithub = {
    avatar_url: string;
    url: string;
    followers: string;
    location: string;
    name: string;
}

export default function Search() {

    const navigate = useNavigate();

    const [profileGithub, setProfileGithub] = useState<ProfileGithub>({
        avatar_url: '',
        url: '',
        followers:'',
        location: '',
        name: '',
    });

    const [formData, setFormData] = useState<FormData>({
        username:'',
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        setFormData({...formData, username: value});
    }

    function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.get(`http://api.github.com/users/${formData.username}`)
            .then((response) => {
                setProfileGithub(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                // @ts-ignore
                return setProfileGithub(undefined);
            });
        };


    return (
        <section className="search-section">
            <div className="search-container">
                <h1>Encontre um perfil Github</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Usuario github"
                    />
                    <button type='submit'>Encontrar</button>
                </form>

            </div>
            {
                profileGithub && formData ? (
                <div className="profile-container">
                    <div>
                        <img src={profileGithub.avatar_url} alt={profileGithub.name} />
                    </div>
                    <div className="info-container">
                        <h2>Informações</h2>
                        <div className="field">
                            <span>Perfil:</span>
                            <a href={profileGithub.url}>{profileGithub.url}</a>
                        </div>
                        <div className="field">
                            <span>Seguidores:</span>
                            <p>{profileGithub.followers}</p>
                        </div>
                        <div className="field">
                            <span>Localidade:</span>
                            <p>{profileGithub.location}</p>
                        </div>
                        <div className="field">
                            <span>Nome:</span>
                            <p>{profileGithub.name}</p>
                        </div>
                    </div>
                </div>
                    )
                    :
                    <div className="notfound-container">
                        <h1>Erro ao buscar usuario</h1>
                    </div>
            }

        </section>
    );
}