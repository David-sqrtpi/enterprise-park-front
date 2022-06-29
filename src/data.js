let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995",
    },
    {
        name: "Stankonia",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000",
    },
    {
        name: "Ocean Avenue",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003",
    },
    {
        name: "Tubthumper",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997",
    },
    {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,600",
        due: "01/27/1998",
    },
];

export function getInvoices() {
    return invoices;
}

export function getInvoice(number) {
    return invoices.find(
        (invoice) => invoice.number === number
    );
}

export function getPisos() {
    return [1, 2, 3, 4, 5, 6];
}

export function getOficces() {
    return [
        {
            id: 1,
            n_oficina: 1,
            nit_empresa: 10,
            piso: 1,
            size: 10,
            nombre_empresa: "Empresa con nit 10"
        },
        {
            id: 2,
            n_oficina: 2,
            nit_empresa: 20,
            piso: 1,
            size: 10,
            nombre_empresa: "Empresa con nit 20"
        },
        {
            id: 3,
            n_oficina: 1,
            nit_empresa: 30,
            piso: 2,
            size: 10,
            nombre_empresa: "Empresa con nit 30"
        },
        {
            id: 4,
            n_oficina: 2,
            nit_empresa: 40,
            piso: 2,
            size: 10,
            nombre_empresa: "Empresa con nit 40"
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
        {
            id: 5,
            n_oficina: 12,
            nit_empresa: 50,
            piso: 3,
            size: 10,
            nombre_empresa: "Empresa con nit 50"
        },
        {
            id: 6,
            n_oficina: 11,
            piso: 3,
            size: 10
        },
    ]

}

export function getOffice(id) {
    const offices = getOficces();
    return offices.find(
        (office) => office.id === id
    );
}