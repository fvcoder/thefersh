const Parser = require('rss-parser')
const fs = require('fs')
const path = require('path')
const parser = new Parser()

const getArticlesFromBlog = () =>
  parser.parseURL('https://thefersh.com/api/feed')


async function main() {
    const article = await getArticlesFromBlog()
    const template = fs.readFileSync(path.join(__dirname, 'README.md.tpl')).toString()

    const lastArticles = article.items.slice(0, 5)
        .map(({ title, link }) => `- [${title}](${link})`)
        .join('\n')

   
   const readme = template.replace('%{{latest_articles}}%', lastArticles)

   fs.writeFileSync(path.join(__dirname, '../README.md'), readme)
}

main()
