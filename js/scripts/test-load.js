fetch("../js/data/test.json").then(function(resp){
    return resp.json();
})
.then(function(data){
    console.log(data.title)
    document.getElementById("card-title").innerHTML = data.title
    document.getElementById("card-content").innerHTML = data.content
    document.getElementById("link1").innerHTML = data.link1
    document.getElementById("link2").innerHTML = data.link2
});