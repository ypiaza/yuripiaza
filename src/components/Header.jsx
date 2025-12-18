const Header = () => {
    return (
        <div className="flex items-center justify-between font-bold text-white/50 py-5 px-20">
            <div>
                <h2 className="hover:text-cyan-300 hover:px-3 duration-300 transition-all cursor-pointer">yuripiaza</h2>
            </div>
            <div>
                <ul className="flex items-center gap-5">
                    <li>Sobre mim</li>
                    <li>Skills</li>
                    <li>Projetos</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
