package heranca;
public class Funcionario extends Pessoa {
    private String setor;
    private boolean trabalhando;

    @Override
    public String toString() {
        return "---Funcionario=" + setor + 
        "\n, trabalhando=" + trabalhando + "---";
    }



    public String getSetor() {
        return setor;
    }
    public void setSetor(String setor) {
        this.setor = setor;
    }
    public boolean isTrabalhando() {
        return trabalhando;
    }
    public void setTrabalhando(boolean trabalhando) {
        this.trabalhando = trabalhando;
    }

    // Especial
    public void mudarTrabalho(){
        this.trabalhando = !this.trabalhando;
    }

    
}
