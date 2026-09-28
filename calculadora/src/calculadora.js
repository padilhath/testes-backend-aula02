export const somar = (a, b) => Math.round((a + b) * 100) / 100;
export const subtrair = (a, b) => Math.round((a - b) * 100) / 100;
export const multiplicar = (a, b) => Math.round((a * b) * 100) / 100;
export const dividir = (a, b) => b !== 0 ? Math.round((a / b) * 100) / 100 : null;
export const ehpar = (n) => n % 2 === 0;

export const potencia = (base, expoente) => Math.pow(base, expoente);
export const porcentagem = (valor, percentual) => Math.round((valor * (percentual / 100)) * 100) / 100;
export const mediaDeTres = (a, b, c) => Math.round(((a + b + c) / 3) * 100) / 100;