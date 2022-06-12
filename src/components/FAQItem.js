import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import useMeasure from "react-use-measure"
import { FAQJsonLd } from "gatsby-plugin-next-seo"

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ref, bounds] = useMeasure()
  const dropDownSpring = useSpring({
    to: {
      height: isOpen ? `${bounds.height}px` : `0px`,
    },
    config: { friction: 10, mass: 4, tension: 900, clamp: true },
  })
  return (
    <>
      <FAQJsonLd questions={[{ question: question, answer: answer }]} />
      <div class="accordion-tab">
        <button
          class="accordion-button mt-4"
          // data-tab-name="nutrition"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h4>{question}</h4>
          <div class={`circle-plus closed ${isOpen ? "opened" : ""}`}>
            <div class="circle">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
          </div>
        </button>
        <animated.div
          class="accordion-content will-change-height"
          // data-accordion-content="nutrition"
          style={dropDownSpring}
          aria-hidden="true"
        >
          <div ref={ref}>
            <p className="pb-8">{answer}</p>
          </div>
        </animated.div>
      </div>
    </>
  )
}
export default FAQItem
