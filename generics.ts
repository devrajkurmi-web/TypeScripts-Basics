function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); 
console.log(identity<number>(42));      
console.log(identity<boolean>(false)); 


function reverseArray<T>(arr: T[]): T[] {        // WITH ARRAY
  return arr.reverse();
}

console.log(reverseArray<number>([1, 2, 3]));  
console.log(reverseArray<string>(['a','b','d','c'])); 

interface valueContainer<valueType>{    // generics with object
    value:valueType
}

let numberVal:valueContainer<number> = { value : 100};
let stringVal:valueContainer<string> = { value: 'Joel Stark'}

console.log(numberVal);

console.log(stringVal);


// GENERICS WITH CLASSES

class Stack<T>{
    private stack:T[];

    constructor(){
        this.stack = [];
    }

    push(item:T) :void{
        this.stack.push(item)
    }

    pop() :T | undefined{
        return this.stack.pop()
    }
}

const stack1 = new Stack<number>();

for (let index = 0; index < 10; index++) {
    stack1.push(index);
}


console.log(stack1);

for (let index = 0; index < 5; index++) {
    stack1.pop();
}

console.log(stack1);

const stack2 = new Stack<string>();
let str = "1";
for (let index = 0; index < 10; index++) {
    str = str+index;
    stack2.push(str);
}

console.log(stack2);
