import { endpoint } from "../../../../../../services/api/endpointApi";

async function requestAtualizaHorario(id: any, body: any) {
	let carregando = true;

	console.log(body)
	try {
		const sucesso = await endpoint.patch(
			`/operacao-agendamento/horario/${id}`,
			body
		);
		const sucessoData = sucesso.data;
		console.log(sucessoData);
		return sucessoData;
	} catch (error) {
		const err = error;
		// console.log(error);
		return err;
	} finally {
		const finalizadoCarregamento = (carregando = !carregando);
		return finalizadoCarregamento;
	}
}

export { requestAtualizaHorario };
