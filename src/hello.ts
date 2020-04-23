import {Response, Request} from 'express';

export default function helloThere(req: Request, res: Response) {
  return res.json({message : 'thats nice'});
}