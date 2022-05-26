const { Server } = require("http");

const Content = (req,res) =>{
    const url = req.url;
    const method = req.method;
    if(url == '/profile'){
        res.setHeader('Content-Type','text/html');
        res.write('This is profile page!');
        return res.end();
    }
    else if(url =='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<h1>Hello world!</h2>');
        return res.end();
    }
    else if(url == '/settings' && method == "POST"){
        res.setHeader('Content-Type','text/html');
        res.write('<h1>FORM WAS SUBMITTED!</h1>');
        return res.end();
    }
    else if(url == '/settings'){
        res.setHeader('Content-Type','text/html');
        res.write('<h1>SETTINGS</h1><form action ="/settings" method ="POST"><input type ="text"><button type ="submit">Submit</button></form>');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('not found!');
    res.end();
}
module.exports = Content;