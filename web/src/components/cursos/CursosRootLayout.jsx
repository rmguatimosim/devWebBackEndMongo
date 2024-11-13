import { Outlet } from "react-router-dom";
import CursosNavigation from './CursosNavigation'


const CursosRootLayout = () =>{
    return(
        <>  
            <CursosNavigation />
            <Outlet />
        </>
    )



}

export default CursosRootLayout;