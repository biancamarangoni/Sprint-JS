import React from 'react';
import './App.css';

function DataFormatada(props) {
  return <h2>Horário atual: {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //Definimos o estado date pegando a data atual
      date : new Date()
    }
  }

  //Fora do construtor, definidos os ciclos de vida

  //Ciclo de vida que ocorre quando Clock é inserido na DOM
  componentDidMount(){
    this.idTime = setInterval(() => {
      this.tick()
    }, 1000);
  }

  //Ciclo de vida que ocorre quando clock é removido da DOM
  componentWillUnmount(){
    clearInterval(this.idTime)
  }

  tick(){
    this.setState({
      date : new Date()
    })
  }

  pararRelogio() {
    clearInterval(this.idTime);
    console.log(`Relógio ${this.idTime} parou!`);
  }

  voltarNoTempo(){
    this.idTime = setInterval(() => {
      this.tick()
    }, 1000);
    console.log(`Relógio retomado, agora eu sou o relógio ${this.idTime}`);
  }



  render(){
    return (
      <div>
        <h1>Relogio</h1>
        <DataFormatada date={this.state.date} />  
        <button className="BtnParar" onClick={() => this.pararRelogio()}>Parar</button>
        <button className="BtnRetomar" onClick={() => this.voltarNoTempo()}>Continuar</button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Faz a chamada de dois relogios para mostrar a independencia destes */}
        <Clock />
      </header>
    </div>
  );
}

export default App;
