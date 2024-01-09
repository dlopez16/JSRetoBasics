const pseudoQuery = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({name: "Mosi"}), 250);
    });
}

const pseudoFailedQuery = () => {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("err: Boo!")), 250);
    });
}

const asyncTryCatch = async () => {
    // throw new Error("Error message rawr");
    try
    {
        throw new Error("Error message rawr");
    }
    catch(err)
    {
        console.log(err.message);
    }
    finally
    {
        console.log('Done.');
    }
}

const asyncAwait = async () => {
    const response = pseudoQuery();
    console.log(response);
}

const asyncAwaitFailure = async () => {
    console.log(await pseudoFailedQuery());
    try
    {
        const result = await pseudoFailedQuery();
        console.log(result);
    }
    catch(err)
    {
        console.log(err.message);
    }
}

// asyncTryCatch();
// asyncAwait();
// asyncAwaitFailure();