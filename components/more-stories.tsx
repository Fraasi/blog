import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-2 md:text-2xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1">
        {posts.map((post) => (
          <PostPreview
            key={post.title}
            title={post.title}
            date={post.createdAt}
            author={post.author}
            slug={post.title.replace(' ', '-')}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
