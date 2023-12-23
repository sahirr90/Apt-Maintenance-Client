import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as maintenanceRequestService from '../service/AptMaintenanceRequestService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
  
export const MaintenanceRequestTable = () => {
    const [maintenanceRequests, setMaintenanceRequests]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        maintenanceRequestService.getAllMaintenanceRequests()
        .then(res => {
            setMaintenanceRequests(res.data);
        })
    }, [])
    const goToUpdate = (id) => {
        navigate(`/${id}`);
    }

    const deleteMaintenanceRequest = (id) => {
        maintenanceRequestService
          .deleteMaintenanceRequest(id)
          .then(() => {
            maintenanceRequestService
              .getAllMaintenanceRequests()
              .then((res) => {
                setMaintenanceRequests(res.data);
              })
              .catch((error) => {
                console.error('Error fetching maintenance requests:', error);
              });
          })
          .catch((error) => {
            console.error('Error deleting maintenance request:', error);
          });
      };
    

    return (
        <div >
            <Table sx={{minWidth:900}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        Apt Number
                    </TableCell>
                    <TableCell>
                       Created At
                    </TableCell>
                    <TableCell>
                       Description
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        maintenanceRequests.map((maintenanceRequest)=> {
                            return(
                                <TableRow
                                    hover
                                    key={maintenanceRequest.id}
                                >
                                    <TableCell>
                                        {maintenanceRequest.id}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.email}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.aptNumber}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.createAt}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.description}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(maintenanceRequest.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deleteMaintenanceRequest(maintenanceRequest.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}