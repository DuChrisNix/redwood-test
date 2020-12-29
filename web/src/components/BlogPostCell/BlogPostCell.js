export const QUERY = gql`
  query BlogPostQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>
            Created at: {new Date(post.createdAt).toLocaleDateString('de-DE')}
          </p>
        </li>
      ))}
    </ul>
  )
}
