const http = require('http')

const server = http.createServer(function(req, res){
        console.log('request aaya');
        switch(req.method){
            case 'GET':6
                {
                    if(req.url ==='/') return res.end('homepage')
                    if(req.url ==='/about') return res.end('about')
                    if(req.url ==='/contact-us') return res.end('about-us')
                }
            case 'POST':
                {
                    if(req.url ==='/') return res.end('homepage')
                    if(req.url ==='/about') return res.end('about')
                    if(req.url ==='/contact-us') return res.end('about-us')
                }
            }
        
        res.end('ye lo response')
        
});

server.listen(8000, (params) => {
  console.log('Server started');
})