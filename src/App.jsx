import React from "react";
import {CssBaseline} from '@material-ui/core'
import Footer from "./components/Footer";
import Topnav from "./components/Topnav";
import Bodytitle from "./components/Bodytitle";
import Mainbody from "./components/Mainbody";

const App = () => {
    return(
        <>
            <CssBaseline />
            <Topnav />
            <main>
                <Bodytitle />
                <Mainbody />
            </main>
            <Footer />
        </>
    );
}
export default App;