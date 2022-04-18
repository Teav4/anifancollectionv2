import { getPostById, getPostIds } from "../lib/post"

function Post({ post }) {
  return (
    <div>
      Hello {post.title} 
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = await getPostIds()
  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id) 

  return {
    props: {
      post,
    }
  }
}

export default Post
