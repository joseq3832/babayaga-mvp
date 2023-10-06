const componentTemplate = (componentName) =>
  `export const ${componentName} = ():JSX.Element => {
    return (
      <div>${componentName}</div>
    )
  }`

module.exports = componentTemplate
