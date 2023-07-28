import { useDispatch } from "react-redux";
import { Data } from "../../utils/interfaces";
import AdminLogin from "./AdminLogin";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const AdminPage: React.FC = (): JSX.Element => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = ({ email, password }: Data) => {


        dispatch(login({ email, password }))
        navigate("/")
    }


    return (<div><AdminLogin submit={handleSubmit} /></div>);
}

export default AdminPage;