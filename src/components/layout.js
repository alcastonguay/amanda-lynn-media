/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>

      <Header
        siteTitle={
          data.site.siteMetadata?.title ||
          `Amanda Lynn Media - Software System Development and Multimedia Design`
        }
      />
      <main className="container-fluid px-0">{children}</main>
      <div id="corner-top-left" className="position-fixed top-0"></div>
      <div id="corner-top-right" className="position-fixed top-0"></div>
      <div id="corner-bottom-left" className="position-fixed bottom-0 start-0"></div>
      <div id="corner-bottom-right" className="position-fixed bottom-0 end-0"></div>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`
        }}
      >
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  );
};

export default Layout;
