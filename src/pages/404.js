import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Robot404 from "../components/Robot404"

const NotFoundPage = () => (
  <>
    <GatsbySeo noindex={true} />
    <Layout>
      <section className="pt-32 page-wrapper">
        <div className={`bg-cream`}>
          <div className={`container py-16 h-full pb-32 md:flex`}>
            <div className="md:w-1/2">
              <h1>Page Not Found</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
              <Link to={`/`} className="uppercase">
                Return home
              </Link>
            </div>
            <Robot404 classes="" />
          </div>
        </div>
      </section>
    </Layout>
  </>
)

export default NotFoundPage
