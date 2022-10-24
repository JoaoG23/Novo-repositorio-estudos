package condicionais;

import java.util.Scanner;

import condicionais.condicaoif.CondicaoIf;

public class CondicionaisOperadores {
    public static void main(String[] args) throws Exception {
        System.out.println(" -------------- Condicionais -----------");
        
        Scanner teclado = new Scanner(System.in);
        int dataNascimento = teclado.nextInt();

        System.out.println("======= Verificando Idade do Alcolismo ========");
        System.out.println(dataNascimento);

        CondicaoIf calcular = new CondicaoIf();

        String resultadoVerificacao = calcular.verificarSePodeConsumirBebidasAlcolicas(dataNascimento);
        System.out.println("O Resultado é :" + resultadoVerificacao);

    }
}
