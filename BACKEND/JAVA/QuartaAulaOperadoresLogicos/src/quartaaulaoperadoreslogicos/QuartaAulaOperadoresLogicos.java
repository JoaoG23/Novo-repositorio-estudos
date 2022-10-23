/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package quartaaulaoperadoreslogicos;

/**
 *
 * @author Joao Dev
 */
public class QuartaAulaOperadoresLogicos {
    public static void main(String[] args) {
        int x = 5;
    System.out.println(x > 3 && x < 10); // returns true because 5 is greater than 3 AND 5 is less than 10
    int n1, n2, o, r;
    n1 = 2;
    n2 = 11;
    o = 20;
    
    r = (n1 > n2 && o > n2) ? n1 + n2 : n1 - n2;
    
    String rConvertidoString = Integer.toString(r);
    
    rConvertidoString = (n1 == n2 || n2 == o ) ? "Certo": "Errado";
    
        System.out.println("Se for n1 for mais que o n2 SOma se não Subtrair SOMA :" + rConvertidoString );
        
        // Comparando Strings
        
        String nome1 = "Gustavo";
        String nome2 = "Gustavo";
        String nome3 = new String("Gustavo");
        
        String resposta;
        
        // Os tipos são diferente por isso da diferente 
        resposta = (nome1 == nome3) ? "Igual":"diferente";
        // Para verificar o conteudo do Item digite Para CLASSES involucras 
        resposta = (nome1.equals(nome3)) ? "Igual":"Diferente";
        
        
        System.out.println(resposta);
        
        
    }
    
}
