package herancaconjunto;

public final class Aluno extends Pessoa{
    private int matricula;
    private String curso;

    
    
    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public int getMatricula() {
        return matricula;
    }

    public String getCurso() {
        return curso;
    }

    public final void pagarMensalidade(){ // FINAL Nao pode ser sobreposta 
        System.out.println("Pagando Mensalidade do Aluno: " + this.getNome());
    }

}
