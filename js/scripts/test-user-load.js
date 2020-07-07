fetch("../js/data/data-base.json").then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
            document.getElementById("id").innerHTML = "id: " + data[0].id
            document.getElementById("name").innerHTML = "name: " + data[0].name
            document.getElementById("age").innerHTML = "age: " + data[0].age
            document.getElementById("gender").innerHTML = "gender: " + data[0].gender
            document.getElementById("height").innerHTML = "height: " + data[0].height
            document.getElementById("weight").innerHTML = "weight: " + data[0].weight
            document.getElementById("profession").innerHTML = "profession: " + data[0].profession
            document.getElementById("hobby").innerHTML = "hobby: " + data[0].hobby.join(", ")
            document.getElementById("address").innerHTML = "address: " + data[0].address.street +" #"+ data[0].address.number + ", " + data[0].address.city 
        });
    
