class Exercicios {
  public static buscaNumeroAnteriorESucessor(valor: number) {
    console.info(`Numero Descrito é : ${valor}`);
    console.info(`O Anterior : ${valor - 1}`);
    console.info(`O Sucesso : ${valor + 1}`);
  }
  public static mostrarValorRealDobroETerçaParte(valor: number) {
    console.info(`O valor descrito é : ${valor}`);
    const dobro = valor * 2;
    const tercaParte = valor / 3;
    console.info(`O valor descrito é : ${valor}`);
    console.info(`Dobro : ${dobro}`);
    console.info(`Terça parte : ${tercaParte}`);
  }
  public static mostrarDistanciasVariasFormas(distancia: number) {
    console.info(`A distância de ${distancia} corresponde a :`);
    console.info(`${distancia / 1000} Km`);
    console.info(`${distancia / 100} Hm`);
    console.info(`${distancia * 100} Dam`);
    console.info(`${distancia / 10000} Dm`);
    console.info(`${distancia * 1000} Cm`);
    console.info(`${distancia * 100000} Mi`);
   
  }
  public static fatorial(numero: number) {
    let fat:number = 1;
    let i:number = 1;
    while (numero > 0) {
      fat = fat * numero;
      numero--;
    }
    
    console.info(`O Fatorial ${fat} corresponde`);
   
  }
}

Exercicios.fatorial(9)

