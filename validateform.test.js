const validateForm = require('./validateform');

describe('Validation du formulaire', () => {

    test('Nom d\'utilisateur trop court', () => {
        const result = validateForm('ab', 'password123', 'test@example.com');
        expect(result.isValid).toBe(false);
        expect(result.message).toBe("Le nom d'utilisateur est trop court.");
    });

    test('Mot de passe trop court', () => {
        const result = validateForm('username', 'pass', 'test@example.com');
        expect(result.isValid).toBe(false);
        expect(result.message).toBe("Le mot de passe est trop court.");
    });

    test('Email invalide', () => {
        const result = validateForm('username', 'password123', 'invalid-email');
        expect(result.isValid).toBe(false);
        expect(result.message).toBe("L'email est invalide.");
    });

    test('Tous les champs valides', () => {
        const result = validateForm('username', 'password123', 'test@example.com');
        expect(result.isValid).toBe(true);
        expect(result.message).toBe("Formulaire valide.");
    });

});
