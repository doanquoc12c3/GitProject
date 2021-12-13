let newProduct = undefined;
let productTable = document.getElementById('productBoard'), rIndex;
let totalRows = productTable.rows.length;
let row = undefined;
let cell1 = undefined;
let cell2 = undefined;
let cell3 = undefined;
let cell4 = undefined;
let rowPosition = undefined;
document.getElementById('productBoard').rows[1].cell[3].innerHTML= 'new'

function addNewProduct() {
    totalRows = productTable.rows.length;
    newProduct = document.getElementById('newProductBox').value;
    row = productTable.insertRow(totalRows);
    cell1 = row.insertCell(0)
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3)
    cell1.innerHTML = newProduct;

    cell2.innerHTML = "<button class='editButton' onclick='editProduct()'>Edit</button>"
    cell3.innerHTML = "<button class='deleteButton' onclick='deleteProduct()'>Delete</button>"
}

function editProduct() {


    for (var i = 1; i < productTable.rows.length; i++) {
        productTable.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            console.log(rIndex)
        }
    }
    function changeName() {
        var editProductName = prompt('nhap vao ten muon chinh sua');
        productTable.rows[rIndex].cells[0].innerHTML = editProductName;
    }
    setTimeout(changeName, 100)

}

function deleteProduct(){
    for (var i = 1; i < productTable.rows.length; i++) {
        productTable.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            console.log(rIndex)
        }
    }
    function eraseRow() {
        productTable.deleteRow(rIndex)
    }
    setTimeout(eraseRow, 100)
}