import React, { Component } from 'react'
import styled from 'styled-components'
import icons from '../../img/tique-certo.svg'
import image from '../../img/correspondencia-enviada.png'




const AppContainer = styled.div`
height: 90vh;
width:80%;
margin: 30px auto;
display:flex;
flex-direction:column;
justify-content:space-around;
border: 1px solid lightgray;

`
const ContainerMensage = styled.div`
flex-grow:1;
padding:10px;
display:flex;
flex-direction:column-reverse;
background-color:lightgray;

`

const InputContainner = styled.div`
display:flex;
height:30px;
background-color:#999;
text-align:center;
padding:10px;

`
const InputUsuario = styled.input`
width:100px;
border-radius:20px;
text-align:center;
border: 1px solid #999;
margin-right:20px;
outline: 0;


`
const InputMensagem = styled.input`
flex-grow:1;
border-radius:20px;
text-align:center;
border: 1px solid #999;
outline: 0;

`
const Texto = styled.div`
display:flex;
font-style: italic;



`
const Tique = styled.img`
width:30px;
display: flex;
margin-left:80%;



`

const Enviar = styled.img`
width:20px;
background-color:#999;  
outline: 0;

`
const BotaoEnviar = styled.button`
border: 1px solid #999;
border-radius:20px;
background-color: #999;
outline: 0;
`
class SecaoMensagem extends React.Component {
    state = {
        mensagem: [],

        valorInputUsuario: '',
        valorInputTexto: ''
    }


    onchangeUsuario = (event) => {

        this.setState({
            valorInputUsuario: event.target.value


        })
    }


    onchangeMensagem = (event) => {

        this.setState({
            valorInputTexto: event.target.value
        })
    }

    adiconaMensagem = () => {
        const novaMensagem = {

            usuario: this.state.valorInputUsuario,
            texto: this.state.valorInputTexto
        }

        const novasMensagens = [novaMensagem, ...this.state.mensagem]

        this.setState({ mensagem: novasMensagens, valorInputTexto: '' })
    }


    render() {
        return (
            <AppContainer>

                <ContainerMensage>
                
                    {this.state.mensagem.map((mensagens, index) => {

                        return <Texto key={index}> <strong>
                            {mensagens.usuario}
                             </strong> : {mensagens.texto}

                            <Tique src={icons} />

                        </Texto>



                    })}


                </ContainerMensage>

                <InputContainner>

                    <InputUsuario

                        onChange={this.onchangeUsuario}
                        value={this.state.valorInputUsuario}
                        placeholder={'Usuário'} />

                    <InputMensagem

                        onChange={this.onchangeMensagem}
                        value={this.state.valorInputTexto}
                        placeholder={'Type a message'} />

                    <BotaoEnviar onClick={this.adiconaMensagem}>
                        <Enviar src={image} />
                    </BotaoEnviar>

                </InputContainner>

            </AppContainer>

        )
    }

}

export default SecaoMensagem
