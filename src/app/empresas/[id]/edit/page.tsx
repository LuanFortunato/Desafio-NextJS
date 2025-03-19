import { updateEmpresa, findEmpresaById } from '@/actions';
import { notFound } from 'next/navigation';
import React from 'react'

const EditEmpresa = async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    const empresa = await findEmpresaById(id);

    if (!empresa) return notFound()

    return (
        <div className="container">
            <div>
                <h1 className="text-2xl font-bold mb-4">Editar Empresa</h1>
                <form action={updateEmpresa}>
                    <input type="hidden" name='id' value={empresa.id} />
                    <input defaultValue={empresa.razao_social} type="text" id="razaoSocial" name="razaoSocial" placeholder="Razão Social" required />
                    <input defaultValue={empresa.cnpj} type="text" id="cnpj" name="cnpj" placeholder="CNPJ" required />
                    <input defaultValue={empresa.cep} type="text" id="cep" name="cep" placeholder="CEP" required />
                    <input defaultValue={empresa.cidade} type="text" id="cidade" name="cidade" placeholder="Cidade" required />
                    <input defaultValue={empresa.estado} type="text" id="estado" name="estado" placeholder="Estado" required />
                    <input defaultValue={empresa.bairro} type="text" id="bairro" name="bairro" placeholder="Bairro" required />
                    <input defaultValue={empresa.complemento} type="text" id="complemento" name="complemento" placeholder="Complemento" required />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-700 text-white font-semibold rounded-md"
                    >
                        Confirmar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditEmpresa