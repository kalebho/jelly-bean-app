//JellyBeanController.js
const { 
    getJellyBeans,
    addJellyBean,
    modifyJellyBean,
    deleteJellyBean 
} = require('../servcies/JellyBeanService');

    
const getAll = (req, res) => {
    const jellyBeans = getJellyBeans(req.body.flavor);
    if (jellyBeans != null) {
        res.status(200).json(jellyBeans);
    }
    else {
        res.status(500).json({ message: 'Failed!' });
    }
};

const insertJellyBean = (req, res) => {
    const result = addJellyBean(req.body.flavor);
    if (result) {
        res.status(201).json({message: 'Added JellyBean Successfully'});
    }
    else {
        res.status(500).json({ message: 'Failed!' });
    }
};

const updateJellyBean = (req, res) => {
    const result = modifyJellyBean(req.body.oldFlavor, req.body.newFlavor);
    if (result) {
        res.status(200);
    }
    else {
        res.status(500).json({ message: 'Failed!' });
    }
};

const removeJellyBean = (req, res) => {
    const result = deleteJellyBean(req.body.flavor);
    if (result) {
        res.status(200).json({message: 'Success'});
    }
    else {
        res.status(500).json({ message: 'Failed!' });
    }
};

module.exports = {
    getAll,
    insertJellyBean,
    updateJellyBean,
    removeJellyBean
};