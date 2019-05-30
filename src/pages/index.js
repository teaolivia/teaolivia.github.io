import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="layout">
    <div style={{padding: `1em`,        
              marginBottom: `1.45rem`,
              marginLeft: `1.45rem`,
              }} id="page-wrap" >
      <h1 style={{fontWeight: `bold`}}>Apa Kabar?</h1>

        <div 
            style={{ 
              width: `100%`,  
              marginBottom: `1.45rem`,
              padding: `1em`,
              overflow: `auto` }}>
            <div
              style={{ 
                maxWidth: `100px`, 
                marginBottom: `1.45rem`, 
                overflow: `visible`}}>
              <Image />
            </div>
          <p>It's an Indonesian greetings means "how are you?"</p>
          <p>Hi, my full name is <span style={{color: `#1C3A13`, fontWeight: `600`}}>Thea Olivia Yusuf.</span> You can address me as either <span style={{color: `#1C3A13`, fontWeight: `600`}}>Thea Olivia </span> or <span style={{color: `#1C3A13`, fontWeight: `600`}}>Thea Yusuf.</span></p>
          <p>I am a <span style={{color: `#EFD6AC`, fontWeight: `600`}}>Freelance Software Developer </span> based in Indonesia and mainly using Python and currently doing my personal e-Commerce project with Django and Google Cloud Platform for its backend and React.js for its frontend. I also accept short-term projects as I am currently doing my e-advertising project with Django and AWS Lambda for its backend and React.js for its frontend. I also design its REST API with AWS API Gateway and store them in NoSQL form in AWS DynamoDB, due June 15th 2019. Mainly doing backend but open to do other things at certain and each have different tolerance. Interested about product performance measuring with microservices design and scaling techniques. Love to do competitive programming where I mostly use C++ and learn something new such as new technology and algorithms.</p>
          <p>I love new experiences and don't mind relocate to a new place. In my freetime, I enjoy playing piano, listen to music, reading books and playing with fluffy cats and dogs.</p>
          <p>Want to know me more? kindly check out my <a style={{ color: `#083D77`, fontWeight: `600`}}href="https://bit.ly/2K2slVg"><b>résumé.</b></a></p>
        </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
