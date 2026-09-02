let a=10
//array
let names=["John","Doe","Jane"]
//object(dictionary)
let stu_details={
    "name":"John",
    "skills":["Java","Python","C++"],
    "address":{"city":"New York","state":"NY"}
                }
console.log(a);//10
console.log(names);//[ 'John', 'Doe', 'Jane' ]
console.log(stu_details);
//{
 // name: 'John',
 // skills: [ 'Java', 'Python', 'C++' ],
  //address: { city: 'New York', state: 'NY' }
//}
//array methods an d access
console.log(names[0]);//John
names.push("Smith");
console.log(names);//[ 'John', 'Doe', 'Jane', 'Smith' ]
names.pop();
console.log(names);//[ 'John', 'Doe', 'Jane' ]

names.forEach(function(name) {
    console.log(name);
});
//John
//Doe

console.log(stu_details["name"]);//John
//it will through error if key is not available and stop execution
console.log(stu_details.name);//John
//it won't through error it will null value key is not available 
console.log(stu_details.skills[1]);//Python
console.log(stu_details.address.state);//NY