const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');

exports.modifyWebpackConfig = ({ config, stage }) => {
  if(stage === 'develop' || stage === 'build-javascript' ){
    let expPath = __dirname + '/src/experiments/'
    let expDirs = fs.readdirSync(expPath).filter(file => fs.statSync(path.join(expPath, file)).isDirectory());
    let entry = {};
    for(let dir of expDirs)
      entry[`scripts/${dir}`] = `${expPath}${dir}/index.js`;

    config.merge({
      entry
    });

  } else if(stage === 'build-html'){
    // remove hashes for custom builds
    let dir = `${__dirname}/public/scripts/`;
    let expFiles = fs.readdirSync(dir).filter(file => file.indexOf('.js.map')===-1).map(file => {
      let f = file.replace(/(\-[a-zA-Z0-9]+\.js$)/, '.js');
      fs.renameSync(`${dir}${file}`, `${dir}${f}`);
    });
  }
}

function query(r){
  return `
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "${r}"} }
        sort: { fields: [frontmatter___date], order: DESC }, limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `
}

function createPageFromQuery(posts, component, createPage){
  _.each(posts, (post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const project = path.resolve('./src/templates/projects.js')
    const experiment = path.resolve('./src/templates/experiments.js')
    resolve(

      graphql(
        query("\/projects\\/(?!viz).+\\\\.md/")
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const posts = result.data.allMarkdownRemark.edges;
        if(posts.length === 0) return;
        createPageFromQuery(posts, project, createPage);
      })
    );

    // uncomment when there are viz projects
    // resolve(
    //   graphql(query("\/projects\\/viz/.+\\\\.md/")).then(result => {
    //     if (result.errors) {
    //       console.log(result.errors)
    //       reject(result.errors)
    //     }
    //     const posts = result.data.allMarkdownRemark.edges;
    //     createPageFromQuery(posts, experiment, createPage);
    //   })
    // );

  });
}


 exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
