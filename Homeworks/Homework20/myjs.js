function Product(type, price) {
    this.type = type,
    this.price = price,
    this.getInfo = function() {
        return "Name: " + this.type + ", Price: " + this.price;
    }
}

    var p1 = new Product("Milk", "10");
    var p2 = new Product ("Bread", "8");
    var p3 = new Product ("HotDog", "12");
    var p4 = new Product ("HotCat", "15");

    console.log(p1.getInfo());
    console.log(p2.getInfo());
    console.log(p3.getInfo());
    console.log(p4.getInfo());

    //----------------------------------
    // Part2

    class Product 
    {
        constructor(type, price)
        {
            if (type !== undefined) 
            {

            }
        }
        fullInfo ()
    }