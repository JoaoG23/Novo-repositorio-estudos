package com.mycompany.ooaula8fazendosozinhoexercicio;
public class Livro implements Publicacao {
    private String titulo;
    private String autor;
    private int totalPaginas;
    private int paginaAtual;
    private boolean aberto;
    private Pessoa leitor;
    
    
    public Livro(String titulo, String autor, int totalPaginas, Pessoa leitor) {
        this.titulo = titulo;
        this.autor = autor;
        this.totalPaginas = totalPaginas;
        this.paginaAtual = 0;
        this.aberto = false;
        this.leitor = leitor;
    }

    
    public String detalhes() {
        return "Livro [aberto="
         + aberto + 
        ",\n autor=" + autor +
         ",\n leitor=" + leitor.getNome() +
          ",\n paginaAtual=" + paginaAtual +
           ",\n titulo=" + titulo +
            ",\n totalPaginas=" + totalPaginas +
             "]";
    }

    // Metodos Especiais
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public int getTotalPaginas() {
        return totalPaginas;
    }
    public void setTotalPaginas(int totalPaginas) {
        this.totalPaginas = totalPaginas;
    }
    public Pessoa getLeitor() {
        return leitor;
    }
    public void setLeitor(Pessoa leitor) {
        this.leitor = leitor;
    }


    @Override
    public void abrir() {
        if (this.aberto == false) {
            this.aberto = true;
        } else {
            this.aberto = false;
        }
    }

    @Override
    public void fechar() {
        if (this.aberto == true) {
            this.aberto = false;
            return;
        } 
        this.aberto = false;
    }

    @Override
    public void folhear(int numeroPagina) {
        if (this.aberto == true && this.getTotalPaginas() < numeroPagina) {
            this.paginaAtual = numeroPagina;
        } else {
            this.paginaAtual = 0;
        }
    }

    @Override
    public void avancarPagina() {
        this.paginaAtual++;
    }

    @Override
    public void voltaPagina() {
        this.paginaAtual--;
    }    
}
