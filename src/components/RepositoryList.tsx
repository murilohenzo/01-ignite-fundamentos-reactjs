import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

interface IRepository {
  name: string;
  description: string;
  html_url: string;
}


const RepositoryList = () => {

  const [repositories, SetRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/murilohenzo/repos')
      .then(response => response.json())
      .then(data => SetRepositories(data))
  }, [])

  return(
    <section className="repository-list">
      <h1>Repositories List</h1>
      
      <ul>
          {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />
          )}
      </ul>
    </section>
  )
}

export { RepositoryList };