import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Thankyou = () => (
  <>
    <GatsbySeo noindex={true} />
    <Layout>
      <section className="page-wrapper">
        <div className={`pt-32`}>
          <div className={`bg-cream p-4 md-p-32 h-full pb-32`}>
            <div className="container py-8 md:py-24">
              <h1>Thanks for getting in touch.</h1>
              <p> We will be in touch as soon as possible.</p>
              <button
                className={`px-12 py-2 bg-navy text-pink-50 tracking-widest`}
              >
                <Link to={`/`} className="uppercase">
                  Return home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>
)

export default Thankyou
