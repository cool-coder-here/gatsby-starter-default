import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Welcome to the Page of Quotes.</h1>
    <p>Quotes Page</p>
  <p>
  <h3>Dreams</h3>
  <p>A man without a dream is dead inside.</p>
  </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
