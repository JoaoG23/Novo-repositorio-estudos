package ooaula7exerciciopessoa;

public class Book implements Post {

    private String title;
    private String autor;
    private int totPages;
    private int pagAtual;
    private boolean aberto;
    private People leitor;

    public String detalhes() {
        return "Book{" + "title" + title
                + "\n, autor=" + autor
                + "\n, totPages=" + totPages
                + "\n, pagAtual=" + pagAtual
                + "\n, aberto=" + aberto
                + "\n, leitor=" + leitor.getName() + '}';
    }

    public Book(String title, String autor, int totPages, People leitor) {
        this.title = title;
        this.autor = autor;
        this.totPages = totPages;
        this.pagAtual = 0;
        this.aberto = false;
        this.leitor = leitor;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getTotPages() {
        return totPages;
    }

    public void setTotPages(int totPages) {
        this.totPages = totPages;
    }

    public People getLeitor() {
        return leitor;
    }

    public void setLeitor(People leitor) {
        this.leitor = leitor;
    }

    @Override
    public void abrir() {
        this.aberto = true;
    }

    @Override
    public void fechar() {
        this.aberto = false;
    }

    @Override
    public void avancarPag() {
        this.pagAtual++;
    }

    @Override
    public void voltarPag() {
        this.pagAtual--;
    }

    @Override
    public void folhear(int numeroPagina) {
        if (numeroPagina > this.totPages) {
            this.pagAtual = 0;
        } else {
            this.pagAtual = numeroPagina;
        }

    }
}
