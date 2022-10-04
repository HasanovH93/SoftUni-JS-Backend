const http = require("http").createServer((req, res) => {
    if(req.url == '/'){
       action(req,res)
    } else {
      res.write("404");
      res.end();
    }
  }).listen(3000);
  
  const sessions = {}

  function action(req,res){
    const cookies = parseCookies(req);
    const sessionId = cookies.session || (Math.random() * 9999).toString(16);
    const session = sessions[sessionId] || {};
    
    session.visited = (session.visited || 0) + 1;

    session[sessionId] = session;

  res.writeHead(200, [
    "Set-Cookie", `SessionId=${sessionId}; httpOnly`,
    "Set-Cookie", 'theme=dark',
  ]);
  res.write(`<p>Hello</p><p>Ypu have visited the page ${session.visited} times`);
  res.end();
  }
  function parseCookies(req){
        if (req.headers.cookie) {
          const cookies = Object.fromEntries(req.headers.cookie
              .split(";")
              .map((c) => c.trim())
              .map((c) => c.split("="))
          );
          console.log(cookies);
          return cookies;
        }
        return {};
  }