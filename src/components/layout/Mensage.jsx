// import { useEffect, useState } from "react";
// import styles from '../../styles/layout/Mensage.module.css'

// export default function Mensage({type, msm}){
//     const [visible, setVisible] = useState(false)

//     useEffect(()=>{
//         if(!msm){
//             setVisible(false)
//             return
//         }

//         setVisible(true)

//     }, [msm])
//     return(
//         <>
//         {visible && (
//             <main className={`${styles.mensagem} ${styles[type]}`}>
//                 <h2></h2>
//                 <p>{msm}</p>
//                 <button>Login</button>
//             </main>
//         )}
//         </>
//     )
// }