// src\pages\ListarUsuarios\index.jsx

import { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

function ListarUsuarios() {
    const [usuarios, setUsuarios] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await api.get('/usuarios');
                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsuarios();
    }, []);

    if (loading) {
        return <div>Carregando usuários...</div>;
    }

    return (
        <div className="listar-usuarios">
            <h2>Lista de Usuários</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        <strong>Nome:</strong> {usuario.nome} <br />
                        <strong>Email:</strong> {usuario.email} <br />
                        <strong>Telefone:</strong> {usuario.telefone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarUsuarios;
    