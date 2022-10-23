/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package quartaaulacomparastring;

/**
 *
 * @author Joao Dev
 */
public class QuartaAulaComparaString {
    public static void main(String[] args) {
        String nome1 = "João";
        String nome2 = "João";
        String nome3 = new String("João");
        String res;
        
//        res = (nome1 == nome3 ) ? "IGUAL":"DIFERENTE";
// Para verificar o conteudo de um objeto = o metodo equals
          res = (nome1.equals(nome3) ) ? "IGUAL":"DIFERENTE";
        
        System.out.println(res);
    }
    
}
