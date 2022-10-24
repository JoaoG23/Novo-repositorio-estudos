public class App {

    public static void criandoMetodos(int a , int b) {
        int soma = a + b;
        System.out.println("Soma é : " + soma );
    }
    public static void main(String[] args) throws Exception {

        /*
         * ATENÇão
         * O método main e o metodo static
         * ou seja nao serve para instancia 
         * mas sim somente para class
         * 
         * Transforme-o em Static Também
         * 
         * TODO METODO STATICO NAO FAZ para de
         * um instanciamento de um objeto.
         */
        criandoMetodos(1, 1);

    }
}
