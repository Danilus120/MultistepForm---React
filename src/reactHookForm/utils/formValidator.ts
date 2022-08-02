import * as Yup from 'yup'

// Regexp that matches only letters in string
const onlyLettersRegexp = /^[a-zA-Z]+$/
const lettersRegexp = new RegExp(onlyLettersRegexp, 'g')

// Regexp that matches at least numbers in string
const atLeastOneNumberRegexp = /^(?=.*[0-9])/
const numberRegexp = new RegExp(atLeastOneNumberRegexp, 'g')

// Regexp that matches string with at least one lowercase
const atLeastOneLowercaseRegexp = /^(?=.*[a-z])/
const lowercaseRegexp = new RegExp(atLeastOneLowercaseRegexp, 'g')

// Regexp that matches string with at least one uppercase
const atLeastOneUppercaseRegexp = /^(?=.*[A-Z])/
const uppercaseRegexp = new RegExp(atLeastOneUppercaseRegexp, 'g')

// Regexp that matches string with at least one special sign
const atLeastOneSpecialSignRegexp = /^(?=.*[!@#$%^&*])/
const specialSignRegexp = new RegExp(atLeastOneSpecialSignRegexp, 'g')

const formValidation = {
    nameValidator: {
        required: {
            value: true,
            message: 'This input is required',
        },
        minLength: {
            value: 3,
            message: 'This input should have at least 3 letters',
        },
        maxLength: {
            value: 20,
            message: 'This input should not be longer than 20 letters',
        },
        pattern: {
            value: /^[a-zA-Z]+$/i,
            message: 'This input should contain only letters',
        },
    },
    ageValidator: {
        required: {
            value: true,
            message: 'This input is required',
        },
        min: {
            value: 2,
            message: 'Input should not be lower than 2',
        },
        max: {
            value: 100,
            message: 'Input should not be higher than 100',
        },
        pattern: {
            value: /^[0-9]*$/i,
            message: 'Input should be a number',
        },
    },
    emailValidator: {
        required: {
            value: true,
            message: 'This input is required',
        },
        pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            message: 'Input should contain valid adress',
        },
    },
    passwordValidator: {
        required: {
            value: true,
            message: 'This input is required',
        },
        min: {
            value: 8,
            message: 'Input shound contain minimum 8 chars',
        },
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
            message:
                'Input should contain at least 1 special char, 1 number, 1 uppercase letter and 1 lowercase letter',
        },
    },
}

export default formValidation
