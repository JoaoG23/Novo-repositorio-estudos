package ooaula4gettersettermelhorado;
public class OoAula4GetterSetterMelhorado {
    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.setNumConta(1220);
        p1.setDono("Jussara");
        p1.abrirConta("CP");
        
        ContaBanco p2 = new ContaBanco();
        p2.setNumConta(1220);
        p2.setDono("Carlos");
        p2.abrirConta("CC");
        
        p1.depositar(10);
        p2.depositar(10);
        //p1.sacar(22);
        p1.estadoAtual();
        p2.estadoAtual();
    }
    
}
