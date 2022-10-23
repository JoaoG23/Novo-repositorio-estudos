package animalia;


public class Reptil extends Animal{
    private String corEscama;

    public String getCorEscama() {
        return corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }

    @Override
    public void alimentar() {
        System.out.println("Rastejando");
    }
    
    @Override
    public void emitirSom() {
        System.out.println("Comendo Verduras");
        
    }
    
    @Override
    public void locomover() {
        System.out.println("Som de Réptil");
        
    }


}
