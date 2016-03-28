var endpoint = 'http://localhost:3000';
var instance = axios.create({
    "baseURL": "http://localhost:3000",
    "headers": {
        "Access-Control-Allow-Origin": "*"
    }
});

instance.get('/').then(res => {
    console.log(res.data);
    document.getElementById("text").innerHTML = res.data.tweet_text;
    document.getElementById("link").href = 'https://twitter.com/yu_suke1994/status/' + res.data.tweet_id;
    document.getElementById("link").innerHTML = 'https://twitter.com/yu_suke1994/status/' + res.data.tweet_id;
});