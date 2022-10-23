
package ooaula7exerciciopessoa;
public class OoAula7ExercicioPessoa {
    public static void main(String[] args) {
        People[] p = new People[2];
        Book[] l = new Book[3];
        
        p[0] = new People("Joao",33,"M");
        p[1] = new People("Maria",28,"F");
        
        l[0] = new Book("Aprendendo a JOGAR","Jose Acento",53,p[0]);
        l[1] = new Book("O Boi da Manta","Cassio Jordão",122,p[1]);
        l[0].abrir();
        l[0].avancarPag();
        l[0].folhear(53);
        
        System.out.println(l[0].detalhes());
        l[0].detalhes();
    }
    
}
