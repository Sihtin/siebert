export const getFromLocalStorage = (key) =>{
    if(window !== "undefined") {
        const storedData = window.localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    }
}

export const saveToLocalStorage = (key, data) => {
    if(window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
}