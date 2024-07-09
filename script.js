let  user1  =  {
    name:  "Calvin",
    surname:  "Hart",
    age:  66,
    email:  "CalvinMHart@teleworm.us"
};

let  user2  =  {
    name:  "Mateus",
    surname:  "Pinto",
    age:  21,
    email:  "MateusPinto@dayrep.com"
};

console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus
   
console.log(user1.age);  //  ->  66
user1.age  =  67;
console.log(user1.age);  //  ->  67
   
console.log(user2.phone);  //  ->  undefined
user2.phone  =  "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557

console.log(user2.surname); // Pinto

let bandas = []
console.log(bandas[0])

bandas[0] = "angra"
bandas[1] = "soad"
bandas[2] = "metallica"

console.log(bandas)

console.log(typeof bandas)

console.log(bandas instanceof Array)

console.log(bandas.length)

bandas[4] = "matanza"
console.log(bandas.length)
console.log(bandas)