var inputs = document.getElementsByClassName('form-control');
var containerDiv = document.getElementById('every');



var ordersContainer  ; 
if(localStorage.getItem("Orders") == null) 
{
    ordersContainer= [] ; 
} 
else 
{
    ordersContainer = JSON.parse(localStorage.getItem("Orders"))  ;
    displayOrders() ; 
}


function addOrder()
{
    var orderName = document.getElementById('inpname').value; 
    var orderPrice = document.getElementById('inpPrice').value; 
    var orderDate = document.getElementById('inpdate').value; 
    var orderNumber = document.getElementById('inpNumber').value; 
    var orderDesc = document.getElementById('inpDesc').value; 


    var order = 
    {
        name : orderName , 
        price : orderPrice, 
        date : orderDate ,
        number : orderNumber , 
        desc : orderDesc
    }

    ordersContainer.push(order) ; 
    localStorage.setItem(  "Orders" , JSON.stringify(ordersContainer))
    console.log(ordersContainer);
    clearForm(); 
    displayOrders(); 
}

function displayOrders()
{
    var container= `` ; 
    for(var i = 0 ; i < ordersContainer.length ; i++)
    {
        container += 
        `
        <div class="col-md-4">
        <div class="order text-center p-2 mb-5">  
        <img  class="img-fluid" src="images/order-img.jfif" alt="order image">
        <h3>`+ ordersContainer[i].name +` </h3>
        <h4> `+ ordersContainer[i].number +` </h4>
        <span class=" badge badge-info p-3"> `+ ordersContainer[i].price +` </span>
        <h3 class=" date"> `+ ordersContainer[i].date +`</h3>
        <p> `+ ordersContainer[i].desc +` </p>
        <button onclick="dleteOrder(`+ i +`)" class="btn btn-danger mb-4">Delte </button>
        </div>
      
        </div>
        `
    }
    containerDiv.innerHTML = container ;  
    console.log(containerDiv.innerHTML);
}

function clearForm()
{
    for(var i = 0 ; i<= inputs.length ; i++) 
    {
        inputs[i].value = " " ;
    }
}



function dleteOrder(index)
{
    var delted = ordersContainer.splice(index , 1 )
    localStorage.setItem(  "Orders" , JSON.stringify(ordersContainer))
    displayOrders(); 
}