module.exports = removeElement

function removeElement (element) {
  element.node = 'text'
  element.text = ''
}
