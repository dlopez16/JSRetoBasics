const obj = {};
const arr = [];
let num = 0;
let str = "bla bla";

function objVsArr() {
    console.log(typeof obj, typeof arr);
}

function constVsLet() {
    {
        // const a = 0;
        // a = 2;
        // console.log(a);
    }
    {
        // const a = {a: 0};
        // a.a = 1;
        // console.log(a);
    }
    {
        const a = 'string';
        a += 'bla';
        console.log(a[3]);
    }
}
// objVsArr();
// constVsLet();