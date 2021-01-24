'use strict'







//This is not used, couldnt bear to delete since i'll never get this 4 hours of my like back XD//












// ck = "cookie"


var hrsOfOp = ['6am','7am','8am', '9am', '10am', '11am', '12am','1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];


//'tokyo', 'dubai','paris','lima'


var seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCk: 6.3,
  array: [],
  
  generateCust: function (){

    //var ckArray = [];
    var ckTtl = 0;

  for (var i = 0 ; i < hrsOfOp.length - 1 ; i++){ 
    //console.log(minCust, maxCust);
    var cksForHr = Math.floor((Math.random() *(this.maxCust - this.minCust + 1) + this.minCust));
    ckTtl = ckTtl + cksForHr;
    //console.log(ckTtl);

    this.array.push(cksForHr);
    //console.log(this); 
    }
    this.array.push(ckTtl);
    return this.array;
    //this.array = ckArray;
    
  },
   
    
  }
seattle.array = seattle.generateCust();




var tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCk: 1.2,
  array: [],
  
  generateCust: function (){

    //var ckArray = [];
    var ckTtl = 0;

  for (var i = 0 ; i < hrsOfOp.length - 1 ; i++){ 
    //console.log(minCust, maxCust);
    var cksForHr = Math.floor((Math.random() *(this.maxCust - this.minCust + 1) + this.minCust));
    ckTtl = ckTtl + cksForHr;
    //console.log(ckTtl);

    this.array.push(cksForHr);
    //console.log(this); 
    }
    this.array.push(ckTtl);
    return this.array;
    //this.array = ckArray;
    
  },
   
    
  }
tokyo.array = tokyo.generateCust();
// console.log(seattle.array);

var cityName = ['seattle', 'tokyo' ]

// function printList(cityName, i){
  console.log(cityName)
  var divElement = document.getElementById('shops');

  var h2Element = document.createElement('h2');
  divElement.appendChild(h2Element);

  h2Element.textContent = cityName;

  var ulElement = document.createElement('ul');
  divElement.appendChild(ulElement);

  for (var i = 0; i < hrsOfOp.length; i++){
      
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = hrsOfOp[i] + ':' + seattle.array[i] +'cookies '
}
 

// for (var i = 0; i< cityName.length; i++){
//   printList(cityName[i], i)


//var liElement = document.createElement('li');
//ulElement.appendChild(liElement);




