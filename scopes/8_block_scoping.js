/** Illustrates local variables scope using var */
function diff(x, y) {
    if (x > y) {
        var temp = x; // temp is attached to diff scope and can be accessed outside if
        x = y;
        y = temp;
    }

    console.log(temp);
    return y - x;
}
diff(10, 5);

/** Illustrates how scope can be restricted to block using let statement */
function diffVersion2(x, y) {
    if (x > y) {
        let temp = x; // As of ES6, temp will be restricted to only if's scope
        x = y;
        y = temp;
    }

    console.log(temp); // Reference error, temp is not defined.
    return y - x;
}
diff(10, 5);

/** Illustrates an explicit block scope */
function formatStr(str) {
    {
        let prefix, rest; // explictly performing block scoping
        prefix = str.slice(0, 3);
        rest = str.slice(3);
        str = prefix.toUpperCase() + rest;
    }

    if (/^FOO:/.test(str)) {
        return str;
    }

    return str.slice(4)
}

/** Illustrates usage of let keyword in loop since it makes no sense to have the variable 
 * "i" live after the for loop
 */
function repeat(fn, n) {
    var result;

    for(let i = 0; i < n; i++) {
        result = fn(result, i);
    }

    return result;
}

/** Sometimes var is more suited to a use case compared to let */

function lookupString(searchStr) {
    try {
        var id = getRecord (searchStr);
    }
    catch(err) {
        var id = -1; // redeclared var stylistically close to its usage
    } 
    return id; // Since var is now function scope and not block
}