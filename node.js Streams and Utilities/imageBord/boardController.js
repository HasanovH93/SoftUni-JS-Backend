function homePage(req,res) {
    res.write('Home Page')
    res.end()
       
}

function sendFile(req,res){
    res.write('Static File')
    res.end()
}

module.exports = {
    homePage,
    sendFile
}