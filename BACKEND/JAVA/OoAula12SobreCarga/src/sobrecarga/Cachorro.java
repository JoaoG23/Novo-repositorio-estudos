package sobrecarga;

public class Cachorro extends Lobo {
    @Override
    public void emitirSom() {
        
        System.out.println("Au Au AU ");
    }
    public void reagir(String frase){
        if (frase.equals("Toma Comida") || frase.equals("Olá")) {
            System.out.println("Abanar e latir");
        } else {
            System.out.println("Rosnaaaar");
        }
    }
    public void reagir(int hora, int min){
        if (hora < 12) {
            System.out.println("Abanar");
        } else if (hora >= 18) {
            
            System.out.println("Ignora");
        } else {
            
            System.out.println("Abanar e Latir");
        }
    }

    // Mesmo tipos de parametros -ERRO nao pode
    // public void reagir(int x, int y){

    // }
    public void reagir(boolean dono){
        if (dono == true) {
            System.out.println("Abanar");
        } else {
            System.out.println("Rosnaaaaaaaaaaaar");
        }
    }
    public void reagir(int idade, float peso ){
        if (idade > 5 ) {
            if (peso < 10 ) {
                System.out.println("Abanar");
            } else {
                System.out.println("Latir");
            }
        } else {
            if (peso < 10 ) {
                System.out.println("Rosnar");
            } else {
                System.out.println("Ignora");
            }
        }
    }
    // Pode parametros na ordem diferente - Nao Da Erros
    // public void reagir(float idade, int peso ){

    // }
}
