export function findOrCreateElementById(id: string, targetElement?: Element) {
  const existingElement = document.getElementById(id)
  if (existingElement) {
    return existingElement
  }

  const container = document.createElement('div')

  container.id = id
  ;(targetElement ?? document.body).appendChild(container)

  return container
}
