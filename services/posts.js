const url = `https://jsonplaceholder.typicode.com/posts`

export async function getPosts(){
  return await fetch(url)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err))
}

export async function getPost(id){
  return await fetch(url+`/${id}`)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err))
}
