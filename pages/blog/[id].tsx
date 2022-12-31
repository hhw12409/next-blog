import { allPosts } from "contentlayer/generated";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXComponent = useMDXComponent(post?.body.code!);
  console.log(post);
  return (
    <div>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.description}></meta>
      </Head>
      <MDXComponent />
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((el) => ({ params: { id: el._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { id } = context.params as any;
  const post = allPosts.find((el) => el._raw.flattenedPath === id);
  return {
    props: {
      post,
    },
  };
};
