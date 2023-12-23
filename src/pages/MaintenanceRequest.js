import {MaintenanceRequestTable} from "../components/MaintenanceRequestTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";

export const MaintenanceRequest =() => {
    const navigate = useNavigate();

    function addRequest(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addRequest()}>Add Request</Button>
            <MaintenanceRequestTable />
        </>
    )
}
