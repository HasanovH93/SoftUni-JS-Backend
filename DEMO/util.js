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
    
    </ul>
    
    
       ${body}
    </body>
    </html>`;
}

module.exports = {
    html,
}