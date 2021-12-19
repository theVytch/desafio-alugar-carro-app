import axios from "axios";

const VEICULO_API_BASE_URL = "https://api-desafio-alugar-carro.herokuapp.com/veiculosAlugados"

class VeiculoAlugadoService {
    getVeiculoAlugado(){
        return axios.get(VEICULO_API_BASE_URL);
    }

    createVeiculoAlugado(veiculoAlugado){
        return axios.post(VEICULO_API_BASE_URL, veiculoAlugado);
    }

    getVeiculoAlugadoById(veiculoAlugadoId){
        return axios.get(VEICULO_API_BASE_URL + '/' + veiculoAlugadoId);
    }

    updateVeiculoAlugado(veiculoAlugado, veiculoAlugadoId){
        return axios.put(VEICULO_API_BASE_URL + '/' + veiculoAlugadoId, veiculoAlugado);
    }

    deleteVeiculoAlugado(veiculoAlugadoId){
        return axios.delete(VEICULO_API_BASE_URL + '/' + veiculoAlugadoId)
    }
}

export default new VeiculoAlugadoService()