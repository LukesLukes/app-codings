// src\pages\CadastroClientes\index.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api'; // Importa a instância do Axios
import './styles.css'; // O mesmo CSS de antes

// 1. Definição do Schema de Validação com Yup
const schema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  telefone: yup.string().nullable(),
  formaPagamento: yup.string().nullable(),
  endereco: yup.string().nullable(),
});

function CadastroClientes() {
  // 2. Configuração do React-Hook-Form
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  // 3. Função de Submissão (agora com Axios e Toast)
  const onSubmit = async (data) => {
    try {
      // Usando o Axios para fazer o POST
      const response = await api.post('/clientes', data);
      
      // 4. Notificação de Sucesso
      toast.success('Cliente cadastrado com sucesso!');
      
      reset(); // Limpa o formulário

    } catch (error) {
      // 5. Notificação de Erro
      console.error("Erro ao cadastrar cliente:", error);
      toast.error('Erro ao cadastrar cliente. Tente novamente.');
    }
  };

  // O Header e Footer foram REMOVIDOS daqui
  return (
    <main className="form-page-content">
      <h1 className="form-title">Cadastro de Clientes</h1>

      {/* 6. O formulário agora usa o handleSubmit do hook */}
      <form className="form-opera-gx" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" {...register('nome')} />
          {/* 7. Exibição da mensagem de erro */}
          {errors.nome && <p className="error-message">{errors.nome.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" {...register('telefone')} />
        </div>

        <div className="form-group">
          <label htmlFor="formaPagamento">Forma de Pagamento:</label>
          <input type="text" id="formaPagamento" {...register('formaPagamento')} />
        </div>

        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <input type="text" id="endereco" {...register('endereco')} />
        </div>

        <button type="submit" className="form-button">Cadastrar Cliente</button>
      </form>
    </main>
  );
}

export default CadastroClientes;