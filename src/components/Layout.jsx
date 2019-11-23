import React from "react"

import { Helmet } from "react-helmet"
import Header from "./Header.jsx"
import CallingCard from "./CallingCard.jsx"

import "../styles/app.css"

export default ({ noBorder, children }) => (
  <React.Fragment>
    <Helmet
      title={"Alex's Website"}
      meta={[
        { name: "description", content: "Alex Barkin's Personal Website" },
        { name: "keywords", content: "alex, barkin, blog, developer" },
      ]}
    ></Helmet>
    <Header />
    <main
      className={noBorder ? "container--main--no-border" : "container--main"}
    >
      {children}
    </main>
    <footer>
      <CallingCard />
    </footer>
  </React.Fragment>
)