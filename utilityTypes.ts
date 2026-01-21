type User = {
  id: string;
  name: string;
  age: number;
  address: {
    street: number;
    city: string;
  };
};

function createUser(user: Omit<User, "id">): void {} // when we create any user we do not have id initially so we can use Omit type here

createUser({
  name: "Dev",
  age: 22,
  address: {
    street: 1,
    city: "Sagar",
  },
});

function updateUser(user: Partial<User>) {} // most of the time updation in user has related to some subset of attributes not all so we can use partial for make it optional

updateUser({
  name: "Devraj",
});

function renderUser(user: Pick<User, "name" | "age">) {} // for render we can pick some property that we need

renderUser({
  name: "Dev",
  age: 22,
});

type T = Readonly<User>; // when we want to make data mutable

type empType = Record<"admin" | "user", { level: string }>; // We can use record type for creating an object type but with keys and value

const a: empType = {
  admin: {
    level: "Level 1",
  },
  user: {
    level: "Level 2",
  },
};

type Role = "admin" | "user" | "employee";

type newRole1 = Extract<Role, "admin" | "user">;

type newRole2 = Exclude<Role, "admin" | "user">; // we can use it in api handling status also 

function getUser(id: number,age:number) {
  return {
    name: "Joel",
    age: 30,
    address: {
      street: 1,
      city: "Gothum",
    },
  };
}

type returnType = ReturnType<typeof getUser>;
type paraType = Parameters<typeof getUser>;

const x:paraType = [12,21];     // it has to be same as parameters type

// we can use Parameters utility type when there are some connections in diff functions type 
function getuser(id:number) {
    return {name:"Dev"}
}

function getuserWrapper(id:Parameters<typeof getuser>[0], other:boolean) {
    return getuser(id)
}

type ApiUser = {
  id: string | null;
};

type Config = {
  host?: string;
  port?: number;
};

function startServer(config: Required<Config>) {    // here attributes are optional so we use Required to make them required
  config.host.toUpperCase(); 
  config.port.toFixed();     
}


type UserId = NonNullable<ApiUser["id"]>;       // when we do not want any null values that can be assigned in required 

async function getNewUser() {
    return "New User";
}

type newuserasync = Awaited<ReturnType<typeof getNewUser>>  // when we use any function that may return promise or there is any async operation then we can use Awaited type

