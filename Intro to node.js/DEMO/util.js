function html(body, title = "Demo Page") {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <title>${title}</title>
       </head>
    <body>
    <ul>
    <li><a href="/">Home<a></li>
    <li><a href="/about">About<a></li>
    <li><a href="/catalog">Catalog<a></li>
    <li><a href="/create">Create<a></li>
    
    </ul>
    
    
       ${body}
    </body>
    </html>`;
}

const data = [
    {
        id: 'asdf001',
        name: 'Product 1',
        color: 'red'
    },
    {
        id: 'asdf002',
        name: 'Product 2',
        color: 'orange'
    },
]

module.exports = {
    html,
    data,
}