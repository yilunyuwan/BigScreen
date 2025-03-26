export const initHTMLFontSize = () => {
  const clientHeight = document.documentElement.clientHeight
  const clientWidth = document.documentElement.clientWidth

  const pageWidth = (clientWidth / clientHeight < 16 / 9 && clientWidth > 500)? clientWidth : clientHeight * 16 / 9
  const pageHeight = pageWidth * 9 / 16
  window.pageWidth = pageWidth
  window.pageHeight = pageHeight
  document.documentElement.style.fontSize = `${pageWidth / 100}px`
}

export const initPagePosition = () => {
  const root = <HTMLElement>document.querySelector('#root')
  root.style.width = window.pageWidth + 'px'
  root.style.height = window.pageHeight + 'px'
  root.style.marginTop = (document.documentElement.clientHeight - window.pageHeight) / 2 + 'px'
}

export const initPageSize = () => {
  initHTMLFontSize()
  initPagePosition()
}