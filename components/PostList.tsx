import { Post } from "contentlayer/generated";
import Banner from "./Banner";
import PostItem from "./PostItem";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((el) => (
        <PostItem post={el} key={el._id} />
      ))}
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          width: 768px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          div {
            grid-template-columns: 1fr;
            width: 100%;
            padding: 50px 20px;
          }
        }
      `}</style>
    </div>
  );
}
