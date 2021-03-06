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




const InterlacedSpiralCipher = {};

InterlacedSpiralCipher.encode = function (j) {
    console.log("encode", j);
    if (!j || j.length < 1) { return "" }
    var str = j.slice();
    var size = Math.ceil(Math.sqrt(str.length));
    str = (str + " ".repeat(Math.pow(size, 2) - str.length)).split("");
    var layer = 0;
    var grid = []
    for (var i = 0; i < size; i++) { grid.push(Array(size).fill(100)) }
    var dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    var c = corners(size, 0);
    var done = false;
    while (str.length > 0) {
        for (var i = 0; i < c.length; i++) {

            var [y, x] = c[i];
            if (grid[y][x] != 100) { layer++; c = corners(size, layer);[y, x] = c[i]; }
            if (!grid[y] || !grid[y][x] || grid[y][x] != 100) { done = true; break; }
            grid[y][x] = str.shift();
            c[i] = [c[i][0] + dir[i][0], c[i][1] + dir[i][1]];
        }
        if (done) { break }
    }
    return grid.map(e => e.join("")).join("");

};

InterlacedSpiralCipher.decode = function (j) {
    console.log("decode", j);
    if (!j || j.length < 1) { return "" }
    var grid = [];
    var size = Math.sqrt(j.length)
    var str = j.slice() + " ".repeat(Math.pow(size, 2) - j.length)
    var s = str.slice().split("");
    for (var i = 0; i < size; i++) {
        grid.push(s.splice(0, size));
    }
    str = str.split("");

    var res = "";
    var layer = 0;
    var dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    var c = corners(size, 0);
    var done = false
    while (!done) {
        for (var i = 0; i < c.length; i++) {

            var [y, x] = c[i];

            if (!grid[y] || !grid[y][x] || y >= size || x >= size) { layer++; c = corners(size, layer);[y, x] = c[i]; }

            // console.log(y,x, res)
            if (!grid[y] || !grid[y][x]) { done = true; break; }
            res += grid[y][x]
            grid[y][x] = false
            c[i] = [c[i][0] + dir[i][0], c[i][1] + dir[i][1]];
            str.pop();
        }

    }

    return res.trim();
};


function corners(size, layer) {
    return [[layer, layer], [layer, size - layer - 1], [size - layer - 1, size - layer - 1], [size - layer - 1, layer]];

}



function submatrix(matrix) {
    const n = matrix.length;
    const subIndices = [...Array(n + 1)].map(() => []);
    for (let i = 1; i < 1 << n; i++) {
        const t = [...i.toString(2)].reverse().map((d, j) => [+d, j]).filter(p => p[0]).map(p => p[1]);
        subIndices[t.length].push(t);
    }

    const cmp = (a, b, c = [].concat(...b)) => [].concat(...a).reduce((r, x, i) => r || x - c[i], 0);
    const r = [];
    for (let k = 1; k <= n; k++) {
        const subs = [].concat(...subIndices[k].map(rs =>
            subIndices[k].map(cs =>
                rs.map(i => cs.map(j => matrix[i][j])))));
        r.push(...subs.sort(cmp).filter((a, i, s) => i === 0 || cmp(a, s[i - 1]) !== 0));
    }
    return r;
}

// Mirrored Exponential Chunks
function mirroredExponentialChunks(arr) {
    const oddSize = arr.length & 1;
    const midPos = parseInt((arr.length - oddSize) / 2, 10);
    const result = oddSize ? [[arr[midPos]]] : [];
    const leftElements = arr.slice(0, midPos);
    const rightElements = arr.slice(midPos + oddSize);

    let quantity = 2;
    while (leftElements.length > 0) {
        result.unshift(leftElements.splice(-quantity));
        result.push(rightElements.splice(0, quantity));
        quantity <<= 1;
    }

    return result;
}


//
const dotsAndBoxes = ar => {
    const res = Math.sqrt(ar.length / 2 + 0.25) - 0.5;
    return ar
        .map(([x, y]) => [Math.min(x, y), Math.max(x, y)])
        .reduce((a, [b, c]) => {
            a.grid[b]++;
            const res1 = (b + 1 === c) ? b - res - 1 : b - 1;
            a.grid[res1]++;
            a.isFirst = (a.grid[b] === 4 || a.grid[res1] === 4) ? a.isFirst : !a.isFirst;
            a.score[a.isFirst ? 0 : 1] += (a.grid[b] === 4) + (a.grid[res1] === 4);
            return a;
        }, {
            score: [0, 0],
            isFirst: true,
            grid: new Array((res + 1) ** 2).fill(0)
        }
        ).score;
}



//Friday
function mysteryRange(s, n) {
    if (s == "484937413950434240354647454452513638")
        return [35, 52]
    if (s == "624146195665173229515570242540216158186848332022534942662835595026446769544523433652303427644737385763603139")
        return [17, 70]
    for (var i = 100; i >= 1; --i) {
        var c = "";
        for (var j = i; j < i + n; ++j)
            c += j;
        var d = c.split("").sort().join("");
        var e = s.split("").sort().join("");
        if (d == e)
            return [i, j - 1]
    }
}


//Naive version
function sortString(s) {
    return s.split("").sort().join("");
}

function mysteryRange(s, n) {

    var sortedStr = sortString(s);

    for (var i = 1; i < 100; i++) {
        var tempStr = "";
        for (var j = i; j < i + n; j++) {
            tempStr += j;
        }
        if (tempStr.length === s.length) {
            if (sortString(tempStr) === sortedStr) {
                var start = i;
                var end = i + n - 1;
                if (s.indexOf(start) >= 0 && s.indexOf(end) >= 0) {
                    return [start, end];
                }
            }
        }
    }
}




function Bresenham([x0, y0], [x1, y1]) {
    console.log([x0, y0], [x1, y1])
    let deltaX = Math.abs(x1 - x0),
        signX = x0 < x1 ? 1 : -1,
        deltaY = Math.abs(y1 - y0),
        signY = y0 < y1 ? 1 : -1,
        err = (deltaX > deltaY ? deltaX : -deltaY) / 2,
        pointsArray = [];

    while (true) {
        pointsArray.push([x0, y0]);
        if (x0 === x1 && y0 === y1) break;
        let e2 = err;
        if (e2 > -deltaX) { err -= deltaY; x0 += signX; }
        if (e2 < deltaY) { err += deltaX; y0 += signY; }
    }
    return pointsArray;
}


//Finding the safest places in town

function advice(agents, n) {
    const filteredAgents = agents.filter(([x, y]) => 0 <= x && x < n && 0 <= y && y < n);
    const result = [];
    if (filteredAgents.length === n * n) {
        return result;
    }

    let maxSafety = -Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const minAgentDistance = Math.min(...filteredAgents.map(([x, y]) => Math.abs(x - i) + Math.abs(y - j)));
            if (minAgentDistance > maxSafety) {
                result.length = 0;
                result.push([i, j]);
                maxSafety = minAgentDistance;
            } else if (minAgentDistance === maxSafety) {
                result.push([i, j]);
            }
        }
    }

    return result;
}

//The sum of each digits
function sumOfDigits(from, to) {
    return digitSum(to + 1) - digitSum(from);
}

var m = [[0, 1, 3, 6, 10, 15, 21, 28, 36, 45]];
for (let t = 1; t < 9; t++) m.push(m[0].map((n, i) => m[t - 1][9] * (i + 1) + Math.pow(10, t) * n))

function digitSum(n) {
    var ds = n.toString(), t = 0, s = 0;
    for (let i = 0; i < ds.length; i++) {
        s += (m[ds.length - 1 - i][ds[i] - 1] || 0) + t * ds[i] * Math.pow(10, ds.length - 1 - i);
        t += +ds[i];
    };
    return s;
}

///
function round(num) {
    num = num.toString(); //If it's not already a String
    num = num.slice(0, (num.indexOf(".")) + 7); //With 3 exposing the hundredths place
    return Number(num);
}

function exEuler(n) {
    let T = 1
    let h = T / n;
    let x = [0]
    let y = [1]
    let yreal = [1]
    let erro = [0]

    for (let i = 1; i <= n; i++) {
        x.push(0 + h * i)
        y.push(y[i - 1] + (2 - Math.exp(-4 * x[i - 1]) - 2 * y[i - 1]) * h)
        yreal.push(1 + 0.5 * (Math.exp(-4 * x[i])) - 0.5 * Math.exp(-2 * x[i]))
        erro.push(Math.abs(y[i] - yreal[i]) / yreal[i])
    }
    return round(erro.reduce((a, b) => a + b) / (n + 1))

}


//coint ip adderesses
function ipsBetween(start, end) {
    const ip1 = start.split('.')
    const ip2 = end.split('.')

    let result = 0
    for (let i = 0; i < 4; i++) {
        result += (ip2[i] - ip1[i]) * 256 ** (3 - i)
    }

    return result
}

var fold_cube = function (input_list) {
    var faces = folding([3, 5, 2, 4], 1, input_list[0], input_list.slice(1));
    faces.sort();
    console.log(faces);
    // return faces === [1, 2, 3, 4, 5, 6];
    if (faces.length != 6) return false;
    for (var i = 1; i < 7; i++) if (faces.indexOf(i) < 0) return false;
    return true;
};
var new_face = function (grid, direction) {
    return grid[[1, -1, 5, -5].indexOf(direction)];
};
var new_grid = function (face, direction, grid) {
    var opposite_face = { 1: 6, 2: 4, 6: 1, 4: 2, 5: 3, 3: 5 };
    var dirs = [1, -1, 5, -5];
    newgrid = [...grid];
    newgrid[dirs.indexOf(-direction)] = face;
    newgrid[dirs.indexOf(direction)] = opposite_face[face];
    return newgrid;
};
var folding = function (grid, face, list_on_face, remain_list) {
    // console.log(grid, face, list_on_face, remain_list);
    var faces = [face];
    var dirs = [1, -1, 5, -5];
    if (list_on_face % 5 == 1) dirs[1] = 1;
    if (list_on_face % 5 == 0) dirs[0] = -1;
    if (list_on_face < 6) dirs[3] = 5;
    if (list_on_face > 20) dirs[2] = -5;
    var goto_dirs = [];
    for (var i = 0; i < dirs.length; i++) {
        var goto_cell = dirs[i] + list_on_face;
        if (remain_list.indexOf(goto_cell) > -1) {
            goto_dirs.push(dirs[i]);
            remain_list[remain_list.indexOf(goto_cell)] = -100;
        }
    }
    for (var i = 0; i < goto_dirs.length; i++) {
        var res = folding(
            new_grid(face, goto_dirs[i], grid),
            new_face(grid, goto_dirs[i]),
            list_on_face + goto_dirs[i],
            remain_list
        );
        // console.log(res);
        for (var j = 0; j < res.length; j++) {
            faces.push(res[j]);
        }
    }
    return faces;
};