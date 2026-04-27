export const calculate = (a, b, op) => {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    throw new Error("Opération non supportée");
};