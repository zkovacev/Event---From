// //ex4, ex3

let dogs = [];

let nameInput = document.querySelector('#name');
let colorInput = document.querySelector('#color');
let table = document.querySelector('table');
const btn = document.querySelector('button');

//ex4
class Dog {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}


const addDogs = () => {
    let name = nameInput.value,
        color = colorInput.value;
    if (name && color) {
        // ex1
        // let dog = {
        //     name: name,
        //     color: color
        // }
        // ex4
        const dog = new Dog(name, color);

        let tr = table.insertRow();
        
        let td1 = tr.insertCell(0);
        let td2 = tr.insertCell(1);

        td1.innerText = dog.name;
        td2.innerText = dog.color;

        dogs.push(dog);
   
   
        ;

        console.log(dogs);
        nameInput.value = '';
        colorInput.value = '';
    }
}

    btn.addEventListener('click', addDogs);

// ex3


//     function Cake(flavor, price, occasion) {
//         this.flavor = flavor;
//         this.price = price;
//         this.occasion =occasion;
//         this.describe = function (){
//             console.log(`The ${this.occasion} cake has a ${this.flavor} and costs ${this.price}`);
//         }
//     }

//     let cake1 = new Cake('cherry', '30$', 'birthday')

//     // console.log(cake1);
// cake1.describe();
// cake1.occasion = 'wedding';
// cake1.price= '200$';
// cake1.describe();


