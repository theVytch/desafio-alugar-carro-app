import axios from "axios";

const VEICULO_API_BASE_URL = "https://api-desafio-alugar-carro.herokuapp.com/veiculos"

class VeiculoService {
    getVeiculo(){
        return axios.get(VEICULO_API_BASE_URL);
    }

    getVeiculoDisponivel(){
        return axios.get(VEICULO_API_BASE_URL + '/veiculos');
    }

    createVeiculo(veiculo){
        return axios.post(VEICULO_API_BASE_URL, veiculo);
    }

    getVeiculoById(veiculoId){
        return axios.get(VEICULO_API_BASE_URL + '/' + veiculoId);
    }

    updateVeiculo(veiculo, veiculoId){
        return axios.put(VEICULO_API_BASE_URL + '/' + veiculoId, veiculo);
    }

    deleteVeiculo(veiculoId){
        return axios.delete(VEICULO_API_BASE_URL + '/' + veiculoId)
    }
}

export default new VeiculoService()