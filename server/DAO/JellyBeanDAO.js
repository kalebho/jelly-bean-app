const JellyBean = require('../models/JellyBean');

// Initialize the jellyBeans array in a closure
let jellyBeans = [];

// Functions
const getAll = () => {
    return jellyBeans;
};

const insert = (flavor) => {
    const newJellyBean = JellyBean(flavor);
    jellyBeans.push(newJellyBean);
    return true;
};

const update = (oldFlavor, newFlavor) => {
    let updated = false;
    for (let i = 0; i < jellyBeans.length; i++) {
        if (jellyBeans[i] === oldFlavor) {
            jellyBeans[i] = newFlavor;
            updated = true;
        }
    }
    return updated;
};

const remove = (flavor) => {
    jellyBeans = jellyBeans.filter(currFlavor => currFlavor !== flavor);
    return true;
};

// Export the functions
module.exports = {
    getAll,
    insert,
    update,
    remove
};
