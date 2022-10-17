
package ooaula4gettersettermelhorado;
public class ContaBanco {
    public int numConta;
    protected String tipo;
    private String dono;
    private float saldo;
    private boolean status;
    
      public ContaBanco() {
        this.saldo = 0;
        this.status = false;
    }
    
    
    public void estadoAtual(){ 
        System.out.println("------DADOS DE CONTA ---------");
        System.out.println("Conta: " + this.getNumConta());
        System.out.println("Tipo: " + this.getTipo());
        System.out.println("Dono: " + this.getDono());
        System.out.println("Saldo: " + this.getSaldo());
         System.out.println("Status : " + this.isStatus());
         System.out.println("-----------------------------------");
    }
    // Metods Personalizados
    public void abrirConta(String t){
        this.setTipo(t);
        this.setStatus(true);
        if ("CC".equals(t)) {
            this.setSaldo(50);
        } else if ("CP".equals(t)) {
            this.setSaldo(150);
        }
        System.out.println("Conta aberta com sucesso !");
    
    }
    public void fecharConta(){
        if( this.getSaldo() > 0) {
            System.out.println("Conta não pode ser fechada enquanto tive valores nela ");
        } else if ( this.getSaldo() < 0){
            System.out.println("Conta não pode ser fecha pois tem débitos a pagar");
        } else {
            System.out.println("Conta fechada com sucesso!");
        }
    }
    public void depositar( float v){
        if( this.isStatus()) {
        //this.saldo = this.saldo + v;
        this.setSaldo(this.getSaldo() + v);
            System.out.println("Deposito realizado com sucesso na conta de: " + this.getDono());
        } else {
            System.out.println("Impossivel depositar com a conta fechada");
        }
    }
    public void sacar( float v ){
        if(this.isStatus()){
            if( this.getSaldo() >= v ) {
                this.setSaldo( this.getSaldo() - v );
                System.out.println("Saque realizado na conta de : " + this.getDono());
            } else {
                System.out.println("Saldo insuficiente para saque! ");
            }
        } else {
            System.out.println("Impossivel sacar de um conta fechada !");
        }
    }
    public void pagarMensalidade(){
        int v = 0;
        if( "CC".equals(this.getTipo())) {
            v = 12;
        } else if ( "CP".equals(this.getTipo()) ) {
            v = 20;
        }
        if( this.isStatus() ) {
            this.setSaldo(this.getSaldo() - v);
        } else {
            System.out.println("Impossivel pagar uma conta fechada");
        }
    }
    // Metodos especiais


    public int getNumConta() {
        return numConta;
    }

    public void setNumConta(int numConta) {
        this.numConta = numConta;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDono() {
        return dono;
    }

    public void setDono(String dono) {
        this.dono = dono;
    }

    public Float getSaldo() {
        return saldo;
    }

    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    
}
