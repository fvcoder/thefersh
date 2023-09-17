const Parser = require('rss-parser')
const fs = require('fs')
const path = require('path')
const parser = new Parser()

const getFeed = (url) =>
  parser.parseURL(url)


async function main() {
    const blog = await getFeed('https://fvcoder.com/blog/feed')
    const project = await getFeed('https://fvcoder.com/project/feed')
    
    const template = fs.readFileSync(path.join(__dirname, 'README.md.tpl')).toString()
    
    const lastArticles = blog.items.slice(0, 5)
        .map(({ title, guid }) => `- [${title}](${guid})`)
        .join('\n')

    const lastProject = project.items.slice(0, 5)
        .map(({ title, guid }) => `- [${title}](${guid})`)
        .join('\n')

   
   const readme = template
    .replace('%{{latest_articles}}%', lastArticles)
    .replace('%{{latest_project}}%', lastProject)

   fs.writeFileSync(path.join(__dirname, '../README.md'), readme)
}

main()
