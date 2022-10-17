package sobrecarga;
public class App {
    public static void main(String[] args) throws Exception {
      
        Cachorro c = new Cachorro();
        c.reagir(true);
        c.reagir(false);
        // c.reagir(1,45); // abanar
        // c.reagir(19,40); // ignora
        // c.reagir(""); // Rosnar
    }
}
