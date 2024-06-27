package vetores;


import java.util.Arrays;


public class Vetores implements VetoresInterface {
    
    /*
     * VETORES =====
     * Modos de se criar vetores
     * 
     * ==== 1
     * int [] = new int[4];
     * 
     * n[1] = 3;
     * 
     * ==== 2
     * int n[] = {3,5,8,2};
     * 
     * 
     */

     
     // Segundo modo de criação de vetores
     
     @Override
     public void criandoVetores() {
        int numeros[] = {3,2,8,7,5,6}; 
        System.out.println("Total de casas " + numeros.length);
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(" Na posição : " + i + " temos o valor " + numeros[i]);
        }
    }

    @Override
    public void praticandoComMeses() {
        
        String mes[] = {"Jan", "Fev", "Mar", "Abr","Mai","Jun",
         "Jul", "Ago","Out","Nov", "Dez"};

         int total[] = {31,28,30,31,30,31,30,31,31,30,31,30};

         for (int i = 0; i < mes.length; i++) {
            System.out.println("O mês de " + mes[i] + " tem " + total[i] + " dias ao todo");
         }

    }

    @Override
    public void interandoForEach() {
        double numeros[] = {3.4, 2.59, 9, -8.2};
        
        Arrays.sort(numeros); // Orderna Arrays
        for (double valor : numeros) {
            System.out.println(valor + " de dentro");
        }

    }
    @Override
    public void buscandoDados() {
        int numeros[] = {3, 10, 5,2};
        
        // Busca binaria com é depois pesquisar
        for (int i : numeros) {
            System.out.print(i + " ");
        }

        int numeroEncontrado = Arrays.binarySearch(numeros, 10); // ele encontrou o valor 10 na posicao 2
        System.out.println("Encontrei este valor na posicao " + numeroEncontrado);

    }
    public void prenchendoVazios() {

        int vetor[] = new int[20];
        Arrays.fill(vetor, 0);
        
        for (int valor : vetor) {
            System.out.print(valor);
        }

        // this.buscandoDados(); // Chamando uma metodo dentro de outro metodo

    }

    public void gerarArrayDeObjetos() {
        AlunoArrayObject[] grupoEstudandes;

        grupoEstudandes = new AlunoArrayObject[2];
        grupoEstudandes[0] = new AlunoArrayObject(2, "Omm Prasad", "Carlos");
        grupoEstudandes[1] = new AlunoArrayObject(3, "Russo", "Joazi");

        
        for (AlunoArrayObject alunoArrayObject : grupoEstudandes) {
            grupoEstudandes.toString();
        }

        // OR

        for(int [] i: square) System.out.println(Arrays.toString(i));
        
        System.out.println(" grupo de Estudantes: " + grupoEstudandes[0]);
    }
    
}
