
const createDebounce = (fn, t) => {
    let timer;
    return function (...args) {
        clearInterval(timer);
        const timer = setTimeout(() => {
            fn.apply(args)
        }, t);
    }
}

export default createDebounce;