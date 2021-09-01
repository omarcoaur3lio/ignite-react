import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'React form library',
    link: 'https://github.com/unform/unform'
}

export function RepositpryList() {
  return (
      <section className="repository-list">
          <h1>Lista de repositórios</h1>
          <ul>
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
          </ul>
      </section>
  );
}