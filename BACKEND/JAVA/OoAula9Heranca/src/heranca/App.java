package heranca;
public class App {
    public static void main(String[] args) throws Exception {

        Pessoa comun = new Pessoa();
        Aluno aluno = new Aluno();
        Professor prof = new Professor();
        Funcionario funcionario = new Funcionario();
    
        comun.setNome("Pedro");
        aluno.setNome("Carla Roulo");
        prof.setNome("Mariana Borges");
        funcionario.setNome("Rogeria");
        
        comun.setSexo("M");
        funcionario.setSexo("F");
        aluno.setIdade(34);

        aluno.setCurso("Informática");
        prof.setSalario(2600.45f);
        funcionario.setSetor("Estoque");

        prof.receberAumento(399);
        aluno.cancelarMatricula();

        System.out.println(comun.toString());
        System.out.println(aluno.toString());
        System.out.println(prof.toString());
        System.out.println(funcionario.toString());
    }
}
