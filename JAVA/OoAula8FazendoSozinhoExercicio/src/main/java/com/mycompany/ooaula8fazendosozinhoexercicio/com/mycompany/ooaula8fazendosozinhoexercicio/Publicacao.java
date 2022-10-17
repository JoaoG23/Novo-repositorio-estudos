package com.mycompany.ooaula8fazendosozinhoexercicio;
public interface Publicacao {
    public abstract void abrir();
    public abstract void fechar();
    public abstract void folhear( int numeroPagina );
    public abstract void avancarPagina();
    public abstract void voltaPagina();
}
