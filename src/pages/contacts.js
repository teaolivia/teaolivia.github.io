import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacts = (props) => (
  <Layout>
    <SEO title="Let's Get In Touch!" />
    <div class="layout">
      <div id="page-wrap">
        <h1 style={{maxWidth: `100%`}}>Looking forward to hear from you!</h1>
        <div class="outer-container" style={{ paddingLeft: `0`, padding: `1.5em`, marginBottom: `1.5rem`}}>
          <div class="inner-container">
            <a href="mailto:theaolivia.mail@gmail.com">
              <Img className="hub" fluid={props.data.mail_icon.childImageSharp.fluid}/>
            </a>
          </div>
          <div class="inner-container">
            <a href="https://www.linkedin.com/in/theaolivia/">
              <Img className="hub" fluid={props.data.linkedin_icon.childImageSharp.fluid}/>
            </a>
          </div>
          <div class="inner-container">
            <a href="https://github.com/teaolivia">
              <Img className="hub" fluid={props.data.github_icon.childImageSharp.fluid} />
            </a>
          </div>
          <div class="inner-container">
            <a href="https://stackoverflow.com/users/11484987/theaolivia">
              <Img className="hub" fluid={props.data.so_icon.childImageSharp.fluid}/>
            </a>
          </div>
          <div class="inner-container">
            <a href="https://twitter.com/teapisan">
              <Img className="hub" fluid={props.data.twitter_icon.childImageSharp.fluid}/>
            </a>
          </div>
          <div class="inner-container">
            <a href="https://t.me/theaolivia">
              <Img className="hub" fluid={props.data.telegram_icon.childImageSharp.fluid}/>
            </a>
          </div>
          <div class="inner-container">
            <a href="https://medium.com/@theaolivia">
              <Img className="hub" fluid={props.data.medium_icon.childImageSharp.fluid}/>
            </a>
          </div>
          <div class="inner-container">
            <a href="https://www.goodreads.com/theaolivia">
              <Img className="hub" fluid={props.data.goodreads_icon.childImageSharp.fluid}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contacts

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 50) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  `;

export const query = graphql`
  query {
    linkedin_icon: file(relativePath: { eq: "linkedin-logo.png" }) {
      ...fluidImage
    }
    mail_icon: file(relativePath: { eq: "mail-black-envelope-symbol.png" }) {
        ...fluidImage
    }

    github_icon: file(relativePath: { eq: "github-character.png" }) {
        ...fluidImage
    }

    medium_icon: file(relativePath: { eq: "medium-size.png" }) {
        ...fluidImage
    }

    so_icon: file(relativePath: { eq: "overflowing-stacked-papers-tray.png" }) {
        ...fluidImage
    }

    telegram_icon: file(relativePath: { eq: "telegram.png" }) {
        ...fluidImage
    }

    twitter_icon: file(relativePath: { eq: "twitter-logo-silhouette.png" }) {
        ...fluidImage
    }

    goodreads_icon: file(relativePath: { eq: "goodreads-letter-logo.png" }) {
      ...fluidImage
    }
  }
`
