function e(n) {
    let result = 1.0;
    let factorial = 1.0;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
        result += 1.0 / factorial;
    }

    return result;
}
