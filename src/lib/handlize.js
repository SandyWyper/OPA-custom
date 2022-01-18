const handlize = str => {
  return `${str.trim().replace(/\s/g, "-").toLowerCase().replace("--", "-")}`
}

export default handlize
