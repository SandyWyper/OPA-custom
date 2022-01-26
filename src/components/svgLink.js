import * as React from "react"

const SvgLink = props => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    viewBox="0 0 48 48"
  >
    <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <path
      d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      fill="#829184"
      stroke="#043042"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="m21 33 9-9-9-9"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgLink
