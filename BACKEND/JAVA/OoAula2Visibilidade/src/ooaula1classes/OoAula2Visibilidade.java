
package ooaula1classes;
public class OoAula2Visibilidade {

    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.cor = "BIC cristal";
        c1.cor = "Azul";
        //c1.ponta = 0.3;
        c1.carga = 19;
        c1.destampar();
       c1.rabiscar();
        c1.status();
    }
    
}
