import Link from "next/link";
import { LikeButtom } from "./LikeButtom";


// getStaticProps
// --> return fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

// getServerSideProps 
//  --> return fetch("https://jsonplaceholder.typicode.com/posts", {cache: 'no-store}).then(res => res.json());


const fetchPosts = () => {
// incremental static  regeneration
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 15).map((post) => (
    <article
      key={post.id}
      style={{
        border: "1px solid #fff",
        margin: "20px",
        padding: "10px",
        borderRadius: "14px",
      }}
    >
      <Link
        href="/posts/[id]"
        as={`/posts/${post.id}`}
        style={{ textDecoration: "none" }}
      >
        <h2 style={{ color: "#09f", marginBottom: "15px", marginTop: "15px" }}>
          {post.title}
        </h2>
        <p>{post.body}</p>
      </Link>
        <LikeButtom id={post.id} />
    </article>
  ));
}
