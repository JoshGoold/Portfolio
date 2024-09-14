import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Animation from './Animation/Animation.jsx'
import { motion } from "framer-motion";
export const Dashboard = () => {

const nav = useNavigate();

    return(
        <>
        <Animation/>
        <footer>
            
        <div className="background">
            <svg
            className="s"
                version="1.1"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0 0 1600 900">
                <defs>
                    <path 
                        id="wave"
                        fill="rgba(105, 27, 252, 0.6)"
                        d="M-363.852,502.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.378, 505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                        />
                </defs>
                <g>
                    <use xlinkHref="#wave" opacity="0.4">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="8s"
                            calcMode="spline"
                            values="270 230; -334 180; 270 230"
                            keyTimes="0; .5; 1"
                            keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0;"
                            repeatCount="indefinite"
                            />
                    </use>
                    <use xlinkHref="#wave" opacity="0.6">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="6s"
                            calcMode="spline"
                            values="-270 230; -334 180; -270 230"
                            keyTimes="0; .6; 1"
                            keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0;"
                            repeatCount="indefinite"
                            />
                    </use>

                    <use xlinkHref="#wave" opacity="0.6">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="4s"
                            calcMode="spline"
                            values="0 230; -140 200; 0 230"
                            keyTimes="0; .5; 1"
                            keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0;"
                            repeatCount="indefinite"
                            />
                    </use>
                </g>
            </svg>
        </div>
        <motion.section
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 2, duration: 1}}>
            <ul className="socials">
                <h1 className="text-6xl mb-7 font-thin ">Joshua Goold</h1>
            </ul>
            <ul className="links">
                <li><a className="text-1.2xl font-thin hover:font-normal cursor-pointer t" onClick={()=> nav('/contact')}>Contact</a></li>
                <li><a className="text-2xl font-thin hover:font-normal cursor-pointer t" onClick={()=> nav('/portfolio')}>Portfolio</a></li>
                <li><a className="text-1.2xl font-thin hover:font-normal cursor-pointer t" onClick={()=> nav('/resume')}>Resume</a></li>
            </ul>
        </motion.section>
    </footer>
        </>
    )
}