import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const GazBio = () => {
  return (
    <div className={`py-12 bg-navy`}>
      <div className="container py-12 overflow-hidden lg:flex lg:flex-row-reverse lg:items-center">
        <div className="flex-none mx-auto mb-12 w-max lg:w-1/3">
          <StaticImage
            className={`max-w-sm rounded-full`}
            src={`../images/gaz.jpg`}
            alt="XXXXX"
            layout={`constrained`}
          />
        </div>
        <div className="lg:pr-12">
          <h5 className="text-white">Company Director</h5>
          <h2 className="text-white">Gareth Davies</h2>
          <p className="text-white">
            Since graduating from Plymouth University with an MSc in Marine
            Renewable Energy Gareth has worked for a leading national renewable
            energy company. Where he led their planning and project management
            team to deliver over 45MW of renewable energy installations. He has
            also worked for Cornwall Council as the Innovation Led, delivering
            the local authorities first 100m wind turbine and developing a
            pipeline of solar projects along with analysing and advising on some
            more innovative low carbon solutions and ideas such as geothermal
            and hydrogen. Gareth has now set up One Planet Associates Ltd, a
            planning and consultancy service with a conscience. Gareth has
            gained over a decade of experience working within the renewable
            energy and planning sector. Gareth is well-versed in taking
            challenging projects from concept through the approvals process and
            on to development. Whether renewable energy, domestic or commercial
            planning, Gareth has a breadth of experience to assist in any
            development. Some of the most exciting projects Gareth’s worked on
            have been bespoke and unique residential developments. However, be
            warned, Gareth has a passion for reducing reliance on fossil fuels
            and exploring every opportunity to transition to a lower carbon
            economy so expect ideas, suggestions and opportunities for
            collaboration if you decide to partner with Gareth on your journey.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GazBio
