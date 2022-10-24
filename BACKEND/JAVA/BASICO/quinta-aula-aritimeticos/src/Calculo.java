public class Calculo {
    
    public static void somaMedia() {
        System.out.println("--- Operadores Aritimenticos");
        /**
         * 
         * Operadores Aritimeticos
         */
        System.out.println("---------- Media de Valores-------");
        int numeroUm = 3;
        int numeroDois = 4;
        
        float mediaDos2Valores = (numeroUm + numeroDois) / 2;
        
        System.out.format("A média das soma %.3f  dos valores",mediaDos2Valores);
        System.out.println("---------- -------------- -------");

    }
    public static void incremento() {

        /*
         * Pode se incrementar no java decrementar
         */
        System.out.println("----- Incremento do valores ------");
        int numeroDez = 10;
        int valor = 5 + numeroDez++; // mais 1 ao 10 = 11
        
        System.out.println(valor);
        System.out.println(numeroDez);
        System.out.println("----- ----------- ------");
    }
    public static void atribuicao() {

        /*
         * Pode se atribuicao no java 
         * += Soma e atribuir a += b : a = a + b
         * -= Menos e atribuir a -= b : a = a - b
         * *= Multiplicar e atribuir a *= b : a = a * b
         * /= Dividir e atribuir a /= b : a = a / b
         * %= Resto e atribuir a %= b : a = a % b
         */
        System.out.println("----- Atribuicao ------ ------");
 
        int x = 4;
        x += 2; // X = x + 2;
        x *= 2; // X = x * 2;
        x /= 2; // X = x / 2;
        x -= 2; // X = x - 2;
        System.out.println("Resultado das Aribuição de " + x);
        System.out.println("----- ----------- ---- ------");
    }

    public static void bibliotecaMath() {
        System.out.println("----- Maths e seus metodos ------");
 
        float pi = (float) Math.PI;
        System.out.println("Numero PI: " + pi);
        int negativo = -12;
        int convertidoNegativoParaPositivo = Math.abs(negativo);
        System.out.println("Negativo convertido : " + convertidoNegativoParaPositivo);
        
        float numeroDecimal = (float) 2.654;
        int arrendondadoNumero = Math.round(numeroDecimal);
        
        System.out.println("Arredondado : " + arrendondadoNumero);
        System.out.println("---------------------------------");
    }
}
