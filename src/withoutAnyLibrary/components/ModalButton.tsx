interface ModalButtonI {
    step: number
    nextPage: () => void
    submit: () => void
}

export default function ModalButton({ step, nextPage, submit }: ModalButtonI) {
    return (
        <div className="modal__buttonContainer">
            {step < 5 && (
                <button
                    type="button"
                    className="modal__button"
                    onClick={nextPage}
                >
                    Next
                </button>
            )}
            {step === 5 && (
                <button
                    type="submit"
                    className="modal__button"
                    onClick={submit}
                >
                    Submit
                </button>
            )}
        </div>
    )
}
