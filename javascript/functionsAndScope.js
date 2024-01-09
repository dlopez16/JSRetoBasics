const varVsLet = () => {
    {
        let b = 'b';
        var c = 'c';
    }
    console.log(b);
}

const obj = {
    name: 'bla bla',
    func: function()
    {
        console.log(this);
    },
    arrow_func: () => {
        console.log(this);
    }
};

const callback = (func) => func('secret string');

const higherOrderFunction = a => b => a + b;

const higherOrderFunctionScope = () => {
    let counter = 0;
    return () => {
        counter++;
        console.log(counter);
    }
}

// varVsLet();
// obj.func(); obj.arrow_func();
// callback((str) => console.log(str));
// const func = higherOrderFunction(1); console.log(func(2), higherOrderFunction(3)(5));
// const counter = higherOrderFunctionScope(); counter(); counter(); counter();