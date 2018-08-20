var app2 = (function app2(){
   
   "use strict";
    var picture, name, price, description, add, table; 
    
    var log = function(data){
        console.log(data);
    };



    var Product = function(r, pi, n, pr, d){
        this.ref = r;
        this.picture = pi;
        this.name = n;
        this.price = pr;
        this.description = d;
    };


    var createProduct = function(){
        var tableau = [];
        tableau.push(new Product(ref(), picture.value, name.value, price.value, description.value));
        log(tableau);
        
        
        for (var i = 0; i < tableau.length; i++){   
           var tr = document.createElement("tr");
           table.appendChild(tr);              
        if (tableau[i].name == "" &&  tableau[i].price == ""){           
            alert ("champs vide(s) !")
        }
            else if(isNaN(tableau[i].price)) {
            alert ("champs 'prix' : veuillez entrer un nombre !")     
        }
            
        else var stockData = "<td>" + tableau[i].ref + "</td><td><img src='" + tableau[i].picture + "' class='vinyle'></td><td>" + tableau[i].name + "</td><td>" + tableau[i].price+" EUR" + "</td><td>" + tableau[i].description + /*"</td><td>" + tquantite[i] + "</td><td>" + totalPrice + " EUR" + */"</td><td><button class='btn edit'>Modifier</button></td><td><button class='btn rmv'>Supprimer</button></td>";
        };
        
        log(stockData);
        tr.innerHTML += stockData;
    };


    var removeProduct = function(){
        this.parentNode.remove();
    };



    var count = 0;
    var ref = function(){
        return count = count + 1;
    };

    
    


    var start = function(){

        table = document.getElementById("table");
        picture = document.getElementById("picture");
        name = document.getElementById("name");
        price = document.getElementById("price");
        description = document.getElementById("description");
        add = document.getElementById("add");
        add.addEventListener("click", createProduct)

        var rmv = table.querySelector("button .rmv");
        rmv.addEventListener("click", removeProduct);
        log(rmv);
        
        
    };


    window.addEventListener("DOMContentLoaded", start);
}());
