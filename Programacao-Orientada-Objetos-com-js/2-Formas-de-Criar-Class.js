// --------- 3 Formas de Criar Class em JavaScript --------

// Obs: This : é referencia ao proprio Objeto

//Como funcao
function MatematicaFunction() {
    this.somar = (n1, n2) => {
        return (n1 + n2)
    }
}
//Como Class
class MatematicaClass {
    somar(n1, n2) {
        return n1 + n2
    }
}
// Como Objeto
let MatematicaObjeto = {
    somar:(n1,n2) => {
        return n1 + n2;
    }
}

// Instanciar : Significar atribuir o elemento a uma variavel.

let soma2 = new MatematicaClass;
let soma3 = new MatematicaFunction;

// O objeto já esta instanciado. ...  Por isso ao precisa instanciar a variavel
console.log(MatematicaObjeto.somar(1,2));

console.log(soma2.somar(1,3));
console.log(soma3.somar(1,4));