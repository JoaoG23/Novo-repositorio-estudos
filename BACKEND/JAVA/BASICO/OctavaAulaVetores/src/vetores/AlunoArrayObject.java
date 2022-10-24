package vetores;

/**
 * AlunoArrayObject
 */
public class AlunoArrayObject {

    public int id;
    public String nome;
    public String sobrenome;
    
    public AlunoArrayObject(int id, String nome, String sobrenome) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    @Override
    public String toString() {
        return "AlunoArrayObject {id=" + id + ", nome=" + nome + ", sobrenome=" + sobrenome + "}";
    }
    
    
}