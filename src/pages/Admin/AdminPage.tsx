import { Data } from "../../utils/interfaces";
import AdminLogin from "./AdminLogin";

const AdminPage: React.FC = (): JSX.Element => {
    
    const handleSubmit = ({email, password}: Data) => {



        console.log("email: ", email, "password: ", password);
    
}


    return (<div><AdminLogin submit={handleSubmit} /></div> );
}
 
export default AdminPage;