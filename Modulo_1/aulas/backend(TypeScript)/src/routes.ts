import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function teste(request: Request, response: Response) {

  const user = createUser({
    name: 'igor',
    email: 'teste',
    password: '123',
    techs: [
      'React',
      'Node',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ]
  });

  console.log(user);

  return response.json({ message: 'teste' });
}