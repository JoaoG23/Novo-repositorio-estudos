
// Pontos positivos

// Pode remover o item de qualquer local da aplicacao somente passando o nome.
        class Set {
            constructor() {
                this.items = {}
            }
            // Metodo antigo HAS 
            // has( elemento ) {
            //         return elemento in this.items;
            //     }

            // Metodo melhorado HAS 
            has( elemento ) {
                return Object.prototype.hasOwnProperty.call(this.items , elemento)
            }
            add( elemento ){
                if(!this.has( elemento )) {
                    this.items[ elemento ] = elemento;
                    return true;
                }
                return false;
            }
            delete( elemento ){
                if(this.has( elemento )) {
                   delete this.items[ elemento ] 
                    return true;
                }
                return false;
            }
            size(){
                return Object.keys(this.items).length;
            }
            clear(){
                this.items = {}
            }
            values(){
                return Object.values(this.items);
            }

            // Operações técnicas

            // Metodos auxiliares
            toStockValues( valors, armazenador ) {
                let novoArmazenador = armazenador;
                for( let i of valors ) {
                    novoArmazenador.add(i)
                }
                return novoArmazenador;
            }
            
            // Metodos Principais
            union( otherSet ) {
                const setUnion = new Set();
                let values = this.values();
                    this.toStockValues(values, setUnion);
                values = otherSet.values();
                    this.toStockValues(values, setUnion);

                return setUnion;
            }        

        }
        
        let set = new Set;

        // set.add('Ana');
        // set.add('Calda');
        // set.add('Felix');
        // set.add('Claudio');
        // set.delete('Bruna');
        
        console.info('O tamanho do Conjuto é : ' + set.size());
        console.info('Todos os Itens do conjuto são : ' + set.values());
        console.info('A Class conjuto é  > ' + set);

        // Criando uma union

        const listaPessoasMG = new Set();

        listaPessoasMG.add('Carla');
        listaPessoasMG.add('Dominga');
        listaPessoasMG.add('Toninho');
        const listaPessoaRJ = new Set();
        
        listaPessoaRJ.add('Zau');
        listaPessoaRJ.add('Joao');
        listaPessoaRJ.add('Wanderson');

        const unionRJeMG = listaPessoasMG.union(listaPessoaRJ);

        console.info(unionRJeMG.values());


