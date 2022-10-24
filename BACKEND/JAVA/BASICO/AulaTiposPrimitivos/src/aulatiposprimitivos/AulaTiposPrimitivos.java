package aulatiposprimitivos;

import java.util.Scanner;

public class AulaTiposPrimitivos {

    public static void main(String[] args) {
        
        
        // Entrada de dados

        // Ele não vem com entrada de dados por padrao
        Scanner teclado = new Scanner(System.in);
        
        System.out.println("Digite o nome do aluno");
        String nome = teclado.nextLine();
        System.out.println("Digite agora sua nota:");
        float nota = teclado.nextFloat();
 
        
        //1ª Forma de se fazer 
//        System.out.println("A nota é : " + nota); 
        //2ª Forma de se fazer - %.2 casa decimais
        System.out.format("A nota de %s é %.2f \n",nome, nota);
        //3ª format
        System.out.printf("A nota de %s é %.2f \n",nome, nota);
        
    }
    
}
