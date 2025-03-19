import { findLicencasById, updateLicenca } from '@/actions';
import { notFound } from 'next/navigation';
import React from 'react'

const EditLicensa = async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    const licenca = await findLicencasById(id);

    if (!licenca) return notFound()

    return (
        <div className="container">
            <div>
                <h1 className="text-2xl font-bold mb-4">Editar Licença Ambiental</h1>
                <form action={updateLicenca}>
                    <input type="hidden" name='id' value={licenca.id} />
                    <input type="hidden" name='empresa' value={licenca.empresa} />
                    <input defaultValue={licenca.numero} type="text" placeholder="Número da Licença" id="numero" name="numero" required />
                    <input defaultValue={licenca.orgao} type="text" placeholder="Órgão Ambiental" id="orgao" name="orgao" required />
                    <input defaultValue={licenca.emissao.toISOString().split("T")[0]} type="date" placeholder="Emissão" id="emissao" name="emissao" required />
                    <input defaultValue={licenca.validade.toISOString().split("T")[0]} type="date" placeholder="Validade" id="validade" name="validade" required />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-700 text-white font-semibold rounded-md"
                    >
                        Confirmar
                    </button>
                </form>
            </div>
        </div >
    );
}

export default EditLicensa