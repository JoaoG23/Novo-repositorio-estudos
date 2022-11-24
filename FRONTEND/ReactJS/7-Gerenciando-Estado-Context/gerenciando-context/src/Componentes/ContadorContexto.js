/***
 * CONTEXTO = Significa o compartilhamento
 * de propriedade pelos componentes existentes
 * no contexto,
 * Sem precisar passa essa 
 * informacao para o APP
 *  do mesmo propriedades sem passa para o app
 * antes
 * 
 * 
 * Ou seja o CONTEXTO e o intemediador
 * da comunicação.
 */

/**
 * NAO tem necessidade de pegar o estado via props
 */

import React ,{ useState , createContext } from "react";

export const ContadorContexto = createContext();

export function ContadorProvider(props) {
    
    const [ contagem , setContagem ] = useState(0);

    return(
        <ContadorContexto.Provider value={[contagem , setContagem ]}>
            {props.children}
        </ContadorContexto.Provider>
    )
}

