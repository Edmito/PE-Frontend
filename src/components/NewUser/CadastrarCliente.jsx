import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserServices from '../../services/UserService';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import estados from '../../utils/estados';
import 'react-toastify/dist/ReactToastify.css';

import './CadastrarCliente.css';

const CadastrarCliente = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    telefone: '',
    cpf: '',
    rg: '',
    cns: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    dataNascimento: new Date(),
  });

  const userServices = new UserServices();

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Converte todos os campos de texto para letras maiúsculas
    const formDataUpperCase = {
      ...formData,
      firstName: formData.firstName.toUpperCase(),
      lastName: formData.lastName.toUpperCase(),
      endereco: formData.endereco.toUpperCase(),
      bairro: formData.bairro.toUpperCase(),
      cidade: formData.cidade.toUpperCase(),
      estado: formData.estado.toUpperCase(),
    };

    const formattedDataNascimento = `${formData.dataNascimento}T00:00:00.000Z`;

    const schema = Yup.object().shape({
      firstName: Yup.string().required('Campo obrigatório'),
      lastName: Yup.string(), // Não é obrigatório,
      email: Yup.string().email('Email inválido').required('Campo obrigatório'),
      password: Yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Campo obrigatório'),
      telefone: Yup.string().required('Campo obrigatório'),
      cpf: Yup.string().required('Campo obrigatório'),
      rg: Yup.string().required('Campo obrigatório'),
      cns: Yup.string(), // Não é obrigatório,
      endereco: Yup.string().required('Campo obrigatório'),
      numero: Yup.string(), // Não é obrigatório
      bairro: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      estado: Yup.string().required('Campo obrigatório'),
      dataNascimento: Yup.date('Data Inválida').required('Campo obrigatório'),
    });

    try {
      // Valida os dados do formulário com base no esquema
      await schema.validate({ ...formDataUpperCase }, { abortEarly: false });

      // Envie os dados para a API
      const response = await userServices.cadastrar({
        ...formDataUpperCase,
        dataNascimento: formattedDataNascimento,
      });

      console.log('response do Cadastro', response);
      console.log('formulario:', formData);

      if (response.request.status === 200) {
        // Exibe uma mensagem de sucesso usando toastify
        toast.success('Cadastrado com sucesso!', {
          position: 'top-right', // Posição da notificação
          autoClose: 3000, // Fechar após 3 segundos
          hideProgressBar: false, // Exibir barra de progresso
          closeOnClick: true, // Fechar ao clicar
          pauseOnHover: true, // Pausar ao passar o mouse
          draggable: true, // Arrastável
        });

        // Agendando o redirecionamento
        setTimeout(() => {
          navigate('/paciente');
        }, 3000);
      } else {
        // Exibe uma mensagem de erro usando toastify
        toast.error('Erro durante a requisição no servidor.', {
          position: 'top-right', // Posição da notificação
          autoClose: 3000, // Fechar após 3 segundos
          hideProgressBar: false, // Exibir barra de progresso
          closeOnClick: true, // Fechar ao clicar
          pauseOnHover: true, // Pausar ao passar o mouse
          draggable: true, // Arrastável
        });

        console.error('Erro durante o cadastro');
      }
    } catch (error) {
      // Lide com os erros de validação e atualize o estado de erros
      if (error.inner) {
        const errors = {};
        error.inner.forEach((validationError) => {
          errors[validationError.path] = validationError.message;
        });
        setErrors(errors);
      } else {
        console.error('Erro durante a validação:', error);
      }
    }
  };

  return (
    <div className="cadastrar-paciente">
      <h2>Cadastrar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="identidade">
          <legend>Identidade</legend>
          <div className="form-group">
            <label htmlFor="firstName">Primeiro Nome:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Sobrenome:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <InputMask
              type="text"
              name="cpf"
              mask="999.999.999-99"
              maskChar=" "
              value={formData.cpf}
              onChange={handleChange}
            />
            {errors.cpf && <p className="error">{errors.cpf}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="rg">RG:</label>
            <input
              type="text"
              name="rg"
              value={formData.rg}
              onChange={handleChange}
            />
            {errors.rg && <p className="error">{errors.rg}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="cns">CNS:</label>
            <InputMask
              type="text"
              name="cns"
              mask="999.9999.9999.9999"
              maskChar=" "
              value={formData.cns}
              onChange={handleChange}
            />
            {errors.cns && <p className="error">{errors.cns}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
            />
            {errors.dataNascimento && (
              <p className="error">{errors.dataNascimento}</p>
            )}
          </div>
        </fieldset>

        <fieldset className="endereco">
          <legend>Endereço</legend>
          <div className="form-group">
            <label htmlFor="endereco">Endereço:</label>
            <input
              type="text"
              name="endereco"
              id="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
            {errors.endereco && <p className="error">{errors.endereco}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="numero">Número:</label>
            <input
              type="text"
              name="numero"
              id="numero"
              value={formData.numero}
              onChange={handleChange}
            />
            {errors.numero && <p className="error">{errors.numero}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="bairro">Bairro:</label>
            <input
              type="text"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
            {errors.bairro && <p className="error">{errors.bairro}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
            {errors.cidade && <p className="error">{errors.cidade}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <select
              name="estado"
              id="estado"
              value={formData.estado}
              onChange={handleChange}
            >
              <option value="">Selecione um estado</option>
              {estados.map((estado) => (
                <option key={estado.value} value={estado.value}>
                  {estado.label}
                </option>
              ))}
            </select>
            {errors.estado && <p className="error">{errors.estado}</p>}
          </div>
        </fieldset>

        <fieldset className="contato">
          <legend>Contato e Senha</legend>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              autoComplete="username email"
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              autoComplete="new-password"
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <InputMask
              type="text"
              name="telefone"
              mask="(99) 99999-9999"
              maskChar=" "
              value={formData.telefone}
              onChange={handleChange}
            />
            {errors.telefone && <p className="error">{errors.telefone}</p>}
          </div>
        </fieldset>

        <div className="form-group">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastrarCliente;
