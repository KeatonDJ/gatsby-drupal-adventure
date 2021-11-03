const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type node__textile implements Node {
        field_textile_type: String
      }
    `
    createTypes(typeDefs)
  }

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const textiles = await graphql(`
        {
            allNodeTextile {
                nodes {
                    id
                    title
                    status
                    path {
                        alias
                    }
                }
            }
        }
    `);

    textiles.data.allNodeTextile.nodes.map(textileData => {
        if (textileData.status) {
            createPage({
                path: textileData.path.alias,
                component: path.resolve('src/templates/textiles.js'),
                context: {
                    TextileId: textileData.id
                }
            })    
        }
    })
}
