import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <BlogPostCell />
    </BlogLayout>
  )
}

export default HomePage
