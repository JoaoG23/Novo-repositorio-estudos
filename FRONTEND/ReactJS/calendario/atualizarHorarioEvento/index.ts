// Service
import { requestAtualizaHorario } from "./requestAtualizar";
// Type

// Components
import { separarTempoEventoEmHoraMinuto } from "./separarTempoEventoEmHoraMinuto";
import { separarSoDataEvento } from "./separarSoDataEvento";

type Props = {
	id?: number;
	start?: Date;
	end?: Date;
};

export async function atualizarHorarioEvento(dados: Props) {
	const { id, start, end } = dados;
	const { hora: horaInicial, minuto: minutoInicial } =
		separarTempoEventoEmHoraMinuto(start as Date);

	const { hora: horaFim, minuto: minutoFim } = separarTempoEventoEmHoraMinuto(
		end as Date
	);
	const { dia, mes, ano } = separarSoDataEvento(start as Date);

	const agendamentoAtualizado = {
		data_agendamento: `${ano}-${mes + 1}-${dia}`,
		hora_inicio: `${horaInicial}:${minutoInicial}:00`,
		hora_fim: `${horaFim}:${minutoFim}:00`,
	};
	await requestAtualizaHorario(id, agendamentoAtualizado);
}
