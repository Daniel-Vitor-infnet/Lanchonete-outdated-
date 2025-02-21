const validateDiaper = (data) => {
    return []
};

const validateSleep = (data) => {
    return []
};

const validateEat = (data) => {
    return []
};

const validateFields = (data, actionType) => {
    switch (actionType) {
        case "1":
            return validateSleep(data);

        case "2":
            return validateEat(data);

        case "3":
            return validateDiaper(data);

        default:
            return validateEat(data);
    }
};


export default validateFields;