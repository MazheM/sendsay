const usernameRegex = /^[a-zAZ0-9_]+$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^((?![а-яА-Я]+).)*$/;

export function validateUsername(value) {
    return value.match(usernameRegex);
}

export function validateEmail(value) {
    return value.match(emailRegex);
}

export function validatePassword(value) {
    return value.match(passwordRegex);
}