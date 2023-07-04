import { useState, Fragment } from "react"

const Modal = props => {
    const [showModal, setShowModal] = useState(false)
    const onClose = () => {
        setShowModal(false)
    }
    const showModalHandler =() => {
        setShowModal(true)
    }
    return (
        <Fragment>
            {showModal &&
                <div className="fixed inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-lg z-20 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center pb-16  w-2/3 md:w-1/3 h-1/3 -mt-20 mx-auto bg-white px-10 py-4 rounded-md">
                        <p className="py-10 text-2xl font-bold text-center">Hello, this is Samiul Fahad,, author of this tiny modal</p>
                        <button onClick={onClose} className="px-6 py-1 font-bold rounded-2xl border-2 border-blue-500 bg-blue-600 text-white hover:text-blue-500 hover:bg-transparent duration-300">Close</button>
                    </div>
                </div>
            }
            { !showModal && 
                <div className="flex justify-center items-center h-screen -mt-20">
                    <button onClick={showModalHandler} className="px-8 py-2 rounded-lg bg-sky-500 text-white font-bold">Show Modal</button>
                </div>
            }
        </Fragment>
    )
}

export default Modal