import React, { Component } from 'react';
import VeiculoService from '../services/VeiculoService';
import VeiculoAlugadoService from '../services/VeiculoAlugadoService';

class ViewVeiculoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            veiculo: { veiculoAlugado:{} }
           
        }
        console.log(props)
    }

    cancel() {
        this.props.history.push('/veiculos')
    }

    componentDidMount() {
        VeiculoService.getVeiculoById(this.state.id).then(res => {
            console.log(res.data)
            this.setState({ veiculo: res.data });
        })

        VeiculoAlugadoService.getVeiculoAlugadoById(this.state.id).then(res => {
            this.setState({ veiculoAlugado: res.data });
        })
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Veiculo Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Modelo: {this.state.veiculo.modelo}</label>
                        </div>
                       
                        <div className="row">
                            <label> Placa: { this.state.veiculo.placa }</label>
                        </div>

                        <div className="row">
                            <label> Ano: { this.state.veiculo.ano }</label>
                        </div>

                        <div className="row">
                            <label> Estado: { this.state.veiculo.estado }</label>
                        </div>
                        
                    </div>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginRight: "75%" }}>Voltar</button>
                </div>
                
            </div>
        );
    }
}

export default ViewVeiculoComponent;