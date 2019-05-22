import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Résumé" />
    <h1>{data.site.siteMetadata.title}</h1>
      <p style={{fontSize: `18px`, maxWidth: 750}}>
        I am focusing on backend engineering. I love challenges 
        and care about quality product - thus makes me tenacious 
        towards difficulties and possessing certain and different 
        tolerance when have to do other, with most to least are 
        data engineering, front-end, and mobile development.
        It is always satisfying when I make something of 
        great value and impactful to solve problems with
        code. 
      </p>
      <p>theaolivia.mail@gmail.com</p>

    <h2>Skills</h2>
      <h3>Languages</h3>
      <p>Python, C++, C, JavaScript, Java, PHP, HTML, CSS</p>
      <h3>Technologies</h3>
      <p> MySQL, MongoDB, GraphQL, Google Cloud Platform, Android </p>
      <h3>Other</h3>
      <p> Web Scaling, Agile Methodology </p>

    <h2>Work Experience</h2>
      <h3><a href="https://www.rekruta.com/">Rekruta.com</a></h3>
      <h4>Software Engineer Intern</h4>
      <h5>June 2016 - August 2016</h5>
      <ul>
        <li>Developed Rekruta chrome extension for easier managing 
          recruitment. <b>Javascript.</b><b>Node.js.</b><b>HTML.</b><b>CSS.</b><b>JQuery.</b></li>
        <li>Developed a search engine as a product feature, search 
          by attributes for more organized and faster sorting list 
          of recruitees. <b>Sails.js.</b> <b>MongoDB.</b> <b>Polymer 1.0.</b></li>
      </ul>

  </Layout>
)

export default IndexPage

export const titleQuery = graphql`
  query {
    site {
        siteMetadata {
          title
      }
  }
}
`