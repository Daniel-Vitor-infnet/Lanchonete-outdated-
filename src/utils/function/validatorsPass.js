const validatePassword = (password) => {
    if (!password || password.trim() === "") {
        return { error: true, helperText: "Você precisa digitar uma senha." };
    } else if (password.length > 30) {
        return { error: true, helperText: "A senha tem um limite de 30 caracteres." };
    } else {
        return { error: false, helperText: null };
    }
};

export default validatePassword;
