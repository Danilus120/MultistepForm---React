interface ModalButtonI {
    step: number
    nextStep: () => void
    isFormValid: boolean
}

export default function ModalButton({
    step,
    nextStep,
    isFormValid,
}: ModalButtonI) {
    return (
        <div className="modal__buttonContainer">
            {step < 5 && (
                <button
                    type="button"
                    className="modal__button"
                    onClick={nextStep}
                >
                    Next
                </button>
            )}
            {step === 5 && (
                <button
                    type="submit"
                    className="modal__button"
                    disabled={!isFormValid}
                >
                    Submit
                </button>
            )}
        </div>
    )
}
