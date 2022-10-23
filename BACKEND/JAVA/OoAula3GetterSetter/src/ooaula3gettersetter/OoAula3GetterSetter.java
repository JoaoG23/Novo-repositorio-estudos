
package ooaula3gettersetter;
public class OoAula3GetterSetter {
    public static void main(String[] args) {
     ContaBanco joao = new ContaBanco();
     joao.setAbrirConta(3334, "CC", true);
     joao.setDepositar(100);
     joao.setSacar( 138 );
     joao.pagarMensal();
     joao.pagarMensal();
     joao.setSacar( 3 );
     joao.setFecharConta();
     //joao.getMostrarDados();

     
     
     
    }
    
}
