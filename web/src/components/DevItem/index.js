import React from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

import './styles.css';

function DevItem({ dev }) {

    return (
        <li  className="dev-item">
            
            <header>
                
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
                
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a> 
            <div className="dev-icons"><FaEdit /><FaTrashAlt/></div>
        </li>
    );
}

export default DevItem;