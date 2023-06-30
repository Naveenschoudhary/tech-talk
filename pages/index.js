import BlogGrid from "@/components/BlogGrid";
import Header from "@/components/header";
import axios from "axios";

export default function Home(props) {
  const { posts } = props;
  console.log(posts);
  return (
    <div className="container">
      <Header />
      <div className="blog">
        <h2 className="blog_title">Latest Blogs</h2>
        <div className="blog_wrapper">
          <BlogGrid />
          <BlogGrid />
          <BlogGrid />
        </div>
      </div>
    </div>
  );
}

//Fetch Data to for the blog Posts getStaticProps()

// export async function getStaticProps() {
//   const { data } = await axios("http://localhost:3000/api/blog");
//   return {
//     props: { posts: data },
//     revalidate: 10, //In Seconds Incremrnt Static genration
//   };
// }

//Fetch Data to for the blog using getServerSideProps()

export async function getServerSideProps() {
  return {
    props: { post: {} },
  };
}
