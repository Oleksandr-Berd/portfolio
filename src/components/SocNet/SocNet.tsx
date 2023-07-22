import * as SC from "./SocNetStyled"

import { ReactComponent as TwitterSvg } from "../../assets/images/icons/twitter.svg"
import { ReactComponent as LinkedInSvg } from "../../assets/images/icons/linkedin.svg"
import { ReactComponent as GitHubSvg } from "../../assets/images/icons/github.svg"
import { NavLink } from 'react-router-dom';

interface IProps {
    theme: string,
    $justified: string
}



const SocNet: React.FC<IProps> = ({ theme, $justified }): JSX.Element => {
    
    return (<SC.SocNetList $justified={$justified}>
        <SC.SocNetItem>
            <NavLink to="https://github.com/Oleksandr-Berd" target="_blank" rel="noopener noreferrer"> <GitHubSvg fill={theme === "light" ? "#fff" : "#33323D"} /></NavLink>
        </SC.SocNetItem>
        <SC.SocNetItem>
            <NavLink to="https://twitter.com/O7bvkxqt2f8" target="_blank" rel="noopener noreferrer"> <TwitterSvg fill={theme === "light" ? "#fff" : "#33323D"} /></NavLink>
        </SC.SocNetItem>
        <SC.SocNetItem>
            <NavLink to="https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/" target="_blank" rel="noopener noreferrer"> <LinkedInSvg fill={theme === "light" ? "#fff" : "#33323D"} /></NavLink>
        </SC.SocNetItem>
    </SC.SocNetList> );
}
 
export default SocNet;