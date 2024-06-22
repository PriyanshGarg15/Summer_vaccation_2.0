/*http stands for hypertext tranfer prototcol 
there are actually some steps on which thois request and response actually works based on http protocol
1)client opens up connection with server
2)clienrs requests for resource to server
3)server will process the request
4)server will send response to the client
5)client will close the connection with the server


a request oion http can be of many different types
the common ones are
get-->done when we want some infgormation from the server
post-->to store/some thing to server that need to stored at server*/
/* also one more difference is that -
in get message get revelased while oin post message is safe and not gets revealed */
/*we also have delte patch put etc.. http requests */



// after request we have response
/*if resposnse code is 200--succes request
                       401-unauthorized reuest 
                       404-inavlid request*/


//http is stateless protocol i.e each reuqest to server isd treated to be a new client request i.e server 
// dont request client who has requested to the server
// ajax used http as its protocol