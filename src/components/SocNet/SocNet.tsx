import * as SC from "./SocNetStyled"

import { ReactComponent as TwitterSvg } from "../../assets/images/icons/twitter.svg"
import { ReactComponent as LinkedInSvg } from "../../assets/images/icons/linkedin.svg"
import { ReactComponent as GitHubSvg } from "../../assets/images/icons/github.svg"
import { NavLink } from 'react-router-dom';



const SocNet: React.FC = (): JSX.Element => {
    return (<SC.SocNetList>
        <SC.SocNetItem>
            <NavLink to="https://github.com/Oleksandr-Berd" target="_blank" rel="noopener noreferrer"> <GitHubSvg fill="white"/></NavLink>
        </SC.SocNetItem>
        <SC.SocNetItem>
            <NavLink to="https://twitter.com/O7bvkxqt2f8" target="_blank" rel="noopener noreferrer"> <TwitterSvg fill="white" /></NavLink>
        </SC.SocNetItem>
        <SC.SocNetItem>
            <NavLink to="https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/" target="_blank" rel="noopener noreferrer"> <LinkedInSvg fill="white" /></NavLink>
        </SC.SocNetItem>
    </SC.SocNetList> );
}
 
export default SocNet;