package ooaula5encapsulamentos;
public class OoAula5Encapsulamentos {
    public static void main(String[] args) {
        Controlador c = new ControleRemoto();
        c.ligar();
        c.maisVolume();
        c.play();
        c.abrirMenu();
        c.fecharMenu(); 
    }
    
}
