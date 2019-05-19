import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Apa Kabar?</h1>
    <div class="outer-container">
        <div class="inner-container"
          style={{ 
            float: `right`,
            maxWidth: `100px`, 
            marginBottom: `1.45rem`, 
            overflow: `visible`}}>
          <Image />
        </div>
      <div class="inner-container"
          style={{ 
            width: `750px`, 
            clear: `right`, 
            maxWidth: `750px`, 
            marginBottom: `1.45rem` }}>
        <p>It's an Indonesian greetings means "how are you?"</p>
        <p>Hi, my full name is <span style={{color: `#7E5920`, fontWeight: `600`}}>Thea Olivia Yusuf.</span> You can address me as either <span style={{color: `#7E5920`, fontWeight: `600`}}>Thea Olivia </span> or <span style={{color: `#7E5920`, fontWeight: `600`}}>Thea Yusuf.</span></p>
        <p>I am mainly using Python and currently doing my personal e-Commerce project with Django and Google Cloud Platform for its backend and React.js for its frontend. Mainly doing backend but open to do other things at certain and each have different tolerance. Interested about product performance measuring with microservices design and scaling techniques. Love to do competitive programming where I mostly use C++ and learn something new such as new technology and algorithms.</p>
        <p>I love new experiences and don't mind relocate to a new place. In my freetime, I enjoy playing piano, listen to music, reading books and playing with fluffy cats and dogs.</p>
        <p>Want to know me more? kindly check out my <a style={{ color: `#083D77`}}href="https://bit.ly/2Q8smIb"><b>résumé.</b></a></p>
      </div>
    </div>

  </Layout>
)

export default IndexPage
