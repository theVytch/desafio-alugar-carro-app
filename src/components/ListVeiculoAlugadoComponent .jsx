import React, { Component } from 'react';
import VeiculoService from '../services/VeiculoService';
import VeiculoAlugadoService from '../services/VeiculoAlugadoService';

class ListVeiculoAlugadoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tb_veiculo: [],
            tb_veiculo_alugado:[]
        }

        this.addVeiculo = this.addVeiculo.bind(this);
        this.deleteVeiculo = this.deleteVeiculo.bind(this);
        
    }

    deleteVeiculo(id){
        VeiculoAlugadoService.deleteVeiculoAlugado(id).then( res => {
            this.setState({tb_veiculo_alugado: this.state.tb_veiculo_alugado.filter(veiculo => veiculo.id !== id)});
        });
    }

    componentDidMount(){
        VeiculoService.getVeiculo().then((res) => {
            this.setState({tb_veiculo: res.data});
        });

        VeiculoAlugadoService.getVeiculoAlugado().then((res) => {
            this.setState({tb_veiculo_alugado: res.data});
        });
    }

    addVeiculo(){
        this.props.history.push('/insert-veiculo')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Veiculos Alugado</h2>
                
                <div className="row">
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Veiculo Id</th>
                                <th>Veiculo Inicio Reserva</th>
                                <th>Veiculo Fim Reserva</th>
                                <th>Veiculo Estado</th>

                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.tb_veiculo_alugado.map(
                                    tb_veiculo_alugado =>
                                        <tr kew={tb_veiculo_alugado.id}>
                                            <td> {tb_veiculo_alugado.id} </td>
                                            <td> {tb_veiculo_alugado.inicioReserva} </td>
                                            <td> {tb_veiculo_alugado.fimReserva} </td>
                                            <td> {tb_veiculo_alugado.estado} </td>
                
                                    
                                            <td> 
                                                <button style={{marginLeft:"10px"}} onClick = {() => this.deleteVeiculo(tb_veiculo_alugado.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListVeiculoAlugadoComponent;

