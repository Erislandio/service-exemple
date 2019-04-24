import axios from "axios";

export const Http = {
  async getCepUser(authToken: String, data: any) {
    const url = `http://viacep.com.br/ws/${data}/json/`;

    const headers = {
      "Content-Type": "application/json",
      "Proxy-Authorization": authToken,
      "X-Vtex-Proxy-To": "https://viacep.com.br"
    };

    return axios({
      headers,
      method: "GET",
      url
    });
  }
};
