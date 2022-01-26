import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ServicesCTA = () => {
  return (
    <section className="bg-cream ">
      <div className="container py-10 md:py-32">
        <div className="md:flex md:items-center">
          <div className="pl-6 border-l-4 md:w-1/2 md:pr-16 border-navy">
            <div className="mb-12">
              <p>
                OPA is at the forefront of planning for a lower carbon future.
                We will advise and steer clients through the complex planning
                system to achieve their goals, whilst promoting renewable or low
                carbon initiatives so that the development is sustainable, fit
                for purpose and contributes to a net zero carbon future.
              </p>
              <p>
                We focus on helping renewable energy developers increase the
                generating capacity of renewable installations throughout the
                UK, providing planning and consultancy services to residents and
                businesses throughout England, Wales and Scotland.
              </p>
            </div>
            <button
              className={`px-12 py-2 bg-navy text-pink-50 tracking-widest`}
            >
              <Link to={`/services`}>SERVICES</Link>
            </button>
          </div>
          <div className="md:w-1/2">
            <StaticImage
              className={``}
              src={`../images/16.29.10 3.JPG`}
              alt="XXXXX"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServicesCTA
