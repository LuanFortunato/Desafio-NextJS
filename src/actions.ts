"use server";
import { db } from "./db";
import { redirect } from "next/navigation";

//Empresas
export const findAllEmpresas = async () => {
    const empresas = db.empresas.findMany();

    return empresas;
}

export const findEmpresaById = async (id: string) => {
    const empresa = db.empresas.findFirst({ where: { id } })

    return empresa;
}

export async function createEmpresa(formData: FormData) {
    const razao_social = formData.get("razaoSocial") as string;
    const cnpj = formData.get("cnpj") as string;
    const cep = formData.get("cep") as string;
    const cidade = formData.get("cidade") as string;
    const estado = formData.get("estado") as string;
    const bairro = formData.get("bairro") as string;
    const complemento = formData.get("complemento") as string;

    await db.empresas.create({
        data: {
            razao_social,
            cnpj,
            cep,
            cidade,
            estado,
            bairro,
            complemento,
        },
    })

    redirect("/");
}

export async function updateEmpresa(formData: FormData) {
    const id = formData.get("id") as string;
    const razao_social = formData.get("razaoSocial") as string;
    const cnpj = formData.get("cnpj") as string;
    const cep = formData.get("cep") as string;
    const cidade = formData.get("cidade") as string;
    const estado = formData.get("estado") as string;
    const bairro = formData.get("bairro") as string;
    const complemento = formData.get("complemento") as string;

    await db.empresas.update({
        where: { id },
        data: {
            razao_social,
            cnpj,
            cep,
            cidade,
            estado,
            bairro,
            complemento,
        },
    })

    redirect("/");

}

export async function deleteEmpresa(formData: FormData) {
    const id = formData.get("id") as string;

    await db.empresas.delete({
        where: { id },
    })

    await db.licencas.deleteMany({
        where: { empresa: id }
    })

    redirect("/")
}

//Licenças

export const findLicencasById = async (id: string) => {
    const licencas = await db.licencas.findFirst({ where: { id } });

    return licencas;
}

export const findLicencasByEmpresa = async (id: string) => {
    const licencas = await db.licencas.findMany({ where: { empresa: id } });

    return licencas;
}

export async function createLicensa(formData: FormData) {
    const empresa = formData.get("empresa") as string;
    const numero = formData.get("numero") as string;
    const orgao = formData.get("orgao") as string;
    const emissao = (formData.get("emissao") as string).concat("T00:00:00.000+00:00");
    const validade = (formData.get("validade") as string).concat("T00:00:00.000+00:00");

    await db.licencas.create({
        data: {
            empresa,
            numero,
            orgao,
            emissao,
            validade,
        },
    })

    redirect("/");
}

export async function updateLicenca(formData: FormData) {
    const id = formData.get("id") as string;
    const empresa = formData.get("empresa") as string;
    const numero = formData.get("numero") as string;
    const orgao = formData.get("orgao") as string;
    const emissao = (formData.get("emissao") as string).concat("T00:00:00.000+00:00");
    const validade = (formData.get("validade") as string).concat("T00:00:00.000+00:00");


    await db.licencas.update({
        where: { id },
        data: {
            empresa,
            numero,
            orgao,
            emissao,
            validade,
        },
    })

    redirect("/");

}

export async function deleteLicenca(formData: FormData) {
    const id = formData.get("id") as string;

    await db.licencas.delete({
        where: { id },
    })

    redirect("/")
}