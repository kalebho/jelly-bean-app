
const { 
    getAll,
    insert,
    update,
    remove 
} = require('../DAO/JellyBeanDAO');


const getJellyBeans = () => {
    const jellyBeans = getAll();
    return jellyBeans;
};

const addJellyBean = (flavor) =>  {
    const result = insert(flavor);
    return result;
}

const modifyJellyBean = (oldFlavor, newFlavor) =>  {
    const result = update(oldFlavor, newFlavor);
    return result;
}

const deleteJellyBean = (flavor) =>  {
    const result = remove(flavor);
    return result;
}

module.exports = {
    getJellyBeans,
    addJellyBean,
    modifyJellyBean,
    deleteJellyBean
};