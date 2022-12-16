const array = new Array(11);

for (let i = 0; i < 11; i++) {
    array[i] = new Array(9);
}

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 11; j++) {
        if (i == 0 || i == 4 || i == 8) {
            array[i][j] = true;
        } else if (i == 2 || i == 6) {
            array[i][0] = true;
            array[i][10] = true;
        } else {
            array[i][0] = true;
            array[i][5] = true;
            array[i][10] = true;
        }
    }
}

12, 4, 1, 4, 2, 9, 2, 4, 1, 4, 1

11, br, 1, 4, 1, 4, 1, br, 1, 9, 1, br, 1, 4, 1, 4, 1, br

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 11; j++) {
        if (array[i][j]) {
            print2("*");
        } else {
            print2(" ");
        }
    }
}

function print2(char) {
    console.log(char);
}

function misterio(a, b) {
    if (a <= 0 && b <= 0) {
        return 1;
    } else if (a % 2 === 0) {
        return a + misterio(b, b - 1);
    } else {
        return b + misterio(a + 1, b);
    }
}

console.log(misterio(9, 3));

console.log(metodoRaro());

function metodoRaro() {
    const letras = ["W", "A", "E", "F", "L", "H", "C", "J", "O", "O", "M", "T", "E"];

    let [n, izq, der, aux] = [13, 0, 0, 0];
    let salida = "";

    for (let i = 0; i < n; i++) {
        if (aux > n) {
            break;
        }

        der = aux + 1;

        while (der >= izq) {
            if (der == izq) {
                salida.concat(letras[aux]);
                console.log(letras[aux]);
                aux = aux + izq;
            }
            der--;
        }
        izq++
    }

    return salida;
}

function funcion(primero, segundo) {
    primero = primero.toUpperCase();
    segundo = segundo.toUpperCase();

    const salida = [];

    for (let i = 0; i < primero.length; i++) {
        let currLett = primero.charAt(i);
        for (let j = 0; j < segundo.length; j++) {
            if (currLett == segundo.charAt(j)) {
                if (salida.some((num) => { return num == j })) {
                    continue;
                }
                salida.push(j);
                break;
            } else if (j == segundo.length - 1) {
                return false;
            }
        }
    }

    return salida;

}

console.log(funcion("ANA", "AAN"));


for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 11; j++) {
        if (i == 0 || i == 4 || i == 8) {
            System.out.print("*");
        } else if (i == 2 || i == 6) {
            if (j == 0 || j == 10) System.out.print("*");
            else System.out.print(" ");
        } else {
            if (j == 0 || j == 5 || j == 10) System.out.print("*");
            else System.out.print(" ");
        }
    }
    System.out.print("\n");
}

Para i = 0 Hasta 9 Con Paso 1 Hacer
    Para j = 0 Hasta 11 Con Paso 1 Hacer
        Si i = 0 o i = 4 o i = 8 Entonces
print2("*")
        Si no Si i = 2 o i = 6 Entonces
            Si j = 0 o j = 10 Entonces
print2("*")
            Si no Entonces
print2(" ")
            Fin Si
        Si no Entonces
            Si j = 0 o j = 5 o j = 10 Entonces
print2("*")
            Si no Entonces
print2(" ")
            Fin Si
        Fin Si
    Fin Para
print2("\n")
Fin Para