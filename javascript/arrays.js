const arr = [1, 3, 2, 4, 5, 3, 6, 7];

function indexArr()
{
    console.log(arr[0]);
}

function loopArray()
{
    {
        let i = 0;
        const l = arr.length;
        while (i < l)
        {
            console.log(arr[i]);
            i++;
        }
    }
    // {
    //     for (let i = 0, l = arr.length; i < l; i++)
    //     {
    //         console.log(arr[i]);
    //     }
    // }
    // {
    //     for (const elem of arr)
    //     {
    //         console.log(elem);
    //     }
    // }
    // {
    //     const arr = [];
    //     let i = 0;
    //     const l = arr.length;
    //     do {
    //         console.log(i);
    //         i++;
    //     } while(i < l);
    // }
    // {
    //     //BONUS:
    //     for (let i = arr.length; i--;)
    //     {
    //         console.log(elem);
    //     }
    // }
}

function filterArr()
{
    const result = arr.filter(function(elem){
        return elem % 2 == 0;
    });
    console.log(result);
    console.log(arr);
};

function mapArr()
{
    const result = arr.map(function(elem){
        return "num: " + elem;
    });
    console.log(result);
}

function reduceArr()
{
    //params: function(current_value, elem), default_value;
    const result = arr.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log(result);
}

function recursiveIteration(i)
{
    if (i >= arr.length) return;
    console.log(arr[i]);
    recursiveIteration(i + 1);
}

function recursiveCount(i)
{
    if (i >= arr.length) return 0;
    return recursiveCount(i + 1) + arr[i];
}
// loopArray();
// filterArr();
// mapArr();
// reduceArr();
// recursiveIteration(0);
// console.log(recursiveCount(0));