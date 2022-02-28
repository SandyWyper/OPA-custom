import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Layout from "../components/layout"
import Robot404 from "../components/Robot404"

const NotFoundPage = () => (
  <>
    <GatsbySeo noindex={true} />
    <Layout>
      <section className="page-wrapper">
        <div className={`md:container pt-32`}>
          <div className={`bg-cream p-4 md-p-32 h-full pb-32 md:flex`}>
            <div>
              <h1>Page Not Found</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
            <Robot404 classes="max-w-lg" />
          </div>
        </div>
      </section>
    </Layout>
  </>
)

export default NotFoundPage
