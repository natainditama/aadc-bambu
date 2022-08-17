import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout/Layout";

const IndexPage = () => {
  return <Layout>hello</Layout>;
};

export default IndexPage;
export const Head: HeadFC = () => <title>Home Page test</title>;
