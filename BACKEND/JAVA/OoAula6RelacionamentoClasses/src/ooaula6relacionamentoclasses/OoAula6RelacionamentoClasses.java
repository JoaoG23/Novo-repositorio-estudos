package ooaula6relacionamentoclasses;
public class OoAula6RelacionamentoClasses {
    public static void main(String[] args) {
        Lutador l[] = new Lutador[6];
        l[0] = new Lutador("Pretty Boy", "França", 31, 1.75f, 68.9f, 11, 2,1);
        l[1] = new Lutador("PutScript", "Brasil", 31, 1.68f, 68.9f, 12, 1,1);
        l[2] = new Lutador("Lambida", "Suecia", 31, 1.89f, 100.9f, 4, 1,1);
        l[3] = new Lutador("Ló Borges", "EUA", 31, 1.60f, 95.9f, 2, 1,1);
   
       // l[0].ganharLuta();
        //l[0].apresentar();
        //l[2].apresentar();
        //l[1].apresentar();
        //l[3].apresentar();
          
        Luta UEC01 = new Luta();
        UEC01.marcarLuta(l[2], l[3]);
        UEC01.lutar();
    }
    
}
