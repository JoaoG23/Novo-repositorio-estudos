import React from 'react';

// Service
import { useGet } from '../../../../../../services/api/useGet';
import { EventoBigCalendar } from '../../../../../../types/EventoBigCalendar';
import { retornaArrayEventosConvertido } from '../retornaArrayConvertido';
// Type
import { OperacaoAgendamento } from '../../../../../../types/OperacaoAgendamento';

type Props = {

  id?: string
  children?: any
}

export function BuscarTodosAgendamentos() {


  const arrayEventosConvertidos: EventoBigCalendar[] = [];
  const {
    dados:agendamentos, isCarregando: isCarregandoAgendamento, error: agendamentosError, setError: setErrorAgendamentos,
  } = useGet<OperacaoAgendamento[]>(`/operacao-agendamento/`, {});



  return {
    agendamentos,
    isCarregandoAgendamento,
    setErrorAgendamentos,
    agendamentosError
  };

}

