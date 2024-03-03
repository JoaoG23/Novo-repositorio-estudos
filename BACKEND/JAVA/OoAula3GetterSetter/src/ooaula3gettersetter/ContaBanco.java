
package ooaula3gettersetter;
public class ContaBanco {
       public int numConta;
       protected String tipo;
       private float saldo;
       private boolean status;
       
       public void setAbrirConta( int numero, String tipo, boolean status ){
           this.numConta = numero;
           this.tipo = (tipo.equals("CP") ) ? "CP":"CC";
           this.status = status;
           
                              
          if (tipo.equals("CP")) {
              this.saldo = 150;
         } else {
              this.saldo = 50;
         }         
       }
       
       
       public void getMostrarDados() {
           System.out.println("----- Dados da abertura ----");
           System.out.println("Numero: " + this.numConta );
           System.out.println("Tipo: " + this.tipo );
           System.out.println("Saldo é: " + this.saldo );
           System.out.println("Esta aberta: " + this.status );
                   
       }
        public void setFecharConta( ){
            if( this.saldo > 0 || this.saldo < 0 ) {
                System.out.println("ABERTA: Não pode fechar a conta enquanto tiver dinheiro dentro ou devendo o banco");
                System.out.println("O seu saldo: " + this.saldo );
                this.status = true;
                return;
            }
            
            this.status = false;
            System.out.println("Sua conta esta fechada: " + this.status );
       }
        
        public void setDepositar( float valorDepositado ){
            
             if( this.status == false ) {
                 System.out.println("Conta fechada: Nao e possivel depositar");
            } else {
                this.saldo = this.saldo + valorDepositado;
             }
       }
        
        public void setSaldo( float valorSacado ){
            
             if( this.status == false ) {
                 System.out.println("Conta fechada: Nao e possivel sacar");
                 return;
             }
             
             if( valorSacado >  this.saldo ) {
                 System.out.println("Saldo requirido: Insuficiente na conta. Tente um valor a mesmo");
                 return;
             }
                 this.saldo = this.saldo - valorSacado;
             
       }
        
        public void pagarMensal( ){
             if( this.status == false ) {
                 System.out.println("Conta fechada: Nao e possivel pagar");
            } 
             if ( this.tipo.equals("CP") ){
                 this.saldo = this.saldo - 22;
             } else {
              this.saldo = this.saldo - 12;
             }
       }
}
