
        //-------Declarando Variaveis de entrada de Dados

        let aporteInput = document.getElementById("aporteMensal");
        let saldoInicialInput = document.getElementById("saldoInicial");
        let taxaInput = document.getElementById("taxa");
        let periodoInput = document.getElementById("periodo");

        //-------Declarando Variaveis de entrada de Saida de Dados

        let resultadoPeriodo = document.getElementById("periodo_resultado");
        let resultadoValor = document.getElementById("valor_resultado");
        let resultadoTitulo = document.getElementById("titulo_resultado");

        
        function calcularRendimentos() {


            let aporte = parseInt(aporteInput.value);
            let saldoInicial = parseFloat(saldoInicialInput.value);
            let taxa = parseFloat(taxaInput.value);

            let taxaTratada = x => x / 1000;
            let periodo = parseInt(periodoInput.value);
            let rendimento = (taxaTratada(taxa) * saldoInicial);

            for (i = 1; i < periodo; i++) {
                var soma = (saldoInicial + rendimento) + aporte;

                saldoInicial = soma;

                console.log(i);
                console.log(saldoInicial);

                //------ Final Saida de Dados no HTML--------------

                resultadoPeriodo.innerHTML = `${i}`;
                resultadoValor.innerHTML += `<p>${Math.round(saldoInicial)}R$ Reais</p>`;

            }

        }


        //--------- Controle de Scroll -----------
        function desceAteFinal() {
            window.scrollBy(0, 50000);
        }

        function subirAteInicio() {
            window.scrollBy(0, -50000);
        }