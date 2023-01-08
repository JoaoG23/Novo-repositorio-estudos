
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
// import { ErrorAgendamentoModal } from "../../../componentesCostumizados/modais/errorAgendamentoModal";

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
import { endpoint } from "../../../../services/api/endpointApi";
import { ErrorModal } from "../../../componentesCostumizados/modais/errorModal";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar)
function Calendario() {
    const navigate = useNavigate()

    const dataPadrao = useMemo(() => new Date(), []);

    const arrayEventosConvertidos: EventoBigCalendar[] = [];
    const [agendamentos, setAgendamento] = useState<EventoBigCalendar[] | any>([]);
    const [isCarregandoAgendamentos, setIsCarregandoAgendamentos] = useState(false);
    const [errorAgendamento, setErrorAgendamento] = useState<any | null>(null);

    useEffect(() => {
        setIsCarregandoAgendamentos(true);
        endpoint.get('operacao-agendamento')
            .then((response) => {
                const todosEventos = retornaArrayEventosConvertido(response.data, arrayEventosConvertidos)
                setAgendamento(todosEventos);
            })
            .catch((err) => {
                setErrorAgendamento(err);
            })
            .finally(() => {
                setIsCarregandoAgendamentos(false);
            });
    }, []);

    if (errorAgendamento) {
        sumirDepoisUmTempo(setErrorAgendamento)
    }

    const aoMovimentarEvento = useCallback(
        ({ event, start, end }: any) => {

            atualizarHorarioEvento({ id: event.id, start: start, end: end })
            setAgendamento((prev: any) => {
                const existing = prev.find((ev: any) => ev.id === event.id) ?? {}
                const filtered = prev.filter((ev: any) => ev.id !== event.id)
                const retorno = [...filtered, { ...existing, start, end }]
                return retorno
            })

        },
        [setAgendamento]
    )

    const onShowMore = useCallback(
        (events:object[], date:Date) => window.alert(JSON.stringify(events, date as any)),
        []
      )
    
    const eventoAoClicarNaTarefaCalendario = useCallback(
        (event: any) => {
            navigate(`/agendamento/operacao/${event.id}`)
        }, [])


    const { messages } = useMemo<any>(
        () => ({
            messages: traducaoCabecalhoPortugues
        }), [])

    return (
        <div>
            <DragAndDropCalendar
                defaultDate={moment().toDate()}
                selectable
                defaultView="week"
                onSelectEvent={eventoAoClicarNaTarefaCalendario}
                messages={messages}
                localizer={localizer}
                resizable
                showAllEvents
                eventPropGetter={eventoStyle}
                onEventDrop={aoMovimentarEvento}
                onEventResize={aoMovimentarEvento}
                events={agendamentos} style={{ height: 600 }} />
            {isCarregandoAgendamentos && <CarregandoModal />}
            {errorAgendamento && <ErrorModal />}
        </div>
    );
}

export default Calendario;