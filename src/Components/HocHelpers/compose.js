const compose = (...funcs) => comp => {
    return funcs.reduceRight((prevResult, func) => {
        return func(prevResult)
    }, comp);
}

export default compose;