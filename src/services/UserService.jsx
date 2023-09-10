import api from '../api';

export default class UserServices {
  async login(dados) {
    const { data } = await api.post('/login', dados);
    console.log(data);

    if (data) {
      localStorage.setItem('name', data.User.name);
      localStorage.setItem('email', data.User.email);
      localStorage.setItem('token', data.token);

      return true;
    }

    return;
  }

  async cadastrar(dados) {
    return api.post('/user', dados);
  }

  usuarioAutenticado() {
    console.log('token:', localStorage.getItem('token'));
    return localStorage.getItem('token') != undefined ? true : false;
    // return typeof localStorage.getItem("token")
  }

  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
  }
}
