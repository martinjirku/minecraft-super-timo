import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkinList from "../components/skin-list"
import SkinListItem from "../components/skin-list-item"
import configs from "../content/skin-details.yml"
import { selectSkins, mergeConfigsToSkins } from "../utils/skins"

const IndexPage = ({ data }) => {
  const skins = mergeConfigsToSkins(selectSkins(data), configs)
  return (
    <Layout>
      <SEO title="Domov" />
      <h1>Čaute!</h1>
      <p>
        Vitajte na mojich stránkach. Vyberte si z pripravených skinov, ktoré som
        sám vytvoril.
      </p>
      <SkinList>
        {skins.map(i => {
          return (
            <SkinListItem
              key={i.name}
              name={i.name}
              title={i.title}
              source={i.source}
              description={i.description}
            />
          )
        })}
      </SkinList>
    </Layout>
  )
}
export const query = graphql`
  {
    skins: allFile(filter: { relativeDirectory: { eq: "skins" } }) {
      edges {
        node {
          childImageSharp {
            id
            original {
              src
            }
          }
          name
        }
      }
    }
  }
`

export default IndexPage
