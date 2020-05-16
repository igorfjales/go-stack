import React, { useEffect, useState } from "react";
import "./styles.css";
import api from "./services/api";

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {

    const response = await api.post('/repositories', {
      title: `Novo Repositório ${Date.now()}`,
      url: 'http://github.com/igorfjales/appJLS',
      techs: [
        'React',
        'JS'
      ]
    });
    setRepositories([...repositories, response.data]);
    console.log(repositories);
  }

  async function handleRemoveRepository(id) {
    setRepositories(repositories.filter(
      repository => repository.id !== id
    ));
   api.delete(`repositories/${id}`);
  }

  return (
    <>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>

            {repository.title}

            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
          </button>
          </li>
        ))}

      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </>
  );
}

export default App;
