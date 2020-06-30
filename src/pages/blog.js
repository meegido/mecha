import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Post from "../components/post";

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
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

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
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
  </Layout>
);

export default Blog;
