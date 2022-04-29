import axios from "axios"

export const getPost = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return response.data

  } catch (error) {
    console.log(error)
  }
}

export const getPostIds = async () => {
  const posts = await getPost()

  return posts.map(post => ({
    params: {
      id: `${post.id}`
    }
  }))
}

export const getPostById = async id => {
  try {
    
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.data

  } catch (error) {
    console.log(error)
  }
}
