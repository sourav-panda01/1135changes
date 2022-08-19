console.log("Hrloo")

function getdata(e){
    e.preventDefault()
    var name_of_expense=document.getElementById('name').value
    var email=document.getElementById('email').value
    var purpose=document.getElementById('purpose').value
    var amount=document.getElementById('amt').value
    console.log(name_of_expense,email,purpose,amount);
    axios.post('https://crudcrud.com/api/19f0bcb62b4c47a9ab44f6176f6bba6d/users/',{
        "Expense Name":name_of_expense,
        "Email":email,
        "Purpose for money spent":purpose,
        "Amount":amount,

    })
    .then(res=>console.log("sucessful",res))
    .catch(err=>console.log(err))
};

//button creation
//onclick of button
//create element
//create variable and store create element
//create a variable add inner html as text and store it
//append that variable
//append child in div

