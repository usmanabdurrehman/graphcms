import { Card } from "../Components";
import { gql } from "@apollo/client";
import { client } from "../apolloClient";

const query = gql`
  query MyQuery {
    blogPosts {
      title
      content {
        html
      }
    }
  }
`;

export default function Home({ blogs }) {
  return (
    <div>
      {blogs.map(({ title, content }) => (
        <Card title={title} description={content.html} key={title} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({ query, fetchPolicy: "network-only" });

  return {
    props: {
      blogs: data.blogPosts,
    },
  };
}
