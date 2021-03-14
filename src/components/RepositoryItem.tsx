interface IRepositoryItemProps {
  repository: {
    name?: string;
    description: string;
    html_url: string;
    }
  }

const RepositoryItem = (props: IRepositoryItemProps) => {
  return (
    <>
      <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>
        Acessar repository
      </a>
    </li>
  </>
  )
}

export { RepositoryItem };