/*
Renders content.

Properties:
`addClass` - Adds one or more classes to each element.
`removeClass` - Removes one or more classes from each element.
`appendContent` - Appends content to each element.
`removeElement` - Removes element from the DOM.
*/
export const render = async (content, nodes, props = {}) => {
  //List of all nodes.
  const elements = [...document.querySelectorAll(nodes)]

  //Handle each node.
  elements.forEach((e) => {
    //Return nothing if node already is present.
    if (!e) return

    //Check if class should be added.
    if (props.addClass) e.className += ` ${props.addClass}`

    //Check if class should be removed.
    if (props.removeClass) {
      //Get all classes from an array.
      const classNames = props.removeClass.split(` `)

      //Handle each class.
      classNames.forEach((c) => {
        //Remove class from element.
        e.classList.remove(c)
      })
    }

    //Check if content should be appended.
    if (props.appendContent) return (e.innerHTML += content)

    //Check if element should be removed.
    if (props.removeElement) return e.parentNode.removeChild(e)

    //Don`t render if content is null.
    if (content !== null) return (e.innerHTML = content)
  })
}
