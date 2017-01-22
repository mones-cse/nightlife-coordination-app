module.exports =function(app,request_yelp){
    app.get('/',function(req,res){
    res.render('home',{data:''});
    });

    app.post('/',function(req,res){
        console.log(req.body.searchTerm);
        var custom_parameters = {
            location: req.body.searchTerm,
            sort: '2'
        }
        request_yelp(custom_parameters, function(error, response, body){
        if(error){
                throw error;
            }
            var temp =JSON.parse(body) ;
            var arr =[];
            if(temp.error){
                res.render('home',{data:''});
            }else{
                for(var i=0;i<temp.businesses.length;i++){
                arr.push({
                    name:temp.businesses[i].name,
                    url:temp.businesses[i].url,
                    snippet_text:temp.businesses[i].snippet_text,
                    image_url:temp.businesses[i].image_url,
                    counter:0
                });
              }
                res.render('home',{data:arr});
            } 
        });
    });

}