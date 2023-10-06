const pageTemplate = (pageName) =>
  `export const ${pageName} = (): JSX.Element => {
    return <div>${pageName}</div>
  }`

module.exports = pageTemplate
