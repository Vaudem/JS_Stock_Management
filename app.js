
    "use strict";
    var addProduct,change,editProduct,del,displayStock,i,j,log,Product,prompt1, prompt2, prompt3, prompt4,ref,removeProduct,start,stockData,table,tname,totalPrice, totalQuantite,tdescription,tpicture,tref,tprice, tquantite;

    log = function(data){
        console.log(data);
    };


    tref = [];
    tpicture=[];
    tname = [];
    tprice = [];
    //tquantite = [];
    tdescription = [];



    // tpic, tdescription, tquantity...


    addProduct = function(){
        tref.push(document.getElementById("ref").value);    //pas besoin si réf. automatiquement générée ...
        tpicture.push(document.getElementById("picture").value);
        tname.push(document.getElementById("name").value);
        tprice.push(document.getElementById("price").value);
        tdescription.push(document.getElementById("description").value);
        //tquantite.push(parseInt(document.getElementById('quantite').value));
        
        displayStock();   //on callback displayStock() pour ajouter notre produit
    };


    


    displayStock = function(){
        
        stockData = "<table id='table'><tr><th>Référence</th><th>Aperçu</th><th>Nom</th><th>Prix</th><th>Description</th></tr>";   
        //stockData = "<table id='table'><tr><th>Référence</th><th>Aperçu</th><th>Nom</th><th>Prix</th><th>Quantité</th><th>Total</th></tr>";
        
        
        totalPrice = 0;
        totalQuantite = 0;
        for (i = 0; i < tref.length; i++){   
            //totalPrice += tquantite[i] * tprice[i];
            //totalQuantite += tquantite[i];                          
        if (tname[i] == "" &&  tprice[i] == ""){
            
            alert ("champs vide(s) !")
        }
            else if(isNaN(tprice[i])) {
            alert ("champs 'prix' : veuillez entrer un nombre !")     
        }
            
        else stockData += "<tr><td>" + "REFMUS" + i + "</td><td><img src='" + tpicture[i] + "' class='vinyle'></td><td>" + tname[i] + "</td><td>" + tprice[i]+" EUR" + "</td><td>" + tdescription[i] + /*"</td><td>" + tquantite[i] + "</td><td>" + totalPrice + " EUR" + */"</td><td><button onclick='editProduct("+i+")' class='btn'>Modifier</button></td><td><button onclick='removeProduct("+i+")' class='btn'>Supprimer</button></td></tr>";
        };
        stockData += "</table>";
        //stockData += "<tr><td></td><td><img src='https://media.giphy.com/media/idKFx1AUCg1Yk/giphy.gif' class='vinyle'></td><td></td><td></td><td>" + totalQuantite + "</td><td>" + totalPrice + " EUR</td></tr></table>";      

        log(stockData);
        document.getElementById("stock").innerHTML = stockData;  
         
    };



    var count = 0;
    var ref = function(){
        return count = n + 1;
    };




    removeProduct = function(p){

        tref.splice(p, 1);   
        tpicture.splice(p, 1); 
        tname.splice(p, 1);
        tprice.splice(p, 1);
        tdescription.splice(p, 1);
        //tquantite.splice(p, 1);
        displayStock(); // on callback displayStock() pour supprimer notre produit (et afficher)
    };


    

    // Array.splice() pour supprimer/ajouter élément d'un tableau... 
    // ex : var t = ["a","c","d"]
    // t.splice(1, 0, "b")   ->  à partir de l'index 1, on ne supprime rien(0) mais on insère "b" 
    // ["a","b","c","d"]
    // t. splice(3,1)  ->  à partir de l'index 3, on supprime 1 élément   ===>  ["a","b","c"]



   


 

    editProduct = function(r) {
        table = document.getElementById("table");
        
        prompt1 = prompt("Merci de saisir une url img");
        prompt2 = prompt("Merci de saisir un titre");
        prompt3 = prompt("Merci de saisir un prix");
        prompt4 = prompt("Merci d'ajouter une info");

        //prompt5 = prompt("Merci de saisir une quantité");
 
        table.rows[1+r].cells[1].innerHTML = "<img src='"+ prompt1+"' class='vinyle'>";
        table.rows[1+r].cells[2].innerHTML = prompt2;
        table.rows[1+r].cells[3].innerHTML = prompt3 + " EUR";
        table.rows[1+r].cells[4].innerHTML = prompt4;
        //table.rows[1+r].cells[5].innerHTML = prompt3 * prompt5 + " EUR";

        // 1 + r pour ne pas prendre en compte le <th>
           
    };




    start = function(){
        document.getElementById("add").addEventListener("click", addProduct); 
      
    };


    window.addEventListener("DOMContentLoaded", start);

