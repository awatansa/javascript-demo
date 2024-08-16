import createDebounce from "./lib/debounce";

const fn = (n) => {
    const args = n;
    return (n) => { return n ** 2 };
}

const debouce = createDebounce(fn(25), 300)

