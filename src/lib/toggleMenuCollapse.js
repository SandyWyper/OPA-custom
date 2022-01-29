export const toggleMenuCollapse = (content, tab) => {
  const menuTab = document.querySelector(tab)
  const menuEl = document.querySelector(content)
  if (menuEl.ariaExpanded === "true") {
    menuEl.style.height = 0
    menuEl.ariaExpanded = "false"
    menuTab.classList.remove("is-open")
  } else {
    menuEl.style.height = menuEl.firstChild.clientHeight + "px"
    menuEl.ariaExpanded = "true"
    menuTab.classList.add("is-open")
  }
}
