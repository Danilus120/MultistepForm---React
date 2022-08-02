import Validator from './Validator'

class ValidatorInputs {
    static isNameValid = (name: string): string => {
        let errorMessage: string = ''

        try {
            Validator.checkValue(name)
                .isFilled()
                .isContainOnlyLetters()
                .isProperlyLength(3)

            return `${errorMessage}`
        } catch (message: any) {
            errorMessage = message
            return `${errorMessage}`
        }
    }

    static isAgeValid = (age: string): string => {
        let errorMessage: string = ''

        try {
            Validator.checkValue(age)
                .isFilled()
                .isNumber()
                .isBetweenNumbers(2, 100)

            return `${errorMessage}`
        } catch (message: any) {
            errorMessage = message
            return `${errorMessage}`
        }
    }

    static isEmailValid = (email: string): string => {
        let errorMessage: string = ''

        try {
            Validator.checkValue(email).isFilled().isEmail()

            return `${errorMessage}`
        } catch (message: any) {
            errorMessage = message
            return `${errorMessage}`
        }
    }

    static isPasswordValid = (password: string): string => {
        let errorMessage: string = ''

        try {
            Validator.checkValue(password).isFilled().isPassword()

            return `${errorMessage}`
        } catch (message: any) {
            errorMessage = message
            return `${errorMessage}`
        }
    }
}

type ValidatorType = Record<string, (val: string) => string>

const validatorInput: ValidatorType = {
    name: (name: string) => ValidatorInputs.isNameValid(name),
    age: (age: string) => ValidatorInputs.isAgeValid(age),
    email: (email: string) => ValidatorInputs.isEmailValid(email),
    password: (password: string) => ValidatorInputs.isPasswordValid(password),
}

export default validatorInput
