package ooaula6relacionamentoclasses;

import java.util.Random;

public class Luta {
    // Atributos 
    private Lutador desafiado;
    private Lutador desafiante;
    private int rounds;
    private boolean aprovado;
    // Metodos
    
    public void marcarLuta( Lutador l1, Lutador l2 ){
        if ( l1.getCategoria().equals(l2.getCategoria()) && l1 != l2 ) {
                this.aprovado = true;
                this.desafiante = l1;
                this.desafiado = l2;
        } else {
        
            this.aprovado = false;
                this.desafiante = null;
                this.desafiado = null;
        }
    }
    
    public void lutar() {
        if( this.aprovado) {
            System.out.println("### DESAFIANTE ####");
            this.desafiante.apresentar();
            System.out.println("### DESAFIADO ####");
            this.desafiado.apresentar();
            
            
            Random aleatorio = new Random();
            int vencedor = aleatorio.nextInt(3); // 0 1 2
            
            switch ( vencedor ) {
                case 0:
                    System.out.println("EMPATOU");
                    this.desafiante.empatarLuta();
                    this.desafiado.empatarLuta();
                   break;
                case 1:
                     System.out.println("Vitoria do " + this.desafiado.getNome());
                     this.desafiado.ganharLuta();
                     this.desafiante.perderLuta();
                    break;
                case 2:
                     System.out.println("Vitoria do " + this.desafiante.getNome());
                     this.desafiante.ganharLuta();
                     this.desafiado.perderLuta();
                    break;
            }
            
        } else {
            System.out.println("A luta não pode acontecer !");
        }
    
    }

    public Lutador getDesafiado() {
        return desafiado;
    }

    public void setDesafiado(Lutador desafiado) {
        this.desafiado = desafiado;
    }

    public Lutador getDesafiante() {
        return desafiante;
    }

    public void setDesafiante(Lutador desafiante) {
        this.desafiante = desafiante;
    }

    public int getRounds() {
        return rounds;
    }

    public void setRounds(int rounds) {
        this.rounds = rounds;
    }

    public boolean isAprovado() {
        return aprovado;
    }

    public void setAprovado(boolean aprovado) {
        this.aprovado = aprovado;
    }
}
