const handleInputChange = (field, value, data, setData) => {
    setData({
        ...data,
        [field]: value
    });
};

export {
    handleInputChange
};
