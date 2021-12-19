import React, { Component } from 'react';
import VeiculoService from '../services/VeiculoService';

class ListVeiculoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tb_veiculo: []
        }

        this.addVeiculo = this.addVeiculo.bind(this);
        this.editVeiculo = this.editVeiculo.bind(this);
        this.deleteVeiculo = this.deleteVeiculo.bind(this);
    }

    viewVeiculo(id){
        this.props.history.push(`view-veiculo/${id}`)
    }

    viewVeiculoAlugado(id){
        this.props.history.push(`insert-alugarVeiculo/${id}`)
    }

    editVeiculo(id){
        this.props.history.push(`/update-veiculo/${id}`);
    }

    deleteVeiculo(id){
        VeiculoService.deleteVeiculo(id).then( res => {
            this.setState({tb_veiculo: this.state.tb_veiculo.filter(veiculo => veiculo.id !== id)});
        });
    }

    componentDidMount(){
        VeiculoService.getVeiculoDisponivel().then((res) => {
            this.setState({tb_veiculo: res.data});
        });
    }

    addVeiculo(){
        this.props.history.push('/insert-veiculo')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Veiculo</h2>
                
                <div className="row">
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Veiculo Id</th>
                                <th>Veiculo Modelo</th>
                                <th>Veiculo Placa</th>
                                <th>Veiculo Ano</th>
                                <th>Veiculo Estado</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.tb_veiculo.map(
                                    tb_veiculo =>
                                        <tr kew={tb_veiculo.id}>
                                            <td> {tb_veiculo.id} </td>
                                            <td> {tb_veiculo.modelo} </td>
                                            <td> {tb_veiculo.placa} </td>
                                            <td> {tb_veiculo.ano} </td>
                                            <td> {tb_veiculo.estado} </td>
                                            <td> 
                                                <button onClick = {() => this.editVeiculo(tb_veiculo.id)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft:"10px"}} onClick = {() => this.deleteVeiculo(tb_veiculo.id)} className="btn btn-danger">Delete</button>
                                                <button style={{marginLeft:"10px"}} onClick = {() => this.viewVeiculo(tb_veiculo.id)} className="btn btn-success">View</button>
                                                <button style={{marginLeft:"10px"}} onClick = {() => this.viewVeiculoAlugado(tb_veiculo.id)} className="btn btn-success">alugar</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <button style={{marginLeft:"-12px"}} className="btn btn-primary" onClick={this.addVeiculo}> Create Veiculo</button>
            </div>
        );
    }
}

export default ListVeiculoComponent;

