const layoutTemplate = (layoutName) =>
  `import { Outlet } from 'react-router-dom'

  export const ${layoutName} = ():JSX.Element => {
    return <Outlet />
  }`

module.exports = layoutTemplate
