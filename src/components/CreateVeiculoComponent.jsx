import React, { Component } from 'react';
import VeiculoService from '../services/VeiculoService';

class CreateVeiculoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modelo: '',
            placa: '',
            ano:'',
            estado:''
        }

        this.changeModeloHandler = this.changeModeloHandler.bind(this);
        this.changePlacaHandler = this.changePlacaHandler.bind(this);
        this.changeAnoHandler = this.changeAnoHandler.bind(this);
        this.changeEstadoHandler = this.changeEstadoHandler.bind(this);
        this.saveVeiculo = this.saveVeiculo.bind(this);
    }

    saveVeiculo = (e) => {
        e.preventDefault();
        let veiculo = { modelo: this.state.modelo, placa: this.state.placa, ano: this.state.ano, estado: this.state.estado };
        console.log('veiculo => ' + JSON.stringify(veiculo));

        VeiculoService.createVeiculo(veiculo).then(res => {
            this.props.history.push('/veiculos')
        })
    }

    cancel() {
        this.props.history.push('/veiculos')
    }

    changeModeloHandler = (event) => {
        this.setState({ modelo: event.target.value })
    }

    changePlacaHandler = (event) => {
        this.setState({ placa: event.target.value })
    }

    changeAnoHandler = (event) => {
        this.setState({ ano: event.target.value })
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
                                        <label> Modelo </label>
                                        <input placeholder="Modelo" name="modelo" className="form-control" value={this.state.modelo} onChange={this.changeModeloHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Placa </label>
                                        <input placeholder="Placa" name="placa" className="form-control" value={this.state.placa} onChange={this.changePlacaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Ano </label>
                                        <input placeholder="Ano" name="ano" className="form-control" value={this.state.ano} onChange={this.changeAnoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Estado </label>
                                        <input placeholder="Estado" name="estado" type="number" className="form-control" value={this.state.estado} onChange={this.changeEstadoHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveVeiculo}>Save</button>
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

export default CreateVeiculoComponent;