

export default class Conta{
   private numero: number;
   private senha: number;
   private nome: string;
   private saldo: number;

   constructor(numero: number, senha: number, nome: string, saldo: number ){
    this.numero = numero;
    this.senha = senha;
    this.nome = nome;
    this.saldo = saldo;
   } 

    sacar(valor:number) {
        if(this.saldo >= valor){
            this.saldo = this.saldo - valor
        }else{
            console.log("saldo insuficiente");
        }
       
    }

    deposito(valor:number) {
       
            this.saldo += valor;
       
    }

    getSaldo(): number{
        return this.saldo;
    }

    getNumero(): number {
       
        return this.numero;
    }
}


