const Burger = ({ isOpen, handleBurger }) => {
	return (
		<button
			type="button"
			className={`hidden backdrop-blur-[21px] bg-myBrown rounded-[32px] border border-[#B0B0B0] w-[44px] h-[44px] tb:block z-10 transition-all duration-700 relative ${isOpen ? 'border-none' : ''}`}
			onClick={handleBurger}>
			<span className={`absolute w-[20px] h-[3px] top-[12px] bg-white rounded-[32px] translate-x-[-50%] left-[50%] transition-all duration-300 ${isOpen ? 'rotate-[45deg] top-[50%]' : ''}`}></span>
			<span className={`absolute top-1/2 transform -translate-y-1/2 w-[20px] h-[3px] bg-white rounded-[32px] translate-x-[-50%] left-[50%] ${isOpen ? 'hidden' : ''}`}></span>
			<span className={`absolute bottom-[12px] w-[20px] h-[3px] bg-white rounded-[32px] translate-x-[-50%] left-[50%] transition-all duration-300 ${isOpen ? 'rotate-[-45deg] top-[50%]' : ''}`}></span>
		</button>
	)
}

export default Burger