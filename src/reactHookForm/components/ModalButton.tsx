interface ModalButtonI {
    step: number
    nextStep: () => Promise<void>
}

export default function ModalButton({ step, nextStep }: ModalButtonI) {
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
                <button type="submit" className="modal__button">
                    Submit
                </button>
            )}
        </div>
    )
}
