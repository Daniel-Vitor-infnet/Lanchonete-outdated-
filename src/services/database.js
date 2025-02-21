


const generateUid = () => {
    return 'uid-' + Math.random().toString(36).slice(2, 17) + Math.random().toString(36).slice(2, 17);
};



const update = (data, id) => {
    const totalData = list();
    const index = totalData.findIndex(item => item.id === id);
    totalData[index] = data;
    localStorage.setItem("items", JSON.stringify(totalData));
};


const drop = (id) => {
    const totalData = list();
    const index = totalData.findIndex(item => item.id === id);
    totalData.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(totalData));
};


const get = (id) => {
    const totalData = list();

    return totalData.find((item) => item.id === id);

};

const list = () => {
    const data = localStorage.getItem("items");
    if (data) {
        return JSON.parse(data);
    }
    return [];

};


const save = (data) => {
    const totalDate = list();
    const d = {
        id: generateUid(),
        ...data
    }

    totalDate.push(d);
    localStorage.setItem("items", JSON.stringify(totalDate));

};


export { save, update, drop, get, list };