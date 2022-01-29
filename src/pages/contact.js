import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import PhoneIcon from "../components/SvgCall.js"
import MailIcon from "../components/SvgMail.js"

const Contact = () => {
  return (
    <Layout>
      {/* <GatsbySeo
title="Ricky Richards Photography"
description="Ricky Richards Photography British Photo Journalist and Documentary photographer based in San Francisco USA"
openGraph={{
  images: [
    {
      url: data.OGImage.sharingImage.resize.src,
      width: data.OGImage.sharingImage.resize.width,
      height: data.OGImage.sharingImage.resize.height,
      alt: data.OGImage.sharingImage.title,
    },
  ],
}}
/> */}
      <section className="page-wrapper">
        <div className={`md:container pt-32`}>
          <div className="px-4 pt-12 lg:px-8 pb-52 bg-cream lg:grid lg:grid-cols-2">
            <div className="mb-8">
              <h1>Get in touch</h1>
              <p className="max-w-md mb-6 text-lg">
                Please get in touch and we will get back to you as quickly as
                possible.
              </p>
              <div className="flex items-center mb-6">
                <MailIcon className="w-6 h-6 mr-4 fill-current xs:mr-4 xs:w-6 xs:h-6 text-navy" />
                <p className="mb-0">
                  <a href="mailto:dsfasd@asdfasd.com.uk">garerth@opa.co.uk</a>
                </p>
              </div>
              <div className="flex">
                <PhoneIcon className="w-6 h-6 mr-4 fill-current xs:mr-4 xs:w-6 xs:h-6 text-navy" />
                <div className="flex items-center">
                  <p className="mb-0 ">12-3904792384</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
