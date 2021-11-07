export const toggleMenuCollapse = el => {
  const menuEl = document.querySelector(el)
  if (menuEl.ariaExpanded === "true") {
    menuEl.style.height = 0
    menuEl.ariaExpanded = "false"
  } else {
    menuEl.style.height = menuEl.firstChild.clientHeight + "px"
    menuEl.ariaExpanded = "true"
  }
}
