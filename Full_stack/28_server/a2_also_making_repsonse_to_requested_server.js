const http=require('http');
const port=8000;

function requestHandler(req,res)
{
    console.log(req.url);
}

const server=http.createServer(requestHandler);
server.listen(port,function(err)
{
    if(err)
        {
            console.log(err)
            return;
        }
    console.log("server is up and running on port",port);
})

//see iamge 1 to see if we add any url in front of
// http://localhost:8000 suppose http://localhost:8000/home
// then these rersposne url will be seen in terminal
//still we havent send any repsosne but we are getting resposne in out terminal of the request made