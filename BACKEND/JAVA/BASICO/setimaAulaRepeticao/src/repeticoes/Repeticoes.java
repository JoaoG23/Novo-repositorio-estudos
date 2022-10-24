package repeticoes;

import java.util.Scanner;

import repeticoes.interfaces.RepeticoesInterface;

public class Repeticoes implements RepeticoesInterface {

    @Override
    public void whileMe(int quantasCabalhotas) {
        
        int cabalhota = 1;

        while( cabalhota <= quantasCabalhotas ) {
            System.out.println("Cabalhotas " + cabalhota);
            cabalhota++;
        }
    }

    @Override
    public void whileContiune(int quantasCabalhotas) {
        // Insert to continue
        
        int cc = 0;

        while( cc <= quantasCabalhotas ) {
            cc++;
            if (cc == 5 || cc == 6 || cc == 7) {
                continue; // Quando execultado ele interrompe o fluxo
                // natural do codigo e joga para fora do laco
            }
            System.out.println("Cabalhotas " + cc);
        }
    }

    @Override
    public void whileBreak(int quantasCabalhotas) {
      
        int cabalhota = 0;

        while( cabalhota <= quantasCabalhotas ) {
            cabalhota++;
            if (cabalhota == 1 || cabalhota == 2 || cabalhota == 3) {
                continue; // Quando execultado ele interrompe o fluxo
                // natural do codigo e joga para fora do laco
            }
            if (cabalhota == 7) {
                break; // vai para o final no programa e não conta mais nada
            }
            System.out.println("Cabalhotas " + cabalhota);
        }
    }
    
    public void somador() {
        int soma= 0;
        int numero = 0;
        String resposta = "";

        Scanner teclado = new Scanner(System.in);

        do {
            
            System.out.println("========================== ");
            System.out.println("Digite um número para soma ");
            numero = teclado.nextInt();
            
            soma += numero;
            System.out.println("Quer continuar ?:");
            resposta = teclado.next();

        } while(resposta.equals("s"));
        
        System.out.println("A soma dos valores são :" + soma);
    }


    @Override
    public void forDecrement() {
        for (int i = 0; i <= 100; i += 10) {
            System.out.println("Cambalhota " + i);
        }
        
    }

    @Override
    public void myFor() {
        for (int i = 0; i <= 5; i++) {
            System.out.println("Cambalhota " + i);
        }
        
    }

    
    @Override
    public void forDuplicate() {
        for (int i = 0; i <= 3; i++) {
            System.out.println(" I" + i);

            for (int j = 0; j <= 3; j += 2 ){
                System.out.print(" J" + j);
            }
        }
        
    }

    
    
}
