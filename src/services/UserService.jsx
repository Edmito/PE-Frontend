import api from '../api';

export default class UserServices {
  async login(dados) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await api.post('/auth/login', JSON.stringify(dados), {
        headers,
      });
      console.log('verificando o que vem da API:', response); //verificando o que vem da API
      const { data } = response;

      if (data) {
        localStorage.setItem('name', data.user.firstName);
        localStorage.setItem('token', data.token);

        return true;
      }

      return;
    } catch (error) {
      // Lida com erros, se houver algum
      console.error('Erro durante a solicitação de login:', error);
      return false;
    }
  }

  async cadastrar(dados) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await api.post('/paciente/add', JSON.stringify(dados), {
        headers,
      });
      // Lida com a resposta, se necessário
      return response;
    } catch (error) {
      // Lida com erros, se houver algum
      console.error('Erro durante a solicitação de cadastro:', error);
      return error;
    }
  }

  async listar() {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await api.get('/paciente/all', {
        headers,
      });
      // Lida com a resposta, se necessário
      return response;
    } catch (error) {
      // Lida com erros, se houver algum
      console.error('Erro durante a solicitação de lista de Pacientes:', error);
      return error;
    }
  }

  usuarioAutenticado() {
    console.log('token:', localStorage.getItem('token')); // Verificando se retorna o token
    return localStorage.getItem('token') !== null; // Verifica se o token existe
  }

  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }
}
