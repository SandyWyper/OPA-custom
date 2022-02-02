import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <>
    <GatsbySeo noindex={true} />
    <Layout>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
)

export default NotFoundPage
