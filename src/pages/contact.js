import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"

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
        <div className={`container py-32 `}>
          <div className="bg-white md:grid md:grid-cols-2 ">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
