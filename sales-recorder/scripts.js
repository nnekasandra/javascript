// Funtion that allows users add rows and update table
function addRow() {
    var table=document.getElementById("addTable");
    var rowCount=table.rows.length;
    var addRow = table.insertRow(rowCount);
    var cell1=addRow.insertCell(0);
    cell1.innerHTML= rowCount++;
    var cell2 = addRow.insertCell(1);
    var element=document.createElement("input");
    element.type="text";
    element.name = 'item-name';
    var cell3 = addRow.insertCell(2);
    var element2 = document.createElement('input');
    element2.type = 'number';
    element2.min = 10;
    element2.name = 'cost-price';
    var cell4 = addRow.insertCell(3)
    var element3 = document.createElement('input');
    element3.type = 'number';
    element3.name = 'selling-price';
    element3.min = 10;
    cell2.appendChild(element);
    cell3.appendChild(element2)
    cell4.appendChild(element3)
    }


    // code that will calculate for the total cost price
    var totalCostPrice = document.getElementsByName('cost-price')
    var totalSellingPrice = document.getElementsByName('selling-price')
    var sumCost = 0;
    var sumSell = 0;
    const calculate = () =>{
        // loop that iterate through items in the input and sums them up 
        for(var i = 0; i<totalCostPrice.length; i++){
            sumCost += parseFloat(totalCostPrice[i].value)
        }
        for(var i = 0; i<totalSellingPrice.length; i++){
            sumSell += parseFloat(totalSellingPrice[i].value)
        }
        var profit = sumSell - sumCost;
        function profitCheck (){
            if (profit>0){
                document.write('You made a profit of ' + profit + ' today!')
            }else{
                document.write('You made a loss of ' + profit + ' today!')
            }
        }
        profitCheck();
    }







    /*function addRow() {
        var table=document.getElementById("addTable");
        var rowCount=table.rows.length;
        var addRow = table.insertRow(rowCount);
        var cell1=addRow.insertCell(0);
        cell1.innerHTML=rowCount + 1;
        var cell2 = addRow.insertCell(1);
        var element=document.createElement("input");
        element.type="text";
        element.name="taxtbox";
        var cell3 = addRow.insertCell(2);
        var element2 = document.createElement('input');
        element.type = 'number';
        element.name = 'item-price'
        cell2.appendChild(element);
        }*/