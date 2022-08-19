var shoppingCart = {
    'Shampoo': 100,
    'Soap': 30,
    'Towel': 200,
    'Water': 50
}
var total=0
var a=Object.keys(shoppingCart);
for(let i=0;i<a.length;i++){
    total+=a.values
}
console.log(total)
