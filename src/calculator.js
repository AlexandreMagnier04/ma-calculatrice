export const calculate = (a, b, op) => {
    // 1. On force la conversion en vrais nombres
    const numA = Number(a);
    const numB = Number(b);

    // 2. On vérifie que ce sont bien des nombres (qualité du code)
    if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Les entrées doivent être des nombres");
    }

    // 3. On fait le calcul avec les nombres convertis
    switch (op) {
        case '+':
            return numA + numB;
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;
        default:
            throw new Error("Opération non supportée");
    }
};