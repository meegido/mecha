import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          id
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
  }
`;

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    {console.log(data)}
  </Layout>
);

export default Blog;
