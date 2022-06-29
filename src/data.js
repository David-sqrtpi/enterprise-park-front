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
            "id": 1,
            "n_oficina": 6,
            "nit_empresa": 10,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 10",
            "size": 4
        },
        {
            "id": 2,
            "n_oficina": 6,
            "nit_empresa": 20,
            "piso": 75,
            "nombre_empresa": "Empresa con nit 20",
            "size": 13
        },
        {
            "id": 3,
            "n_oficina": 3,
            "nit_empresa": 30,
            "piso": 22,
            "nombre_empresa": "Empresa con nit 30",
            "size": 3
        },
        {
            "id": 4,
            "n_oficina": 6,
            "nit_empresa": 40,
            "piso": 93,
            "nombre_empresa": "Empresa con nit 40",
            "size": 17
        },
        {
            "id": 5,
            "n_oficina": 3,
            "nit_empresa": 50,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 50",
            "size": 2
        },
        {
            "id": 6,
            "n_oficina": 3,
            "nit_empresa": 60,
            "piso": 97,
            "nombre_empresa": "Empresa con nit 60",
            "size": 2
        },
        {
            "id": 7,
            "n_oficina": 8,
            "nit_empresa": 70,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 70",
            "size": 5
        },
        {
            "id": 8,
            "n_oficina": 4,
            "nit_empresa": 80,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 80",
            "size": 6
        },
        {
            "id": 9,
            "n_oficina": 12,
            "nit_empresa": 90,
            "piso": 73,
            "nombre_empresa": "Empresa con nit 90",
            "size": 9
        },
        {
            "id": 10,
            "n_oficina": 13,
            "nit_empresa": 100,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 100",
            "size": 1
        },
        {
            "id": 11,
            "n_oficina": 1,
            "nit_empresa": 110,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 110",
            "size": 4
        },
        {
            "id": 12,
            "n_oficina": 6,
            "nit_empresa": 120,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 120",
            "size": 19
        },
        {
            "id": 13,
            "n_oficina": 7,
            "nit_empresa": 130,
            "piso": 67,
            "nombre_empresa": "Empresa con nit 130",
            "size": 18
        },
        {
            "id": 14,
            "n_oficina": 4,
            "nit_empresa": 140,
            "piso": 18,
            "nombre_empresa": "Empresa con nit 140",
            "size": 7
        },
        {
            "id": 15,
            "n_oficina": 5,
            "nit_empresa": 150,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 150",
            "size": 11
        },
        {
            "id": 16,
            "n_oficina": 5,
            "nit_empresa": 160,
            "piso": 40,
            "nombre_empresa": "Empresa con nit 160",
            "size": 11
        },
        {
            "id": 17,
            "n_oficina": 6,
            "nit_empresa": 170,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 170",
            "size": 12
        },
        {
            "id": 18,
            "n_oficina": 9,
            "nit_empresa": 180,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 180",
            "size": 10
        },
        {
            "id": 19,
            "n_oficina": 12,
            "nit_empresa": 190,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 190",
            "size": 12
        },
        {
            "id": 20,
            "n_oficina": 4,
            "nit_empresa": 200,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 200",
            "size": 4
        },
        {
            "id": 21,
            "n_oficina": 8,
            "nit_empresa": 210,
            "piso": 67,
            "nombre_empresa": "Empresa con nit 210",
            "size": 4
        },
        {
            "id": 22,
            "n_oficina": 4,
            "nit_empresa": 220,
            "piso": 28,
            "nombre_empresa": "Empresa con nit 220",
            "size": 13
        },
        {
            "id": 23,
            "n_oficina": 14,
            "nit_empresa": 230,
            "piso": 6,
            "nombre_empresa": "Empresa con nit 230",
            "size": 15
        },
        {
            "id": 24,
            "n_oficina": 2,
            "nit_empresa": 240,
            "piso": 62,
            "nombre_empresa": "Empresa con nit 240",
            "size": 19
        },
        {
            "id": 25,
            "n_oficina": 10,
            "nit_empresa": 250,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 250",
            "size": 14
        },
        {
            "id": 26,
            "n_oficina": 14,
            "nit_empresa": 260,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 260",
            "size": 16
        },
        {
            "id": 27,
            "n_oficina": 4,
            "nit_empresa": 270,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 270",
            "size": 4
        },
        {
            "id": 28,
            "n_oficina": 14,
            "nit_empresa": 280,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 280",
            "size": 12
        },
        {
            "id": 29,
            "n_oficina": 6,
            "nit_empresa": 290,
            "piso": 79,
            "nombre_empresa": "Empresa con nit 290",
            "size": 3
        },
        {
            "id": 30,
            "n_oficina": 8,
            "nit_empresa": 300,
            "piso": 36,
            "nombre_empresa": "Empresa con nit 300",
            "size": 13
        },
        {
            "id": 31,
            "n_oficina": 7,
            "nit_empresa": 310,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 310",
            "size": 6
        },
        {
            "id": 32,
            "n_oficina": 8,
            "nit_empresa": 320,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 320",
            "size": 5
        },
        {
            "id": 33,
            "n_oficina": 1,
            "nit_empresa": 330,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 330",
            "size": 7
        },
        {
            "id": 34,
            "n_oficina": 13,
            "nit_empresa": 340,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 340",
            "size": 13
        },
        {
            "id": 35,
            "n_oficina": 2,
            "nit_empresa": 350,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 350",
            "size": 18
        },
        {
            "id": 36,
            "n_oficina": 3,
            "nit_empresa": 360,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 360",
            "size": 2
        },
        {
            "id": 37,
            "n_oficina": 12,
            "nit_empresa": 370,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 370",
            "size": 7
        },
        {
            "id": 38,
            "n_oficina": 13,
            "nit_empresa": 380,
            "piso": 39,
            "nombre_empresa": "Empresa con nit 380",
            "size": 4
        },
        {
            "id": 39,
            "n_oficina": 5,
            "nit_empresa": 390,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 390",
            "size": 19
        },
        {
            "id": 40,
            "n_oficina": 14,
            "nit_empresa": 400,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 400",
            "size": 1
        },
        {
            "id": 41,
            "n_oficina": 10,
            "nit_empresa": 410,
            "piso": 35,
            "nombre_empresa": "Empresa con nit 410",
            "size": 13
        },
        {
            "id": 42,
            "n_oficina": 11,
            "nit_empresa": 420,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 420",
            "size": 13
        },
        {
            "id": 43,
            "n_oficina": 2,
            "nit_empresa": 430,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 430",
            "size": 19
        },
        {
            "id": 44,
            "n_oficina": 7,
            "nit_empresa": 440,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 440",
            "size": 2
        },
        {
            "id": 45,
            "n_oficina": 13,
            "nit_empresa": 450,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 450",
            "size": 1
        },
        {
            "id": 46,
            "n_oficina": 10,
            "nit_empresa": 460,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 460",
            "size": 15
        },
        {
            "id": 47,
            "n_oficina": 7,
            "nit_empresa": 470,
            "piso": 4,
            "nombre_empresa": "Empresa con nit 470",
            "size": 10
        },
        {
            "id": 48,
            "n_oficina": 11,
            "nit_empresa": 480,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 480",
            "size": 19
        },
        {
            "id": 49,
            "n_oficina": 11,
            "nit_empresa": 490,
            "piso": 54,
            "nombre_empresa": "Empresa con nit 490",
            "size": 3
        },
        {
            "id": 50,
            "n_oficina": 4,
            "nit_empresa": 500,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 500",
            "size": 9
        },
        {
            "id": 51,
            "n_oficina": 10,
            "nit_empresa": 510,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 510",
            "size": 19
        },
        {
            "id": 52,
            "n_oficina": 7,
            "nit_empresa": 520,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 520",
            "size": 16
        },
        {
            "id": 53,
            "n_oficina": 6,
            "nit_empresa": 530,
            "piso": 75,
            "nombre_empresa": "Empresa con nit 530",
            "size": 16
        },
        {
            "id": 54,
            "n_oficina": 2,
            "nit_empresa": 540,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 540",
            "size": 14
        },
        {
            "id": 55,
            "n_oficina": 5,
            "nit_empresa": 550,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 550",
            "size": 13
        },
        {
            "id": 56,
            "n_oficina": 5,
            "nit_empresa": 560,
            "piso": 28,
            "nombre_empresa": "Empresa con nit 560",
            "size": 3
        },
        {
            "id": 57,
            "n_oficina": 13,
            "nit_empresa": 570,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 570",
            "size": 19
        },
        {
            "id": 58,
            "n_oficina": 1,
            "nit_empresa": 580,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 580",
            "size": 10
        },
        {
            "id": 59,
            "n_oficina": 12,
            "nit_empresa": 590,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 590",
            "size": 10
        },
        {
            "id": 60,
            "n_oficina": 8,
            "nit_empresa": 600,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 600",
            "size": 6
        },
        {
            "id": 61,
            "n_oficina": 11,
            "nit_empresa": 610,
            "piso": 62,
            "nombre_empresa": "Empresa con nit 610",
            "size": 18
        },
        {
            "id": 62,
            "n_oficina": 1,
            "nit_empresa": 620,
            "piso": 98,
            "nombre_empresa": "Empresa con nit 620",
            "size": 9
        },
        {
            "id": 63,
            "n_oficina": 2,
            "nit_empresa": 630,
            "piso": 79,
            "nombre_empresa": "Empresa con nit 630",
            "size": 19
        },
        {
            "id": 64,
            "n_oficina": 7,
            "nit_empresa": 640,
            "piso": 49,
            "nombre_empresa": "Empresa con nit 640",
            "size": 16
        },
        {
            "id": 65,
            "n_oficina": 4,
            "nit_empresa": 650,
            "piso": 40,
            "nombre_empresa": "Empresa con nit 650",
            "size": 6
        },
        {
            "id": 66,
            "n_oficina": 7,
            "nit_empresa": 660,
            "piso": 62,
            "nombre_empresa": "Empresa con nit 660",
            "size": 19
        },
        {
            "id": 67,
            "n_oficina": 7,
            "nit_empresa": 670,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 670",
            "size": 13
        },
        {
            "id": 68,
            "n_oficina": 10,
            "nit_empresa": 680,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 680",
            "size": 15
        },
        {
            "id": 69,
            "n_oficina": 7,
            "nit_empresa": 690,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 690",
            "size": 2
        },
        {
            "id": 70,
            "n_oficina": 12,
            "nit_empresa": 700,
            "piso": 11,
            "nombre_empresa": "Empresa con nit 700",
            "size": 3
        },
        {
            "id": 71,
            "n_oficina": 4,
            "nit_empresa": 710,
            "piso": 79,
            "nombre_empresa": "Empresa con nit 710",
            "size": 11
        },
        {
            "id": 72,
            "n_oficina": 2,
            "nit_empresa": 720,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 720",
            "size": 16
        },
        {
            "id": 73,
            "n_oficina": 6,
            "nit_empresa": 730,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 730",
            "size": 10
        },
        {
            "id": 74,
            "n_oficina": 3,
            "nit_empresa": 740,
            "piso": 73,
            "nombre_empresa": "Empresa con nit 740",
            "size": 15
        },
        {
            "id": 75,
            "n_oficina": 13,
            "nit_empresa": 750,
            "piso": 35,
            "nombre_empresa": "Empresa con nit 750",
            "size": 18
        },
        {
            "id": 76,
            "n_oficina": 5,
            "nit_empresa": 760,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 760",
            "size": 9
        },
        {
            "id": 77,
            "n_oficina": 4,
            "nit_empresa": 770,
            "piso": 55,
            "nombre_empresa": "Empresa con nit 770",
            "size": 14
        },
        {
            "id": 78,
            "n_oficina": 5,
            "nit_empresa": 780,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 780",
            "size": 19
        },
        {
            "id": 79,
            "n_oficina": 10,
            "nit_empresa": 790,
            "piso": 42,
            "nombre_empresa": "Empresa con nit 790",
            "size": 11
        },
        {
            "id": 80,
            "n_oficina": 6,
            "nit_empresa": 800,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 800",
            "size": 6
        },
        {
            "id": 81,
            "n_oficina": 4,
            "nit_empresa": 810,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 810",
            "size": 16
        },
        {
            "id": 82,
            "n_oficina": 13,
            "nit_empresa": 820,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 820",
            "size": 19
        },
        {
            "id": 83,
            "n_oficina": 1,
            "nit_empresa": 830,
            "piso": 59,
            "nombre_empresa": "Empresa con nit 830",
            "size": 7
        },
        {
            "id": 84,
            "n_oficina": 6,
            "nit_empresa": 840,
            "piso": 81,
            "nombre_empresa": "Empresa con nit 840",
            "size": 11
        },
        {
            "id": 85,
            "n_oficina": 12,
            "nit_empresa": 850,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 850",
            "size": 14
        },
        {
            "id": 86,
            "n_oficina": 10,
            "nit_empresa": 860,
            "piso": 40,
            "nombre_empresa": "Empresa con nit 860",
            "size": 17
        },
        {
            "id": 87,
            "n_oficina": 4,
            "nit_empresa": 870,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 870",
            "size": 3
        },
        {
            "id": 88,
            "n_oficina": 11,
            "nit_empresa": 880,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 880",
            "size": 9
        },
        {
            "id": 89,
            "n_oficina": 1,
            "nit_empresa": 890,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 890",
            "size": 9
        },
        {
            "id": 90,
            "n_oficina": 7,
            "nit_empresa": 900,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 900",
            "size": 4
        },
        {
            "id": 91,
            "n_oficina": 5,
            "nit_empresa": 910,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 910",
            "size": 10
        },
        {
            "id": 92,
            "n_oficina": 12,
            "nit_empresa": 920,
            "piso": 55,
            "nombre_empresa": "Empresa con nit 920",
            "size": 7
        },
        {
            "id": 93,
            "n_oficina": 9,
            "nit_empresa": 930,
            "piso": 46,
            "nombre_empresa": "Empresa con nit 930",
            "size": 19
        },
        {
            "id": 94,
            "n_oficina": 12,
            "nit_empresa": 940,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 940",
            "size": 6
        },
        {
            "id": 95,
            "n_oficina": 7,
            "nit_empresa": 950,
            "piso": 36,
            "nombre_empresa": "Empresa con nit 950",
            "size": 8
        },
        {
            "id": 96,
            "n_oficina": 3,
            "nit_empresa": 960,
            "piso": 40,
            "nombre_empresa": "Empresa con nit 960",
            "size": 1
        },
        {
            "id": 97,
            "n_oficina": 6,
            "nit_empresa": 970,
            "piso": 4,
            "nombre_empresa": "Empresa con nit 970",
            "size": 6
        },
        {
            "id": 98,
            "n_oficina": 9,
            "nit_empresa": 980,
            "piso": 35,
            "nombre_empresa": "Empresa con nit 980",
            "size": 18
        },
        {
            "id": 99,
            "n_oficina": 12,
            "nit_empresa": 990,
            "piso": 65,
            "nombre_empresa": "Empresa con nit 990",
            "size": 4
        },
        {
            "id": 100,
            "n_oficina": 12,
            "nit_empresa": 1000,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 1000",
            "size": 7
        },
        {
            "id": 101,
            "n_oficina": 3,
            "nit_empresa": 1010,
            "piso": 94,
            "nombre_empresa": "Empresa con nit 1010",
            "size": 7
        },
        {
            "id": 102,
            "n_oficina": 11,
            "nit_empresa": 1020,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 1020",
            "size": 11
        },
        {
            "id": 103,
            "n_oficina": 7,
            "nit_empresa": 1030,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 1030",
            "size": 9
        },
        {
            "id": 104,
            "n_oficina": 13,
            "nit_empresa": 1040,
            "piso": 47,
            "nombre_empresa": "Empresa con nit 1040",
            "size": 12
        },
        {
            "id": 105,
            "n_oficina": 5,
            "nit_empresa": 1050,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 1050",
            "size": 3
        },
        {
            "id": 106,
            "n_oficina": 1,
            "nit_empresa": 1060,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 1060",
            "size": 9
        },
        {
            "id": 107,
            "n_oficina": 8,
            "nit_empresa": 1070,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 1070",
            "size": 5
        },
        {
            "id": 108,
            "n_oficina": 6,
            "nit_empresa": 1080,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 1080",
            "size": 9
        },
        {
            "id": 109,
            "n_oficina": 4,
            "nit_empresa": 1090,
            "piso": 19,
            "nombre_empresa": "Empresa con nit 1090",
            "size": 1
        },
        {
            "id": 110,
            "n_oficina": 8,
            "nit_empresa": 1100,
            "piso": 93,
            "nombre_empresa": "Empresa con nit 1100",
            "size": 4
        },
        {
            "id": 111,
            "n_oficina": 4,
            "nit_empresa": 1110,
            "piso": 42,
            "nombre_empresa": "Empresa con nit 1110",
            "size": 8
        },
        {
            "id": 112,
            "n_oficina": 11,
            "nit_empresa": 1120,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 1120",
            "size": 12
        },
        {
            "id": 113,
            "n_oficina": 4,
            "nit_empresa": 1130,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 1130",
            "size": 12
        },
        {
            "id": 114,
            "n_oficina": 1,
            "nit_empresa": 1140,
            "piso": 93,
            "nombre_empresa": "Empresa con nit 1140",
            "size": 2
        },
        {
            "id": 115,
            "n_oficina": 2,
            "nit_empresa": 1150,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 1150",
            "size": 12
        },
        {
            "id": 116,
            "n_oficina": 1,
            "nit_empresa": 1160,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 1160",
            "size": 18
        },
        {
            "id": 117,
            "n_oficina": 10,
            "nit_empresa": 1170,
            "piso": 45,
            "nombre_empresa": "Empresa con nit 1170",
            "size": 3
        },
        {
            "id": 118,
            "n_oficina": 8,
            "nit_empresa": 1180,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 1180",
            "size": 12
        },
        {
            "id": 119,
            "n_oficina": 3,
            "nit_empresa": 1190,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 1190",
            "size": 17
        },
        {
            "id": 120,
            "n_oficina": 6,
            "nit_empresa": 1200,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 1200",
            "size": 3
        },
        {
            "id": 121,
            "n_oficina": 5,
            "nit_empresa": 1210,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 1210",
            "size": 4
        },
        {
            "id": 122,
            "n_oficina": 12,
            "nit_empresa": 1220,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 1220",
            "size": 17
        },
        {
            "id": 123,
            "n_oficina": 13,
            "nit_empresa": 1230,
            "piso": 67,
            "nombre_empresa": "Empresa con nit 1230",
            "size": 2
        },
        {
            "id": 124,
            "n_oficina": 1,
            "nit_empresa": 1240,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 1240",
            "size": 3
        },
        {
            "id": 125,
            "n_oficina": 6,
            "nit_empresa": 1250,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 1250",
            "size": 16
        },
        {
            "id": 126,
            "n_oficina": 1,
            "nit_empresa": 1260,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 1260",
            "size": 18
        },
        {
            "id": 127,
            "n_oficina": 3,
            "nit_empresa": 1270,
            "piso": 84,
            "nombre_empresa": "Empresa con nit 1270",
            "size": 15
        },
        {
            "id": 128,
            "n_oficina": 2,
            "nit_empresa": 1280,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 1280",
            "size": 16
        },
        {
            "id": 129,
            "n_oficina": 5,
            "nit_empresa": 1290,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 1290",
            "size": 4
        },
        {
            "id": 130,
            "n_oficina": 3,
            "nit_empresa": 1300,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 1300",
            "size": 4
        },
        {
            "id": 131,
            "n_oficina": 6,
            "nit_empresa": 1310,
            "piso": 40,
            "nombre_empresa": "Empresa con nit 1310",
            "size": 18
        },
        {
            "id": 132,
            "n_oficina": 5,
            "nit_empresa": 1320,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 1320",
            "size": 17
        },
        {
            "id": 133,
            "n_oficina": 12,
            "nit_empresa": 1330,
            "piso": 39,
            "nombre_empresa": "Empresa con nit 1330",
            "size": 14
        },
        {
            "id": 134,
            "n_oficina": 7,
            "nit_empresa": 1340,
            "piso": 42,
            "nombre_empresa": "Empresa con nit 1340",
            "size": 6
        },
        {
            "id": 135,
            "n_oficina": 10,
            "nit_empresa": 1350,
            "piso": 9,
            "nombre_empresa": "Empresa con nit 1350",
            "size": 19
        },
        {
            "id": 136,
            "n_oficina": 12,
            "nit_empresa": 1360,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 1360",
            "size": 3
        },
        {
            "id": 137,
            "n_oficina": 14,
            "nit_empresa": 1370,
            "piso": 65,
            "nombre_empresa": "Empresa con nit 1370",
            "size": 15
        },
        {
            "id": 138,
            "n_oficina": 11,
            "nit_empresa": 1380,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 1380",
            "size": 14
        },
        {
            "id": 139,
            "n_oficina": 14,
            "nit_empresa": 1390,
            "piso": 38,
            "nombre_empresa": "Empresa con nit 1390",
            "size": 7
        },
        {
            "id": 140,
            "n_oficina": 13,
            "nit_empresa": 1400,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 1400",
            "size": 6
        },
        {
            "id": 141,
            "n_oficina": 9,
            "nit_empresa": 1410,
            "piso": 42,
            "nombre_empresa": "Empresa con nit 1410",
            "size": 14
        },
        {
            "id": 142,
            "n_oficina": 4,
            "nit_empresa": 1420,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 1420",
            "size": 15
        },
        {
            "id": 143,
            "n_oficina": 7,
            "nit_empresa": 1430,
            "piso": 76,
            "nombre_empresa": "Empresa con nit 1430",
            "size": 13
        },
        {
            "id": 144,
            "n_oficina": 9,
            "nit_empresa": 1440,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 1440",
            "size": 2
        },
        {
            "id": 145,
            "n_oficina": 3,
            "nit_empresa": 1450,
            "piso": 82,
            "nombre_empresa": "Empresa con nit 1450",
            "size": 13
        },
        {
            "id": 146,
            "n_oficina": 6,
            "nit_empresa": 1460,
            "piso": 81,
            "nombre_empresa": "Empresa con nit 1460",
            "size": 13
        },
        {
            "id": 147,
            "n_oficina": 13,
            "nit_empresa": 1470,
            "piso": 87,
            "nombre_empresa": "Empresa con nit 1470",
            "size": 5
        },
        {
            "id": 148,
            "n_oficina": 7,
            "nit_empresa": 1480,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 1480",
            "size": 1
        },
        {
            "id": 149,
            "n_oficina": 1,
            "nit_empresa": 1490,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 1490",
            "size": 15
        },
        {
            "id": 150,
            "n_oficina": 7,
            "nit_empresa": 1500,
            "piso": 27,
            "nombre_empresa": "Empresa con nit 1500",
            "size": 5
        },
        {
            "id": 151,
            "n_oficina": 10,
            "nit_empresa": 1510,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 1510",
            "size": 19
        },
        {
            "id": 152,
            "n_oficina": 7,
            "nit_empresa": 1520,
            "piso": 12,
            "nombre_empresa": "Empresa con nit 1520",
            "size": 16
        },
        {
            "id": 153,
            "n_oficina": 9,
            "nit_empresa": 1530,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 1530",
            "size": 12
        },
        {
            "id": 154,
            "n_oficina": 12,
            "nit_empresa": 1540,
            "piso": 83,
            "nombre_empresa": "Empresa con nit 1540",
            "size": 19
        },
        {
            "id": 155,
            "n_oficina": 4,
            "nit_empresa": 1550,
            "piso": 22,
            "nombre_empresa": "Empresa con nit 1550",
            "size": 11
        },
        {
            "id": 156,
            "n_oficina": 4,
            "nit_empresa": 1560,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 1560",
            "size": 1
        },
        {
            "id": 157,
            "n_oficina": 13,
            "nit_empresa": 1570,
            "piso": 11,
            "nombre_empresa": "Empresa con nit 1570",
            "size": 2
        },
        {
            "id": 158,
            "n_oficina": 10,
            "nit_empresa": 1580,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 1580",
            "size": 10
        },
        {
            "id": 159,
            "n_oficina": 8,
            "nit_empresa": 1590,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 1590",
            "size": 3
        },
        {
            "id": 160,
            "n_oficina": 5,
            "nit_empresa": 1600,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 1600",
            "size": 1
        },
        {
            "id": 161,
            "n_oficina": 3,
            "nit_empresa": 1610,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 1610",
            "size": 5
        },
        {
            "id": 162,
            "n_oficina": 13,
            "nit_empresa": 1620,
            "piso": 84,
            "nombre_empresa": "Empresa con nit 1620",
            "size": 15
        },
        {
            "id": 163,
            "n_oficina": 7,
            "nit_empresa": 1630,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 1630",
            "size": 9
        },
        {
            "id": 164,
            "n_oficina": 8,
            "nit_empresa": 1640,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 1640",
            "size": 12
        },
        {
            "id": 165,
            "n_oficina": 1,
            "nit_empresa": 1650,
            "piso": 78,
            "nombre_empresa": "Empresa con nit 1650",
            "size": 1
        },
        {
            "id": 166,
            "n_oficina": 13,
            "nit_empresa": 1660,
            "piso": 45,
            "nombre_empresa": "Empresa con nit 1660",
            "size": 12
        },
        {
            "id": 167,
            "n_oficina": 6,
            "nit_empresa": 1670,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 1670",
            "size": 10
        },
        {
            "id": 168,
            "n_oficina": 14,
            "nit_empresa": 1680,
            "piso": 29,
            "nombre_empresa": "Empresa con nit 1680",
            "size": 7
        },
        {
            "id": 169,
            "n_oficina": 9,
            "nit_empresa": 1690,
            "piso": 36,
            "nombre_empresa": "Empresa con nit 1690",
            "size": 19
        },
        {
            "id": 170,
            "n_oficina": 8,
            "nit_empresa": 1700,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 1700",
            "size": 6
        },
        {
            "id": 171,
            "n_oficina": 3,
            "nit_empresa": 1710,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 1710",
            "size": 7
        },
        {
            "id": 172,
            "n_oficina": 10,
            "nit_empresa": 1720,
            "piso": 9,
            "nombre_empresa": "Empresa con nit 1720",
            "size": 4
        },
        {
            "id": 173,
            "n_oficina": 3,
            "nit_empresa": 1730,
            "piso": 73,
            "nombre_empresa": "Empresa con nit 1730",
            "size": 9
        },
        {
            "id": 174,
            "n_oficina": 7,
            "nit_empresa": 1740,
            "piso": 23,
            "nombre_empresa": "Empresa con nit 1740",
            "size": 12
        },
        {
            "id": 175,
            "n_oficina": 14,
            "nit_empresa": 1750,
            "piso": 15,
            "nombre_empresa": "Empresa con nit 1750",
            "size": 9
        },
        {
            "id": 176,
            "n_oficina": 7,
            "nit_empresa": 1760,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 1760",
            "size": 7
        },
        {
            "id": 177,
            "n_oficina": 11,
            "nit_empresa": 1770,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 1770",
            "size": 1
        },
        {
            "id": 178,
            "n_oficina": 5,
            "nit_empresa": 1780,
            "piso": 62,
            "nombre_empresa": "Empresa con nit 1780",
            "size": 18
        },
        {
            "id": 179,
            "n_oficina": 12,
            "nit_empresa": 1790,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 1790",
            "size": 15
        },
        {
            "id": 180,
            "n_oficina": 4,
            "nit_empresa": 1800,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 1800",
            "size": 1
        },
        {
            "id": 181,
            "n_oficina": 1,
            "nit_empresa": 1810,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 1810",
            "size": 5
        },
        {
            "id": 182,
            "n_oficina": 14,
            "nit_empresa": 1820,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 1820",
            "size": 12
        },
        {
            "id": 183,
            "n_oficina": 1,
            "nit_empresa": 1830,
            "piso": 97,
            "nombre_empresa": "Empresa con nit 1830",
            "size": 1
        },
        {
            "id": 184,
            "n_oficina": 13,
            "nit_empresa": 1840,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 1840",
            "size": 16
        },
        {
            "id": 185,
            "n_oficina": 9,
            "nit_empresa": 1850,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 1850",
            "size": 6
        },
        {
            "id": 186,
            "n_oficina": 12,
            "nit_empresa": 1860,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 1860",
            "size": 17
        },
        {
            "id": 187,
            "n_oficina": 4,
            "nit_empresa": 1870,
            "piso": 62,
            "nombre_empresa": "Empresa con nit 1870",
            "size": 6
        },
        {
            "id": 188,
            "n_oficina": 11,
            "nit_empresa": 1880,
            "piso": 28,
            "nombre_empresa": "Empresa con nit 1880",
            "size": 9
        },
        {
            "id": 189,
            "n_oficina": 3,
            "nit_empresa": 1890,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 1890",
            "size": 12
        },
        {
            "id": 190,
            "n_oficina": 11,
            "nit_empresa": 1900,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 1900",
            "size": 17
        },
        {
            "id": 191,
            "n_oficina": 9,
            "nit_empresa": 1910,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 1910",
            "size": 2
        },
        {
            "id": 192,
            "n_oficina": 11,
            "nit_empresa": 1920,
            "piso": 76,
            "nombre_empresa": "Empresa con nit 1920",
            "size": 17
        },
        {
            "id": 193,
            "n_oficina": 7,
            "nit_empresa": 1930,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 1930",
            "size": 15
        },
        {
            "id": 194,
            "n_oficina": 5,
            "nit_empresa": 1940,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 1940",
            "size": 8
        },
        {
            "id": 195,
            "n_oficina": 5,
            "nit_empresa": 1950,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 1950",
            "size": 14
        },
        {
            "id": 196,
            "n_oficina": 1,
            "nit_empresa": 1960,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 1960",
            "size": 10
        },
        {
            "id": 197,
            "n_oficina": 3,
            "nit_empresa": 1970,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 1970",
            "size": 6
        },
        {
            "id": 198,
            "n_oficina": 9,
            "nit_empresa": 1980,
            "piso": 45,
            "nombre_empresa": "Empresa con nit 1980",
            "size": 6
        },
        {
            "id": 199,
            "n_oficina": 13,
            "nit_empresa": 1990,
            "piso": 93,
            "nombre_empresa": "Empresa con nit 1990",
            "size": 15
        },
        {
            "id": 200,
            "n_oficina": 7,
            "nit_empresa": 2000,
            "piso": 47,
            "nombre_empresa": "Empresa con nit 2000",
            "size": 10
        },
        {
            "id": 201,
            "n_oficina": 13,
            "nit_empresa": 2010,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 2010",
            "size": 5
        },
        {
            "id": 202,
            "n_oficina": 6,
            "nit_empresa": 2020,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 2020",
            "size": 11
        },
        {
            "id": 203,
            "n_oficina": 13,
            "nit_empresa": 2030,
            "piso": 63,
            "nombre_empresa": "Empresa con nit 2030",
            "size": 7
        },
        {
            "id": 204,
            "n_oficina": 8,
            "nit_empresa": 2040,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 2040",
            "size": 7
        },
        {
            "id": 205,
            "n_oficina": 3,
            "nit_empresa": 2050,
            "piso": 94,
            "nombre_empresa": "Empresa con nit 2050",
            "size": 17
        },
        {
            "id": 206,
            "n_oficina": 2,
            "nit_empresa": 2060,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 2060",
            "size": 8
        },
        {
            "id": 207,
            "n_oficina": 10,
            "nit_empresa": 2070,
            "piso": 97,
            "nombre_empresa": "Empresa con nit 2070",
            "size": 18
        },
        {
            "id": 208,
            "n_oficina": 11,
            "nit_empresa": 2080,
            "piso": 73,
            "nombre_empresa": "Empresa con nit 2080",
            "size": 16
        },
        {
            "id": 209,
            "n_oficina": 10,
            "nit_empresa": 2090,
            "piso": 97,
            "nombre_empresa": "Empresa con nit 2090",
            "size": 9
        },
        {
            "id": 210,
            "n_oficina": 7,
            "nit_empresa": 2100,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 2100",
            "size": 14
        },
        {
            "id": 211,
            "n_oficina": 14,
            "nit_empresa": 2110,
            "piso": 38,
            "nombre_empresa": "Empresa con nit 2110",
            "size": 1
        },
        {
            "id": 212,
            "n_oficina": 7,
            "nit_empresa": 2120,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 2120",
            "size": 1
        },
        {
            "id": 213,
            "n_oficina": 13,
            "nit_empresa": 2130,
            "piso": 19,
            "nombre_empresa": "Empresa con nit 2130",
            "size": 4
        },
        {
            "id": 214,
            "n_oficina": 9,
            "nit_empresa": 2140,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 2140",
            "size": 12
        },
        {
            "id": 215,
            "n_oficina": 2,
            "nit_empresa": 2150,
            "piso": 42,
            "nombre_empresa": "Empresa con nit 2150",
            "size": 3
        },
        {
            "id": 216,
            "n_oficina": 8,
            "nit_empresa": 2160,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 2160",
            "size": 7
        },
        {
            "id": 217,
            "n_oficina": 9,
            "nit_empresa": 2170,
            "piso": 12,
            "nombre_empresa": "Empresa con nit 2170",
            "size": 2
        },
        {
            "id": 218,
            "n_oficina": 4,
            "nit_empresa": 2180,
            "piso": 11,
            "nombre_empresa": "Empresa con nit 2180",
            "size": 4
        },
        {
            "id": 219,
            "n_oficina": 1,
            "nit_empresa": 2190,
            "piso": 39,
            "nombre_empresa": "Empresa con nit 2190",
            "size": 5
        },
        {
            "id": 220,
            "n_oficina": 14,
            "nit_empresa": 2200,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 2200",
            "size": 8
        },
        {
            "id": 221,
            "n_oficina": 2,
            "nit_empresa": 2210,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 2210",
            "size": 16
        },
        {
            "id": 222,
            "n_oficina": 4,
            "nit_empresa": 2220,
            "piso": 22,
            "nombre_empresa": "Empresa con nit 2220",
            "size": 11
        },
        {
            "id": 223,
            "n_oficina": 7,
            "nit_empresa": 2230,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 2230",
            "size": 5
        },
        {
            "id": 224,
            "n_oficina": 8,
            "nit_empresa": 2240,
            "piso": 12,
            "nombre_empresa": "Empresa con nit 2240",
            "size": 8
        },
        {
            "id": 225,
            "n_oficina": 3,
            "nit_empresa": 2250,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 2250",
            "size": 4
        },
        {
            "id": 226,
            "n_oficina": 7,
            "nit_empresa": 2260,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 2260",
            "size": 4
        },
        {
            "id": 227,
            "n_oficina": 7,
            "nit_empresa": 2270,
            "piso": 2,
            "nombre_empresa": "Empresa con nit 2270",
            "size": 1
        },
        {
            "id": 228,
            "n_oficina": 1,
            "nit_empresa": 2280,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 2280",
            "size": 11
        },
        {
            "id": 229,
            "n_oficina": 11,
            "nit_empresa": 2290,
            "piso": 19,
            "nombre_empresa": "Empresa con nit 2290",
            "size": 14
        },
        {
            "id": 230,
            "n_oficina": 6,
            "nit_empresa": 2300,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 2300",
            "size": 9
        },
        {
            "id": 231,
            "n_oficina": 12,
            "nit_empresa": 2310,
            "piso": 34,
            "nombre_empresa": "Empresa con nit 2310",
            "size": 10
        },
        {
            "id": 232,
            "n_oficina": 11,
            "nit_empresa": 2320,
            "piso": 78,
            "nombre_empresa": "Empresa con nit 2320",
            "size": 6
        },
        {
            "id": 233,
            "n_oficina": 5,
            "nit_empresa": 2330,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 2330",
            "size": 8
        },
        {
            "id": 234,
            "n_oficina": 3,
            "nit_empresa": 2340,
            "piso": 36,
            "nombre_empresa": "Empresa con nit 2340",
            "size": 3
        },
        {
            "id": 235,
            "n_oficina": 11,
            "nit_empresa": 2350,
            "piso": 13,
            "nombre_empresa": "Empresa con nit 2350",
            "size": 19
        },
        {
            "id": 236,
            "n_oficina": 12,
            "nit_empresa": 2360,
            "piso": 28,
            "nombre_empresa": "Empresa con nit 2360",
            "size": 17
        },
        {
            "id": 237,
            "n_oficina": 10,
            "nit_empresa": 2370,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 2370",
            "size": 15
        },
        {
            "id": 238,
            "n_oficina": 9,
            "nit_empresa": 2380,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 2380",
            "size": 17
        },
        {
            "id": 239,
            "n_oficina": 10,
            "nit_empresa": 2390,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 2390",
            "size": 16
        },
        {
            "id": 240,
            "n_oficina": 6,
            "nit_empresa": 2400,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 2400",
            "size": 19
        },
        {
            "id": 241,
            "n_oficina": 14,
            "nit_empresa": 2410,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 2410",
            "size": 18
        },
        {
            "id": 242,
            "n_oficina": 14,
            "nit_empresa": 2420,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 2420",
            "size": 19
        },
        {
            "id": 243,
            "n_oficina": 1,
            "nit_empresa": 2430,
            "piso": 12,
            "nombre_empresa": "Empresa con nit 2430",
            "size": 2
        },
        {
            "id": 244,
            "n_oficina": 4,
            "nit_empresa": 2440,
            "piso": 63,
            "nombre_empresa": "Empresa con nit 2440",
            "size": 10
        },
        {
            "id": 245,
            "n_oficina": 12,
            "nit_empresa": 2450,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 2450",
            "size": 16
        },
        {
            "id": 246,
            "n_oficina": 2,
            "nit_empresa": 2460,
            "piso": 83,
            "nombre_empresa": "Empresa con nit 2460",
            "size": 3
        },
        {
            "id": 247,
            "n_oficina": 8,
            "nit_empresa": 2470,
            "piso": 81,
            "nombre_empresa": "Empresa con nit 2470",
            "size": 11
        },
        {
            "id": 248,
            "n_oficina": 14,
            "nit_empresa": 2480,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 2480",
            "size": 14
        },
        {
            "id": 249,
            "n_oficina": 7,
            "nit_empresa": 2490,
            "piso": 62,
            "nombre_empresa": "Empresa con nit 2490",
            "size": 10
        },
        {
            "id": 250,
            "n_oficina": 4,
            "nit_empresa": 2500,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 2500",
            "size": 10
        },
        {
            "id": 251,
            "n_oficina": 9,
            "nit_empresa": 2510,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 2510",
            "size": 1
        },
        {
            "id": 252,
            "n_oficina": 6,
            "nit_empresa": 2520,
            "piso": 63,
            "nombre_empresa": "Empresa con nit 2520",
            "size": 7
        },
        {
            "id": 253,
            "n_oficina": 13,
            "nit_empresa": 2530,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 2530",
            "size": 2
        },
        {
            "id": 254,
            "n_oficina": 11,
            "nit_empresa": 2540,
            "piso": 93,
            "nombre_empresa": "Empresa con nit 2540",
            "size": 17
        },
        {
            "id": 255,
            "n_oficina": 12,
            "nit_empresa": 2550,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 2550",
            "size": 7
        },
        {
            "id": 256,
            "n_oficina": 1,
            "nit_empresa": 2560,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 2560",
            "size": 6
        },
        {
            "id": 257,
            "n_oficina": 14,
            "nit_empresa": 2570,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 2570",
            "size": 18
        },
        {
            "id": 258,
            "n_oficina": 6,
            "nit_empresa": 2580,
            "piso": 63,
            "nombre_empresa": "Empresa con nit 2580",
            "size": 4
        },
        {
            "id": 259,
            "n_oficina": 2,
            "nit_empresa": 2590,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 2590",
            "size": 6
        },
        {
            "id": 260,
            "n_oficina": 10,
            "nit_empresa": 2600,
            "piso": 87,
            "nombre_empresa": "Empresa con nit 2600",
            "size": 12
        },
        {
            "id": 261,
            "n_oficina": 8,
            "nit_empresa": 2610,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 2610",
            "size": 14
        },
        {
            "id": 262,
            "n_oficina": 11,
            "nit_empresa": 2620,
            "piso": 27,
            "nombre_empresa": "Empresa con nit 2620",
            "size": 9
        },
        {
            "id": 263,
            "n_oficina": 10,
            "nit_empresa": 2630,
            "piso": 55,
            "nombre_empresa": "Empresa con nit 2630",
            "size": 15
        },
        {
            "id": 264,
            "n_oficina": 7,
            "nit_empresa": 2640,
            "piso": 39,
            "nombre_empresa": "Empresa con nit 2640",
            "size": 19
        },
        {
            "id": 265,
            "n_oficina": 6,
            "nit_empresa": 2650,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 2650",
            "size": 2
        },
        {
            "id": 266,
            "n_oficina": 11,
            "nit_empresa": 2660,
            "piso": 12,
            "nombre_empresa": "Empresa con nit 2660",
            "size": 4
        },
        {
            "id": 267,
            "n_oficina": 10,
            "nit_empresa": 2670,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 2670",
            "size": 12
        },
        {
            "id": 268,
            "n_oficina": 9,
            "nit_empresa": 2680,
            "piso": 93,
            "nombre_empresa": "Empresa con nit 2680",
            "size": 4
        },
        {
            "id": 269,
            "n_oficina": 7,
            "nit_empresa": 2690,
            "piso": 15,
            "nombre_empresa": "Empresa con nit 2690",
            "size": 9
        },
        {
            "id": 270,
            "n_oficina": 3,
            "nit_empresa": 2700,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 2700",
            "size": 3
        },
        {
            "id": 271,
            "n_oficina": 8,
            "nit_empresa": 2710,
            "piso": 33,
            "nombre_empresa": "Empresa con nit 2710",
            "size": 8
        },
        {
            "id": 272,
            "n_oficina": 13,
            "nit_empresa": 2720,
            "piso": 36,
            "nombre_empresa": "Empresa con nit 2720",
            "size": 12
        },
        {
            "id": 273,
            "n_oficina": 9,
            "nit_empresa": 2730,
            "piso": 41,
            "nombre_empresa": "Empresa con nit 2730",
            "size": 10
        },
        {
            "id": 274,
            "n_oficina": 7,
            "nit_empresa": 2740,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 2740",
            "size": 10
        },
        {
            "id": 275,
            "n_oficina": 10,
            "nit_empresa": 2750,
            "piso": 82,
            "nombre_empresa": "Empresa con nit 2750",
            "size": 5
        },
        {
            "id": 276,
            "n_oficina": 4,
            "nit_empresa": 2760,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 2760",
            "size": 4
        },
        {
            "id": 277,
            "n_oficina": 6,
            "nit_empresa": 2770,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 2770",
            "size": 11
        },
        {
            "id": 278,
            "n_oficina": 1,
            "nit_empresa": 2780,
            "piso": 11,
            "nombre_empresa": "Empresa con nit 2780",
            "size": 7
        },
        {
            "id": 279,
            "n_oficina": 10,
            "nit_empresa": 2790,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 2790",
            "size": 19
        },
        {
            "id": 280,
            "n_oficina": 7,
            "nit_empresa": 2800,
            "piso": 26,
            "nombre_empresa": "Empresa con nit 2800",
            "size": 7
        },
        {
            "id": 281,
            "n_oficina": 7,
            "nit_empresa": 2810,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 2810",
            "size": 3
        },
        {
            "id": 282,
            "n_oficina": 13,
            "nit_empresa": 2820,
            "piso": 75,
            "nombre_empresa": "Empresa con nit 2820",
            "size": 2
        },
        {
            "id": 283,
            "n_oficina": 3,
            "nit_empresa": 2830,
            "piso": 61,
            "nombre_empresa": "Empresa con nit 2830",
            "size": 4
        },
        {
            "id": 284,
            "n_oficina": 4,
            "nit_empresa": 2840,
            "piso": 19,
            "nombre_empresa": "Empresa con nit 2840",
            "size": 16
        },
        {
            "id": 285,
            "n_oficina": 12,
            "nit_empresa": 2850,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 2850",
            "size": 14
        },
        {
            "id": 286,
            "n_oficina": 13,
            "nit_empresa": 2860,
            "piso": 12,
            "nombre_empresa": "Empresa con nit 2860",
            "size": 11
        },
        {
            "id": 287,
            "n_oficina": 13,
            "nit_empresa": 2870,
            "piso": 23,
            "nombre_empresa": "Empresa con nit 2870",
            "size": 3
        },
        {
            "id": 288,
            "n_oficina": 10,
            "nit_empresa": 2880,
            "piso": 11,
            "nombre_empresa": "Empresa con nit 2880",
            "size": 12
        },
        {
            "id": 289,
            "n_oficina": 4,
            "nit_empresa": 2890,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 2890",
            "size": 8
        },
        {
            "id": 290,
            "n_oficina": 4,
            "nit_empresa": 2900,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 2900",
            "size": 9
        },
        {
            "id": 291,
            "n_oficina": 3,
            "nit_empresa": 2910,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 2910",
            "size": 1
        },
        {
            "id": 292,
            "n_oficina": 13,
            "nit_empresa": 2920,
            "piso": 87,
            "nombre_empresa": "Empresa con nit 2920",
            "size": 7
        },
        {
            "id": 293,
            "n_oficina": 4,
            "nit_empresa": 2930,
            "piso": 33,
            "nombre_empresa": "Empresa con nit 2930",
            "size": 19
        },
        {
            "id": 294,
            "n_oficina": 11,
            "nit_empresa": 2940,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 2940",
            "size": 13
        },
        {
            "id": 295,
            "n_oficina": 11,
            "nit_empresa": 2950,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 2950",
            "size": 17
        },
        {
            "id": 296,
            "n_oficina": 7,
            "nit_empresa": 2960,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 2960",
            "size": 11
        },
        {
            "id": 297,
            "n_oficina": 14,
            "nit_empresa": 2970,
            "piso": 27,
            "nombre_empresa": "Empresa con nit 2970",
            "size": 17
        },
        {
            "id": 298,
            "n_oficina": 10,
            "nit_empresa": 2980,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 2980",
            "size": 9
        },
        {
            "id": 299,
            "n_oficina": 14,
            "nit_empresa": 2990,
            "piso": 6,
            "nombre_empresa": "Empresa con nit 2990",
            "size": 6
        },
        {
            "id": 300,
            "n_oficina": 11,
            "nit_empresa": 3000,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 3000",
            "size": 10
        },
        {
            "id": 301,
            "n_oficina": 9,
            "nit_empresa": 3010,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 3010",
            "size": 13
        },
        {
            "id": 302,
            "n_oficina": 13,
            "nit_empresa": 3020,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 3020",
            "size": 2
        },
        {
            "id": 303,
            "n_oficina": 2,
            "nit_empresa": 3030,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 3030",
            "size": 18
        },
        {
            "id": 304,
            "n_oficina": 2,
            "nit_empresa": 3040,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 3040",
            "size": 6
        },
        {
            "id": 305,
            "n_oficina": 14,
            "nit_empresa": 3050,
            "piso": 61,
            "nombre_empresa": "Empresa con nit 3050",
            "size": 14
        },
        {
            "id": 306,
            "n_oficina": 11,
            "nit_empresa": 3060,
            "piso": 79,
            "nombre_empresa": "Empresa con nit 3060",
            "size": 19
        },
        {
            "id": 307,
            "n_oficina": 9,
            "nit_empresa": 3070,
            "piso": 84,
            "nombre_empresa": "Empresa con nit 3070",
            "size": 18
        },
        {
            "id": 308,
            "n_oficina": 12,
            "nit_empresa": 3080,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 3080",
            "size": 14
        },
        {
            "id": 309,
            "n_oficina": 11,
            "nit_empresa": 3090,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 3090",
            "size": 5
        },
        {
            "id": 310,
            "n_oficina": 1,
            "nit_empresa": 3100,
            "piso": 83,
            "nombre_empresa": "Empresa con nit 3100",
            "size": 18
        },
        {
            "id": 311,
            "n_oficina": 1,
            "nit_empresa": 3110,
            "piso": 54,
            "nombre_empresa": "Empresa con nit 3110",
            "size": 1
        },
        {
            "id": 312,
            "n_oficina": 13,
            "nit_empresa": 3120,
            "piso": 62,
            "nombre_empresa": "Empresa con nit 3120",
            "size": 18
        },
        {
            "id": 313,
            "n_oficina": 9,
            "nit_empresa": 3130,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 3130",
            "size": 8
        },
        {
            "id": 314,
            "n_oficina": 9,
            "nit_empresa": 3140,
            "piso": 79,
            "nombre_empresa": "Empresa con nit 3140",
            "size": 10
        },
        {
            "id": 315,
            "n_oficina": 8,
            "nit_empresa": 3150,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 3150",
            "size": 5
        },
        {
            "id": 316,
            "n_oficina": 12,
            "nit_empresa": 3160,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 3160",
            "size": 17
        },
        {
            "id": 317,
            "n_oficina": 1,
            "nit_empresa": 3170,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 3170",
            "size": 13
        },
        {
            "id": 318,
            "n_oficina": 8,
            "nit_empresa": 3180,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 3180",
            "size": 9
        },
        {
            "id": 319,
            "n_oficina": 11,
            "nit_empresa": 3190,
            "piso": 94,
            "nombre_empresa": "Empresa con nit 3190",
            "size": 2
        },
        {
            "id": 320,
            "n_oficina": 11,
            "nit_empresa": 3200,
            "piso": 26,
            "nombre_empresa": "Empresa con nit 3200",
            "size": 18
        },
        {
            "id": 321,
            "n_oficina": 3,
            "nit_empresa": 3210,
            "piso": 79,
            "nombre_empresa": "Empresa con nit 3210",
            "size": 9
        },
        {
            "id": 322,
            "n_oficina": 13,
            "nit_empresa": 3220,
            "piso": 65,
            "nombre_empresa": "Empresa con nit 3220",
            "size": 16
        },
        {
            "id": 323,
            "n_oficina": 14,
            "nit_empresa": 3230,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 3230",
            "size": 5
        },
        {
            "id": 324,
            "n_oficina": 4,
            "nit_empresa": 3240,
            "piso": 2,
            "nombre_empresa": "Empresa con nit 3240",
            "size": 10
        },
        {
            "id": 325,
            "n_oficina": 4,
            "nit_empresa": 3250,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 3250",
            "size": 18
        },
        {
            "id": 326,
            "n_oficina": 6,
            "nit_empresa": 3260,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 3260",
            "size": 12
        },
        {
            "id": 327,
            "n_oficina": 13,
            "nit_empresa": 3270,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 3270",
            "size": 17
        },
        {
            "id": 328,
            "n_oficina": 12,
            "nit_empresa": 3280,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 3280",
            "size": 6
        },
        {
            "id": 329,
            "n_oficina": 4,
            "nit_empresa": 3290,
            "piso": 12,
            "nombre_empresa": "Empresa con nit 3290",
            "size": 9
        },
        {
            "id": 330,
            "n_oficina": 6,
            "nit_empresa": 3300,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 3300",
            "size": 16
        },
        {
            "id": 331,
            "n_oficina": 3,
            "nit_empresa": 3310,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 3310",
            "size": 8
        },
        {
            "id": 332,
            "n_oficina": 8,
            "nit_empresa": 3320,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 3320",
            "size": 18
        },
        {
            "id": 333,
            "n_oficina": 2,
            "nit_empresa": 3330,
            "piso": 41,
            "nombre_empresa": "Empresa con nit 3330",
            "size": 19
        },
        {
            "id": 334,
            "n_oficina": 10,
            "nit_empresa": 3340,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 3340",
            "size": 6
        },
        {
            "id": 335,
            "n_oficina": 2,
            "nit_empresa": 3350,
            "piso": 82,
            "nombre_empresa": "Empresa con nit 3350",
            "size": 18
        },
        {
            "id": 336,
            "n_oficina": 11,
            "nit_empresa": 3360,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 3360",
            "size": 9
        },
        {
            "id": 337,
            "n_oficina": 4,
            "nit_empresa": 3370,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 3370",
            "size": 19
        },
        {
            "id": 338,
            "n_oficina": 10,
            "nit_empresa": 3380,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 3380",
            "size": 15
        },
        {
            "id": 339,
            "n_oficina": 11,
            "nit_empresa": 3390,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 3390",
            "size": 19
        },
        {
            "id": 340,
            "n_oficina": 4,
            "nit_empresa": 3400,
            "piso": 39,
            "nombre_empresa": "Empresa con nit 3400",
            "size": 12
        },
        {
            "id": 341,
            "n_oficina": 2,
            "nit_empresa": 3410,
            "piso": 9,
            "nombre_empresa": "Empresa con nit 3410",
            "size": 16
        },
        {
            "id": 342,
            "n_oficina": 7,
            "nit_empresa": 3420,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 3420",
            "size": 4
        },
        {
            "id": 343,
            "n_oficina": 14,
            "nit_empresa": 3430,
            "piso": 55,
            "nombre_empresa": "Empresa con nit 3430",
            "size": 13
        },
        {
            "id": 344,
            "n_oficina": 14,
            "nit_empresa": 3440,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 3440",
            "size": 15
        },
        {
            "id": 345,
            "n_oficina": 3,
            "nit_empresa": 3450,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 3450",
            "size": 19
        },
        {
            "id": 346,
            "n_oficina": 14,
            "nit_empresa": 3460,
            "piso": 59,
            "nombre_empresa": "Empresa con nit 3460",
            "size": 4
        },
        {
            "id": 347,
            "n_oficina": 13,
            "nit_empresa": 3470,
            "piso": 87,
            "nombre_empresa": "Empresa con nit 3470",
            "size": 8
        },
        {
            "id": 348,
            "n_oficina": 5,
            "nit_empresa": 3480,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 3480",
            "size": 10
        },
        {
            "id": 349,
            "n_oficina": 2,
            "nit_empresa": 3490,
            "piso": 38,
            "nombre_empresa": "Empresa con nit 3490",
            "size": 4
        },
        {
            "id": 350,
            "n_oficina": 12,
            "nit_empresa": 3500,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 3500",
            "size": 2
        },
        {
            "id": 351,
            "n_oficina": 5,
            "nit_empresa": 3510,
            "piso": 45,
            "nombre_empresa": "Empresa con nit 3510",
            "size": 2
        },
        {
            "id": 352,
            "n_oficina": 12,
            "nit_empresa": 3520,
            "piso": 4,
            "nombre_empresa": "Empresa con nit 3520",
            "size": 9
        },
        {
            "id": 353,
            "n_oficina": 11,
            "nit_empresa": 3530,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 3530",
            "size": 18
        },
        {
            "id": 354,
            "n_oficina": 1,
            "nit_empresa": 3540,
            "piso": 19,
            "nombre_empresa": "Empresa con nit 3540",
            "size": 15
        },
        {
            "id": 355,
            "n_oficina": 14,
            "nit_empresa": 3550,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 3550",
            "size": 19
        },
        {
            "id": 356,
            "n_oficina": 1,
            "nit_empresa": 3560,
            "piso": 47,
            "nombre_empresa": "Empresa con nit 3560",
            "size": 18
        },
        {
            "id": 357,
            "n_oficina": 9,
            "nit_empresa": 3570,
            "piso": 41,
            "nombre_empresa": "Empresa con nit 3570",
            "size": 3
        },
        {
            "id": 358,
            "n_oficina": 8,
            "nit_empresa": 3580,
            "piso": 73,
            "nombre_empresa": "Empresa con nit 3580",
            "size": 7
        },
        {
            "id": 359,
            "n_oficina": 11,
            "nit_empresa": 3590,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 3590",
            "size": 14
        },
        {
            "id": 360,
            "n_oficina": 12,
            "nit_empresa": 3600,
            "piso": 67,
            "nombre_empresa": "Empresa con nit 3600",
            "size": 8
        },
        {
            "id": 361,
            "n_oficina": 5,
            "nit_empresa": 3610,
            "piso": 50,
            "nombre_empresa": "Empresa con nit 3610",
            "size": 7
        },
        {
            "id": 362,
            "n_oficina": 13,
            "nit_empresa": 3620,
            "piso": 11,
            "nombre_empresa": "Empresa con nit 3620",
            "size": 10
        },
        {
            "id": 363,
            "n_oficina": 1,
            "nit_empresa": 3630,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 3630",
            "size": 15
        },
        {
            "id": 364,
            "n_oficina": 11,
            "nit_empresa": 3640,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 3640",
            "size": 9
        },
        {
            "id": 365,
            "n_oficina": 12,
            "nit_empresa": 3650,
            "piso": 47,
            "nombre_empresa": "Empresa con nit 3650",
            "size": 8
        },
        {
            "id": 366,
            "n_oficina": 7,
            "nit_empresa": 3660,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 3660",
            "size": 1
        },
        {
            "id": 367,
            "n_oficina": 13,
            "nit_empresa": 3670,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 3670",
            "size": 8
        },
        {
            "id": 368,
            "n_oficina": 3,
            "nit_empresa": 3680,
            "piso": 81,
            "nombre_empresa": "Empresa con nit 3680",
            "size": 18
        },
        {
            "id": 369,
            "n_oficina": 3,
            "nit_empresa": 3690,
            "piso": 41,
            "nombre_empresa": "Empresa con nit 3690",
            "size": 9
        },
        {
            "id": 370,
            "n_oficina": 9,
            "nit_empresa": 3700,
            "piso": 15,
            "nombre_empresa": "Empresa con nit 3700",
            "size": 8
        },
        {
            "id": 371,
            "n_oficina": 8,
            "nit_empresa": 3710,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 3710",
            "size": 10
        },
        {
            "id": 372,
            "n_oficina": 8,
            "nit_empresa": 3720,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 3720",
            "size": 7
        },
        {
            "id": 373,
            "n_oficina": 14,
            "nit_empresa": 3730,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 3730",
            "size": 17
        },
        {
            "id": 374,
            "n_oficina": 2,
            "nit_empresa": 3740,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 3740",
            "size": 12
        },
        {
            "id": 375,
            "n_oficina": 13,
            "nit_empresa": 3750,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 3750",
            "size": 8
        },
        {
            "id": 376,
            "n_oficina": 11,
            "nit_empresa": 3760,
            "piso": 9,
            "nombre_empresa": "Empresa con nit 3760",
            "size": 8
        },
        {
            "id": 377,
            "n_oficina": 13,
            "nit_empresa": 3770,
            "piso": 35,
            "nombre_empresa": "Empresa con nit 3770",
            "size": 10
        },
        {
            "id": 378,
            "n_oficina": 10,
            "nit_empresa": 3780,
            "piso": 26,
            "nombre_empresa": "Empresa con nit 3780",
            "size": 12
        },
        {
            "id": 379,
            "n_oficina": 12,
            "nit_empresa": 3790,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 3790",
            "size": 14
        },
        {
            "id": 380,
            "n_oficina": 4,
            "nit_empresa": 3800,
            "piso": 6,
            "nombre_empresa": "Empresa con nit 3800",
            "size": 14
        },
        {
            "id": 381,
            "n_oficina": 5,
            "nit_empresa": 3810,
            "piso": 4,
            "nombre_empresa": "Empresa con nit 3810",
            "size": 4
        },
        {
            "id": 382,
            "n_oficina": 13,
            "nit_empresa": 3820,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 3820",
            "size": 8
        },
        {
            "id": 383,
            "n_oficina": 9,
            "nit_empresa": 3830,
            "piso": 9,
            "nombre_empresa": "Empresa con nit 3830",
            "size": 15
        },
        {
            "id": 384,
            "n_oficina": 3,
            "nit_empresa": 3840,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 3840",
            "size": 1
        },
        {
            "id": 385,
            "n_oficina": 14,
            "nit_empresa": 3850,
            "piso": 23,
            "nombre_empresa": "Empresa con nit 3850",
            "size": 18
        },
        {
            "id": 386,
            "n_oficina": 8,
            "nit_empresa": 3860,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 3860",
            "size": 4
        },
        {
            "id": 387,
            "n_oficina": 13,
            "nit_empresa": 3870,
            "piso": 54,
            "nombre_empresa": "Empresa con nit 3870",
            "size": 7
        },
        {
            "id": 388,
            "n_oficina": 6,
            "nit_empresa": 3880,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 3880",
            "size": 16
        },
        {
            "id": 389,
            "n_oficina": 4,
            "nit_empresa": 3890,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 3890",
            "size": 17
        },
        {
            "id": 390,
            "n_oficina": 8,
            "nit_empresa": 3900,
            "piso": 74,
            "nombre_empresa": "Empresa con nit 3900",
            "size": 5
        },
        {
            "id": 391,
            "n_oficina": 2,
            "nit_empresa": 3910,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 3910",
            "size": 2
        },
        {
            "id": 392,
            "n_oficina": 13,
            "nit_empresa": 3920,
            "piso": 79,
            "nombre_empresa": "Empresa con nit 3920",
            "size": 11
        },
        {
            "id": 393,
            "n_oficina": 3,
            "nit_empresa": 3930,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 3930",
            "size": 10
        },
        {
            "id": 394,
            "n_oficina": 1,
            "nit_empresa": 3940,
            "piso": 23,
            "nombre_empresa": "Empresa con nit 3940",
            "size": 7
        },
        {
            "id": 395,
            "n_oficina": 1,
            "nit_empresa": 3950,
            "piso": 3,
            "nombre_empresa": "Empresa con nit 3950",
            "size": 8
        },
        {
            "id": 396,
            "n_oficina": 12,
            "nit_empresa": 3960,
            "piso": 74,
            "nombre_empresa": "Empresa con nit 3960",
            "size": 11
        },
        {
            "id": 397,
            "n_oficina": 4,
            "nit_empresa": 3970,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 3970",
            "size": 4
        },
        {
            "id": 398,
            "n_oficina": 11,
            "nit_empresa": 3980,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 3980",
            "size": 3
        },
        {
            "id": 399,
            "n_oficina": 2,
            "nit_empresa": 3990,
            "piso": 74,
            "nombre_empresa": "Empresa con nit 3990",
            "size": 2
        },
        {
            "id": 400,
            "n_oficina": 14,
            "nit_empresa": 4000,
            "piso": 82,
            "nombre_empresa": "Empresa con nit 4000",
            "size": 3
        },
        {
            "id": 401,
            "n_oficina": 1,
            "nit_empresa": 4010,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 4010",
            "size": 9
        },
        {
            "id": 402,
            "n_oficina": 3,
            "nit_empresa": 4020,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 4020",
            "size": 15
        },
        {
            "id": 403,
            "n_oficina": 14,
            "nit_empresa": 4030,
            "piso": 98,
            "nombre_empresa": "Empresa con nit 4030",
            "size": 3
        },
        {
            "id": 404,
            "n_oficina": 8,
            "nit_empresa": 4040,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 4040",
            "size": 15
        },
        {
            "id": 405,
            "n_oficina": 11,
            "nit_empresa": 4050,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 4050",
            "size": 13
        },
        {
            "id": 406,
            "n_oficina": 2,
            "nit_empresa": 4060,
            "piso": 63,
            "nombre_empresa": "Empresa con nit 4060",
            "size": 2
        },
        {
            "id": 407,
            "n_oficina": 6,
            "nit_empresa": 4070,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 4070",
            "size": 11
        },
        {
            "id": 408,
            "n_oficina": 14,
            "nit_empresa": 4080,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 4080",
            "size": 10
        },
        {
            "id": 409,
            "n_oficina": 11,
            "nit_empresa": 4090,
            "piso": 65,
            "nombre_empresa": "Empresa con nit 4090",
            "size": 6
        },
        {
            "id": 410,
            "n_oficina": 11,
            "nit_empresa": 4100,
            "piso": 63,
            "nombre_empresa": "Empresa con nit 4100",
            "size": 7
        },
        {
            "id": 411,
            "n_oficina": 7,
            "nit_empresa": 4110,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 4110",
            "size": 5
        },
        {
            "id": 412,
            "n_oficina": 7,
            "nit_empresa": 4120,
            "piso": 36,
            "nombre_empresa": "Empresa con nit 4120",
            "size": 16
        },
        {
            "id": 413,
            "n_oficina": 5,
            "nit_empresa": 4130,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 4130",
            "size": 15
        },
        {
            "id": 414,
            "n_oficina": 10,
            "nit_empresa": 4140,
            "piso": 83,
            "nombre_empresa": "Empresa con nit 4140",
            "size": 16
        },
        {
            "id": 415,
            "n_oficina": 4,
            "nit_empresa": 4150,
            "piso": 61,
            "nombre_empresa": "Empresa con nit 4150",
            "size": 5
        },
        {
            "id": 416,
            "n_oficina": 2,
            "nit_empresa": 4160,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 4160",
            "size": 3
        },
        {
            "id": 417,
            "n_oficina": 2,
            "nit_empresa": 4170,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 4170",
            "size": 15
        },
        {
            "id": 418,
            "n_oficina": 8,
            "nit_empresa": 4180,
            "piso": 67,
            "nombre_empresa": "Empresa con nit 4180",
            "size": 8
        },
        {
            "id": 419,
            "n_oficina": 10,
            "nit_empresa": 4190,
            "piso": 12,
            "nombre_empresa": "Empresa con nit 4190",
            "size": 10
        },
        {
            "id": 420,
            "n_oficina": 4,
            "nit_empresa": 4200,
            "piso": 39,
            "nombre_empresa": "Empresa con nit 4200",
            "size": 8
        },
        {
            "id": 421,
            "n_oficina": 9,
            "nit_empresa": 4210,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 4210",
            "size": 18
        },
        {
            "id": 422,
            "n_oficina": 3,
            "nit_empresa": 4220,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 4220",
            "size": 12
        },
        {
            "id": 423,
            "n_oficina": 2,
            "nit_empresa": 4230,
            "piso": 29,
            "nombre_empresa": "Empresa con nit 4230",
            "size": 3
        },
        {
            "id": 424,
            "n_oficina": 1,
            "nit_empresa": 4240,
            "piso": 92,
            "nombre_empresa": "Empresa con nit 4240",
            "size": 4
        },
        {
            "id": 425,
            "n_oficina": 10,
            "nit_empresa": 4250,
            "piso": 46,
            "nombre_empresa": "Empresa con nit 4250",
            "size": 6
        },
        {
            "id": 426,
            "n_oficina": 12,
            "nit_empresa": 4260,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 4260",
            "size": 17
        },
        {
            "id": 427,
            "n_oficina": 8,
            "nit_empresa": 4270,
            "piso": 3,
            "nombre_empresa": "Empresa con nit 4270",
            "size": 14
        },
        {
            "id": 428,
            "n_oficina": 4,
            "nit_empresa": 4280,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 4280",
            "size": 18
        },
        {
            "id": 429,
            "n_oficina": 8,
            "nit_empresa": 4290,
            "piso": 50,
            "nombre_empresa": "Empresa con nit 4290",
            "size": 13
        },
        {
            "id": 430,
            "n_oficina": 3,
            "nit_empresa": 4300,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 4300",
            "size": 11
        },
        {
            "id": 431,
            "n_oficina": 4,
            "nit_empresa": 4310,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 4310",
            "size": 5
        },
        {
            "id": 432,
            "n_oficina": 13,
            "nit_empresa": 4320,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 4320",
            "size": 6
        },
        {
            "id": 433,
            "n_oficina": 2,
            "nit_empresa": 4330,
            "piso": 15,
            "nombre_empresa": "Empresa con nit 4330",
            "size": 9
        },
        {
            "id": 434,
            "n_oficina": 8,
            "nit_empresa": 4340,
            "piso": 98,
            "nombre_empresa": "Empresa con nit 4340",
            "size": 18
        },
        {
            "id": 435,
            "n_oficina": 4,
            "nit_empresa": 4350,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 4350",
            "size": 10
        },
        {
            "id": 436,
            "n_oficina": 1,
            "nit_empresa": 4360,
            "piso": 38,
            "nombre_empresa": "Empresa con nit 4360",
            "size": 19
        },
        {
            "id": 437,
            "n_oficina": 3,
            "nit_empresa": 4370,
            "piso": 23,
            "nombre_empresa": "Empresa con nit 4370",
            "size": 16
        },
        {
            "id": 438,
            "n_oficina": 1,
            "nit_empresa": 4380,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 4380",
            "size": 5
        },
        {
            "id": 439,
            "n_oficina": 12,
            "nit_empresa": 4390,
            "piso": 65,
            "nombre_empresa": "Empresa con nit 4390",
            "size": 6
        },
        {
            "id": 440,
            "n_oficina": 8,
            "nit_empresa": 4400,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 4400",
            "size": 8
        },
        {
            "id": 441,
            "n_oficina": 8,
            "nit_empresa": 4410,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 4410",
            "size": 13
        },
        {
            "id": 442,
            "n_oficina": 14,
            "nit_empresa": 4420,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 4420",
            "size": 13
        },
        {
            "id": 443,
            "n_oficina": 3,
            "nit_empresa": 4430,
            "piso": 3,
            "nombre_empresa": "Empresa con nit 4430",
            "size": 16
        },
        {
            "id": 444,
            "n_oficina": 4,
            "nit_empresa": 4440,
            "piso": 9,
            "nombre_empresa": "Empresa con nit 4440",
            "size": 19
        },
        {
            "id": 445,
            "n_oficina": 9,
            "nit_empresa": 4450,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 4450",
            "size": 18
        },
        {
            "id": 446,
            "n_oficina": 4,
            "nit_empresa": 4460,
            "piso": 35,
            "nombre_empresa": "Empresa con nit 4460",
            "size": 16
        },
        {
            "id": 447,
            "n_oficina": 3,
            "nit_empresa": 4470,
            "piso": 26,
            "nombre_empresa": "Empresa con nit 4470",
            "size": 7
        },
        {
            "id": 448,
            "n_oficina": 14,
            "nit_empresa": 4480,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 4480",
            "size": 4
        },
        {
            "id": 449,
            "n_oficina": 7,
            "nit_empresa": 4490,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 4490",
            "size": 11
        },
        {
            "id": 450,
            "n_oficina": 11,
            "nit_empresa": 4500,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 4500",
            "size": 18
        },
        {
            "id": 451,
            "n_oficina": 7,
            "nit_empresa": 4510,
            "piso": 23,
            "nombre_empresa": "Empresa con nit 4510",
            "size": 2
        },
        {
            "id": 452,
            "n_oficina": 10,
            "nit_empresa": 4520,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 4520",
            "size": 4
        },
        {
            "id": 453,
            "n_oficina": 2,
            "nit_empresa": 4530,
            "piso": 74,
            "nombre_empresa": "Empresa con nit 4530",
            "size": 13
        },
        {
            "id": 454,
            "n_oficina": 1,
            "nit_empresa": 4540,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 4540",
            "size": 6
        },
        {
            "id": 455,
            "n_oficina": 6,
            "nit_empresa": 4550,
            "piso": 9,
            "nombre_empresa": "Empresa con nit 4550",
            "size": 7
        },
        {
            "id": 456,
            "n_oficina": 2,
            "nit_empresa": 4560,
            "piso": 33,
            "nombre_empresa": "Empresa con nit 4560",
            "size": 7
        },
        {
            "id": 457,
            "n_oficina": 6,
            "nit_empresa": 4570,
            "piso": 81,
            "nombre_empresa": "Empresa con nit 4570",
            "size": 2
        },
        {
            "id": 458,
            "n_oficina": 5,
            "nit_empresa": 4580,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 4580",
            "size": 17
        },
        {
            "id": 459,
            "n_oficina": 14,
            "nit_empresa": 4590,
            "piso": 50,
            "nombre_empresa": "Empresa con nit 4590",
            "size": 14
        },
        {
            "id": 460,
            "n_oficina": 14,
            "nit_empresa": 4600,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 4600",
            "size": 4
        },
        {
            "id": 461,
            "n_oficina": 1,
            "nit_empresa": 4610,
            "piso": 23,
            "nombre_empresa": "Empresa con nit 4610",
            "size": 12
        },
        {
            "id": 462,
            "n_oficina": 8,
            "nit_empresa": 4620,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 4620",
            "size": 19
        },
        {
            "id": 463,
            "n_oficina": 3,
            "nit_empresa": 4630,
            "piso": 94,
            "nombre_empresa": "Empresa con nit 4630",
            "size": 12
        },
        {
            "id": 464,
            "n_oficina": 9,
            "nit_empresa": 4640,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 4640",
            "size": 18
        },
        {
            "id": 465,
            "n_oficina": 5,
            "nit_empresa": 4650,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 4650",
            "size": 2
        },
        {
            "id": 466,
            "n_oficina": 9,
            "nit_empresa": 4660,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 4660",
            "size": 14
        },
        {
            "id": 467,
            "n_oficina": 1,
            "nit_empresa": 4670,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 4670",
            "size": 18
        },
        {
            "id": 468,
            "n_oficina": 14,
            "nit_empresa": 4680,
            "piso": 11,
            "nombre_empresa": "Empresa con nit 4680",
            "size": 4
        },
        {
            "id": 469,
            "n_oficina": 6,
            "nit_empresa": 4690,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 4690",
            "size": 14
        },
        {
            "id": 470,
            "n_oficina": 1,
            "nit_empresa": 4700,
            "piso": 94,
            "nombre_empresa": "Empresa con nit 4700",
            "size": 9
        },
        {
            "id": 471,
            "n_oficina": 9,
            "nit_empresa": 4710,
            "piso": 87,
            "nombre_empresa": "Empresa con nit 4710",
            "size": 15
        },
        {
            "id": 472,
            "n_oficina": 13,
            "nit_empresa": 4720,
            "piso": 3,
            "nombre_empresa": "Empresa con nit 4720",
            "size": 1
        },
        {
            "id": 473,
            "n_oficina": 11,
            "nit_empresa": 4730,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 4730",
            "size": 5
        },
        {
            "id": 474,
            "n_oficina": 10,
            "nit_empresa": 4740,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 4740",
            "size": 11
        },
        {
            "id": 475,
            "n_oficina": 13,
            "nit_empresa": 4750,
            "piso": 75,
            "nombre_empresa": "Empresa con nit 4750",
            "size": 13
        },
        {
            "id": 476,
            "n_oficina": 11,
            "nit_empresa": 4760,
            "piso": 18,
            "nombre_empresa": "Empresa con nit 4760",
            "size": 17
        },
        {
            "id": 477,
            "n_oficina": 8,
            "nit_empresa": 4770,
            "piso": 87,
            "nombre_empresa": "Empresa con nit 4770",
            "size": 3
        },
        {
            "id": 478,
            "n_oficina": 14,
            "nit_empresa": 4780,
            "piso": 9,
            "nombre_empresa": "Empresa con nit 4780",
            "size": 17
        },
        {
            "id": 479,
            "n_oficina": 1,
            "nit_empresa": 4790,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 4790",
            "size": 16
        },
        {
            "id": 480,
            "n_oficina": 1,
            "nit_empresa": 4800,
            "piso": 38,
            "nombre_empresa": "Empresa con nit 4800",
            "size": 10
        },
        {
            "id": 481,
            "n_oficina": 7,
            "nit_empresa": 4810,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 4810",
            "size": 8
        },
        {
            "id": 482,
            "n_oficina": 3,
            "nit_empresa": 4820,
            "piso": 12,
            "nombre_empresa": "Empresa con nit 4820",
            "size": 9
        },
        {
            "id": 483,
            "n_oficina": 11,
            "nit_empresa": 4830,
            "piso": 46,
            "nombre_empresa": "Empresa con nit 4830",
            "size": 10
        },
        {
            "id": 484,
            "n_oficina": 5,
            "nit_empresa": 4840,
            "piso": 28,
            "nombre_empresa": "Empresa con nit 4840",
            "size": 19
        },
        {
            "id": 485,
            "n_oficina": 4,
            "nit_empresa": 4850,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 4850",
            "size": 15
        },
        {
            "id": 486,
            "n_oficina": 14,
            "nit_empresa": 4860,
            "piso": 11,
            "nombre_empresa": "Empresa con nit 4860",
            "size": 13
        },
        {
            "id": 487,
            "n_oficina": 7,
            "nit_empresa": 4870,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 4870",
            "size": 17
        },
        {
            "id": 488,
            "n_oficina": 14,
            "nit_empresa": 4880,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 4880",
            "size": 4
        },
        {
            "id": 489,
            "n_oficina": 10,
            "nit_empresa": 4890,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 4890",
            "size": 15
        },
        {
            "id": 490,
            "n_oficina": 14,
            "nit_empresa": 4900,
            "piso": 54,
            "nombre_empresa": "Empresa con nit 4900",
            "size": 11
        },
        {
            "id": 491,
            "n_oficina": 14,
            "nit_empresa": 4910,
            "piso": 22,
            "nombre_empresa": "Empresa con nit 4910",
            "size": 10
        },
        {
            "id": 492,
            "n_oficina": 1,
            "nit_empresa": 4920,
            "piso": 18,
            "nombre_empresa": "Empresa con nit 4920",
            "size": 2
        },
        {
            "id": 493,
            "n_oficina": 5,
            "nit_empresa": 4930,
            "piso": 49,
            "nombre_empresa": "Empresa con nit 4930",
            "size": 14
        },
        {
            "id": 494,
            "n_oficina": 5,
            "nit_empresa": 4940,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 4940",
            "size": 12
        },
        {
            "id": 495,
            "n_oficina": 4,
            "nit_empresa": 4950,
            "piso": 49,
            "nombre_empresa": "Empresa con nit 4950",
            "size": 4
        },
        {
            "id": 496,
            "n_oficina": 14,
            "nit_empresa": 4960,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 4960",
            "size": 17
        },
        {
            "id": 497,
            "n_oficina": 1,
            "nit_empresa": 4970,
            "piso": 36,
            "nombre_empresa": "Empresa con nit 4970",
            "size": 3
        },
        {
            "id": 498,
            "n_oficina": 3,
            "nit_empresa": 4980,
            "piso": 46,
            "nombre_empresa": "Empresa con nit 4980",
            "size": 18
        },
        {
            "id": 499,
            "n_oficina": 8,
            "nit_empresa": 4990,
            "piso": 6,
            "nombre_empresa": "Empresa con nit 4990",
            "size": 17
        },
        {
            "id": 500,
            "n_oficina": 14,
            "nit_empresa": 5000,
            "piso": 6,
            "nombre_empresa": "Empresa con nit 5000",
            "size": 9
        },
        {
            "id": 501,
            "n_oficina": 5,
            "nit_empresa": 5010,
            "piso": 50,
            "nombre_empresa": "Empresa con nit 5010",
            "size": 6
        },
        {
            "id": 502,
            "n_oficina": 4,
            "nit_empresa": 5020,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 5020",
            "size": 19
        },
        {
            "id": 503,
            "n_oficina": 14,
            "nit_empresa": 5030,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 5030",
            "size": 11
        },
        {
            "id": 504,
            "n_oficina": 3,
            "nit_empresa": 5040,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 5040",
            "size": 3
        },
        {
            "id": 505,
            "n_oficina": 11,
            "nit_empresa": 5050,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 5050",
            "size": 15
        },
        {
            "id": 506,
            "n_oficina": 4,
            "nit_empresa": 5060,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 5060",
            "size": 2
        },
        {
            "id": 507,
            "n_oficina": 13,
            "nit_empresa": 5070,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 5070",
            "size": 17
        },
        {
            "id": 508,
            "n_oficina": 5,
            "nit_empresa": 5080,
            "piso": 67,
            "nombre_empresa": "Empresa con nit 5080",
            "size": 11
        },
        {
            "id": 509,
            "n_oficina": 2,
            "nit_empresa": 5090,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 5090",
            "size": 4
        },
        {
            "id": 510,
            "n_oficina": 6,
            "nit_empresa": 5100,
            "piso": 27,
            "nombre_empresa": "Empresa con nit 5100",
            "size": 5
        },
        {
            "id": 511,
            "n_oficina": 4,
            "nit_empresa": 5110,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 5110",
            "size": 3
        },
        {
            "id": 512,
            "n_oficina": 13,
            "nit_empresa": 5120,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 5120",
            "size": 11
        },
        {
            "id": 513,
            "n_oficina": 7,
            "nit_empresa": 5130,
            "piso": 33,
            "nombre_empresa": "Empresa con nit 5130",
            "size": 17
        },
        {
            "id": 514,
            "n_oficina": 2,
            "nit_empresa": 5140,
            "piso": 42,
            "nombre_empresa": "Empresa con nit 5140",
            "size": 19
        },
        {
            "id": 515,
            "n_oficina": 8,
            "nit_empresa": 5150,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 5150",
            "size": 15
        },
        {
            "id": 516,
            "n_oficina": 13,
            "nit_empresa": 5160,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 5160",
            "size": 3
        },
        {
            "id": 517,
            "n_oficina": 6,
            "nit_empresa": 5170,
            "piso": 38,
            "nombre_empresa": "Empresa con nit 5170",
            "size": 10
        },
        {
            "id": 518,
            "n_oficina": 11,
            "nit_empresa": 5180,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 5180",
            "size": 5
        },
        {
            "id": 519,
            "n_oficina": 5,
            "nit_empresa": 5190,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 5190",
            "size": 4
        },
        {
            "id": 520,
            "n_oficina": 6,
            "nit_empresa": 5200,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 5200",
            "size": 9
        },
        {
            "id": 521,
            "n_oficina": 13,
            "nit_empresa": 5210,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 5210",
            "size": 10
        },
        {
            "id": 522,
            "n_oficina": 6,
            "nit_empresa": 5220,
            "piso": 6,
            "nombre_empresa": "Empresa con nit 5220",
            "size": 12
        },
        {
            "id": 523,
            "n_oficina": 13,
            "nit_empresa": 5230,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 5230",
            "size": 1
        },
        {
            "id": 524,
            "n_oficina": 9,
            "nit_empresa": 5240,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 5240",
            "size": 4
        },
        {
            "id": 525,
            "n_oficina": 4,
            "nit_empresa": 5250,
            "piso": 15,
            "nombre_empresa": "Empresa con nit 5250",
            "size": 19
        },
        {
            "id": 526,
            "n_oficina": 5,
            "nit_empresa": 5260,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 5260",
            "size": 6
        },
        {
            "id": 527,
            "n_oficina": 7,
            "nit_empresa": 5270,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 5270",
            "size": 5
        },
        {
            "id": 528,
            "n_oficina": 11,
            "nit_empresa": 5280,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 5280",
            "size": 19
        },
        {
            "id": 529,
            "n_oficina": 2,
            "nit_empresa": 5290,
            "piso": 59,
            "nombre_empresa": "Empresa con nit 5290",
            "size": 8
        },
        {
            "id": 530,
            "n_oficina": 4,
            "nit_empresa": 5300,
            "piso": 73,
            "nombre_empresa": "Empresa con nit 5300",
            "size": 9
        },
        {
            "id": 531,
            "n_oficina": 8,
            "nit_empresa": 5310,
            "piso": 27,
            "nombre_empresa": "Empresa con nit 5310",
            "size": 3
        },
        {
            "id": 532,
            "n_oficina": 12,
            "nit_empresa": 5320,
            "piso": 97,
            "nombre_empresa": "Empresa con nit 5320",
            "size": 17
        },
        {
            "id": 533,
            "n_oficina": 8,
            "nit_empresa": 5330,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 5330",
            "size": 18
        },
        {
            "id": 534,
            "n_oficina": 5,
            "nit_empresa": 5340,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 5340",
            "size": 6
        },
        {
            "id": 535,
            "n_oficina": 10,
            "nit_empresa": 5350,
            "piso": 33,
            "nombre_empresa": "Empresa con nit 5350",
            "size": 7
        },
        {
            "id": 536,
            "n_oficina": 3,
            "nit_empresa": 5360,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 5360",
            "size": 2
        },
        {
            "id": 537,
            "n_oficina": 5,
            "nit_empresa": 5370,
            "piso": 50,
            "nombre_empresa": "Empresa con nit 5370",
            "size": 8
        },
        {
            "id": 538,
            "n_oficina": 7,
            "nit_empresa": 5380,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 5380",
            "size": 1
        },
        {
            "id": 539,
            "n_oficina": 14,
            "nit_empresa": 5390,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 5390",
            "size": 18
        },
        {
            "id": 540,
            "n_oficina": 2,
            "nit_empresa": 5400,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 5400",
            "size": 16
        },
        {
            "id": 541,
            "n_oficina": 14,
            "nit_empresa": 5410,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 5410",
            "size": 10
        },
        {
            "id": 542,
            "n_oficina": 11,
            "nit_empresa": 5420,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 5420",
            "size": 10
        },
        {
            "id": 543,
            "n_oficina": 7,
            "nit_empresa": 5430,
            "piso": 98,
            "nombre_empresa": "Empresa con nit 5430",
            "size": 8
        },
        {
            "id": 544,
            "n_oficina": 10,
            "nit_empresa": 5440,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 5440",
            "size": 9
        },
        {
            "id": 545,
            "n_oficina": 9,
            "nit_empresa": 5450,
            "piso": 97,
            "nombre_empresa": "Empresa con nit 5450",
            "size": 5
        },
        {
            "id": 546,
            "n_oficina": 4,
            "nit_empresa": 5460,
            "piso": 22,
            "nombre_empresa": "Empresa con nit 5460",
            "size": 11
        },
        {
            "id": 547,
            "n_oficina": 9,
            "nit_empresa": 5470,
            "piso": 55,
            "nombre_empresa": "Empresa con nit 5470",
            "size": 14
        },
        {
            "id": 548,
            "n_oficina": 14,
            "nit_empresa": 5480,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 5480",
            "size": 15
        },
        {
            "id": 549,
            "n_oficina": 11,
            "nit_empresa": 5490,
            "piso": 34,
            "nombre_empresa": "Empresa con nit 5490",
            "size": 6
        },
        {
            "id": 550,
            "n_oficina": 5,
            "nit_empresa": 5500,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 5500",
            "size": 6
        },
        {
            "id": 551,
            "n_oficina": 4,
            "nit_empresa": 5510,
            "piso": 15,
            "nombre_empresa": "Empresa con nit 5510",
            "size": 12
        },
        {
            "id": 552,
            "n_oficina": 6,
            "nit_empresa": 5520,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 5520",
            "size": 3
        },
        {
            "id": 553,
            "n_oficina": 6,
            "nit_empresa": 5530,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 5530",
            "size": 10
        },
        {
            "id": 554,
            "n_oficina": 4,
            "nit_empresa": 5540,
            "piso": 4,
            "nombre_empresa": "Empresa con nit 5540",
            "size": 3
        },
        {
            "id": 555,
            "n_oficina": 6,
            "nit_empresa": 5550,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 5550",
            "size": 11
        },
        {
            "id": 556,
            "n_oficina": 10,
            "nit_empresa": 5560,
            "piso": 84,
            "nombre_empresa": "Empresa con nit 5560",
            "size": 11
        },
        {
            "id": 557,
            "n_oficina": 1,
            "nit_empresa": 5570,
            "piso": 33,
            "nombre_empresa": "Empresa con nit 5570",
            "size": 19
        },
        {
            "id": 558,
            "n_oficina": 12,
            "nit_empresa": 5580,
            "piso": 87,
            "nombre_empresa": "Empresa con nit 5580",
            "size": 5
        },
        {
            "id": 559,
            "n_oficina": 5,
            "nit_empresa": 5590,
            "piso": 6,
            "nombre_empresa": "Empresa con nit 5590",
            "size": 4
        },
        {
            "id": 560,
            "n_oficina": 12,
            "nit_empresa": 5600,
            "piso": 45,
            "nombre_empresa": "Empresa con nit 5600",
            "size": 9
        },
        {
            "id": 561,
            "n_oficina": 10,
            "nit_empresa": 5610,
            "piso": 27,
            "nombre_empresa": "Empresa con nit 5610",
            "size": 12
        },
        {
            "id": 562,
            "n_oficina": 14,
            "nit_empresa": 5620,
            "piso": 18,
            "nombre_empresa": "Empresa con nit 5620",
            "size": 1
        },
        {
            "id": 563,
            "n_oficina": 11,
            "nit_empresa": 5630,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 5630",
            "size": 18
        },
        {
            "id": 564,
            "n_oficina": 9,
            "nit_empresa": 5640,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 5640",
            "size": 6
        },
        {
            "id": 565,
            "n_oficina": 12,
            "nit_empresa": 5650,
            "piso": 84,
            "nombre_empresa": "Empresa con nit 5650",
            "size": 18
        },
        {
            "id": 566,
            "n_oficina": 6,
            "nit_empresa": 5660,
            "piso": 36,
            "nombre_empresa": "Empresa con nit 5660",
            "size": 11
        },
        {
            "id": 567,
            "n_oficina": 3,
            "nit_empresa": 5670,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 5670",
            "size": 1
        },
        {
            "id": 568,
            "n_oficina": 14,
            "nit_empresa": 5680,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 5680",
            "size": 6
        },
        {
            "id": 569,
            "n_oficina": 14,
            "nit_empresa": 5690,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 5690",
            "size": 17
        },
        {
            "id": 570,
            "n_oficina": 14,
            "nit_empresa": 5700,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 5700",
            "size": 6
        },
        {
            "id": 571,
            "n_oficina": 8,
            "nit_empresa": 5710,
            "piso": 76,
            "nombre_empresa": "Empresa con nit 5710",
            "size": 11
        },
        {
            "id": 572,
            "n_oficina": 3,
            "nit_empresa": 5720,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 5720",
            "size": 18
        },
        {
            "id": 573,
            "n_oficina": 7,
            "nit_empresa": 5730,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 5730",
            "size": 10
        },
        {
            "id": 574,
            "n_oficina": 3,
            "nit_empresa": 5740,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 5740",
            "size": 16
        },
        {
            "id": 575,
            "n_oficina": 9,
            "nit_empresa": 5750,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 5750",
            "size": 13
        },
        {
            "id": 576,
            "n_oficina": 2,
            "nit_empresa": 5760,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 5760",
            "size": 15
        },
        {
            "id": 577,
            "n_oficina": 4,
            "nit_empresa": 5770,
            "piso": 2,
            "nombre_empresa": "Empresa con nit 5770",
            "size": 12
        },
        {
            "id": 578,
            "n_oficina": 11,
            "nit_empresa": 5780,
            "piso": 39,
            "nombre_empresa": "Empresa con nit 5780",
            "size": 17
        },
        {
            "id": 579,
            "n_oficina": 10,
            "nit_empresa": 5790,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 5790",
            "size": 11
        },
        {
            "id": 580,
            "n_oficina": 5,
            "nit_empresa": 5800,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 5800",
            "size": 3
        },
        {
            "id": 581,
            "n_oficina": 1,
            "nit_empresa": 5810,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 5810",
            "size": 8
        },
        {
            "id": 582,
            "n_oficina": 6,
            "nit_empresa": 5820,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 5820",
            "size": 7
        },
        {
            "id": 583,
            "n_oficina": 10,
            "nit_empresa": 5830,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 5830",
            "size": 19
        },
        {
            "id": 584,
            "n_oficina": 9,
            "nit_empresa": 5840,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 5840",
            "size": 15
        },
        {
            "id": 585,
            "n_oficina": 6,
            "nit_empresa": 5850,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 5850",
            "size": 1
        },
        {
            "id": 586,
            "n_oficina": 7,
            "nit_empresa": 5860,
            "piso": 9,
            "nombre_empresa": "Empresa con nit 5860",
            "size": 16
        },
        {
            "id": 587,
            "n_oficina": 4,
            "nit_empresa": 5870,
            "piso": 40,
            "nombre_empresa": "Empresa con nit 5870",
            "size": 5
        },
        {
            "id": 588,
            "n_oficina": 6,
            "nit_empresa": 5880,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 5880",
            "size": 5
        },
        {
            "id": 589,
            "n_oficina": 10,
            "nit_empresa": 5890,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 5890",
            "size": 10
        },
        {
            "id": 590,
            "n_oficina": 8,
            "nit_empresa": 5900,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 5900",
            "size": 18
        },
        {
            "id": 591,
            "n_oficina": 10,
            "nit_empresa": 5910,
            "piso": 2,
            "nombre_empresa": "Empresa con nit 5910",
            "size": 10
        },
        {
            "id": 592,
            "n_oficina": 11,
            "nit_empresa": 5920,
            "piso": 24,
            "nombre_empresa": "Empresa con nit 5920",
            "size": 15
        },
        {
            "id": 593,
            "n_oficina": 5,
            "nit_empresa": 5930,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 5930",
            "size": 12
        },
        {
            "id": 594,
            "n_oficina": 3,
            "nit_empresa": 5940,
            "piso": 61,
            "nombre_empresa": "Empresa con nit 5940",
            "size": 13
        },
        {
            "id": 595,
            "n_oficina": 4,
            "nit_empresa": 5950,
            "piso": 75,
            "nombre_empresa": "Empresa con nit 5950",
            "size": 8
        },
        {
            "id": 596,
            "n_oficina": 6,
            "nit_empresa": 5960,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 5960",
            "size": 11
        },
        {
            "id": 597,
            "n_oficina": 11,
            "nit_empresa": 5970,
            "piso": 13,
            "nombre_empresa": "Empresa con nit 5970",
            "size": 7
        },
        {
            "id": 598,
            "n_oficina": 5,
            "nit_empresa": 5980,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 5980",
            "size": 5
        },
        {
            "id": 599,
            "n_oficina": 6,
            "nit_empresa": 5990,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 5990",
            "size": 17
        },
        {
            "id": 600,
            "n_oficina": 5,
            "nit_empresa": 6000,
            "piso": 46,
            "nombre_empresa": "Empresa con nit 6000",
            "size": 17
        },
        {
            "id": 601,
            "n_oficina": 13,
            "nit_empresa": 6010,
            "piso": 76,
            "nombre_empresa": "Empresa con nit 6010",
            "size": 14
        },
        {
            "id": 602,
            "n_oficina": 12,
            "nit_empresa": 6020,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 6020",
            "size": 16
        },
        {
            "id": 603,
            "n_oficina": 5,
            "nit_empresa": 6030,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 6030",
            "size": 14
        },
        {
            "id": 604,
            "n_oficina": 3,
            "nit_empresa": 6040,
            "piso": 65,
            "nombre_empresa": "Empresa con nit 6040",
            "size": 13
        },
        {
            "id": 605,
            "n_oficina": 14,
            "nit_empresa": 6050,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 6050",
            "size": 3
        },
        {
            "id": 606,
            "n_oficina": 1,
            "nit_empresa": 6060,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 6060",
            "size": 19
        },
        {
            "id": 607,
            "n_oficina": 8,
            "nit_empresa": 6070,
            "piso": 22,
            "nombre_empresa": "Empresa con nit 6070",
            "size": 15
        },
        {
            "id": 608,
            "n_oficina": 14,
            "nit_empresa": 6080,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 6080",
            "size": 17
        },
        {
            "id": 609,
            "n_oficina": 5,
            "nit_empresa": 6090,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 6090",
            "size": 3
        },
        {
            "id": 610,
            "n_oficina": 13,
            "nit_empresa": 6100,
            "piso": 23,
            "nombre_empresa": "Empresa con nit 6100",
            "size": 19
        },
        {
            "id": 611,
            "n_oficina": 4,
            "nit_empresa": 6110,
            "piso": 92,
            "nombre_empresa": "Empresa con nit 6110",
            "size": 8
        },
        {
            "id": 612,
            "n_oficina": 8,
            "nit_empresa": 6120,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 6120",
            "size": 14
        },
        {
            "id": 613,
            "n_oficina": 1,
            "nit_empresa": 6130,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 6130",
            "size": 13
        },
        {
            "id": 614,
            "n_oficina": 12,
            "nit_empresa": 6140,
            "piso": 41,
            "nombre_empresa": "Empresa con nit 6140",
            "size": 8
        },
        {
            "id": 615,
            "n_oficina": 5,
            "nit_empresa": 6150,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 6150",
            "size": 14
        },
        {
            "id": 616,
            "n_oficina": 1,
            "nit_empresa": 6160,
            "piso": 10,
            "nombre_empresa": "Empresa con nit 6160",
            "size": 5
        },
        {
            "id": 617,
            "n_oficina": 8,
            "nit_empresa": 6170,
            "piso": 73,
            "nombre_empresa": "Empresa con nit 6170",
            "size": 3
        },
        {
            "id": 618,
            "n_oficina": 4,
            "nit_empresa": 6180,
            "piso": 81,
            "nombre_empresa": "Empresa con nit 6180",
            "size": 7
        },
        {
            "id": 619,
            "n_oficina": 2,
            "nit_empresa": 6190,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 6190",
            "size": 5
        },
        {
            "id": 620,
            "n_oficina": 14,
            "nit_empresa": 6200,
            "piso": 61,
            "nombre_empresa": "Empresa con nit 6200",
            "size": 18
        },
        {
            "id": 621,
            "n_oficina": 8,
            "nit_empresa": 6210,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 6210",
            "size": 5
        },
        {
            "id": 622,
            "n_oficina": 4,
            "nit_empresa": 6220,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 6220",
            "size": 12
        },
        {
            "id": 623,
            "n_oficina": 2,
            "nit_empresa": 6230,
            "piso": 19,
            "nombre_empresa": "Empresa con nit 6230",
            "size": 8
        },
        {
            "id": 624,
            "n_oficina": 10,
            "nit_empresa": 6240,
            "piso": 49,
            "nombre_empresa": "Empresa con nit 6240",
            "size": 19
        },
        {
            "id": 625,
            "n_oficina": 10,
            "nit_empresa": 6250,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 6250",
            "size": 3
        },
        {
            "id": 626,
            "n_oficina": 12,
            "nit_empresa": 6260,
            "piso": 98,
            "nombre_empresa": "Empresa con nit 6260",
            "size": 9
        },
        {
            "id": 627,
            "n_oficina": 11,
            "nit_empresa": 6270,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 6270",
            "size": 3
        },
        {
            "id": 628,
            "n_oficina": 10,
            "nit_empresa": 6280,
            "piso": 50,
            "nombre_empresa": "Empresa con nit 6280",
            "size": 4
        },
        {
            "id": 629,
            "n_oficina": 13,
            "nit_empresa": 6290,
            "piso": 24,
            "nombre_empresa": "Empresa con nit 6290",
            "size": 6
        },
        {
            "id": 630,
            "n_oficina": 8,
            "nit_empresa": 6300,
            "piso": 49,
            "nombre_empresa": "Empresa con nit 6300",
            "size": 5
        },
        {
            "id": 631,
            "n_oficina": 5,
            "nit_empresa": 6310,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 6310",
            "size": 7
        },
        {
            "id": 632,
            "n_oficina": 5,
            "nit_empresa": 6320,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 6320",
            "size": 13
        },
        {
            "id": 633,
            "n_oficina": 3,
            "nit_empresa": 6330,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 6330",
            "size": 4
        },
        {
            "id": 634,
            "n_oficina": 12,
            "nit_empresa": 6340,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 6340",
            "size": 8
        },
        {
            "id": 635,
            "n_oficina": 3,
            "nit_empresa": 6350,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 6350",
            "size": 18
        },
        {
            "id": 636,
            "n_oficina": 4,
            "nit_empresa": 6360,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 6360",
            "size": 11
        },
        {
            "id": 637,
            "n_oficina": 8,
            "nit_empresa": 6370,
            "piso": 34,
            "nombre_empresa": "Empresa con nit 6370",
            "size": 16
        },
        {
            "id": 638,
            "n_oficina": 4,
            "nit_empresa": 6380,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 6380",
            "size": 18
        },
        {
            "id": 639,
            "n_oficina": 8,
            "nit_empresa": 6390,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 6390",
            "size": 9
        },
        {
            "id": 640,
            "n_oficina": 1,
            "nit_empresa": 6400,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 6400",
            "size": 7
        },
        {
            "id": 641,
            "n_oficina": 2,
            "nit_empresa": 6410,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 6410",
            "size": 5
        },
        {
            "id": 642,
            "n_oficina": 3,
            "nit_empresa": 6420,
            "piso": 65,
            "nombre_empresa": "Empresa con nit 6420",
            "size": 5
        },
        {
            "id": 643,
            "n_oficina": 13,
            "nit_empresa": 6430,
            "piso": 41,
            "nombre_empresa": "Empresa con nit 6430",
            "size": 1
        },
        {
            "id": 644,
            "n_oficina": 12,
            "nit_empresa": 6440,
            "piso": 35,
            "nombre_empresa": "Empresa con nit 6440",
            "size": 2
        },
        {
            "id": 645,
            "n_oficina": 4,
            "nit_empresa": 6450,
            "piso": 13,
            "nombre_empresa": "Empresa con nit 6450",
            "size": 5
        },
        {
            "id": 646,
            "n_oficina": 2,
            "nit_empresa": 6460,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 6460",
            "size": 6
        },
        {
            "id": 647,
            "n_oficina": 2,
            "nit_empresa": 6470,
            "piso": 34,
            "nombre_empresa": "Empresa con nit 6470",
            "size": 5
        },
        {
            "id": 648,
            "n_oficina": 2,
            "nit_empresa": 6480,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 6480",
            "size": 10
        },
        {
            "id": 649,
            "n_oficina": 5,
            "nit_empresa": 6490,
            "piso": 4,
            "nombre_empresa": "Empresa con nit 6490",
            "size": 3
        },
        {
            "id": 650,
            "n_oficina": 10,
            "nit_empresa": 6500,
            "piso": 98,
            "nombre_empresa": "Empresa con nit 6500",
            "size": 13
        },
        {
            "id": 651,
            "n_oficina": 8,
            "nit_empresa": 6510,
            "piso": 4,
            "nombre_empresa": "Empresa con nit 6510",
            "size": 2
        },
        {
            "id": 652,
            "n_oficina": 4,
            "nit_empresa": 6520,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 6520",
            "size": 5
        },
        {
            "id": 653,
            "n_oficina": 3,
            "nit_empresa": 6530,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 6530",
            "size": 5
        },
        {
            "id": 654,
            "n_oficina": 10,
            "nit_empresa": 6540,
            "piso": 49,
            "nombre_empresa": "Empresa con nit 6540",
            "size": 9
        },
        {
            "id": 655,
            "n_oficina": 13,
            "nit_empresa": 6550,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 6550",
            "size": 12
        },
        {
            "id": 656,
            "n_oficina": 13,
            "nit_empresa": 6560,
            "piso": 94,
            "nombre_empresa": "Empresa con nit 6560",
            "size": 13
        },
        {
            "id": 657,
            "n_oficina": 9,
            "nit_empresa": 6570,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 6570",
            "size": 9
        },
        {
            "id": 658,
            "n_oficina": 11,
            "nit_empresa": 6580,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 6580",
            "size": 17
        },
        {
            "id": 659,
            "n_oficina": 7,
            "nit_empresa": 6590,
            "piso": 93,
            "nombre_empresa": "Empresa con nit 6590",
            "size": 19
        },
        {
            "id": 660,
            "n_oficina": 12,
            "nit_empresa": 6600,
            "piso": 98,
            "nombre_empresa": "Empresa con nit 6600",
            "size": 11
        },
        {
            "id": 661,
            "n_oficina": 9,
            "nit_empresa": 6610,
            "piso": 24,
            "nombre_empresa": "Empresa con nit 6610",
            "size": 14
        },
        {
            "id": 662,
            "n_oficina": 9,
            "nit_empresa": 6620,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 6620",
            "size": 19
        },
        {
            "id": 663,
            "n_oficina": 5,
            "nit_empresa": 6630,
            "piso": 45,
            "nombre_empresa": "Empresa con nit 6630",
            "size": 6
        },
        {
            "id": 664,
            "n_oficina": 5,
            "nit_empresa": 6640,
            "piso": 28,
            "nombre_empresa": "Empresa con nit 6640",
            "size": 4
        },
        {
            "id": 665,
            "n_oficina": 11,
            "nit_empresa": 6650,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 6650",
            "size": 14
        },
        {
            "id": 666,
            "n_oficina": 5,
            "nit_empresa": 6660,
            "piso": 94,
            "nombre_empresa": "Empresa con nit 6660",
            "size": 4
        },
        {
            "id": 667,
            "n_oficina": 6,
            "nit_empresa": 6670,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 6670",
            "size": 4
        },
        {
            "id": 668,
            "n_oficina": 12,
            "nit_empresa": 6680,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 6680",
            "size": 3
        },
        {
            "id": 669,
            "n_oficina": 12,
            "nit_empresa": 6690,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 6690",
            "size": 17
        },
        {
            "id": 670,
            "n_oficina": 2,
            "nit_empresa": 6700,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 6700",
            "size": 15
        },
        {
            "id": 671,
            "n_oficina": 6,
            "nit_empresa": 6710,
            "piso": 2,
            "nombre_empresa": "Empresa con nit 6710",
            "size": 19
        },
        {
            "id": 672,
            "n_oficina": 13,
            "nit_empresa": 6720,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 6720",
            "size": 6
        },
        {
            "id": 673,
            "n_oficina": 14,
            "nit_empresa": 6730,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 6730",
            "size": 18
        },
        {
            "id": 674,
            "n_oficina": 11,
            "nit_empresa": 6740,
            "piso": 46,
            "nombre_empresa": "Empresa con nit 6740",
            "size": 7
        },
        {
            "id": 675,
            "n_oficina": 1,
            "nit_empresa": 6750,
            "piso": 24,
            "nombre_empresa": "Empresa con nit 6750",
            "size": 8
        },
        {
            "id": 676,
            "n_oficina": 5,
            "nit_empresa": 6760,
            "piso": 22,
            "nombre_empresa": "Empresa con nit 6760",
            "size": 7
        },
        {
            "id": 677,
            "n_oficina": 5,
            "nit_empresa": 6770,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 6770",
            "size": 9
        },
        {
            "id": 678,
            "n_oficina": 4,
            "nit_empresa": 6780,
            "piso": 79,
            "nombre_empresa": "Empresa con nit 6780",
            "size": 15
        },
        {
            "id": 679,
            "n_oficina": 5,
            "nit_empresa": 6790,
            "piso": 78,
            "nombre_empresa": "Empresa con nit 6790",
            "size": 8
        },
        {
            "id": 680,
            "n_oficina": 1,
            "nit_empresa": 6800,
            "piso": 47,
            "nombre_empresa": "Empresa con nit 6800",
            "size": 18
        },
        {
            "id": 681,
            "n_oficina": 6,
            "nit_empresa": 6810,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 6810",
            "size": 13
        },
        {
            "id": 682,
            "n_oficina": 8,
            "nit_empresa": 6820,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 6820",
            "size": 12
        },
        {
            "id": 683,
            "n_oficina": 3,
            "nit_empresa": 6830,
            "piso": 63,
            "nombre_empresa": "Empresa con nit 6830",
            "size": 3
        },
        {
            "id": 684,
            "n_oficina": 5,
            "nit_empresa": 6840,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 6840",
            "size": 12
        },
        {
            "id": 685,
            "n_oficina": 1,
            "nit_empresa": 6850,
            "piso": 34,
            "nombre_empresa": "Empresa con nit 6850",
            "size": 1
        },
        {
            "id": 686,
            "n_oficina": 12,
            "nit_empresa": 6860,
            "piso": 19,
            "nombre_empresa": "Empresa con nit 6860",
            "size": 5
        },
        {
            "id": 687,
            "n_oficina": 12,
            "nit_empresa": 6870,
            "piso": 23,
            "nombre_empresa": "Empresa con nit 6870",
            "size": 3
        },
        {
            "id": 688,
            "n_oficina": 13,
            "nit_empresa": 6880,
            "piso": 59,
            "nombre_empresa": "Empresa con nit 6880",
            "size": 8
        },
        {
            "id": 689,
            "n_oficina": 7,
            "nit_empresa": 6890,
            "piso": 98,
            "nombre_empresa": "Empresa con nit 6890",
            "size": 1
        },
        {
            "id": 690,
            "n_oficina": 10,
            "nit_empresa": 6900,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 6900",
            "size": 4
        },
        {
            "id": 691,
            "n_oficina": 9,
            "nit_empresa": 6910,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 6910",
            "size": 18
        },
        {
            "id": 692,
            "n_oficina": 2,
            "nit_empresa": 6920,
            "piso": 29,
            "nombre_empresa": "Empresa con nit 6920",
            "size": 8
        },
        {
            "id": 693,
            "n_oficina": 9,
            "nit_empresa": 6930,
            "piso": 3,
            "nombre_empresa": "Empresa con nit 6930",
            "size": 13
        },
        {
            "id": 694,
            "n_oficina": 11,
            "nit_empresa": 6940,
            "piso": 78,
            "nombre_empresa": "Empresa con nit 6940",
            "size": 12
        },
        {
            "id": 695,
            "n_oficina": 1,
            "nit_empresa": 6950,
            "piso": 18,
            "nombre_empresa": "Empresa con nit 6950",
            "size": 12
        },
        {
            "id": 696,
            "n_oficina": 11,
            "nit_empresa": 6960,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 6960",
            "size": 5
        },
        {
            "id": 697,
            "n_oficina": 11,
            "nit_empresa": 6970,
            "piso": 3,
            "nombre_empresa": "Empresa con nit 6970",
            "size": 14
        },
        {
            "id": 698,
            "n_oficina": 1,
            "nit_empresa": 6980,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 6980",
            "size": 6
        },
        {
            "id": 699,
            "n_oficina": 13,
            "nit_empresa": 6990,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 6990",
            "size": 18
        },
        {
            "id": 700,
            "n_oficina": 8,
            "nit_empresa": 7000,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 7000",
            "size": 15
        },
        {
            "id": 701,
            "n_oficina": 5,
            "nit_empresa": 7010,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 7010",
            "size": 7
        },
        {
            "id": 702,
            "n_oficina": 11,
            "nit_empresa": 7020,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 7020",
            "size": 5
        },
        {
            "id": 703,
            "n_oficina": 12,
            "nit_empresa": 7030,
            "piso": 26,
            "nombre_empresa": "Empresa con nit 7030",
            "size": 8
        },
        {
            "id": 704,
            "n_oficina": 5,
            "nit_empresa": 7040,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 7040",
            "size": 5
        },
        {
            "id": 705,
            "n_oficina": 3,
            "nit_empresa": 7050,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 7050",
            "size": 8
        },
        {
            "id": 706,
            "n_oficina": 10,
            "nit_empresa": 7060,
            "piso": 55,
            "nombre_empresa": "Empresa con nit 7060",
            "size": 14
        },
        {
            "id": 707,
            "n_oficina": 14,
            "nit_empresa": 7070,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 7070",
            "size": 4
        },
        {
            "id": 708,
            "n_oficina": 4,
            "nit_empresa": 7080,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 7080",
            "size": 1
        },
        {
            "id": 709,
            "n_oficina": 3,
            "nit_empresa": 7090,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 7090",
            "size": 11
        },
        {
            "id": 710,
            "n_oficina": 5,
            "nit_empresa": 7100,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 7100",
            "size": 3
        },
        {
            "id": 711,
            "n_oficina": 1,
            "nit_empresa": 7110,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 7110",
            "size": 5
        },
        {
            "id": 712,
            "n_oficina": 10,
            "nit_empresa": 7120,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 7120",
            "size": 18
        },
        {
            "id": 713,
            "n_oficina": 3,
            "nit_empresa": 7130,
            "piso": 27,
            "nombre_empresa": "Empresa con nit 7130",
            "size": 9
        },
        {
            "id": 714,
            "n_oficina": 13,
            "nit_empresa": 7140,
            "piso": 61,
            "nombre_empresa": "Empresa con nit 7140",
            "size": 7
        },
        {
            "id": 715,
            "n_oficina": 4,
            "nit_empresa": 7150,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 7150",
            "size": 18
        },
        {
            "id": 716,
            "n_oficina": 8,
            "nit_empresa": 7160,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 7160",
            "size": 7
        },
        {
            "id": 717,
            "n_oficina": 10,
            "nit_empresa": 7170,
            "piso": 92,
            "nombre_empresa": "Empresa con nit 7170",
            "size": 13
        },
        {
            "id": 718,
            "n_oficina": 9,
            "nit_empresa": 7180,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 7180",
            "size": 3
        },
        {
            "id": 719,
            "n_oficina": 8,
            "nit_empresa": 7190,
            "piso": 42,
            "nombre_empresa": "Empresa con nit 7190",
            "size": 1
        },
        {
            "id": 720,
            "n_oficina": 8,
            "nit_empresa": 7200,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 7200",
            "size": 13
        },
        {
            "id": 721,
            "n_oficina": 1,
            "nit_empresa": 7210,
            "piso": 82,
            "nombre_empresa": "Empresa con nit 7210",
            "size": 12
        },
        {
            "id": 722,
            "n_oficina": 8,
            "nit_empresa": 7220,
            "piso": 18,
            "nombre_empresa": "Empresa con nit 7220",
            "size": 4
        },
        {
            "id": 723,
            "n_oficina": 1,
            "nit_empresa": 7230,
            "piso": 82,
            "nombre_empresa": "Empresa con nit 7230",
            "size": 16
        },
        {
            "id": 724,
            "n_oficina": 1,
            "nit_empresa": 7240,
            "piso": 36,
            "nombre_empresa": "Empresa con nit 7240",
            "size": 7
        },
        {
            "id": 725,
            "n_oficina": 6,
            "nit_empresa": 7250,
            "piso": 35,
            "nombre_empresa": "Empresa con nit 7250",
            "size": 14
        },
        {
            "id": 726,
            "n_oficina": 12,
            "nit_empresa": 7260,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 7260",
            "size": 8
        },
        {
            "id": 727,
            "n_oficina": 1,
            "nit_empresa": 7270,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 7270",
            "size": 1
        },
        {
            "id": 728,
            "n_oficina": 13,
            "nit_empresa": 7280,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 7280",
            "size": 3
        },
        {
            "id": 729,
            "n_oficina": 4,
            "nit_empresa": 7290,
            "piso": 6,
            "nombre_empresa": "Empresa con nit 7290",
            "size": 3
        },
        {
            "id": 730,
            "n_oficina": 9,
            "nit_empresa": 7300,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 7300",
            "size": 11
        },
        {
            "id": 731,
            "n_oficina": 1,
            "nit_empresa": 7310,
            "piso": 54,
            "nombre_empresa": "Empresa con nit 7310",
            "size": 16
        },
        {
            "id": 732,
            "n_oficina": 14,
            "nit_empresa": 7320,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 7320",
            "size": 13
        },
        {
            "id": 733,
            "n_oficina": 3,
            "nit_empresa": 7330,
            "piso": 45,
            "nombre_empresa": "Empresa con nit 7330",
            "size": 15
        },
        {
            "id": 734,
            "n_oficina": 8,
            "nit_empresa": 7340,
            "piso": 74,
            "nombre_empresa": "Empresa con nit 7340",
            "size": 15
        },
        {
            "id": 735,
            "n_oficina": 2,
            "nit_empresa": 7350,
            "piso": 38,
            "nombre_empresa": "Empresa con nit 7350",
            "size": 12
        },
        {
            "id": 736,
            "n_oficina": 6,
            "nit_empresa": 7360,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 7360",
            "size": 19
        },
        {
            "id": 737,
            "n_oficina": 7,
            "nit_empresa": 7370,
            "piso": 82,
            "nombre_empresa": "Empresa con nit 7370",
            "size": 7
        },
        {
            "id": 738,
            "n_oficina": 8,
            "nit_empresa": 7380,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 7380",
            "size": 13
        },
        {
            "id": 739,
            "n_oficina": 10,
            "nit_empresa": 7390,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 7390",
            "size": 9
        },
        {
            "id": 740,
            "n_oficina": 2,
            "nit_empresa": 7400,
            "piso": 94,
            "nombre_empresa": "Empresa con nit 7400",
            "size": 13
        },
        {
            "id": 741,
            "n_oficina": 2,
            "nit_empresa": 7410,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 7410",
            "size": 13
        },
        {
            "id": 742,
            "n_oficina": 5,
            "nit_empresa": 7420,
            "piso": 92,
            "nombre_empresa": "Empresa con nit 7420",
            "size": 4
        },
        {
            "id": 743,
            "n_oficina": 13,
            "nit_empresa": 7430,
            "piso": 76,
            "nombre_empresa": "Empresa con nit 7430",
            "size": 19
        },
        {
            "id": 744,
            "n_oficina": 12,
            "nit_empresa": 7440,
            "piso": 3,
            "nombre_empresa": "Empresa con nit 7440",
            "size": 2
        },
        {
            "id": 745,
            "n_oficina": 12,
            "nit_empresa": 7450,
            "piso": 12,
            "nombre_empresa": "Empresa con nit 7450",
            "size": 19
        },
        {
            "id": 746,
            "n_oficina": 2,
            "nit_empresa": 7460,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 7460",
            "size": 6
        },
        {
            "id": 747,
            "n_oficina": 14,
            "nit_empresa": 7470,
            "piso": 83,
            "nombre_empresa": "Empresa con nit 7470",
            "size": 16
        },
        {
            "id": 748,
            "n_oficina": 2,
            "nit_empresa": 7480,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 7480",
            "size": 3
        },
        {
            "id": 749,
            "n_oficina": 10,
            "nit_empresa": 7490,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 7490",
            "size": 3
        },
        {
            "id": 750,
            "n_oficina": 12,
            "nit_empresa": 7500,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 7500",
            "size": 16
        },
        {
            "id": 751,
            "n_oficina": 13,
            "nit_empresa": 7510,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 7510",
            "size": 12
        },
        {
            "id": 752,
            "n_oficina": 3,
            "nit_empresa": 7520,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 7520",
            "size": 14
        },
        {
            "id": 753,
            "n_oficina": 5,
            "nit_empresa": 7530,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 7530",
            "size": 9
        },
        {
            "id": 754,
            "n_oficina": 13,
            "nit_empresa": 7540,
            "piso": 22,
            "nombre_empresa": "Empresa con nit 7540",
            "size": 11
        },
        {
            "id": 755,
            "n_oficina": 8,
            "nit_empresa": 7550,
            "piso": 93,
            "nombre_empresa": "Empresa con nit 7550",
            "size": 19
        },
        {
            "id": 756,
            "n_oficina": 4,
            "nit_empresa": 7560,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 7560",
            "size": 19
        },
        {
            "id": 757,
            "n_oficina": 2,
            "nit_empresa": 7570,
            "piso": 55,
            "nombre_empresa": "Empresa con nit 7570",
            "size": 10
        },
        {
            "id": 758,
            "n_oficina": 12,
            "nit_empresa": 7580,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 7580",
            "size": 17
        },
        {
            "id": 759,
            "n_oficina": 2,
            "nit_empresa": 7590,
            "piso": 18,
            "nombre_empresa": "Empresa con nit 7590",
            "size": 5
        },
        {
            "id": 760,
            "n_oficina": 6,
            "nit_empresa": 7600,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 7600",
            "size": 5
        },
        {
            "id": 761,
            "n_oficina": 8,
            "nit_empresa": 7610,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 7610",
            "size": 19
        },
        {
            "id": 762,
            "n_oficina": 14,
            "nit_empresa": 7620,
            "piso": 93,
            "nombre_empresa": "Empresa con nit 7620",
            "size": 18
        },
        {
            "id": 763,
            "n_oficina": 5,
            "nit_empresa": 7630,
            "piso": 97,
            "nombre_empresa": "Empresa con nit 7630",
            "size": 13
        },
        {
            "id": 764,
            "n_oficina": 12,
            "nit_empresa": 7640,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 7640",
            "size": 6
        },
        {
            "id": 765,
            "n_oficina": 4,
            "nit_empresa": 7650,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 7650",
            "size": 8
        },
        {
            "id": 766,
            "n_oficina": 5,
            "nit_empresa": 7660,
            "piso": 26,
            "nombre_empresa": "Empresa con nit 7660",
            "size": 1
        },
        {
            "id": 767,
            "n_oficina": 7,
            "nit_empresa": 7670,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 7670",
            "size": 8
        },
        {
            "id": 768,
            "n_oficina": 5,
            "nit_empresa": 7680,
            "piso": 54,
            "nombre_empresa": "Empresa con nit 7680",
            "size": 8
        },
        {
            "id": 769,
            "n_oficina": 14,
            "nit_empresa": 7690,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 7690",
            "size": 15
        },
        {
            "id": 770,
            "n_oficina": 1,
            "nit_empresa": 7700,
            "piso": 93,
            "nombre_empresa": "Empresa con nit 7700",
            "size": 3
        },
        {
            "id": 771,
            "n_oficina": 5,
            "nit_empresa": 7710,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 7710",
            "size": 15
        },
        {
            "id": 772,
            "n_oficina": 13,
            "nit_empresa": 7720,
            "piso": 15,
            "nombre_empresa": "Empresa con nit 7720",
            "size": 16
        },
        {
            "id": 773,
            "n_oficina": 9,
            "nit_empresa": 7730,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 7730",
            "size": 9
        },
        {
            "id": 774,
            "n_oficina": 2,
            "nit_empresa": 7740,
            "piso": 39,
            "nombre_empresa": "Empresa con nit 7740",
            "size": 19
        },
        {
            "id": 775,
            "n_oficina": 10,
            "nit_empresa": 7750,
            "piso": 73,
            "nombre_empresa": "Empresa con nit 7750",
            "size": 10
        },
        {
            "id": 776,
            "n_oficina": 3,
            "nit_empresa": 7760,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 7760",
            "size": 18
        },
        {
            "id": 777,
            "n_oficina": 1,
            "nit_empresa": 7770,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 7770",
            "size": 7
        },
        {
            "id": 778,
            "n_oficina": 11,
            "nit_empresa": 7780,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 7780",
            "size": 15
        },
        {
            "id": 779,
            "n_oficina": 12,
            "nit_empresa": 7790,
            "piso": 34,
            "nombre_empresa": "Empresa con nit 7790",
            "size": 19
        },
        {
            "id": 780,
            "n_oficina": 2,
            "nit_empresa": 7800,
            "piso": 4,
            "nombre_empresa": "Empresa con nit 7800",
            "size": 5
        },
        {
            "id": 781,
            "n_oficina": 4,
            "nit_empresa": 7810,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 7810",
            "size": 3
        },
        {
            "id": 782,
            "n_oficina": 8,
            "nit_empresa": 7820,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 7820",
            "size": 11
        },
        {
            "id": 783,
            "n_oficina": 2,
            "nit_empresa": 7830,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 7830",
            "size": 2
        },
        {
            "id": 784,
            "n_oficina": 6,
            "nit_empresa": 7840,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 7840",
            "size": 17
        },
        {
            "id": 785,
            "n_oficina": 13,
            "nit_empresa": 7850,
            "piso": 24,
            "nombre_empresa": "Empresa con nit 7850",
            "size": 10
        },
        {
            "id": 786,
            "n_oficina": 1,
            "nit_empresa": 7860,
            "piso": 15,
            "nombre_empresa": "Empresa con nit 7860",
            "size": 13
        },
        {
            "id": 787,
            "n_oficina": 14,
            "nit_empresa": 7870,
            "piso": 22,
            "nombre_empresa": "Empresa con nit 7870",
            "size": 18
        },
        {
            "id": 788,
            "n_oficina": 6,
            "nit_empresa": 7880,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 7880",
            "size": 4
        },
        {
            "id": 789,
            "n_oficina": 9,
            "nit_empresa": 7890,
            "piso": 3,
            "nombre_empresa": "Empresa con nit 7890",
            "size": 11
        },
        {
            "id": 790,
            "n_oficina": 14,
            "nit_empresa": 7900,
            "piso": 92,
            "nombre_empresa": "Empresa con nit 7900",
            "size": 9
        },
        {
            "id": 791,
            "n_oficina": 8,
            "nit_empresa": 7910,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 7910",
            "size": 5
        },
        {
            "id": 792,
            "n_oficina": 7,
            "nit_empresa": 7920,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 7920",
            "size": 12
        },
        {
            "id": 793,
            "n_oficina": 5,
            "nit_empresa": 7930,
            "piso": 38,
            "nombre_empresa": "Empresa con nit 7930",
            "size": 12
        },
        {
            "id": 794,
            "n_oficina": 2,
            "nit_empresa": 7940,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 7940",
            "size": 16
        },
        {
            "id": 795,
            "n_oficina": 4,
            "nit_empresa": 7950,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 7950",
            "size": 17
        },
        {
            "id": 796,
            "n_oficina": 4,
            "nit_empresa": 7960,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 7960",
            "size": 5
        },
        {
            "id": 797,
            "n_oficina": 2,
            "nit_empresa": 7970,
            "piso": 84,
            "nombre_empresa": "Empresa con nit 7970",
            "size": 11
        },
        {
            "id": 798,
            "n_oficina": 5,
            "nit_empresa": 7980,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 7980",
            "size": 13
        },
        {
            "id": 799,
            "n_oficina": 5,
            "nit_empresa": 7990,
            "piso": 49,
            "nombre_empresa": "Empresa con nit 7990",
            "size": 10
        },
        {
            "id": 800,
            "n_oficina": 11,
            "nit_empresa": 8000,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 8000",
            "size": 3
        },
        {
            "id": 801,
            "n_oficina": 1,
            "nit_empresa": 8010,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 8010",
            "size": 6
        },
        {
            "id": 802,
            "n_oficina": 14,
            "nit_empresa": 8020,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 8020",
            "size": 15
        },
        {
            "id": 803,
            "n_oficina": 6,
            "nit_empresa": 8030,
            "piso": 76,
            "nombre_empresa": "Empresa con nit 8030",
            "size": 12
        },
        {
            "id": 804,
            "n_oficina": 8,
            "nit_empresa": 8040,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 8040",
            "size": 6
        },
        {
            "id": 805,
            "n_oficina": 3,
            "nit_empresa": 8050,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 8050",
            "size": 10
        },
        {
            "id": 806,
            "n_oficina": 7,
            "nit_empresa": 8060,
            "piso": 49,
            "nombre_empresa": "Empresa con nit 8060",
            "size": 1
        },
        {
            "id": 807,
            "n_oficina": 3,
            "nit_empresa": 8070,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 8070",
            "size": 4
        },
        {
            "id": 808,
            "n_oficina": 14,
            "nit_empresa": 8080,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 8080",
            "size": 2
        },
        {
            "id": 809,
            "n_oficina": 5,
            "nit_empresa": 8090,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 8090",
            "size": 13
        },
        {
            "id": 810,
            "n_oficina": 6,
            "nit_empresa": 8100,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 8100",
            "size": 9
        },
        {
            "id": 811,
            "n_oficina": 8,
            "nit_empresa": 8110,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 8110",
            "size": 7
        },
        {
            "id": 812,
            "n_oficina": 4,
            "nit_empresa": 8120,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 8120",
            "size": 13
        },
        {
            "id": 813,
            "n_oficina": 8,
            "nit_empresa": 8130,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 8130",
            "size": 11
        },
        {
            "id": 814,
            "n_oficina": 1,
            "nit_empresa": 8140,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 8140",
            "size": 6
        },
        {
            "id": 815,
            "n_oficina": 4,
            "nit_empresa": 8150,
            "piso": 76,
            "nombre_empresa": "Empresa con nit 8150",
            "size": 12
        },
        {
            "id": 816,
            "n_oficina": 11,
            "nit_empresa": 8160,
            "piso": 46,
            "nombre_empresa": "Empresa con nit 8160",
            "size": 17
        },
        {
            "id": 817,
            "n_oficina": 4,
            "nit_empresa": 8170,
            "piso": 18,
            "nombre_empresa": "Empresa con nit 8170",
            "size": 15
        },
        {
            "id": 818,
            "n_oficina": 11,
            "nit_empresa": 8180,
            "piso": 74,
            "nombre_empresa": "Empresa con nit 8180",
            "size": 2
        },
        {
            "id": 819,
            "n_oficina": 6,
            "nit_empresa": 8190,
            "piso": 28,
            "nombre_empresa": "Empresa con nit 8190",
            "size": 9
        },
        {
            "id": 820,
            "n_oficina": 3,
            "nit_empresa": 8200,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 8200",
            "size": 3
        },
        {
            "id": 821,
            "n_oficina": 9,
            "nit_empresa": 8210,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 8210",
            "size": 4
        },
        {
            "id": 822,
            "n_oficina": 4,
            "nit_empresa": 8220,
            "piso": 97,
            "nombre_empresa": "Empresa con nit 8220",
            "size": 6
        },
        {
            "id": 823,
            "n_oficina": 9,
            "nit_empresa": 8230,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 8230",
            "size": 14
        },
        {
            "id": 824,
            "n_oficina": 8,
            "nit_empresa": 8240,
            "piso": 13,
            "nombre_empresa": "Empresa con nit 8240",
            "size": 11
        },
        {
            "id": 825,
            "n_oficina": 1,
            "nit_empresa": 8250,
            "piso": 38,
            "nombre_empresa": "Empresa con nit 8250",
            "size": 4
        },
        {
            "id": 826,
            "n_oficina": 4,
            "nit_empresa": 8260,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 8260",
            "size": 18
        },
        {
            "id": 827,
            "n_oficina": 13,
            "nit_empresa": 8270,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 8270",
            "size": 9
        },
        {
            "id": 828,
            "n_oficina": 12,
            "nit_empresa": 8280,
            "piso": 55,
            "nombre_empresa": "Empresa con nit 8280",
            "size": 12
        },
        {
            "id": 829,
            "n_oficina": 10,
            "nit_empresa": 8290,
            "piso": 42,
            "nombre_empresa": "Empresa con nit 8290",
            "size": 15
        },
        {
            "id": 830,
            "n_oficina": 8,
            "nit_empresa": 8300,
            "piso": 67,
            "nombre_empresa": "Empresa con nit 8300",
            "size": 5
        },
        {
            "id": 831,
            "n_oficina": 8,
            "nit_empresa": 8310,
            "piso": 73,
            "nombre_empresa": "Empresa con nit 8310",
            "size": 13
        },
        {
            "id": 832,
            "n_oficina": 9,
            "nit_empresa": 8320,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 8320",
            "size": 6
        },
        {
            "id": 833,
            "n_oficina": 7,
            "nit_empresa": 8330,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 8330",
            "size": 8
        },
        {
            "id": 834,
            "n_oficina": 8,
            "nit_empresa": 8340,
            "piso": 67,
            "nombre_empresa": "Empresa con nit 8340",
            "size": 6
        },
        {
            "id": 835,
            "n_oficina": 3,
            "nit_empresa": 8350,
            "piso": 80,
            "nombre_empresa": "Empresa con nit 8350",
            "size": 12
        },
        {
            "id": 836,
            "n_oficina": 3,
            "nit_empresa": 8360,
            "piso": 41,
            "nombre_empresa": "Empresa con nit 8360",
            "size": 15
        },
        {
            "id": 837,
            "n_oficina": 2,
            "nit_empresa": 8370,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 8370",
            "size": 10
        },
        {
            "id": 838,
            "n_oficina": 6,
            "nit_empresa": 8380,
            "piso": 82,
            "nombre_empresa": "Empresa con nit 8380",
            "size": 15
        },
        {
            "id": 839,
            "n_oficina": 8,
            "nit_empresa": 8390,
            "piso": 34,
            "nombre_empresa": "Empresa con nit 8390",
            "size": 3
        },
        {
            "id": 840,
            "n_oficina": 5,
            "nit_empresa": 8400,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 8400",
            "size": 17
        },
        {
            "id": 841,
            "n_oficina": 2,
            "nit_empresa": 8410,
            "piso": 82,
            "nombre_empresa": "Empresa con nit 8410",
            "size": 17
        },
        {
            "id": 842,
            "n_oficina": 4,
            "nit_empresa": 8420,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 8420",
            "size": 9
        },
        {
            "id": 843,
            "n_oficina": 2,
            "nit_empresa": 8430,
            "piso": 45,
            "nombre_empresa": "Empresa con nit 8430",
            "size": 16
        },
        {
            "id": 844,
            "n_oficina": 10,
            "nit_empresa": 8440,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 8440",
            "size": 12
        },
        {
            "id": 845,
            "n_oficina": 11,
            "nit_empresa": 8450,
            "piso": 42,
            "nombre_empresa": "Empresa con nit 8450",
            "size": 6
        },
        {
            "id": 846,
            "n_oficina": 10,
            "nit_empresa": 8460,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 8460",
            "size": 19
        },
        {
            "id": 847,
            "n_oficina": 12,
            "nit_empresa": 8470,
            "piso": 45,
            "nombre_empresa": "Empresa con nit 8470",
            "size": 9
        },
        {
            "id": 848,
            "n_oficina": 9,
            "nit_empresa": 8480,
            "piso": 2,
            "nombre_empresa": "Empresa con nit 8480",
            "size": 15
        },
        {
            "id": 849,
            "n_oficina": 10,
            "nit_empresa": 8490,
            "piso": 64,
            "nombre_empresa": "Empresa con nit 8490",
            "size": 15
        },
        {
            "id": 850,
            "n_oficina": 4,
            "nit_empresa": 8500,
            "piso": 94,
            "nombre_empresa": "Empresa con nit 8500",
            "size": 2
        },
        {
            "id": 851,
            "n_oficina": 9,
            "nit_empresa": 8510,
            "piso": 62,
            "nombre_empresa": "Empresa con nit 8510",
            "size": 7
        },
        {
            "id": 852,
            "n_oficina": 13,
            "nit_empresa": 8520,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 8520",
            "size": 13
        },
        {
            "id": 853,
            "n_oficina": 1,
            "nit_empresa": 8530,
            "piso": 74,
            "nombre_empresa": "Empresa con nit 8530",
            "size": 10
        },
        {
            "id": 854,
            "n_oficina": 6,
            "nit_empresa": 8540,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 8540",
            "size": 18
        },
        {
            "id": 855,
            "n_oficina": 11,
            "nit_empresa": 8550,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 8550",
            "size": 10
        },
        {
            "id": 856,
            "n_oficina": 11,
            "nit_empresa": 8560,
            "piso": 33,
            "nombre_empresa": "Empresa con nit 8560",
            "size": 9
        },
        {
            "id": 857,
            "n_oficina": 5,
            "nit_empresa": 8570,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 8570",
            "size": 9
        },
        {
            "id": 858,
            "n_oficina": 5,
            "nit_empresa": 8580,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 8580",
            "size": 18
        },
        {
            "id": 859,
            "n_oficina": 8,
            "nit_empresa": 8590,
            "piso": 6,
            "nombre_empresa": "Empresa con nit 8590",
            "size": 11
        },
        {
            "id": 860,
            "n_oficina": 2,
            "nit_empresa": 8600,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 8600",
            "size": 14
        },
        {
            "id": 861,
            "n_oficina": 13,
            "nit_empresa": 8610,
            "piso": 87,
            "nombre_empresa": "Empresa con nit 8610",
            "size": 8
        },
        {
            "id": 862,
            "n_oficina": 9,
            "nit_empresa": 8620,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 8620",
            "size": 19
        },
        {
            "id": 863,
            "n_oficina": 3,
            "nit_empresa": 8630,
            "piso": 47,
            "nombre_empresa": "Empresa con nit 8630",
            "size": 5
        },
        {
            "id": 864,
            "n_oficina": 5,
            "nit_empresa": 8640,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 8640",
            "size": 5
        },
        {
            "id": 865,
            "n_oficina": 5,
            "nit_empresa": 8650,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 8650",
            "size": 14
        },
        {
            "id": 866,
            "n_oficina": 1,
            "nit_empresa": 8660,
            "piso": 92,
            "nombre_empresa": "Empresa con nit 8660",
            "size": 2
        },
        {
            "id": 867,
            "n_oficina": 13,
            "nit_empresa": 8670,
            "piso": 82,
            "nombre_empresa": "Empresa con nit 8670",
            "size": 16
        },
        {
            "id": 868,
            "n_oficina": 3,
            "nit_empresa": 8680,
            "piso": 5,
            "nombre_empresa": "Empresa con nit 8680",
            "size": 6
        },
        {
            "id": 869,
            "n_oficina": 11,
            "nit_empresa": 8690,
            "piso": 33,
            "nombre_empresa": "Empresa con nit 8690",
            "size": 5
        },
        {
            "id": 870,
            "n_oficina": 5,
            "nit_empresa": 8700,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 8700",
            "size": 17
        },
        {
            "id": 871,
            "n_oficina": 4,
            "nit_empresa": 8710,
            "piso": 68,
            "nombre_empresa": "Empresa con nit 8710",
            "size": 2
        },
        {
            "id": 872,
            "n_oficina": 3,
            "nit_empresa": 8720,
            "piso": 1,
            "nombre_empresa": "Empresa con nit 8720",
            "size": 1
        },
        {
            "id": 873,
            "n_oficina": 9,
            "nit_empresa": 8730,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 8730",
            "size": 17
        },
        {
            "id": 874,
            "n_oficina": 11,
            "nit_empresa": 8740,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 8740",
            "size": 13
        },
        {
            "id": 875,
            "n_oficina": 3,
            "nit_empresa": 8750,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 8750",
            "size": 17
        },
        {
            "id": 876,
            "n_oficina": 8,
            "nit_empresa": 8760,
            "piso": 79,
            "nombre_empresa": "Empresa con nit 8760",
            "size": 15
        },
        {
            "id": 877,
            "n_oficina": 5,
            "nit_empresa": 8770,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 8770",
            "size": 10
        },
        {
            "id": 878,
            "n_oficina": 2,
            "nit_empresa": 8780,
            "piso": 13,
            "nombre_empresa": "Empresa con nit 8780",
            "size": 8
        },
        {
            "id": 879,
            "n_oficina": 13,
            "nit_empresa": 8790,
            "piso": 13,
            "nombre_empresa": "Empresa con nit 8790",
            "size": 6
        },
        {
            "id": 880,
            "n_oficina": 1,
            "nit_empresa": 8800,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 8800",
            "size": 15
        },
        {
            "id": 881,
            "n_oficina": 6,
            "nit_empresa": 8810,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 8810",
            "size": 4
        },
        {
            "id": 882,
            "n_oficina": 2,
            "nit_empresa": 8820,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 8820",
            "size": 2
        },
        {
            "id": 883,
            "n_oficina": 6,
            "nit_empresa": 8830,
            "piso": 57,
            "nombre_empresa": "Empresa con nit 8830",
            "size": 6
        },
        {
            "id": 884,
            "n_oficina": 1,
            "nit_empresa": 8840,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 8840",
            "size": 18
        },
        {
            "id": 885,
            "n_oficina": 13,
            "nit_empresa": 8850,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 8850",
            "size": 1
        },
        {
            "id": 886,
            "n_oficina": 14,
            "nit_empresa": 8860,
            "piso": 46,
            "nombre_empresa": "Empresa con nit 8860",
            "size": 12
        },
        {
            "id": 887,
            "n_oficina": 3,
            "nit_empresa": 8870,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 8870",
            "size": 12
        },
        {
            "id": 888,
            "n_oficina": 1,
            "nit_empresa": 8880,
            "piso": 21,
            "nombre_empresa": "Empresa con nit 8880",
            "size": 14
        },
        {
            "id": 889,
            "n_oficina": 8,
            "nit_empresa": 8890,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 8890",
            "size": 17
        },
        {
            "id": 890,
            "n_oficina": 14,
            "nit_empresa": 8900,
            "piso": 88,
            "nombre_empresa": "Empresa con nit 8900",
            "size": 8
        },
        {
            "id": 891,
            "n_oficina": 13,
            "nit_empresa": 8910,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 8910",
            "size": 7
        },
        {
            "id": 892,
            "n_oficina": 4,
            "nit_empresa": 8920,
            "piso": 59,
            "nombre_empresa": "Empresa con nit 8920",
            "size": 15
        },
        {
            "id": 893,
            "n_oficina": 7,
            "nit_empresa": 8930,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 8930",
            "size": 10
        },
        {
            "id": 894,
            "n_oficina": 4,
            "nit_empresa": 8940,
            "piso": 29,
            "nombre_empresa": "Empresa con nit 8940",
            "size": 16
        },
        {
            "id": 895,
            "n_oficina": 5,
            "nit_empresa": 8950,
            "piso": 71,
            "nombre_empresa": "Empresa con nit 8950",
            "size": 7
        },
        {
            "id": 896,
            "n_oficina": 8,
            "nit_empresa": 8960,
            "piso": 84,
            "nombre_empresa": "Empresa con nit 8960",
            "size": 6
        },
        {
            "id": 897,
            "n_oficina": 10,
            "nit_empresa": 8970,
            "piso": 28,
            "nombre_empresa": "Empresa con nit 8970",
            "size": 8
        },
        {
            "id": 898,
            "n_oficina": 6,
            "nit_empresa": 8980,
            "piso": 29,
            "nombre_empresa": "Empresa con nit 8980",
            "size": 16
        },
        {
            "id": 899,
            "n_oficina": 8,
            "nit_empresa": 8990,
            "piso": 35,
            "nombre_empresa": "Empresa con nit 8990",
            "size": 13
        },
        {
            "id": 900,
            "n_oficina": 7,
            "nit_empresa": 9000,
            "piso": 51,
            "nombre_empresa": "Empresa con nit 9000",
            "size": 1
        },
        {
            "id": 901,
            "n_oficina": 10,
            "nit_empresa": 9010,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 9010",
            "size": 18
        },
        {
            "id": 902,
            "n_oficina": 10,
            "nit_empresa": 9020,
            "piso": 40,
            "nombre_empresa": "Empresa con nit 9020",
            "size": 9
        },
        {
            "id": 903,
            "n_oficina": 14,
            "nit_empresa": 9030,
            "piso": 33,
            "nombre_empresa": "Empresa con nit 9030",
            "size": 15
        },
        {
            "id": 904,
            "n_oficina": 10,
            "nit_empresa": 9040,
            "piso": 59,
            "nombre_empresa": "Empresa con nit 9040",
            "size": 4
        },
        {
            "id": 905,
            "n_oficina": 2,
            "nit_empresa": 9050,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 9050",
            "size": 10
        },
        {
            "id": 906,
            "n_oficina": 11,
            "nit_empresa": 9060,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 9060",
            "size": 9
        },
        {
            "id": 907,
            "n_oficina": 10,
            "nit_empresa": 9070,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 9070",
            "size": 17
        },
        {
            "id": 908,
            "n_oficina": 13,
            "nit_empresa": 9080,
            "piso": 73,
            "nombre_empresa": "Empresa con nit 9080",
            "size": 18
        },
        {
            "id": 909,
            "n_oficina": 2,
            "nit_empresa": 9090,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 9090",
            "size": 18
        },
        {
            "id": 910,
            "n_oficina": 10,
            "nit_empresa": 9100,
            "piso": 45,
            "nombre_empresa": "Empresa con nit 9100",
            "size": 2
        },
        {
            "id": 911,
            "n_oficina": 11,
            "nit_empresa": 9110,
            "piso": 17,
            "nombre_empresa": "Empresa con nit 9110",
            "size": 19
        },
        {
            "id": 912,
            "n_oficina": 1,
            "nit_empresa": 9120,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 9120",
            "size": 8
        },
        {
            "id": 913,
            "n_oficina": 3,
            "nit_empresa": 9130,
            "piso": 98,
            "nombre_empresa": "Empresa con nit 9130",
            "size": 8
        },
        {
            "id": 914,
            "n_oficina": 7,
            "nit_empresa": 9140,
            "piso": 72,
            "nombre_empresa": "Empresa con nit 9140",
            "size": 16
        },
        {
            "id": 915,
            "n_oficina": 10,
            "nit_empresa": 9150,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 9150",
            "size": 13
        },
        {
            "id": 916,
            "n_oficina": 4,
            "nit_empresa": 9160,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 9160",
            "size": 1
        },
        {
            "id": 917,
            "n_oficina": 9,
            "nit_empresa": 9170,
            "piso": 63,
            "nombre_empresa": "Empresa con nit 9170",
            "size": 15
        },
        {
            "id": 918,
            "n_oficina": 5,
            "nit_empresa": 9180,
            "piso": 60,
            "nombre_empresa": "Empresa con nit 9180",
            "size": 8
        },
        {
            "id": 919,
            "n_oficina": 6,
            "nit_empresa": 9190,
            "piso": 84,
            "nombre_empresa": "Empresa con nit 9190",
            "size": 5
        },
        {
            "id": 920,
            "n_oficina": 2,
            "nit_empresa": 9200,
            "piso": 2,
            "nombre_empresa": "Empresa con nit 9200",
            "size": 19
        },
        {
            "id": 921,
            "n_oficina": 14,
            "nit_empresa": 9210,
            "piso": 14,
            "nombre_empresa": "Empresa con nit 9210",
            "size": 12
        },
        {
            "id": 922,
            "n_oficina": 10,
            "nit_empresa": 9220,
            "piso": 42,
            "nombre_empresa": "Empresa con nit 9220",
            "size": 15
        },
        {
            "id": 923,
            "n_oficina": 5,
            "nit_empresa": 9230,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 9230",
            "size": 8
        },
        {
            "id": 924,
            "n_oficina": 4,
            "nit_empresa": 9240,
            "piso": 63,
            "nombre_empresa": "Empresa con nit 9240",
            "size": 4
        },
        {
            "id": 925,
            "n_oficina": 7,
            "nit_empresa": 9250,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 9250",
            "size": 4
        },
        {
            "id": 926,
            "n_oficina": 9,
            "nit_empresa": 9260,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 9260",
            "size": 15
        },
        {
            "id": 927,
            "n_oficina": 10,
            "nit_empresa": 9270,
            "piso": 10,
            "nombre_empresa": "Empresa con nit 9270",
            "size": 11
        },
        {
            "id": 928,
            "n_oficina": 13,
            "nit_empresa": 9280,
            "piso": 76,
            "nombre_empresa": "Empresa con nit 9280",
            "size": 6
        },
        {
            "id": 929,
            "n_oficina": 5,
            "nit_empresa": 9290,
            "piso": 79,
            "nombre_empresa": "Empresa con nit 9290",
            "size": 19
        },
        {
            "id": 930,
            "n_oficina": 5,
            "nit_empresa": 9300,
            "piso": 20,
            "nombre_empresa": "Empresa con nit 9300",
            "size": 6
        },
        {
            "id": 931,
            "n_oficina": 9,
            "nit_empresa": 9310,
            "piso": 85,
            "nombre_empresa": "Empresa con nit 9310",
            "size": 19
        },
        {
            "id": 932,
            "n_oficina": 8,
            "nit_empresa": 9320,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 9320",
            "size": 14
        },
        {
            "id": 933,
            "n_oficina": 13,
            "nit_empresa": 9330,
            "piso": 63,
            "nombre_empresa": "Empresa con nit 9330",
            "size": 17
        },
        {
            "id": 934,
            "n_oficina": 14,
            "nit_empresa": 9340,
            "piso": 26,
            "nombre_empresa": "Empresa con nit 9340",
            "size": 11
        },
        {
            "id": 935,
            "n_oficina": 2,
            "nit_empresa": 9350,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 9350",
            "size": 19
        },
        {
            "id": 936,
            "n_oficina": 6,
            "nit_empresa": 9360,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 9360",
            "size": 11
        },
        {
            "id": 937,
            "n_oficina": 13,
            "nit_empresa": 9370,
            "piso": 34,
            "nombre_empresa": "Empresa con nit 9370",
            "size": 4
        },
        {
            "id": 938,
            "n_oficina": 2,
            "nit_empresa": 9380,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 9380",
            "size": 19
        },
        {
            "id": 939,
            "n_oficina": 11,
            "nit_empresa": 9390,
            "piso": 89,
            "nombre_empresa": "Empresa con nit 9390",
            "size": 13
        },
        {
            "id": 940,
            "n_oficina": 3,
            "nit_empresa": 9400,
            "piso": 53,
            "nombre_empresa": "Empresa con nit 9400",
            "size": 2
        },
        {
            "id": 941,
            "n_oficina": 11,
            "nit_empresa": 9410,
            "piso": 97,
            "nombre_empresa": "Empresa con nit 9410",
            "size": 7
        },
        {
            "id": 942,
            "n_oficina": 6,
            "nit_empresa": 9420,
            "piso": 54,
            "nombre_empresa": "Empresa con nit 9420",
            "size": 8
        },
        {
            "id": 943,
            "n_oficina": 9,
            "nit_empresa": 9430,
            "piso": 49,
            "nombre_empresa": "Empresa con nit 9430",
            "size": 13
        },
        {
            "id": 944,
            "n_oficina": 6,
            "nit_empresa": 9440,
            "piso": 92,
            "nombre_empresa": "Empresa con nit 9440",
            "size": 9
        },
        {
            "id": 945,
            "n_oficina": 3,
            "nit_empresa": 9450,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 9450",
            "size": 13
        },
        {
            "id": 946,
            "n_oficina": 5,
            "nit_empresa": 9460,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 9460",
            "size": 8
        },
        {
            "id": 947,
            "n_oficina": 14,
            "nit_empresa": 9470,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 9470",
            "size": 13
        },
        {
            "id": 948,
            "n_oficina": 13,
            "nit_empresa": 9480,
            "piso": 91,
            "nombre_empresa": "Empresa con nit 9480",
            "size": 16
        },
        {
            "id": 949,
            "n_oficina": 6,
            "nit_empresa": 9490,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 9490",
            "size": 12
        },
        {
            "id": 950,
            "n_oficina": 3,
            "nit_empresa": 9500,
            "piso": 24,
            "nombre_empresa": "Empresa con nit 9500",
            "size": 4
        },
        {
            "id": 951,
            "n_oficina": 5,
            "nit_empresa": 9510,
            "piso": 67,
            "nombre_empresa": "Empresa con nit 9510",
            "size": 4
        },
        {
            "id": 952,
            "n_oficina": 11,
            "nit_empresa": 9520,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 9520",
            "size": 13
        },
        {
            "id": 953,
            "n_oficina": 11,
            "nit_empresa": 9530,
            "piso": 75,
            "nombre_empresa": "Empresa con nit 9530",
            "size": 13
        },
        {
            "id": 954,
            "n_oficina": 1,
            "nit_empresa": 9540,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 9540",
            "size": 11
        },
        {
            "id": 955,
            "n_oficina": 3,
            "nit_empresa": 9550,
            "piso": 97,
            "nombre_empresa": "Empresa con nit 9550",
            "size": 19
        },
        {
            "id": 956,
            "n_oficina": 12,
            "nit_empresa": 9560,
            "piso": 66,
            "nombre_empresa": "Empresa con nit 9560",
            "size": 4
        },
        {
            "id": 957,
            "n_oficina": 5,
            "nit_empresa": 9570,
            "piso": 70,
            "nombre_empresa": "Empresa con nit 9570",
            "size": 3
        },
        {
            "id": 958,
            "n_oficina": 6,
            "nit_empresa": 9580,
            "piso": 61,
            "nombre_empresa": "Empresa con nit 9580",
            "size": 7
        },
        {
            "id": 959,
            "n_oficina": 2,
            "nit_empresa": 9590,
            "piso": 56,
            "nombre_empresa": "Empresa con nit 9590",
            "size": 14
        },
        {
            "id": 960,
            "n_oficina": 4,
            "piso": 78,
            "size": 10
        },
        {
            "id": 961,
            "n_oficina": 11,
            "piso": 8,
            "size": 8
        },
        {
            "id": 962,
            "n_oficina": 11,
            "nit_empresa": 9620,
            "piso": 32,
            "nombre_empresa": "Empresa con nit 9620",
            "size": 16
        },
        {
            "id": 963,
            "n_oficina": 9,
            "nit_empresa": 9630,
            "piso": 96,
            "nombre_empresa": "Empresa con nit 9630",
            "size": 15
        },
        {
            "id": 964,
            "n_oficina": 5,
            "nit_empresa": 9640,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 9640",
            "size": 15
        },
        {
            "id": 965,
            "n_oficina": 3,
            "nit_empresa": 9650,
            "piso": 83,
            "nombre_empresa": "Empresa con nit 9650",
            "size": 14
        },
        {
            "id": 966,
            "n_oficina": 12,
            "nit_empresa": 9660,
            "piso": 90,
            "nombre_empresa": "Empresa con nit 9660",
            "size": 6
        },
        {
            "id": 967,
            "n_oficina": 7,
            "nit_empresa": 9670,
            "piso": 30,
            "nombre_empresa": "Empresa con nit 9670",
            "size": 18
        },
        {
            "id": 968,
            "n_oficina": 12,
            "nit_empresa": 9680,
            "piso": 39,
            "nombre_empresa": "Empresa con nit 9680",
            "size": 11
        },
        {
            "id": 969,
            "n_oficina": 14,
            "nit_empresa": 9690,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 9690",
            "size": 6
        },
        {
            "id": 970,
            "n_oficina": 13,
            "nit_empresa": 9700,
            "piso": 94,
            "nombre_empresa": "Empresa con nit 9700",
            "size": 10
        },
        {
            "id": 971,
            "n_oficina": 10,
            "nit_empresa": 9710,
            "piso": 24,
            "nombre_empresa": "Empresa con nit 9710",
            "size": 6
        },
        {
            "id": 972,
            "n_oficina": 11,
            "nit_empresa": 9720,
            "piso": 62,
            "nombre_empresa": "Empresa con nit 9720",
            "size": 12
        },
        {
            "id": 973,
            "n_oficina": 5,
            "nit_empresa": 9730,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 9730",
            "size": 17
        },
        {
            "id": 974,
            "n_oficina": 11,
            "nit_empresa": 9740,
            "piso": 69,
            "nombre_empresa": "Empresa con nit 9740",
            "size": 12
        },
        {
            "id": 975,
            "n_oficina": 8,
            "nit_empresa": 9750,
            "piso": 8,
            "nombre_empresa": "Empresa con nit 9750",
            "size": 10
        },
        {
            "id": 976,
            "n_oficina": 7,
            "nit_empresa": 9760,
            "piso": 31,
            "nombre_empresa": "Empresa con nit 9760",
            "size": 11
        },
        {
            "id": 977,
            "n_oficina": 10,
            "nit_empresa": 9770,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 9770",
            "size": 18
        },
        {
            "id": 978,
            "n_oficina": 5,
            "nit_empresa": 9780,
            "piso": 27,
            "nombre_empresa": "Empresa con nit 9780",
            "size": 16
        },
        {
            "id": 979,
            "n_oficina": 12,
            "nit_empresa": 9790,
            "piso": 78,
            "nombre_empresa": "Empresa con nit 9790",
            "size": 8
        },
        {
            "id": 980,
            "n_oficina": 7,
            "nit_empresa": 9800,
            "piso": 37,
            "nombre_empresa": "Empresa con nit 9800",
            "size": 2
        },
        {
            "id": 981,
            "n_oficina": 11,
            "nit_empresa": 9810,
            "piso": 48,
            "nombre_empresa": "Empresa con nit 9810",
            "size": 1
        },
        {
            "id": 982,
            "n_oficina": 5,
            "nit_empresa": 9820,
            "piso": 87,
            "nombre_empresa": "Empresa con nit 9820",
            "size": 7
        },
        {
            "id": 983,
            "n_oficina": 11,
            "nit_empresa": 9830,
            "piso": 29,
            "nombre_empresa": "Empresa con nit 9830",
            "size": 6
        },
        {
            "id": 984,
            "n_oficina": 3,
            "nit_empresa": 9840,
            "piso": 74,
            "nombre_empresa": "Empresa con nit 9840",
            "size": 6
        },
        {
            "id": 985,
            "n_oficina": 3,
            "nit_empresa": 9850,
            "piso": 25,
            "nombre_empresa": "Empresa con nit 9850",
            "size": 5
        },
        {
            "id": 986,
            "n_oficina": 2,
            "nit_empresa": 9860,
            "piso": 28,
            "nombre_empresa": "Empresa con nit 9860",
            "size": 9
        },
        {
            "id": 987,
            "n_oficina": 6,
            "nit_empresa": 9870,
            "piso": 77,
            "nombre_empresa": "Empresa con nit 9870",
            "size": 4
        },
        {
            "id": 988,
            "n_oficina": 1,
            "nit_empresa": 9880,
            "piso": 16,
            "nombre_empresa": "Empresa con nit 9880",
            "size": 19
        },
        {
            "id": 989,
            "n_oficina": 11,
            "nit_empresa": 9890,
            "piso": 43,
            "nombre_empresa": "Empresa con nit 9890",
            "size": 1
        },
        {
            "id": 990,
            "n_oficina": 2,
            "nit_empresa": 9900,
            "piso": 86,
            "nombre_empresa": "Empresa con nit 9900",
            "size": 3
        },
        {
            "id": 991,
            "n_oficina": 8,
            "nit_empresa": 9910,
            "piso": 44,
            "nombre_empresa": "Empresa con nit 9910",
            "size": 3
        },
        {
            "id": 992,
            "n_oficina": 12,
            "nit_empresa": 9920,
            "piso": 58,
            "nombre_empresa": "Empresa con nit 9920",
            "size": 8
        },
        {
            "id": 993,
            "n_oficina": 2,
            "nit_empresa": 9930,
            "piso": 22,
            "nombre_empresa": "Empresa con nit 9930",
            "size": 9
        },
        {
            "id": 994,
            "n_oficina": 5,
            "nit_empresa": 9940,
            "piso": 95,
            "nombre_empresa": "Empresa con nit 9940",
            "size": 19
        },
        {
            "id": 995,
            "n_oficina": 11,
            "nit_empresa": 9950,
            "piso": 49,
            "nombre_empresa": "Empresa con nit 9950",
            "size": 6
        },
        {
            "id": 996,
            "n_oficina": 4,
            "nit_empresa": 9960,
            "piso": 7,
            "nombre_empresa": "Empresa con nit 9960",
            "size": 5
        },
        {
            "id": 997,
            "n_oficina": 8,
            "nit_empresa": 9970,
            "piso": 19,
            "nombre_empresa": "Empresa con nit 9970",
            "size": 7
        },
        {
            "id": 998,
            "n_oficina": 11,
            "nit_empresa": 9980,
            "piso": 52,
            "nombre_empresa": "Empresa con nit 9980",
            "size": 12
        },
        {
            "id": 999,
            "n_oficina": 14,
            "nit_empresa": 9990,
            "piso": 35,
            "nombre_empresa": "Empresa con nit 9990",
            "size": 2
        },
        {
            "id": 1000,
            "n_oficina": 9,
            "nit_empresa": 10000,
            "piso": 92,
            "nombre_empresa": "Empresa con nit 10000",
            "size": 7
        }
    ]

}

export function getOffice(id) {
    const offices = getOficces();
    return offices.find(
        (office) => office.id === id
    );
}