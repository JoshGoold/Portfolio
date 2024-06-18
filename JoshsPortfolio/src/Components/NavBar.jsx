import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const NavBar = () =>{
    const nav = useNavigate();
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a onClick={()=> nav("/")} className="mx-2 w-10 cursor-pointer t hover:scale-150">←</a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/learning/me/my-library/in-progress"><FaLinkedin/></a>
                <a href="https://github.com/JoshGoold"><FaGithub/></a>
            </div>
        </nav>
    )
}
export default NavBar