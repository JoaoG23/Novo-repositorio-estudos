/**
 * PENDENCIAS
 * 1- Trocar o Idioma X
 * 2- Adicionar o Timestamp local X
 * 3- Evento Clicavel X
*/

import { useNavigate } from "react-router-dom";
import { useMemo, useCallback, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

// Costumizados
import { atualizarHorarioEvento } from "./atualizarHorarioEvento";
import { traducaoCabecalhoPortugues } from "./configsCalendario/traducaoCabecalhoPortugues";
import { eventoStyle } from "./configsCalendario/eventoStyle";
import { CarregandoModal } from "../../../componentesCostumizados/modais/carregandoModal";
import { ErrorModal } from "../../../componentesCostumizados/modais/errorModal";

// Services
import { useGet } from "../../../../services/api/useGet";
import { sumirDepoisUmTempo } from "../../../../services/utils/sumirDepoisUmTempo";
import { BuscarTodosAgendamentos } from "./utils/buscarTodosAgendamentos";

// Types
import { OperacaoAgendamento } from "../../../../types/OperacaoAgendamento";
import { converterDataHoraParaEventoTipoBigCalendar } from "./utils/converterDataHoraParaEventoTipoBigCalendar/converterDataHoraParaEventoTipoBigCalendar";
import { EventoBigCalendar } from "../../../../types/EventoBigCalendar";

import 'moment/locale/pt-br.js';
import { retornaArrayEventosConvertido } from "./utils/retornaArrayConvertido";
// moment.utc()
const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar)
function Calendario() {
    const navigate = useNavigate()
    const {
        agendamentos,
        setErrorAgendamentos,
        agendamentosError,
        isCarregandoAgendamento
    } = BuscarTodosAgendamentos();

    if (agendamentosError) {
        sumirDepoisUmTempo(setErrorAgendamentos)
    }
    const arrayEventosConvertidos: EventoBigCalendar[] = [];
    const todosEventos = retornaArrayEventosConvertido(agendamentos, arrayEventosConvertidos)
    const [eventos, setEventos] = useState<any>(todosEventos)



    const eventoAoClicarNaTarefaCalendario = useCallback(
        (event: any) => {
            navigate(`/agendamento/operacao/${event.id}`)
        }, [])

    const aoSoltarEvento = useCallback(
        (event: any) => {
            navigate(0)
            atualizarHorarioEvento({ id: event.event.id, start: event.start, end: event.end })
        }, [])

    const aoPegarEvento = useCallback(
        (event: any) => {
            navigate(0)
        }, [])

    const { messages } = useMemo<any>(
        () => ({
            messages: traducaoCabecalhoPortugues
        }), [])

    return (
        <div>
            <DragAndDropCalendar
                defaultDate={new Date()}
                selectable
                defaultView="month"
                onSelectEvent={eventoAoClicarNaTarefaCalendario}
                messages={messages}
                localizer={localizer}
                resizable={true}
                eventPropGetter={eventoStyle}
                onEventDrop={aoSoltarEvento}
                onEventResize={aoSoltarEvento}
                events={todosEventos} style={{ height:900 }} />
            {isCarregandoAgendamento && <CarregandoModal />}
            {agendamentosError && <ErrorModal />}
        </div>
    );
}

export default Calendario;