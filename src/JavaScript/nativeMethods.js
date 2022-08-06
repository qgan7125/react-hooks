// 1) To create my call function with out apply, bind function
// The call() method calls the function with a given this value and arguments provided individually.
Function.prototype.myCall = function (
    ctx,
    ...args
) {
    // Check the if the given object is null or undefine
    // Use "globalThis" because there are browser environment or node environment
    ctx = ( ctx === null || ctx === undefined) ? globalThis : Object(ctx);

    // Use "Symbol" to create unique key
    const key = Symbol('myCall');

    // This function would not print object in the result
    Object.defineProperty(ctx, key, {
        enumerable: false,
        value: this,
    })

    // In case there is any result of function.
    const result = ctx[key](...args)

    // delete old function
    delete ctx.fn;
    return result;
};

// 2) To create my bind function
Function.prototype.myBind = function (ctx) {
    const fn = this;
    return function () {
        // arguments is an Array-like object accessible inside functions that 
        // contains the values of the arguments passed to that function.
        return fn.apply(ctx, arguments)
    }
};

function fn(a, b) {
    console.log(this, a, b);
}

let newFn = fn.myBind({});
newFn(2, 3);

