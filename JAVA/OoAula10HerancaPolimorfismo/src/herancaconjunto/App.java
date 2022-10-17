package herancaconjunto;
public class App {
    public static void main(String[] args) throws Exception {
        //Pessoa p1 = new Pessoa();
        // Visitante v1 = new Visitante();

        // v1.setNome("Gilberto");
        // v1.setIdade(13);
        // v1.setSexo("M");
        // System.out.println(v1.toString());

        Aluno a1 = new Aluno();
        a1.setNome("Gilberto");
        a1.setIdade(13);
        a1.setSexo("M");
        a1.setMatricula(33000);
        a1.setCurso("Informatica");
        a1.pagarMensalidade();

        Aluno a2 = new Bolsista();
        a2.setNome("Jose");
        a2.setIdade(13);
        a2.setSexo("M");
        a2.setMatricula(33000);
        a2.setCurso("Informatica");
        a2.pagarMensalidade();
    }
}
