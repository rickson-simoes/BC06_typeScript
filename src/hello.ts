import {Response, Request} from 'express';
import createUser from './services/CreateUser';

export default function helloThere(req: Request, res: Response) {
  const user = createUser({
    email: 'rickson.simoes@hotmail.com',
    password: '123',
    techs: [
      'node',
      'react',
      'react native', 
      { title: 'node', exp: 100 }],
    machine: ['i7','16gb']
  });

  return res.json({message : 'thats nice'});
}