
package ooaula1classes;
public class Caneta {
    public String modelo;
    public String cor;
    private float ponta;
    protected int carga;
    private boolean tampada; // Somente a class pode mecher
    public void status(){
        System.out.println("Modelo: " + this.modelo  );
        System.out.println("Uma caneta de cor: " + this.cor  );
        System.out.println("Esta tampada ?: " + this.tampada  );
        System.out.println("Sua carga : " + this.carga  );
        System.out.println("Sua ponta: " + this.ponta  );
    }
    public void rabiscar () {
        if( this.tampada == true ) {
            System.out.println("ERRO: Não posso rabiscar.");
        } else {
            System.out.println("Estou Rabiscando ....");
        }
    }
    
    public void tampar() {
        // O privado que pode mecher somente a propria class
           this.tampada = true;
    }
    
    public void destampar(){
        this.tampada = false;
    }
    
}
