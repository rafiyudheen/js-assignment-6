let index=0
let produtsList
let currentList

function loadProducts()
{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        produtsList=json
        currentList=produtsList
        // document.getElementById("productListHeading").innerText="Products"
        addToDOM()
    })

}

const btnSearch= document.getElementById("SerachButton")
btnSearch.addEventListener("click",()=>serachProducts())
let headerText="";


function serachProducts()
{
    
    const keyWord=document.getElementById("search").value.toUpperCase();
    // alert(keyWord)
    currentList=produtsList.filter(fileterProducts)
    //console.log(currentList)
    if(keyWord==="")
            headerText="Products"
        else
            headerText =`Serched for "${keyWord}"`
    

    document.getElementById("productListHeading").innerText=headerText;
    addToDOM();
    debugger
    alert(headerText);

    function fileterProducts(product){
        console.log(product.title)
        if(product.title.toUpperCase().includes(keyWord))
            return true
        else if (product.description.toUpperCase().includes(keyWord))
            return true
        else if(product.category.toUpperCase().includes(keyWord))
            return true
        else
            return false

    }
    
}



function addToDOM(){
let html=""
        //debugger           

        for(product of currentList)
        {

            index++
            html+=`                
                <li class="col-12 col-md-6 col-xl-4 col-xxl-3 mb-3">
                    <div class=" product-item">
                    <div style=" align-self: center; padding: 10px;">
                        <img src="${product.image}" alt="">
                    </div>
                    <div>
                        <p class="title" style="text-align: center;">${product.title}</p>
                        <p  
                            class="description" style="text-align: center; "> ${product.description} 
                        </p>
                        
                    </div>
                    <div >
                         <p class="mx-2 price" style=""> $${product.price}</p>
                         <div class="btn-group px-2 pb-2" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary">Add to Cart</button>
                            <button type="button" class="btn btn-warning">Buy Now</button>
                        </div>
                    </div>
                </div>
            </li>
            `
        }
        document.getElementById("product-div").innerHTML=html
    }
    loadProducts()