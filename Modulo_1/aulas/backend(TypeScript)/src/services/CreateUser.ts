
interface techsObject {
  title: string,
  experience: number
}

interface CreateUserData {
  name: string;   //Se for opcional -> name?: String;
  email: string;
  password: string;
  techs: Array<String | techsObject>;
}

export default function createUser({ name, email, password }: CreateUserData) {

  const user = {
    name,
    email,
    password
  }

  return user;

}