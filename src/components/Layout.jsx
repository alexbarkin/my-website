import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from './Header.jsx'
import CallingCard from './CallingCard.jsx'

import '../styles/app.css';

export default ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
                title
                menuLinks {
                    name
                    link
                }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Helmet
            title={"Alex's Website"}
            meta={[
              { name: 'description', content: "Alex Barkin's Personal Website" },
              { name: 'keywords', content: 'alex, barkin, blog, developer' },
            ]}
          >
          </Helmet>
        <Header/>
        <main className="container--main">
            {children}
        </main>
        <footer>
            <CallingCard />
        </footer>
        </React.Fragment>
      )}
    />
)