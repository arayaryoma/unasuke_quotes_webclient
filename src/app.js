var endpoint = 'https://unasuke-quotes-webapi.herokuapp.com'
var instance = axios.create({
    "baseURL": endpoint,
    "headers" : {
        "Access-Control-Allow-Origin": "*"
    }
})


instance.get('/')
.then((res) => {
    console.log(res.data)
    document.getElementById("text").innerHTML= res.data.tweet_text;
    document.getElementById("link").href = 'https://twitter.com/yu_suke1994/status/' + res.data.tweet_id;
    document.getElementById("link").innerHTML = 'https://twitter.com/yu_suke1994/status/' + res.data.tweet_id;
});

