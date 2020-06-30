import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Post from "../components/post";

const Home = ({ data }) => (
  <Layout>
    <div className="home-intro">
      <h1
        style={{
          maxWidth: `300px`,
          marginBottom: `.1rem`,
          marginTop: `.2rem`,
          fontSize: `100px`,
        }}
      >
        Mecha
      </h1>
      <p
        style={{
          borderBottom: `2px solid rgb(197, 96, 48)`,
          paddingBottom: `25px`,
          margin: `0`
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
        aut consequuntur aspernatur corrupti ratione, odit similique tenetur
        accusantium, est nostrum esse minus iure voluptatum nihil cumque
        blanditiis non? Odit.
      </p>
    </div>
    <div className="home-post-list">
      {data.allMarkdownRemark.edges.map(post => {
        const { title, date, description, path } = post.node.frontmatter;

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

export default Home;
