const http=require('http');
const port=8000;

function requestHandler(req,res)
{

    console.log(req.url);

    res.end("gotcha")
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


//for output see immage 2