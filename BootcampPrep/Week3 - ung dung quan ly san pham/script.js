let newProduct = undefined;
let productTable = undefined;
let totalRows = undefined;
let row = undefined;
let cell1 = undefined;
let cell2 = undefined;
let cell3 = undefined;
let cell4 = undefined;


function addNewProduct() {
    productTable = document.getElementById('productBoard');
    totalRows = document.getElementById('productBoard').rows.length;
    newProduct = document.getElementById('newProductBox').value;
    row = productTable.insertRow(totalRows);
    cell1 = row.insertCell(0)
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3)
    cell1.innerHTML = newProduct;
    cell2.innerHTML = "<button class='editButton' onclick='editProduct(this)'>Edit</button>"
    cell3.innerHTML = "<button class='deleteButton'>Delete</button>"
}

function editProduct(rowInfo){
    var editProductName = prompt('nhap vao ten muon chinh sua')
    var rowPosition = rowInfo.rowIndex;
    productTable.rows[rowPosition].cells[0].innerHTML = editProductName;
    // for(i=0;i<totalRows;i++){
    //     for(j=0;j<4;j++){
    //         productTable.rows[i].cells[j].innerHTML =
    //     }
    // }
}

