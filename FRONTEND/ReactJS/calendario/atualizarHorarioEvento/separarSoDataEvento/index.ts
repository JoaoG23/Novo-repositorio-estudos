export function separarSoDataEvento(data: Date) {
	const dataConvertida = new Date(data);
	const ano = dataConvertida.getUTCFullYear();
	const mes = dataConvertida.getUTCMonth();
	const dia = dataConvertida.getUTCDate();

	return {
		ano,
		mes,
		dia,
	};
}
