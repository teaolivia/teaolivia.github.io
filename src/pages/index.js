import * as React from "react"
import Image from "../components/image"
import email from "../images/email.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin-logo.png"

import "@fontsource/source-sans-pro"


// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Source Sans Pro",
  justifyContent: "center",
  alignItems: "center"
}

const docLinkStyle = {
  color: "#487B94",
  textDecoration: "none"
}

const headingStyles = {
  margin: "auto",
  marginTop: "20px",
  maxWidth: "150px",
  fontFamily: "xants,sans-serif"
}

const headingAccentStyles = {
  color: "#487B94",
  fontSize: "1.5rem",
  marginBottom: "40px"
}

const navStyle = {
  marginTop: 30,
  display: "flex",
  textDecoration: "none",
  listStyleType: "none",
}


// data
const links = [
  {
    imgSrc: email,
    url: "mailto:theaolivia.mail@gmail.com"
  },
  {
    imgSrc: github,
    url: "https://github.com/teaolivia"
  },
  {
    imgSrc: linkedin,
    url: "https://www.linkedin.com/in/theaolivia/"
  }
]

// markup
const IndexPage = () => {
  return (
        <main style={pageStyles}>
          <title>Thea Yusuf</title>
          <div
              style={{
                maxWidth: `200px`, 
                margin: `auto`,
                overflow: `visible`,
                }}>
              <Image />
          </div>
          <h1 style={headingStyles}>
            Thea Yusuf
            <br />
            <span style={headingAccentStyles}>Data Engineer</span>
          </h1>
          <p style={{textAlign: `center`}}>I am a data/software engineer from Indonesia but currently based in Stockholm, Sweden. </p>
          <p style={{textAlign: `center`}}>I strive to deliver best end-to-end solutions to my stakeholders who are data analysts and data scientists that work for decision making engine by focusing on data quality, freshness, throughput and infrastructure with <a style={{ color: `#487B94`, textDecoration: `none`}} href="https://www.klarna.com">Klarna</a> since last 2 years. </p>
          <p style={{textAlign: `center`}}>Before I worked on various backend and even frontend projects which build my software design fundamentals.</p>
          <p style={{textAlign: `center`}}>In my freetime, I enjoy sauna, cooking, playing guitar, and adoring cute animals. </p>
          <p style={{textAlign: `center`}}><a style={docLinkStyle} href="https://drive.google.com/file/d/15GqUoBTT_ei2atm5DjUJJGFra1n631_w/view">check out my latest résumé!</a></p>
          <div style={{ 
                        maxWidth: `250px`, 
                        margin: `auto`,
                        }}>
            <nav style={navStyle}>       
              {links.map(link => (
                <li key={link.url}>
                    <a href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}>
                      <div style={{padding: `1rem `}}>
                        <img src={link.imgSrc} padding="20px" width="50" height="50" alt="External URLs"/>
                      </div>
                    </a>
                </li>
              ))}
            </nav>
          </div>
        </main>

  )
}

export default IndexPage
