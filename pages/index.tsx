import PostList from "components/PostList";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import META_DATA from "../data/metadata";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>{META_DATA.title}</title>
      </Head>
      <PostList posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
}
