import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ServicesCTA = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="max-w-md">
          <p>
            OPA is at the forefront of planning for a lower carbon future. We
            will advise and steer clients through the complex planning system to
            achieve their goals, whilst promoting renewable or low carbon
            initiatives so that the development is sustainable, fit for purpose
            and contributes to a net zero carbon future.
          </p>
          <p>
            We focus on helping renewable energy developers increase the
            generating capacity of renewable installations throughout the UK,
            providing planning and consultancy services to residents and
            businesses throughout England, Wales and Scotland.
          </p>
          <button className={`px-4 py-2 bg-green-800 text-pink-50`}>
            <Link to={`/services`}>find out more</Link>
          </button>
        </div>
        <StaticImage
          className={`max-w-lg`}
          src={`../images/16.29.10 3.JPG`}
          alt="XXXXX"
        />
      </div>
    </section>
  )
}
export default ServicesCTA
