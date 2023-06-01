
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='nome_motorista' register={register} label='Nome do motorista' />
                {errors.nome_motorista?.type === "required" && (
                    <AlertErro mensagem="Campo Nome do motorista vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='cpf_motorista' register={register} label='CPF do motorista' />
                {errors.cpf_motorista?.type === "required" && (
                    <AlertErro mensagem="Campo CPF do motorista vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='placa_veiculo' register={register} label='Placa do veiculo' />
                {errors.placa_veiculo?.type === "required" && (
                    <AlertErro mensagem="Campo Placa do veiculo vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='tipo_veiculo' register={register} label='Tipo Veiculo' />
                {errors.tipo_veiculo?.type === "required" && (
                    <AlertErro mensagem="Campo Tipo Veiculo vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='dataChegada' register={register} label='Data Chegada' />
                {errors.dataChegada?.type === "required" && (
                    <AlertErro mensagem="Campo Data Chegada vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='horaChegada' register={register} label='Hora Chegada' />
                {errors.horaChegada?.type === "required" && (
                    <AlertErro mensagem="Campo Hora Chegada vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='carreta' register={register} label='Media Carreta' />
                {errors.carreta?.type === "required" && (
                    <AlertErro mensagem="Campo Media Carreta vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='container' register={register} label='Container' />
                {errors.container?.type === "required" && (
                    <AlertErro mensagem="Campo Container vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='doca' register={register} label='Doca' />
                {errors.doca?.type === "required" && (
                    <AlertErro mensagem="Campo Doca vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='pesoEntrada' register={register} label='100' />
                {errors.pesoEntrada?.type === "required" && (
                    <AlertErro mensagem="Campo 100 vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='dataEntrada' register={register} label='Data Entrada' />
                {errors.dataEntrada?.type === "required" && (
                    <AlertErro mensagem="Campo Data Entrada vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='horaEntrada' register={register} label='Hora Entrada' />
                {errors.horaEntrada?.type === "required" && (
                    <AlertErro mensagem="Campo Hora Entrada vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        