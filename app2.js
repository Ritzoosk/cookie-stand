'use strict'
// ck = "cookie"
//This is thanks to Matt 
var elementTarget = document.getElementById('tableStart');
var table = document.createElement('table');
elementTarget.appendChild(table);
var tableHead = document.createElement('thead');
table.appendChild(tableHead);
var tableBody = document.createElement('tbody');
table.appendChild(tableBody);

//Global Hours array + total//
var standArray = [];
var hrsOfOp = ['6am','7am','8am', '9am', '10am', '11am', '12am','1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

//TABLE HEADER//
var tableTopLine = document.createElement('th');
tableTopLine.textContent = " ";
  tableHead.appendChild(tableTopLine);
for (var i=0; i< hrsOfOp.length; i++){
  var tableTopLine = document.createElement('th');
  tableTopLine.textContent = hrsOfOp[i];
  tableHead.appendChild(tableTopLine);
}

//City data storing CONSTRUCTOR//
function CityStore(name, minCust, maxCust, avgCk,){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCk = avgCk;
  this.array = [];
  this.genRndCust();
  standArray.push(this);
  this.printTable();
}

//Method for rndm # (and total cookies @[15]) generation store in "name.array"//
CityStore.prototype.genRndCust = function(){
  var ckTtl = 0;
  for (var i = 0; i < hrsOfOp.length - 1 ; i++){ 
    var cksForHr = Math.floor((Math.random() *(this.maxCust - this.minCust + 1) + this.minCust) * this.avgCk);
    ckTtl += cksForHr;
    this.array.push(cksForHr);
  }
  this.array.push(ckTtl);
}

//Print data to table//
CityStore.prototype.printTable = function(){
  var row = document.createElement('tr')
  var nameCell = document.createElement('td')
  tableBody.appendChild(row);
  nameCell.textContent = this.name;
  row.append(nameCell);
  for (var i=0; i< hrsOfOp.length; i++){
    var dataCell = document.createElement('td');
    dataCell.textContent = this.array[i];
    row.appendChild(dataCell);
  }
}

//Construct OBJs, run random # cook-per-hour array with cookie ttl at end//
var seattle = new CityStore('Seattle', 23, 65, 6.3,);
var tokyo = new CityStore('Tokyo', 3, 24, 1.2,);
var dubai = new CityStore('Dubai', 11, 38, 3.7,);
var paris = new CityStore('Paris', 20, 38, 2.3,);
var lima = new CityStore('Lima', 2, 16, 4.6,);
var tableFoot = document.createElement('tfoot');
  tableFoot.setAttribute("id", "table-footer"); 
  table.appendChild(tableFoot);
  var footRow = document.createElement('tr');
  footRow.textContent = "Totals"
  tableFoot.appendChild(footRow);
  var hourlyTotals = 0;
  for (var i =0; i < hrsOfOp.length; i++){
    hourlyTotals = 0;
    for(var j =0; j < standArray.length; j++){
      var grabNum = standArray[j].array;
      hourlyTotals += grabNum[i];
    }
    var footCell = document.createElement('td');
    footCell.textContent = hourlyTotals;
    footRow.appendChild(footCell);
  }

  //EVENT SUFF//
var formSubmit = document.getElementById('newStand');
formSubmit.addEventListener('submit', function (event) {
  event.preventDefault();
  var name = event.target.loc.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCk = parseInt(event.target.avgCk.value);
  new CityStore(name, minCust, maxCust, avgCk);
  footerMaker();
});

//Table footer with totals//
function footerMaker(){
  var targetOldFoot = document.getElementById('table-footer');
  targetOldFoot.parentNode.removeChild(targetOldFoot);
  var tableFoot = document.createElement('tfoot');
  tableFoot.setAttribute("id", "table-footer"); 
  table.appendChild(tableFoot);
  var footRow = document.createElement('tr');
  footRow.textContent = "Totals"
  tableFoot.appendChild(footRow);
  var hourlyTotals = 0;
  for (var i =0; i < hrsOfOp.length; i++){
    hourlyTotals = 0;
    for(var j =0; j < standArray.length; j++){
      var grabNum = standArray[j].array;
      hourlyTotals += grabNum[i];
    }
    var footCell = document.createElement('td');
    footCell.textContent = hourlyTotals;
    footRow.appendChild(footCell);
  }
}
