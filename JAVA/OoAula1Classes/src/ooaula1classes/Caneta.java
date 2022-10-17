
package ooaula1classes;
public class Caneta {
    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;
    void status(){
        System.out.println("Modelo: " + this.modelo  );
        System.out.println("Uma caneta de cor: " + this.cor  );
        System.out.println("Esta tampada ?: " + this.tampada  );
        System.out.println("Sua carga : " + this.carga  );
        System.out.println("Sua ponta: " + this.ponta  );
    }
    void rabiscar () {
        if( this.tampada == true ) {
            System.out.println("ERRO: Não posso rabiscar.");
        } else {
            System.out.println("Estou Rabiscando ....");
        }
    }
    
    void tampar() {
           this.tampada = true;
    }
    
    void destampar(){
        this.tampada = false;
    }
    
}
