// function makeAdder(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// var x = makeAdder(5);
// var y = makeAdder(20);
//  // ?
// y(7); // ?
// console.log(x(6));
function makeProd(name, amount, cost){
   
        this.name = name;
        this.cost = cost;
        this.amount = amount;
        this.fullName = function(){
            return 'Name prod: ' + this.name + ', Cost per one item: ' + this.cost;
        };
        this.fullNamee = function(){
            return 'Name prod: ' + this.name + ', Amount of prod: ' + this.amount +', Total price: ' + this.cost*this.amount;
        }
    }



s = new makeProd("Cucumber",2,3);
console.log(s.fullName());                           
console.log(s.fullNamee());
