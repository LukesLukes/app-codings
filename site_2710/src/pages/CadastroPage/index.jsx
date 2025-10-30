// src\pages\CadastroPage\index.jsx

import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../services/api';
import './styles.css';

const cadastroSchema = yup.object({
    nome: yup
        .string()
        .required('O nome é obrigatório')
        .min(3, 'O nome deve ter pelo menos 3 caracteres'),
    email: yup
        .string()
        .required('O email é obrigatório')
        .email('Digite um email válido'),
    telefone: yup
        .string()
        .required('O telefone é obrigatório')
        .max(11, 'O telefone deve ter no máximo 11 caracteres'),
})

function CadastroPage() {
            const { 
            register,
            handleSubmit, 
            formState: { errors, isSubmitting },
            reset,
            } = useForm({
                resolver: yupResolver(cadastroSchema),
                mode: 'onBlur',
                reValidateMode: 'onChange',
                defaultValues: {
                    nome: '',
                    email: '',
                    telefone: '',
                },
            });

            const onSubmit = async (data) => {
                try {
                    await api.post('/usuarios', data);
                    toast.success("Usuário cadastrado com sucesso!");
                    reset();
                } catch (error) {
                    console.error("Erro ao cadastrar usuário. Tente novamente.", error);
                    toast.error("Erro ao cadastrar usuário. Tente novamente.");
                }
            };

            return (
                <div className='cadastro-container'>
                    <h2>Cadastro de Usuário</h2>
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group'>
                            <label htmlFor='nome'>Nome:</label>
                            <input
                                type='text'
                                id='nome'
                                {...register('nome')}
                                className={errors.nome ? 'input-error' : ''}
                            />
                            {errors.nome && <span className='error-message'>{errors.nome.message}</span>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input
                                type='email'
                                id='email'
                                {...register('email')}
                                className={errors.email ? 'input-error' : ''}
                            />
                            {errors.email && <span className='error-message'>{errors.email.message}</span>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='telefone'>Telefone:</label>
                            <input
                                type='text'
                                id='telefone'
                                {...register('telefone')}
                                className={errors.telefone ? 'input-error' : ''}
                            />
                            {errors.telefone && <span className='error-message'>{errors.telefone.message}</span>}
                        </div>
                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                    </form>.
                </div>

            );
}

export default CadastroPage;