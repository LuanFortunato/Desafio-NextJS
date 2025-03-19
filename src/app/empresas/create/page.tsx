import React from 'react'
import { createEmpresa } from '@/actions';

const CreateEmpresa = () => {
    return (
        <div className="container">
            <div>
                <h1 className="text-2xl font-bold mb-4">Cadastro de Empresa</h1>
                <form action={createEmpresa}>
                    <input type="text" id="razaoSocial" name="razaoSocial" placeholder="Razão Social" required />
                    <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ" required />
                    <input type="text" id="cep" name="cep" placeholder="CEP" required />
                    <input type="text" id="cidade" name="cidade" placeholder="Cidade" required />
                    <input type="text" id="estado" name="estado" placeholder="Estado" required />
                    <input type="text" id="bairro" name="bairro" placeholder="Bairro" required />
                    <input type="text" id="complemento" name="complemento" placeholder="Complemento" required />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-700 text-white font-semibold rounded-md"
                    >
                        Adicionar empresa
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateEmpresa