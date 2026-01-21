// Type Aliases

type UserInfo = {
    name:string,
    id:number,
    age:number      // we can not provide default property in type aliases
}

function createUser(user:UserInfo):void {
    console.log(`${user.name}'s (id-${user.id}) age is ${user.age}`);
}

createUser({name: "dev", id:2, age:22})


// TYPE ALIASES WITH INTERSECTION
type User = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  country: string;
};

type UserWithAddress = User & Address;    // here when we pass any type it has to we both types not a single one is missing

function getUserDetails(user: UserWithAddress): string {
  return `${user.name} (${user.age} years old), lives in ${user.city}, ${user.country}`;
}

const user: UserWithAddress = {
  name: "Joel",
  age: 40,
  city: "Asam",
  country: "India"
};

console.log(getUserDetails(user));

// TYPE ALIAS AND INTERFACE - WE CAN NOT USE UNIONS WITH INTERFACES AND ALSO WE ONLY ABLE TO USE OBJECTS WITH INTERFACES

// ENUMS AND TUPLES

const User:[readonly string[], number, number? ] = [["Joel"], 11]     // TUPLES with readonly and optional 
console.log(User);


enum OrderStatus {
  Pending = 1,
  Shipped = 5,
  Delivered = 10,
}

function orderInfo(status:OrderStatus):string {
  switch (status) {
    case OrderStatus.Pending:
      return 'Order is Pending'
      
    case OrderStatus.Shipped:
      return 'Order is Shipped'

    case OrderStatus.Delivered:
      return 'Order is Delivered'
    default:
      return 'Unknown Status'
  }
}
console.log(orderInfo(OrderStatus.Delivered));


