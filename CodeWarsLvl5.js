// Longest Repeated DNA Motif
function longestMotif(seq) {
    let li = []
    for (let i = 0; i < seq.length; i++) {
        for (let j = i + 1; j < seq.length + 1; j++) {
            let m = seq.slice(i, j)
            if (seq.slice(j).includes(m)) li.push(m)
        }
    }
    let ml = Math.max(...li.map(x => x.length))
    return [...new Set(li.filter(x => x.length == ml))]
}


//Ulam Sequences(performance edition)
function ulamSequence(n1, n2, q) {
    const tome = [n1, n2];
    const codex = new Set([n1 + n2]);
    const reject = new Set();
    let cv = n1 + n2,
        c = 2;
    while (c < q) {
        if (codex.has(cv)) {
            for (let n of tome) {
                const cvn = cv + n;
                if (codex.has(cvn)) {
                    codex.delete(cvn);
                    reject.add(cvn);
                }
                else if (!reject.has(cvn)) {
                    codex.add(cvn);
                }
            }
            tome.push(cv);
            c++;
        }
        cv++;
    }
    return tome;
}


// Challenge Fun #7: N To The N
function n2n(n, k) {
    let pow = (b, e, m) => {
        if (m == 1n)
            return 0
        let r = 1n;
        b = b % m;
        while (e > 0n) {
            if (e % 2n == 1n) {
                r = (r * b) % m;
            }
            e = e >> 1n;
            b = (b * b) % m;
        }
        return r;
    }
    return ("00000000" + pow(BigInt(n), BigInt(n), 1000000000n)).substr(-k);
}