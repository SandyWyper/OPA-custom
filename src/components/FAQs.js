import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FAQItem from "./FAQItem"

const FAQs = () => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulFaqItem(sort: { order: ASC, fields: order }) {
          nodes {
            question {
              question
            }
            answer {
              answer
            }
          }
        }
      }
    `
  )
  const FAQs = data.allContentfulFaqItem.nodes

  return (
    <div className="mx-auto md:max-w-3xl">
      <h2 className="section-title">FAQs</h2>
      <div>
        {FAQs.map(each => {
          return (
            <FAQItem
              question={each.question.question}
              answer={each.answer.answer}
            />
          )
        })}
      </div>
    </div>
  )
}

export default FAQs
