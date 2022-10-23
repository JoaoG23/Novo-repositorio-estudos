package com.mycompany.ooaula8fazendosozinhoexercicio;
public class OoAula8FazendoSozinhoExercicio {

    public static void main(String[] args) {
        // Pessoa[] p = new People[2];
        // Book[] l = new Book[3];
        
        // p[0] = new People("Joao",33,"M");
        // p[1] = new People("Maria",28,"F");
        
        // l[0] = new Book("Aprendendo a JOGAR","Jose Acento",53,p[0]);
        // l[1] = new Book("O Boi da Manta","Cassio Jordão",122,p[1]);
        // l[0].abrir();
        Pessoa[] p = new Pessoa[2];
        Livro[]l = new Livro[3];

        p[0] = new Pessoa("Jose", 88,"M");
        p[1] = new Pessoa("Cassandra", 28,"F");
        

        l[0] = new Livro("Elis e o mundo!", "Elis Regina ", 44,p[1]);

        System.out.println(l[0].detalhes());
    }
}
