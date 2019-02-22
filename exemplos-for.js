//para cada item dentro de "items"

data["items"].forEach(function(item) {
  console.log("foreach", item);
});

// for para filtrar por preços

  for (i in data["items"]){
    if (data["items"][i]["product"]["price"]["value"] > 2000) {
      console.log(data["items"][i]["product"]["price"]["value"]);
    }
  }
    // console.log(data["items"][i]["product"]["price"]);

    // console.log("cansei", data["items"][i]);

    //console.log("index", data["items"][2])

//map para trazer

function getPrices(){
  return data["items"].map(p => p.product.price.value)  
}

data["items"].map(produto => {
  console.log(produto["product"]["id"])
})

//fazer filtro com filter

data["items"].filter(produto => (produto["product"]["price"]["value"] > 3000));


//fazendo isso tudo ficar funcional

function getProducts(){
  return data["items"];
}

console.log("get product", getProducts([2]));


