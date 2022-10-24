package condicionais.condicaoif;

import condicionais.condicaoif.myinterface.Condicao;

public class CondicaoIf implements Condicao {

    @Override
    public String verificarSePodeConsumirBebidasAlcolicas(int dataNascimento) {
        
        int idadeEncontrada = 2022 - dataNascimento;

        if (idadeEncontrada > 18) {
            return "Maior que 18 Anos poderá: Consumir Sim!";
        } else {
           return "Você é de menor : Não pode beber!";
        }
    }
    
}
