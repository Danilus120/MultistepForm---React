class Validator {
    private value: string = ''

    checkValue = (value: string) => {
        this.value = value

        return this
    }

    isFilled = () => {
        if (this.value.trim().length === 0) {
            throw new Error('Cannot be empty')
        }

        return this
    }

    isEmail = () => {
        // Regexp that matches the email format
        const regexp =
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (!this.value.match(regexp)) {
            throw new Error('Invalid email')
        }

        return this
    }

    isNumber = () => {
        if (isNaN(Number(this.value))) {
            throw new Error('Invalid number')
        }

        return this
    }

    isContainOnlyLetters = () => {
        // Regexp that matches the letters format
        const regexp = /^[a-zA-Z]+$/

        if (!this.value.match(regexp)) {
            throw new Error('Must contain only letters')
        }

        return this
    }

    isBetweenNumbers = (min: number, max: number) => {
        if (Number(this.value) < min || Number(this.value) > max) {
            throw new Error(`Must be between ${min} and ${max}`)
        }

        return this
    }

    isProperlyLength = (minLength: number) => {
        if (this.value.length < minLength) {
            throw new Error(`Must contain more than ${minLength} characters`)
        }

        return this
    }

    isPassword = () => {
        // Regexp for password that must contain at least one number, one letter big and small and one special character
        const regexp =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (!this.value.match(regexp)) {
            throw new Error('Invalid password')
        }

        return this
    }
}

export default new Validator()
