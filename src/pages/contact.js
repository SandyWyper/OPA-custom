import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import PhoneIcon from "../components/SvgCall.js"
import MailIcon from "../components/SvgMail.js"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Contact = ({ data }) => {
  const { emailAddress, phoneNumber } = data.contentfulContactPage || undefined
  const { pageTitle, childContentfulContactPageIntroTextTextNode } =
    data.contentfulContactPage
  return (
    <>
      <GatsbySeo title="OPA - Contact" />
      <Layout>
        <section className="page-wrapper">
          <div className={`md:container pt-32`}>
            <div className="px-4 pt-12 lg:px-8 pb-52 bg-cream lg:grid lg:grid-cols-2">
              <div className="mb-8">
                <h1>{pageTitle}</h1>
                <p className="mb-6 text-lg md:pr-8 ">
                  {childContentfulContactPageIntroTextTextNode.introText}
                </p>
                {emailAddress && (
                  <div className="flex items-center mb-6">
                    <MailIcon className="w-6 h-6 mr-4 fill-current xs:mr-4 xs:w-6 xs:h-6 text-navy" />
                    <p className="mb-0">
                      <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                    </p>
                  </div>
                )}
                {phoneNumber && (
                  <div className="flex">
                    <PhoneIcon className="w-6 h-6 mr-4 fill-current xs:mr-4 xs:w-6 xs:h-6 text-navy" />
                    <div className="flex items-center">
                      <a
                        className="mb-0 font-light"
                        href={`tel:${phoneNumber}`}
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact

export const data = graphql`
  query {
    contentfulContactPage {
      childContentfulContactPageIntroTextTextNode {
        introText
      }
      pageTitle
      phoneNumber
      emailAddress
    }
  }
`
