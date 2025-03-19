import React from 'react'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { deleteLicenca, findEmpresaById, findLicencasByEmpresa } from '@/actions';
import { FaEdit, FaTrash } from 'react-icons/fa';

const DetailsEmpresa = async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    const empresa = await findEmpresaById(id);
    if (!empresa) return notFound();

    const licencas = await findLicencasByEmpresa(id);

    const formatDate = (date: Date) => {
        return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
    }

    return (
        <div className="container">
            <div className="my-4 p-6 bg-green-50 rounded-lg">
                <h1 className="text-2xl font-bold mb-4">{empresa.razao_social}</h1>
                <p className="text-gray-700"><strong>CNPJ:</strong> {empresa.cnpj}</p>
                <p className="text-gray-700"><strong>CEP:</strong> {empresa.cep}</p>
                <p className="text-gray-700"><strong>Cidade:</strong> {empresa.cidade}</p>
                <p className="text-gray-700"><strong>Estado:</strong> {empresa.estado}</p>
                <p className="text-gray-700"><strong>Bairro:</strong> {empresa.bairro}</p>
                <p className="text-gray-700"><strong>Complemento:</strong> {empresa.complemento}</p>
            </div>
            <div>
                <Link
                    className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                    href={`/licencas/create/`}>
                    + Adicionar Licença
                </Link>
            </div>
            <div className="mt-4  p-6 bg-green-50 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Licenças Ambientais</h2>
                {licencas.length > 0 ? (
                    <ul>
                        {licencas.map((licenca) => (
                            <li key={licenca.id} className="bg-gray-100 rounded-lg p-4 my-2 shadow-md">
                                <div className="flex justify-between items-center mb-2">
                                    <div>
                                        <p className="text-gray-700"><strong>Número:</strong> {licenca.numero}</p>
                                        <p className="text-gray-700"><strong>Órgão Ambiental:</strong> {licenca.orgao}</p>
                                        <p className="text-gray-700"><strong>Emissão:</strong> {formatDate(licenca.emissao)}</p>
                                        <p className="text-gray-700"><strong>Validade:</strong> {formatDate(licenca.validade)}</p>
                                    </div>
                                    <div className="flex space-x-2 mt-3">
                                        <Link
                                            href={`/licencas/${licenca.id}/edit/`}
                                            className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                                        >
                                            <FaEdit size={20} />
                                        </Link>
                                        <form action={deleteLicenca}>
                                            <input type="hidden" name="id" value={licenca.id} />
                                            <button
                                                className="bg-green-700 hover:bg-green-900 py-2 px-4 rounded"
                                            >
                                                <FaTrash size={20} />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-700">Nenhuma licença cadastrada para essa empresa.</p>
                )}
            </div>
        </div>
    );
}

export default DetailsEmpresa 