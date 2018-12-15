var mysql = require("mysql");
var inquirer = require("inquirer");

var conc = mysql.createConnection({
    hostname:"localhost",
    port:3306,
    user:"root",
    password:"Root@2019@",
    database:"bamazon"
});

conc.connect(function(err){

    if(err){
        return console.log(err);
    }  

    //connect query function 
    querydbbamazon();

});

function querydbbamazon(){

    console.log("--------------------------------");
    console.log("Welcome to BAmazon Store Front");
    console.log("--------------------------------");

    conc.query("SELECT * FROM products", function(err,res){

        if (err){
            return console.log(err);
        }

        for (var i = 0; i < res.length; i++){

            console.log(res[i].item_id+"| " + res[i].product_name + "| Price > "+ res[i].price);
        }
        menu();
    });

//prompt questions using inquirer module. 

var menu = function(){
    inquirer.prompt([
        {
            type:"list",
            message: "Please select option below:",
            choices:["What Item you want to Buy?","Exit"],
            name:"choice"
        }
    ]).then(function(res){

        switch (res.choice){
            case("Exit"):
            connection.end();
            return;
            case("What Item you want to Buy?"):
            buyItem();
            break;
        }
    });
};

var buyItem = function(){
    inquirer.prompt([
        {
            type:"input",
            message:"Enter the item id of product you want to buy",
            name:"item"
        }, {
            type:"number",
            message:"How many do you want to buy?",
            name:"stock_quantity"
        }
    ]).then(function(args){
        conc.query("Select stock_quantity,price,product_name FROM products WHERE item_id = ?", [args.item], function(err, res){
            var numSold = args.stock_quantity;
            var tcost = res[0].price * numSold;
            var newQuantity = parseInt(res[0].stock_quantity - numSold);

            if (err){
                return console.log(err);
            }

            if (res[0].stock_quantity < args.stock_quantity){
                return console.log("Insufficient quantity!");
            }
            conc.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [newQuantity, args.item]);
            console.log(" Your order of " + numSold + " units of " + res[0].product_name + "has been placed in order.")
            console.log("Your Total Cost: " + tcost);
            conc.end();
        })
    })

}

}