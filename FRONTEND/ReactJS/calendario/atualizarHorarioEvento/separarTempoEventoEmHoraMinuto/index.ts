export function separarTempoEventoEmHoraMinuto(tempo: Date) {
    const tempoConvertido = new Date(tempo);
	const hora = tempoConvertido.getHours();
	const minuto = tempoConvertido.getMinutes();

	return {
		hora,
		minuto,
	};
}