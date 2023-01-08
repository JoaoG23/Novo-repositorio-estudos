import { OperacaoAgendamento } from "../../../../../../types/OperacaoAgendamento";
import { separaDadosTempo } from "./utils/separaDadosTempo";
import { separaDadosData } from "./utils/separaDadosData";
/*

@Autor Joao Guilherme
converte dataHora dos dados
vindo do Agendamento backend
para eventos do calendario

*/

export function converterDataHoraParaEventoTipoBigCalendar(
	evento: OperacaoAgendamento
) {
	const dataChegadaNewDate = new Date(evento.data_agendamento as any);
	const horarioInicialConvertido = new Date(evento.hora_inicio as any);
	const horarioSaidaConvertido = new Date(evento.hora_fim as any);

	const { dia, mes, ano } = separaDadosData(dataChegadaNewDate);
	const { hora: horaInicial, minuto: minutoInicial } = separaDadosTempo(
		horarioInicialConvertido
	);
	const { hora: horaFim, minuto: minutoFim } = separaDadosTempo(
		horarioSaidaConvertido
	);

	const horarioChegada = new Date(
		ano,
		mes,
		dia,
		horaInicial,
		minutoInicial,
		0
	);
	const horaioSaida = new Date(ano, mes, dia, horaFim, minutoFim, 0);
	const eventoConvetido = {
		id: evento.codigo_agendamento,
		title: evento.nome_transportadora,
		start: horarioChegada,
		end: horaioSaida,
	};

	return eventoConvetido;
}

// Funcao original
// const horaInicial = horarioInicialConvertido.getHours();
// const minutoInicial = horarioInicialConvertido.getMinutes();
// const horaFim = horarioSaidaConvertido.getHours();
// const minutoFim = horarioSaidaConvertido.getMinutes();
// agendamentos?.forEach((evento: OperacaoAgendamento) => {
//     const dataChegadaNewDate = new Date(evento.data_agendamento as any)
//     const horarioInicialConvertido = new Date(evento.hora_inicio as any)
//     const horarioSaidaConvertido = new Date(evento.hora_fim as any)

//     const ano = dataChegadaNewDate.getFullYear()
//     const mes = dataChegadaNewDate.getMonth()
//     const dia = dataChegadaNewDate.getDate()
//     const horaInicial = horarioInicialConvertido.getHours()
//     const minutoInicial = horarioInicialConvertido.getMinutes()
//     const horaFim = horarioSaidaConvertido.getHours()
//     const minutoFim = horarioSaidaConvertido.getMinutes()

//     const horarioChegada = new Date(ano, mes, dia, horaInicial, minutoInicial, 0);
//     const horaioSaida = new Date(ano, mes, dia, horaFim, minutoFim, 0);

//     console.log(' chegada ' + horarioChegada)
//     console.log('Saida ' + horaioSaida);
//     console.info('ano ', ano)
//     console.info('mes ', mes)
//     console.info('dia ', dia)
//     console.info('hora ', horaInicial)
//     console.info('minuto ', minutoInicial)

//     const eventoInserido = {
//         id: evento.codigo_agendamento,
//          title: evento.nome_transportadora,
//          start: horarioChegada,
//          end: horaioSaida
//         }
//     convertidasDatasParaNewDate.push(eventoInserido)
// })
