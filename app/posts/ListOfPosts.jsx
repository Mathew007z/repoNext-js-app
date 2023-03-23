import { LikeButtom } from "./LikeButtom";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();



  return posts.slice(0, 15).map((post) => (
    <article key={post.id}>
      <h2 style={{color:"#09f",marginBottom:'15px', marginTop:'15px'}}>{post.title}</h2>
      <p>{post.body}</p>
    <LikeButtom id={post.id}/>
    </article>
  ));
}
