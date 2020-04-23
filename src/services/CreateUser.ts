interface CreateUserData {
  name ?: string;
  email : string;
  password : string;
  techs: Array<string | TechObj>;
  machine: string[];
}

interface TechObj {
  title: string;
  exp: number;
}

export default function createUser({name, email, password}: CreateUserData) {
  const user = { 
    name,
    email,
    password
  }

  return user;
}