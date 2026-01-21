let message = "Hello, I am from mern!";  // type Inferred
console.log(message.toUpperCase());

let value: string | number;     // union

value = "Dev";
value = 10;
console.log(value);

let fruites:  {  name: string;  price?: number }[] = [
  { name: 'Mango', price: 2 },
  { name: 'Apple', price: 1 },
  { name: 'Orange' },
];

if(fruites.length>0)
    fruites[0]!.name = 'Banana';

console.log(fruites[0]);

function add(a:number,b:number) : number{       // Explicit return types
    return a+b;
}
console.log(add(10,5));

function createEmployee({ id }: { id: number }): { id: number; readonly isActive: boolean } {  // object as a parameter
  return { id, isActive: id % 2 === 0 };
}

const emp1 = createEmployee({ id: 1 });
console.log(emp1);

const emp2 = createEmployee({ id: 2 });
console.log(emp2);
// emp1.isActive = true;   we can not assign brcause of readonly property
console.log(emp1);

function  createStudent(student:{name:string; id:number;}) {
    console.log(`Student ${student.name}'s id is ${student.id}`);
}

// createStudent({name:'Dev', id:1, age:25});       // it throws error because of extra we have remove it 


