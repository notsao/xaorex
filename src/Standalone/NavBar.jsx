function NavBar() {
    return (
        <div className="flex justify-around items-center p-4 bg-[#1B263B]">
            <div className="text-2xl font-bold">XAOREX</div>
            <nav>
                <ul className="flex space-x-4">
                    <li className="hover:text-gray-300 hover:font-bold duration-300 hover:cursor-pointer">Services</li>
                    <li className="hover:text-gray-300 hover:font-bold duration-300 hover:cursor-pointer">Prices</li>
                    <li className="hover:text-gray-300 hover:font-bold duration-300 hover:cursor-pointer">About Us</li>
                    <li className="hover:text-gray-300 hover:font-bold duration-300 hover:cursor-pointer">FAQs</li>
                </ul>
            </nav>
            <button className="bg-[#531AFD] px-4 py-2 rounded duration-300 hover:bg-[#3F16BB]">Login</button>
        </div>
    );
}

export default NavBar;