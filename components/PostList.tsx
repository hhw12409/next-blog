import { Post } from "contentlayer/generated";

export default function PostList({ posts }: { posts: Post[] }) {
  console.log(posts[0]);
  return (
    <div>
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
