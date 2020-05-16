import React, { useState, useEffect } from 'react';
import api from './services/api'

import './App.css';

import Header from './components.js/Header';

function App() {

  const [projects, setProjetcts] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjetcts(response.data);
    })
  }, [projects]);

  function handleAddProject() {

    // setProjetcts([...projects, `Novo Projeto ${Date.now()}`]);

    api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Igor Freire Jales"
    })

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;