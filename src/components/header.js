import PropTypes from "prop-types"
import React from "react"

const langJsonEn = `{"search": "Search", "toggleNavigation":"toggleNavigation","close":"Close","searchUrl":"https://www.sonnet.ca/search.aspx","login":"Log In","gaq":"Get a Quote","back":"Back","skipToMainContent":"Skip to main content","getAQuoteUrl":"http://localhost:3333/getAQuote.html"}`

const Header = () => (
  <snt-header
    fixed={true}
    style-classes="theme-primary"
    language-json={langJsonEn}
  >
    <snt-nav slot="secondary-nav-desktop" id="secondary-nav-desktop">
      <snt-nav-item
        href="?contact-us"
        target="_self"
        link-title="Contact Us"
      ></snt-nav-item>
      <snt-nav-item
        href="?about-us"
        target="_self"
        link-title="About Us"
      ></snt-nav-item>
      <snt-nav-item
        href="?fr"
        target="_self"
        link-title="Français"
      ></snt-nav-item>
    </snt-nav>
    <snt-nav slot="secondary-nav-mobile" id="secondary-nav-mobile">
      <snt-nav-item
        href="?contact-us"
        target="_self"
        linkTitle="Contact Us"
      ></snt-nav-item>
      <snt-nav-item
        href="?about-us"
        target="_self"
        linkTitle="About Us"
      ></snt-nav-item>
      <snt-nav-item
        href="?fr"
        target="_self"
        link-title="Français"
      ></snt-nav-item>
    </snt-nav>
    <snt-nav slot="primary-nav" id="main-nav" expander="keyboard">
      <snt-nav-item href="?insurance" target="_self" link-title="Insurance">
        <snt-nav-item
          href="?auto-insurance"
          target="_self"
          link-title="Auto"
        ></snt-nav-item>
        <snt-nav-item
          href="?home-insurance"
          target="_self"
          link-title="Home"
        ></snt-nav-item>
        <snt-nav-item
          href="?tenant-insurance"
          target="_self"
          link-title="Tenant"
        ></snt-nav-item>
      </snt-nav-item>
      <snt-nav-item
        href="?sonnet-connect"
        target="_self"
        link-title="Sonnet Connect"
      ></snt-nav-item>
      <snt-nav-item
        href="?claims"
        target="_self"
        link-title="Claims"
      ></snt-nav-item>
    </snt-nav>
  </snt-header>
)

export default Header
