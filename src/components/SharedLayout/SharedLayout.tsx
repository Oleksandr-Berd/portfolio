import { Suspense } from "react";
import { Dna } from "react-loader-spinner";
import { Outlet } from "react-router-dom"

import * as SC from "./SharedLayoutStyled"

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SharedLayout:React.FC = (): JSX.Element => {
    return (<SC.LayoutStyled>
        <Header />
        <SC.MainStyled>
        <Suspense fallback={<Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />}>
<Outlet/>
            </Suspense>
        </SC.MainStyled>
        <Footer/>
    </SC.LayoutStyled> );
}
 
export default SharedLayout;