package heranca;
public class Professor extends Pessoa {
    // atributos
    private String especialidade;
    private float salario;


    // public Professor(String especialidade, float salario) {
    //     this.especialidade = especialidade;
    //     this.salario = salario;
    // }


    // Gettess Settes
    public String getEspecialidade() {
        return especialidade;
    }
    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
    }
    public float getSalario() {
        return salario;
    }
    public void setSalario(float salario) {
        this.salario = salario;
    }

    // Metodos Especiais
    public void receberAumento( float aumento ){
        this.setSalario(this.getSalario() + aumento);
    }
    
}
