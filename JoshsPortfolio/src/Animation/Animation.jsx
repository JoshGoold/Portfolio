import { motion } from "framer-motion";
export default function Animation(props){

    return(
        <motion.div
        initial={{opacity: 0, scale: 0.1}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 3, delay: 0.5}}
         id="planet">
            <div id="text"><h1 className="textcontent">{props.title}</h1></div>
            <div id="satellite"></div>
        </motion.div>
    );
}

