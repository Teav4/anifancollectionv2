import { getPostById, getPostIds } from "../../lib/post"

type getPostProps = {
  post: any,
}

type getStaticProps = {
  params: any,
}

function Post({ post }: getPostProps) {
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

export const getStaticProps = async ({ params }: getStaticProps) => {
  const post = await getPostById(params.id) 

  return {
    props: {
      post,
    }
  }
}

export default Post
