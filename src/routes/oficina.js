import { useParams } from "react-router-dom";
import { getOffice } from "../data";
import Admin from "./admin";

export default function Oficina() {
    const params = useParams();
    const oficina = getOffice(parseInt(params.oficina))
    return (
        <>
            <h2>Oficina #{oficina.piso}{oficina.n_oficina}</h2>
            <p>Piso: {oficina.piso}</p>
            <p>Tamaño: {oficina.size}</p>
            <h3>Empresa asociada</h3>
            <p>Nit: {oficina.nit_empresa}</p>
            <p>Razón social: {oficina.nombre_empresa}</p>
        </>
    );
}