import React from "react";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteEmpresa, findAllEmpresas } from "@/actions";

export default async function Home() {
  const empresas = await findAllEmpresas();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Empresas</h1>
      <Link className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" href="/empresas/create">+ Adicionar empresa</Link>
      <div className="py-4">
        <ul>
          {empresas.map((empresa) => (
            <li
              key={empresa.id}
              className="bg-green-50 rounded p-4 my-4 shadow-md relative"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-semibold px-2">{empresa.razao_social}</h1>
                <div className="flex space-x-2 mt-3">
                  <Link
                    href={`/empresas/${empresa.id}`}
                    className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  >
                    Detalhes
                  </Link>
                  <Link
                    href={`/empresas/${empresa.id}/edit/`}
                    className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  >
                    <FaEdit size={20} />
                  </Link>
                  <form action={deleteEmpresa}>
                    <input type="hidden" name="id" value={empresa.id} />
                    <button
                      className="bg-green-700 hover:bg-green-900 py-2 px-4 rounded"
                    >
                      <FaTrash size={20} />
                    </button>
                  </form>
                </div>
              </div>
              <p className="text-gray-700"><strong>CNPJ:</strong> {empresa.cnpj}</p>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );

}