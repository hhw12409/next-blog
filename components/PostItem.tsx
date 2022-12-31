import { Post } from "contentlayer/generated";
import Link from "next/link";

export default function PostItem({ post }: { post: Post }) {
  console.log(post);
  return (
    <>
      <Link href={`blog/${post._raw.flattenedPath}`}>
        <div className="container">
          <div>
            <h1>{post.title}</h1>
            <h4>{post.date}</h4>
            <span>#{post.category}</span>
            <p>{post.description}</p>
          </div>

          <style jsx>{`
            .container {
              display: flex;
              flex-direction: column;
              border-radius: 10px;
              box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
              transition: 0.3s box-shadow;
              cursor: pointer;
              &:hover {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
              }
            }
            .container > div {
              flex: 1;
              display: flex;
              flex-direction: column;
              padding: 15px;
            }
            .container > div > h1 {
              display: -webkit-box;
              overflow: hidden;
              margin-bottom: 3px;
              text-overflow: ellipsis;
              white-space: normal;
              overflow-wrap: break-word;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              font-size: 20px;
              font-weight: 700;
            }
            .container > div > h4 {
              font-size: 14px;
              font-weight: 400;
              opacity: 0.7;
            }
            .container > div > span {
              display: flex;
              flex-wrap: wrap;
              margin: 10px 0px;
            }
            .container > div > p {
              display: -webkit-box;
              overflow: hidden;
              margin-top: auto;
              text-overflow: ellipsis;
              white-space: normal;
              overflow-wrap: break-word;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              font-size: 16px;
              opacity: 0.8;
            }
          `}</style>
        </div>
      </Link>
    </>
  );
}
