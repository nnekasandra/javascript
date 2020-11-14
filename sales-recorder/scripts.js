const itemsRecord = document.createElement('table')
document.write(itemsRecord)
function addRow() {
    var table=document.getElementById("addTable");
    var rowCount=table.rows.length;
    var addRow = table.insertRow(rowCount);
    var cell1=addRow.insertCell(0);
    cell1.innerHTML=rowCount + 1;
    var cell2 = addRow.insertCell(1);
    var element=document.createElement("input");
    element.type="text";
    element.name="taxtbox";
    cell2.appendChild(element);
    }
    