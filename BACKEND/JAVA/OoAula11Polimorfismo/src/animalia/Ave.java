package animalia;

public class Ave extends Animal {
    private String corPena;

    @Override
    public void alimentar() {
        System.out.println("Comer frutas");        
    }
    
    @Override
    public void emitirSom() {
        System.out.println("Som de Ave");        
    }
    
    @Override
    public void locomover() {
        System.out.println("Voarrr");        
    }

    public void fazerNinho(){
        System.out.println("Fazendo Ninho");
    }

    public String getCorPena() {
        return corPena;
    }

    public void setCorPena(String corPena) {
        this.corPena = corPena;
    }


}
