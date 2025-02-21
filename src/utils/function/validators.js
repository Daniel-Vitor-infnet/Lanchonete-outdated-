const validateEmail = (email) => {
    // Remover espaços extras antes e depois
    const trimmedEmail = email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Debug: Verificar o valor recebido
    console.log("E-mail recebido para validação:", trimmedEmail);

    if (!trimmedEmail) {
        return { error: true, helperText: "O campo e-mail é obrigatório" };
    }

    if (!emailRegex.test(trimmedEmail)) {
        console.log("Regex falhou na validação do e-mail.");
        return { error: true, helperText: "E-mail inválido" };
    }

    return { error: false, helperText: null };
};

export default validateEmail;
