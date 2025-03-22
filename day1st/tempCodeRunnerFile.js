console.log('request aaya');
        switch(req.method){
            case 'GET':
                {
                    if(req.url ==='/') return res.end('homepade')
                    if(req.url ==='/about') return res.end('about')
                    if(req.url ==='/contact-us') return res.end('about-us')
                }
        }
        
        res.end('ye lo response')