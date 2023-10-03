// Q1:

const shopItems = [
  {
    id: 1,
    name: "Air Max 97",
    price: 130.0,
    desc: "The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category: "shoes",
  },
  {
    id: 2,
    name: "Adidas NMD R1",
    price: 128,
    desc: "New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category: "shoes",
  },
  {
    id: 3,
    name: "Gucci Oversize T-shirt with Interlocking G",
    price: 580,
    desc: "The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category: "shirts",
  },
  {
    id: 4,
    name: "Nike Sportswear Club",
    price: 18.97,
    desc: "The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category: "shirts",
  },
  {
    id: 5,
    name: "Spanx Flare Jeans, Vintage Indigo",
    price: 148,
    desc: "These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category: "pants",
  },
  {
    id: 6,
    name: "Bonobos Premium Stretch Jeans",
    price: 69,
    desc: "Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category: "pants",
  },
];

for (let i = 0; i < shopItems.length; i++) {
  console.log(`
================================================
Name: ${shopItems[i].name}
Price: ${shopItems[i].price}
About: ${shopItems[i].desc}
Category: ${shopItems[i].category}
`);
}

// Q2:

const hwPerson = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

console.log(typeof hwPerson.shakes[0]);

function dataParse(anObject) {
let output = ""
for (const k in anObject) {
    output += `${k} contains:\n`
    if (Array.isArray(anObject[k]) === true) {
        if(typeof anObject[k][0] === "object"){
            for (const k1 in anObject[k][0]) {
                output += `${k1} contains:\n${anObject[k][0][k1]}\n`
            }
        } else {
        output += anObject[k].map(item => `${item}`).join("\n") + "\n"
        }
    } else if (typeof anObject[k] === "object") {
        for (const [k1] in anObject[k][0]) {
            output += `${k1} contains:\n`
            output += anObject[k][0][k1]
        }
    } else {
        output += `${anObject[k]}\n`
    }
}
return output
}

console.log(dataParse(hwPerson))

// Q3:

function basedPromised(aString){
    if (aString.length > 10){
        return console.log("Big Word");
    } else {
        return console.log("Small String");
    }
}

basedPromised("12345678910")

// Q5:

// codewars 1: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num){
    let output = ""
    let workableNum = num.toString();
    for (let i = 0; i < workableNum.length; i++){
      output += workableNum[i]**2
    };
    return parseInt(output);
  }
// codewars 2: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript, node was unresponsive but I tested with provided examples
function highAndLow(numbers){
    numbers = numbers.split(' ')
    let numArray = []
    for(const num of numbers){
        numArray.push(parseInt(num))
    }
    return Math.max.apply(Math, numArray).toString() + " " + Math.min.apply(Math, numArray).toString()
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
// codewars 3: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n){
    n = n.toString().split("").sort().reverse().join("")
    return parseInt(n)
  }

console.log(descendingOrder(42145))