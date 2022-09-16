function handleRequest(req, res) {
  if (req.url == "/favicon.ico") {
    res.writeHead(404);
    res.write("404 Not Found");
    res.end;
  }

  if (req.method == "GET") {
    //Show Image Board
  } else if (req.method == "POST") {
    //handle image submission
  } else {
    res.writeHead(404);
    res.write("404 Not Found");
    res.end;
  }
}

module.exports = {
  handleRequest,
};
