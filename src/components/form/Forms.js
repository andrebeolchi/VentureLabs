import { Label,
         Input,
         ButtonWrapper,
         FormButton,
         MiniExample} from './FormElements';


export function Dados(props){

    return(
        <>
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" 
                   name="nome"
                   type="text"
                   value={props.nome}
                   onChange={props.onChange}
                   isEmpty={props.isEmpty}
            />

            <Label htmlFor="sobrenome">Sobrenome</Label>
            <Input id="sobrenome"
                   name="sobrenome"
                   type="text"
                   onChange={props.onChange}
                   value={props.sobrenome}
                   isEmpty={props.isEmpty}
            />

            <Label htmlFor="email">E-mail</Label>
            <Input id="email"
                   name="email"
                   type="email"
                   onChange={props.onChange}
                   value={props.email}
                   isEmpty={props.isEmpty}
            />
            <MiniExample>Ex.: exemplo@mail.com</MiniExample>

            <Label htmlFor="tel">Telefone</Label>
            <Input id="tel"
                   name="tel"
                   type="number"
                   onChange={props.onChange}
                   value={props.tel}
                   isEmpty={props.isEmpty}/>
            <MiniExample>DDD + Número - Ex.: XX XXXXX XXXX</MiniExample>

            <ButtonWrapper>
                <FormButton isPrimary={true} type="button" onClick={props.next}>Próximo</FormButton>
            </ButtonWrapper>
        </>
    )
}

export function Endereco(props){
    return(
        <>
            <Label htmlFor="cep">CEP</Label>
            <Input id="cep"
                   name="cep"
                   type="text"
                   onChange={props.onChange}
                   value={props.cep}
                   isEmpty={props.isEmpty}/>
            <MiniExample>Somente números - Ex.: XXXXX-XXX</MiniExample>

            <Label htmlFor="endereco1">Endereço 1</Label>
            <Input id="endereco1"
                   name="endereco1"
                   type="text"
                   onChange={props.onChange}
                   value={props.endereco1}
                   isEmpty={props.isEmpty}/>
            <MiniExample>Ex.: Rua Exemplo Um</MiniExample>

            <Label htmlFor="endereco2">Endereço 2</Label>
            <Input id="endereco2"
                   name="endereco2"
                   type="text"
                   onChange={props.onChange}
                   value={props.endereco2}
                   isEmpty={props.isEmpty}/>
            <MiniExample>Ex.: Rua Exemplo Dois</MiniExample>
                
            <ButtonWrapper>
                <FormButton isPrimary={false} 
                            type="button"
                            onClick={props.back}>
                        Voltar
                </FormButton>
                <FormButton isPrimary={true}
                            type="button"
                            onClick={props.next}>
                    Próximo
                </FormButton>
            </ButtonWrapper>
        </>
    )
}

export function Outros(props){
    return(
        <>
           <Label htmlFor="dataNascimento">Data de Nascimento</Label>
           <Input id="dataNascimento"
                  name="dataNascimento"
                  type="date"
                  onChange={props.onChange}
                  value={props.dataNascimento}
                  isEmpty={props.isEmpty}/>
            <MiniExample>Ex.: DD / MM / AAAA</MiniExample>

           <Label htmlFor="cpf">CPF</Label>
           <Input id="cpf"
                  name="cpf"
                  onChange={props.onChange}
                  value={props.cpf}
                  type="number"
                  isEmpty={props.isEmpty}/>
           <MiniExample>Somente Dígitos - Ex.: XXX XXX XXX XX</MiniExample>

           <Label htmlFor="renda">(R$) Renda Mensal</Label>
           <Input id="renda"
                  name="renda"
                  onChange={props.onChange}
                  value={props.renda}
                  type="number"
                  isEmpty={props.isEmpty}/>
            <MiniExample>Somente Dígitos - Ex.: XXXX</MiniExample>
           
           <ButtonWrapper>
               <FormButton isPrimary={false}
                           type="button"
                           onClick={props.back}>
                    Voltar
                </FormButton>
               <FormButton isPrimary={true}
                           type="submit">
                    Salvar
                </FormButton>
           </ButtonWrapper>
        </>
    )
}
