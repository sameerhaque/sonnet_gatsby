import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <snt-ad
      icon-sources='{
          "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",
          "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"
      }'
      logo-sources='{
          "smallLogoUrl":"https://via.placeholder.com/230x60?text=Mobile",
          "mediumLogoUrl":"https://via.placeholder.com/294x60?text=Tablet",
          "largeLogoUrl":"https://via.placeholder.com/234x80?text=Desktop",
          "extraLargeLogoUrl":"https://via.placeholder.com/330x80?text=Desktop+HD"
      }'
      title-string="My Title"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum p.
      </p>
    </snt-ad>
  </Layout>
)

export default IndexPage
