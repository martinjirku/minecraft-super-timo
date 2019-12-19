export const selectSkins = data =>
  data.skins.edges.map(({ node }) => {
    return {
      source: node.childImageSharp.original.src,
      name: node.name,
    }
  })

const getMap = l =>
  l.reduce((f, s) => {
    f[s.name] = s
    return f
  }, {})

export const mergeConfigsToSkins = (skins, configs) => {
  const skinsMap = getMap(skins)
  const configsMap = getMap(configs)
  return skins.map(({ name }) => {
    return {
      ...skinsMap[name],
      ...configsMap[name],
    }
  })
}
