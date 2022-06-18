import Conta from "./conta";


export default class Banco{
   private agencia: number;
   private contas: Conta[];

   constructor(agencia: number, contas: Conta[]){
    this.agencia = agencia;
    this.contas = contas; 
    
   } 

   addConta(numero: number, senha: number, nome: string, saldo: number ): Conta {
        const conta = new Conta(numero, senha, nome, saldo); 
        this.contas.push(conta);
        return conta;
    }

    getConta(): Conta[] {
       
        return this.contas;

    }

    buscarConta(numero: number): Conta | null {
  
      for (let index = 0; index < this.contas.length; index++) {
        if(this.contas[index].getNumero() === numero){
            return this.contas[index];
        }
        
      }
     return null;
    }

    depositar(numero: number, valor: number): Conta | null {
        const conta =  this.buscarConta(numero);

        if(conta === null){
            return null;
        }
        conta.deposito(valor);
       
        return conta;
    
    }
  

}


