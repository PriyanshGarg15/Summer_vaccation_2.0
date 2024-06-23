/*everytime writiting
res.end("<h1>Gotcha</h1>")
is not feasible so we create different html file
and tell node js to read its data */


const http=require('http');
const port=8000;
const fs=require('fs');
function requestHandler(req,res)
{

    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'})
    fs.readFile('./a7_index.html',function(err,data)
    {
        if(err)
            {
                console.log('error',err);
                return res.end('<h1>Error!</h1>')
            }
        return res.end(data);
    })
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





// -------------------------------------------------------------


//More correct way to decline request except than root node 


// const http = require('http');
// const port = 8000;
// const fs = require('fs');

// // Request handler function
// function requestHandler(req, res) {
//     console.log(req.url);

//     // Check if the requested URL is the root
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });

//         // Read the HTML file
//         fs.readFile('./a7_index.html', function (err, data) {
//             if (err) {
//                 console.log('error', err);
//                 return res.end('<h1>Error!</h1>');
//             }
//             return res.end(data);
//         });
//     } else {
//         // Handle unsupported routes
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>404 Not Found</h1>');
//     }
// }

// // Create the server
// const server = http.createServer(requestHandler);

// // Start the server
// server.listen(port, function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("Server is up and running on port", port);
// });
