
package ooaula1classes;
public class OoAula1Classes {

    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.cor = "Azul";
        c1.ponta = 0.5f;
        c1.tampada = false;
        c1.destampar();
        c1.rabiscar();
        c1.status();
        
        Caneta c2 = new Caneta();
        c2.cor = "Vermelha";
        c2.ponta = 0.5f;
        c2.tampada = false;
        c2.tampar();
        c2.rabiscar();
        c2.status();
    }
    
}
