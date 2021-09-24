import { useEffect, useState } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositpryList() {
  /* 
   * Como os dados demoram alguns milissegundos para serem carregados, a primeira vez que o componente 
   * é renderizado, o estado é inicializado com um array vazio, e como seu estado será alterado, é necessário o
   * uso do useState.
  */
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}