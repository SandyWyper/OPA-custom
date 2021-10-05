import React from "react"

const Footer = () => {
  return (
    <footer>
      <p className={`text-xs`}>
        &copy; {new Date().getFullYear()}
        {` - `}
        <a target={`_blank`} href="https://tinderboxwebsolutions.com">
          Tinderbox Web Solutions
        </a>
      </p>
    </footer>
  )
}

export default Footer
