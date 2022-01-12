// import React from "react"
// import Img from "gatsby-image"
// import get from "lodash/get"

// const RichTextImageBlock = ({ data, baseIndex }) => {
//   const images = get(data, "[0].images", undefined)

//   if (images === undefined) return

//   return (
//     <div className="image-block-container">
//       {images.map((node, index) => {
//         return (
//           <button
//             onClick={() => openLightbox(baseIndex + index)}
//             className={
//               (images.length === 1) &
//               (node.file.details.image.height > node.file.details.image.width)
//                 ? "single-portrait"
//                 : "image"
//             }
//           >
//             <Img
//               key={node.id}
//               fluid={node.fluid}
//               alt={node.description !== "" ? node.description : node.title}
//             />
//           </button>
//         )
//       })}
//     </div>
//   )
// }

// export default RichTextImageBlock
