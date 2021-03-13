const RepositoryItem = (props) => {
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