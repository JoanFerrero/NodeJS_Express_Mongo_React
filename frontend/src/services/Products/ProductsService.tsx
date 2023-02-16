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

const removeData = async (url: string, values: {}) => {
  return Api().put(url, values);
}


const PokemonService = {
  postData,
  getData,
  getData1,
  removeData
}

export default PokemonService