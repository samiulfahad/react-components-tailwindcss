const Backdrop = (props) => {

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-lg z-20 animate-bounce bounce-once">
            <div className="mt-20 w-5/6  md:w-2/3 lg:w-2/5 mx-auto bg-white px-4 pb-20 pt-10 rounded-md h-1/2">
                {props.children}
            </div>
        </div>
    )
}

export default Backdrop