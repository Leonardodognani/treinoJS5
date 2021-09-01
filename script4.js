//for...in

let person = {
    name: "Leo",
    age: 36,
    weight: 82,
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}