import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude.toFixed(4));
        setLongitude(longitude.toFixed(4));


      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);


  async function handleAddDev(e){
    e.preventDefault();
  };

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={githubUsername}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/59902609?s=460&v=4" alt="Thiago Arce" />
              <div className="user-info">
                <strong>Thiago Arce</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Mestre em matemática com ênfase em estatística. Atualmente estudando e criando aplicações web com uso de javascript, node e react-native.</p>
            <a href="https://github.com/thiagoarce">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/59902609?s=460&v=4" alt="Thiago Arce" />
              <div className="user-info">
                <strong>Thiago Arce</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Mestre em matemática com ênfase em estatística. Atualmente estudando e criando aplicações web com uso de javascript, node e react-native.</p>
            <a href="https://github.com/thiagoarce">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/59902609?s=460&v=4" alt="Thiago Arce" />
              <div className="user-info">
                <strong>Thiago Arce</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Mestre em matemática com ênfase em estatística. Atualmente estudando e criando aplicações web com uso de javascript, node e react-native.</p>
            <a href="https://github.com/thiagoarce">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/59902609?s=460&v=4" alt="Thiago Arce" />
              <div className="user-info">
                <strong>Thiago Arce</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Mestre em matemática com ênfase em estatística. Atualmente estudando e criando aplicações web com uso de javascript, node e react-native.</p>
            <a href="https://github.com/thiagoarce">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>

  );
}

export default App;
