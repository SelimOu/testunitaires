function validateForm(username, password, email) {
    if (username.length < 3) {
        return { isValid: false, message: "Le nom d'utilisateur est trop court." };
    }

    if (password.length < 8) {
        return { isValid: false, message: "Le mot de passe est trop court." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, message: "L'email est invalide." };
    }

    return { isValid: true, message: "Formulaire valide." };
}

module.exports = validateForm;
