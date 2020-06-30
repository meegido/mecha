import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Post from "../components/post";

export const AllBlogsAtHomeQuery = graphql`
  query AllBlogsAtHomeQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`;

const Home = ({ data }) => (
  <Layout>
    <h1
      style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `2rem` }}
    >
      Home
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
      aut consequuntur aspernatur corrupti ratione, odit similique tenetur
      accusantium, est nostrum esse minus iure voluptatum nihil cumque
      blanditiis non? Odit.
    </p>
    <div>
      <h1>Posts</h1>
      {data.allMarkdownRemark.edges.map(post => {
        const {
          title,
          date,
          description,
          path,
        } = post.node.frontmatter;

        return (
          <Post
            key={`${date}__${title}`}
            title={title}
            date={date}
            description={description}
            path={path}
          />
        );
      })}
    </div>
  </Layout>
);

export default Home;
