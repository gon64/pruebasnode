const fs = require('fs');

fs.writeFile('./texto.txt',"linea uno", function(err){
    if (err) {
        console.log("archivo no creado");
    } else {
        console.log("archivo creado");
    }
});

console.log("ultima linea de codigo");