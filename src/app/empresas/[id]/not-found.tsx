import Link from 'next/link'
import React from 'react'

const EmpresaNotFound = () => {
    return (
        <div className='container'>
            <h1>Empresa não encontrada</h1>
            <Link
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                href="/">Voltar
            </Link>
        </div>
    )
}

export default EmpresaNotFound