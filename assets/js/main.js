//============= START - FORM DECLARATION =============//
(function () {
    'use strict'

    //DECLARATION DU FORMULAIRE
    let form = document.getElementById('lessonForm')

    //Ecoute de l'action submit et lancement de la fonction
    form.addEventListener('submit', function (event) {

        Array.from(form.elements).forEach((input) => {
            if (input.type !== "submit") {
                if (!validateFields(input)) {

                    event.preventDefault();
                    event.stopPropagation();

                    input.classList.remove("is-valid");
                    input.classList.add("is-invalid");
                    input.nextElementSibling.style.display = 'block';
                } else {
                    input.nextElementSibling.style.display = 'none';
                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");
                }
            }
        });
    }, false)
})()
//============= END - FORM DECLARATION =============//



//============= START - VALIDATION FUNCTION =============//
//Valisation d'un champ REQUIRED
function validateRequired(input) {
    return !(input.value == null || input.value == "");
}
//Validation du nombre de caracteres: MIN & MAX
function validateLength(input, min, max) {
    return !(input.value.length < min || input.value.length > max);
}
//Validation des caracteres : LATIN & LETTRES
function validateText(input) {
    return input.value.match("^[A-Za-z]+$");
}
//Validation d'un email
function validateEmail(input) {
    let EMAIL = input.value;
    let POSAT = EMAIL.indexOf("@");
    let POSDOT = EMAIL.indexOf(".");

    return !(POSAT < 1 || (POSDOT - POSAT < 2));
}
//Validation d'un code postal
function validatePostCode(input) {
    return input.value.match("^(0[1-9]|[1-9][0-9])[0-9][0-9][0-9]$");
}
//Validation d'une adresse
function validateAddress(input) {
    return input.value.match(/^\s*\S+(?:\s+\S+){2}/);
}
// Validation du Numero de telephone
function validatePhoneNumber(input) {
    return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
}
// Validation d'un checkbox
function validateTerms(input) {
    return input.checked;
}
//============= END - VALIDATION FUNCTION =============//



//============= START - VALIDATION FORM FIELDS =============//
function validateFields(input) {
    let fieldName = input.name;

    //validation du prenom
    if (fieldName == "firstName") {
        if (!validateRequired(input)) {
            return false;
        }
        if (!validateLength(input, 2, 20)) {
            return false;
        }
        if (!validateText(input)) {
            return false;
        }
        return (true);
    }

    //validation du nom
    if (fieldName == "lastName") {
        if (!validateRequired(input)) {
            return false;
        }
        if (!validateLength(input, 2, 20)) {
            return false;
        }
        if (!validateText(input)) {
            return false;
        }
        return (true);
    }

    //validation de l'email
    if (fieldName == "email") {
        if (!validateRequired(input)) {
            return false;
        }
        if (!validateEmail(input)) {
            return false;
        }
        return (true);
    }

    //validation du numero de telephone
    if (fieldName == "phoneNumber") {
        if (!validateRequired(input)) {
            return false;
        }
        if (!validatePhoneNumber(input)) {
            return false;
        }
        return (true);
    }

    //validation de l'adresse
    if (fieldName == "address") {
        if (!validateRequired(input)) {
            return false;
        }
        if (!validateAddress(input)) {
            return false;
        }
        return (true);
    }

    //validation de la ville
    if (fieldName == "city") {
        if (!validateRequired(input)) {
            return false;
        }
        return (true);
    }

    //validation du code postal
    if (fieldName == "postCode") {
        if (!validatePostCode(input)) {
            return false;
        }
        return (true);
    }

    //validation des conditions
    if (fieldName == "conditions") {
        if (!validateTerms(input)) {
            return false;
        }
        return (true);
    }
}
//============= END - VALIDATION FORM FIELDS =============//