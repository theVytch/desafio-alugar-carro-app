import React, { Component } from 'react';
import VeiculoAlugadoService from '../services/VeiculoAlugadoService';

class CreateAlugarVeiculoComponent extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            inicioReserva: '',
            fimReserva: '',
            estado:'',
            veiculo:{id: props.match.params.id}
        }

        this.changeInicioReservaHandler = this.changeInicioReservaHandler.bind(this);
        this.changeFimReservaHandler = this.changeFimReservaHandler.bind(this);
        this.changeEstadoHandler = this.changeEstadoHandler.bind(this);
        this.saveVeiculoAlugar = this.saveVeiculoAlugar.bind(this);
    }

    saveVeiculoAlugar = (e) => {
        e.preventDefault();
        let veiculoAlugado = { inicioReserva: this.state.inicioReserva, fimReserva: this.state.fimReserva, estado: this.state.estado, veiculo: this.state.veiculo };
        console.log('veiculoAlugado => ' + JSON.stringify(veiculoAlugado));

        VeiculoAlugadoService.createVeiculoAlugado(veiculoAlugado).then(res => {
            this.props.history.push('/veiculos')
        })
    }

    cancel() {
        this.props.history.push('/veiculos')
    }

    changeInicioReservaHandler = (event) => {
        this.setState({ inicioReserva: event.target.value })
    }

    changeFimReservaHandler = (event) => {
        this.setState({ fimReserva: event.target.value })
    }

    changeEstadoHandler = (event) => {
        this.setState({ estado: event.target.value })
    }

   

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Insert Veiculo</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> inicio Reserva </label>
                                        <input placeholder="Inicio Reserva" name="inicioReserva" type="date"  className="form-control" value={this.state.inicioReserva} onChange={this.changeInicioReservaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Fim Reserva </label>
                                        <input placeholder="Fim Reserva" name="fimReserva" type="date"  className="form-control" value={this.state.fimReserva} onChange={this.changeFimReservaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Estado </label>
                                        <input placeholder="Estado" name="estado" type="number" max='4' min='2' className="form-control" value={this.state.estado} onChange={this.changeEstadoHandler} />
                                    </div>
                                    

                                    <button className="btn btn-success" onClick={this.saveVeiculoAlugar}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateAlugarVeiculoComponent;