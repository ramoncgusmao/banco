import express, {Express, Request, Response} from 'express';
import Banco from './banco';

const app: Express = express();
const port = 3000;

const banco: Banco = new Banco(1, []);

app.use(express.json());

app.post('/', (req: Request, res: Response) => {
  const {senha, numero, nome, saldo} = req.body;
 
  res.json(banco.addConta(senha, numero, nome, saldo));

});

app.get('/', (req: Request, res: Response) => {
  res.json(banco.getConta());
});


app.get('/conta/:numero', (req: Request, res: Response) => {
  const {numero} = req.params;
  console.log(numero);
  res.json(banco.buscarConta(+numero));
});

app.post('/depositar/:numero', (req: Request, res: Response) => {
  const {numero} = req.params;
  const {valor} = req.body;
  console.log(numero);
  res.json(banco.depositar(+numero, valor));
});


app.listen(port, () => {
    console.log(`⚡️[server]: servidor rodando https://localhost:${port}`);
  });