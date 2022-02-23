import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Layout from "../components/layout"

const Thankyou = () => (
  <>
    <GatsbySeo noindex={true} />
    <Layout>
      <h1>Thanks for getting in touch.</h1>
      <p> I'll be in touch as soon as possible.</p>
    </Layout>
  </>
)

export default Thankyou
