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


function dirReduc(plan) {
    var opposite = {
        'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'
    };
    return plan.reduce(function (dirs, dir) {
        if (dirs[dirs.length - 1] === opposite[dir])
            dirs.pop();
        else
            dirs.push(dir);
        return dirs;
    }, []);
}



//MongoDB ObjectID
var Mongo = {
    isValid: function (objectId) {
        return typeof objectId === 'string' && !!objectId.match(/^[a-f0-9]{24}$/);
    },
    getTimestamp: function (objectId) {
        if (!this.isValid(objectId)) {
            return false;
        }
        return new Date(parseInt(objectId.substr(0, 8), 16) * 1000);
    }
};

//Consecutive k-Primes
function consecKprimes(k, arr) {
    return arr.map(countPrimes).reduce((a, b, i, array) => i > 0 && b == k && array[i - 1] == k ? a + 1 : a, 0);

    function countPrimes(num) {
        var count = 0;
        for (var i = 2; i <= num; i++) {
            while (num % i == 0) {
                num /= i;
                count++;
            }
        }
        return count;
    }
}




// Prime Fan #1 solution
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (num % 6 != 1 && num % 6 != 5) return false
    var n = parseInt(Math.sqrt(num));
    for (var i = 5; i < n + 1; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
}


//

function primeSumPair(input) {
    var nums = [].concat(input)
    var first = nums.shift();
    var paths = []
    for (var i = 0; i < nums.length; i++) {
        var x = nums[i];
        if (isPrime(first + x)) {
            var copy = nums.map(v => v)
            copy.splice(i, 1);
            paths.push({ 'groups': [[first, x]], 'rest': copy })
        }
    }
    while (paths.length) {
        var new_paths = []
        for (path of paths) {
            if (path.rest.length === 0) return path.groups;
            var a = path.rest.shift();
            for (var i = 0; i < path.rest.length; i++) {
                if (isPrime(a + path.rest[i])) {
                    var new_path = {};
                    new_path.groups = [].concat(path.groups);
                    var copy = [].concat(path.rest);
                    copy.splice(i, 1);
                    new_path.groups.push([a, path.rest[i]]);
                    new_path.rest = copy;
                    new_paths.push(new_path);
                }
            }
        }
        paths = new_paths
    }
    return []
}


//Esolang Stick
function interpreter(tape) {
    const stack = [0];
    let output = '';
    for (let ip = 0; ip < tape.length; ip++) {
        let last = stack.length - 1;
        switch (tape[ip]) {
            case '^': { if (stack.length < 2) throw 'Empty stack!'; stack.pop(); break; }
            case '!': { stack.push(0); break; }
            case '+': { stack[last] = (stack[last] + 1) % 256; break; }
            case '-': { stack[last] = stack[last] ? stack[last] - 1 : 255; break; }
            case '*': { output += String.fromCharCode(stack[last]); break; }
            case '[': { if (!stack[last]) while (tape[ip] !== ']') ip++; break; }
            case ']': { if (stack[last]) while (tape[ip] !== '[') ip--; break; }
        }
    }
    return output;
}

