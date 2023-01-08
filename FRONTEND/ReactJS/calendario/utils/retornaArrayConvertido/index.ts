import { EventoBigCalendar } from "../../../../../../types/EventoBigCalendar";
import { OperacaoAgendamento } from "../../../../../../types/OperacaoAgendamento";
import { converterDataHoraParaEventoTipoBigCalendar } from "../converterDataHoraParaEventoTipoBigCalendar/converterDataHoraParaEventoTipoBigCalendar";

export function retornaArrayEventosConvertido(
	agendamentos: any,
	arrayConvertido: EventoBigCalendar[]
) {
	agendamentos?.forEach((evento: OperacaoAgendamento) => {
		const novoEvento = converterDataHoraParaEventoTipoBigCalendar(evento);
		arrayConvertido.push(novoEvento);
	});

	return arrayConvertido;
}
