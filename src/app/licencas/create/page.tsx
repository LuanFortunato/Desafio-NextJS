import { createLicensa } from '@/actions';
import { db } from '@/db';
import React from 'react'

const CreateLicenca = async () => {

    const empresas = await db.empresas.findMany();

    return (
        <div className="container">
            <div>
                <h1 className="text-2xl font-bold mb-4">Cadastro de Licença Ambiental</h1>
                <form action={createLicensa}>
                    <select required id="empresa" name="empresa">
                        {empresas.map((empresa) => (
                            <option key={empresa.id} value={empresa.id}>{empresa.razao_social}</option>
                        ))}
                    </select>
                    <input type="text" placeholder="Número da Licença" id="numero" name="numero" required />
                    <input type="text" placeholder="Órgão Ambiental" id="orgao" name="orgao" required />
                    <input type="date" placeholder="Emissão" id="emissao" name="emissao" required />
                    <input type="date" placeholder="Validade" id="validade" name="validade" required />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-700 text-white font-semibold rounded-md"
                    >
                        Adicionar licença
                    </button>
                </form>
            </div>
        </div >
    );
}

export default CreateLicenca