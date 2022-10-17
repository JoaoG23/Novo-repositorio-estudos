package herancaconjunto;
// Classe de Diferenca
public class Bolsista extends Aluno{
    private float bolsa;
    
    public float getBolsa() {
        return bolsa;
    }
    public void setBolsa(int bolsa) {
        this.bolsa = bolsa;
    }

    public void RenovaBolsa(){
        System.out.println("Removendo bolsa de Aluno : " + this.getNome());
    }
    @Override
    public void pagarMensalidade(){
        System.out.println("Pagar mensalidade do Bolsista : " + this.getNome());

    }
}
