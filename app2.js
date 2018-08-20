var app2 = (function app2(){
   
   "use strict";
    var picture, name, price, description, add, table, stockData; 
    
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



    var count = 0;
        var ref = function(){
            return count = count + 1;
    };



    var createProduct = function(){
        var tableau = [];
        tableau.push(new Product(ref(), picture.value, name.value, price.value, description.value));
        //log(tableau);
        
        
        for (var i = 0; i < tableau.length; i++){   
           var tr = document.createElement("tr");
           table.appendChild(tr);              
        if (tableau[i].name === "" &&  tableau[i].price === ""){           
            alert ("champs vide(s) !")
            stockData = "<td>REFMUS" + tableau[i].ref + "</td><td></td><td></td><td></td><td></td><td><button class='btn edit'>Modifier</button></td><td><button class='btn rmv'>Supprimer</button></td>";      
        }
            else if(isNaN(tableau[i].price)) {
            alert ("champs 'prix' : veuillez entrer un nombre !") 
            stockData = "<td>REFMUS" + tableau[i].ref + "</td><td></td><td></td><td></td><td></td><td><button class='btn edit'>Modifier</button></td><td><button class='btn rmv'>Supprimer</button></td>";    
        }
        else stockData = "<td>REFMUS" + tableau[i].ref + "</td><td><img src='" + tableau[i].picture + "' class='vinyle'></td><td>" + tableau[i].name + "</td><td>" + tableau[i].price+" EUR" + "</td><td>" + tableau[i].description + /*"</td><td>" + tquantite[i] + "</td><td>" + totalPrice + " EUR" + */"</td><td><button class='btn edit'>Modifier</button></td><td><button class='btn rmv'>Supprimer</button></td>";
        
        };    
        //log(stockData);
        tr.innerHTML += stockData;
        getButtons();
    };




    var getButtons = function(){
        var rmv = document.querySelectorAll("button.btn.rmv");
        for (var j=0; j< rmv.length; j++){
            rmv[j].addEventListener("click", removeProduct);
        }
        log(rmv);

        var edit = document.querySelectorAll("button.btn.edit");
        for (var k=0; k < edit.length; k++){
            edit[k].addEventListener("click", editProduct);
        }
        log(edit);
    };



    var removeProduct = function(){
        this.parentNode.parentNode.remove();
        log(this.parentNode);  // <td>....</td>
        log(this.parentNode.parentNode);  // <tr>....</tr>
    };


/*
    var editProduct = function(){
        this.parentNode.parentNode.innerHTML = "<td><input type='text' id='ref' disabled='disabled' value='auto'></td><td><input type='text' id='picture' placeholder='url img'></td><td><input type='text' id='name' placeholder='nom'></td><td><input type='text' id='price' placeholder='00.00 EUR'></td><td><input type='text' id='description' placeholder='description'></td><td><button class='btn valid'>Valider</button></td><td></td>"
        checkbuttonvalid();
    };


    var validEditProduct = function(){
        this.parentNode.parentNode.innerHTML = "<td>EUH</td><td>JE</td><td>NE</td><td>SAIS</td><td>PAS</td><td><button class='btn edit'>Modifier</button></td><td><button class='btn rmv'>Supprimer</button></td>";
        checkbutton();
    };

    var checkbuttonvalid = function(){
        var valid = document.querySelectorAll("button.btn.valid");
        for (var v=0; v<valid.length;v++){
            valid[v].addEventListener("click",validEditProduct);
        }
    }; 


*/


    var editProduct = function() {
        
        var row = this.parentNode.parentNode;
        
        var cell1 = row.cells[1];
        var cell2 = row.cells[2];
        var cell3 = row.cells[3];
        var cell4 = row.cells[4];


    
        var prompt1 = prompt("Merci de saisir une url img");
        var prompt2 = prompt("Merci de saisir un titre");
        var prompt3 = prompt("Merci de saisir un prix");
        var prompt4 = prompt("Merci d'ajouter une info");

        //prompt5 = prompt("Merci de saisir une quantité");
 
        cell1.innerHTML = "<img src='"+ prompt1+"' class='vinyle'>";
        cell2.innerHTML = prompt2;
        cell3.innerHTML = prompt3 + " EUR";
        cell4.innerHTML = prompt4;

        /*
        this.parentNode.parentNode.innerHTML = "<td></td><td><img src ='" + prompt1 + "'></td><td>" + prompt2 + "</td><td>" + prompt3 + " EUR</td><td>" + prompt4 + "</td><td><button class='btn edit'>Modifier</button></td><td><button class='btn rmv'>Supprimer</button></td>";
       checkbutton();*/
           
    };





    var start = function(){

        table = document.getElementById("table");
        picture = document.getElementById("picture");
        name = document.getElementById("name");
        price = document.getElementById("price");
        description = document.getElementById("description");
        add = document.getElementById("add");
        add.addEventListener("click", createProduct)
    
    };


    window.addEventListener("DOMContentLoaded", start);
}());
