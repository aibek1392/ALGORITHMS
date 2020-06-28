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