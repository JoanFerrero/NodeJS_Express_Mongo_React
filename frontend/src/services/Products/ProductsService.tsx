import Api from "../Api"

const postData = async (url: string, values: {}) => {
  return Api().post(url, values);
}

const getData = async (url: string, values: {}) => {
  return Api().get(url, values);
}

const getData1 = async (url: string) => {
  return Api().get(url);
}


const PokemonService = {
  postData,
  getData,
  getData1
}

export default PokemonService