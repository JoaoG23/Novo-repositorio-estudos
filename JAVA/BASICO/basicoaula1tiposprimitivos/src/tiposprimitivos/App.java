package tiposprimitivos;

import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        // TIPO PRIMITIVOS DA LINGUAGEM 
        /*
         * Como declarar o tipo em Java:
         */

         // 1 - Modo um passando o tipo antes:
         int idadeModo1 = 3;
         float salModo1 = 1332.33f;
        char letraModo1 = 'F';
        boolean casadoModo1 = false;

        /*
         * TypeCast : 
         * Para especificar tipos de dados
         * Ex: Numero 3 pode ser inteiro = int
         * ou Real = Float
         * 
         * Exemplo para abaixo: 
         */
         // 2 - Modo dois TypeCast;
         int idadeTypeCast = (int) 3;
         float saltTypeCast = (float) 1932.33f;
         char letraTypeCast = (char) 'G';
         

         // 3- Usando Classes = Classe involucras
         Integer idadeClasse = new Integer(4);
         Float salClasse = new Float(29399.32f);
         Character letraClasse = new Character('G');


         System.out.println("Declaracao modo 1: " + idadeModo1);
         System.out.println("Declaracao modoTypeCast: " + idadeTypeCast);
         System.out.println("Declaracao mode classe involucra: " + idadeClasse);

         // TIPOS 
         // Inteiro 
         int idadeInt = 3;

         System.out.println("Inteiror : " + idadeInt);
         
         // Float 
         float sal = 1930.30f;
         System.out.println("Float : " + sal);
         
         // Caracteres = Char 1 caracter
         
         char letra = 'G';
         System.out.println("Char Tipo uma letra : " + sal);

        

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
