package animalia;

public class Peixe extends Animal {
    private String corEscama;
    

    @Override
    public void alimentar() {
        System.out.println("Comer Frutos do Mar");
    }

    @Override
    public void emitirSom() {
        System.out.println("Peixe não faz som!");
        
    }
    
    @Override
    public void locomover() {
        System.out.println("Nadar");

    }
    public void soltarBolhas(){
        System.out.println("Soltando Bolhas ...");
    }

    public String getCorEscama() {
        return corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }

}
