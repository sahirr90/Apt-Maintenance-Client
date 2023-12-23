import axios from 'axios';

const MAINTENANCEREQUEST_BASE_API_URL = 'http://localhost:8081/api/v1/MaintenanceRequests';

export function getAllMaintenanceRequests(){
    return axios.get(MAINTENANCEREQUEST_BASE_API_URL);
}

export function createMaintenanceRequest(maintenanceRequest){
    return axios.post(MAINTENANCEREQUEST_BASE_API_URL,maintenanceRequest);
}

export function getById(id){
    return axios.get(`${MAINTENANCEREQUEST_BASE_API_URL}/${id}`);
}

export function updateMaintenanceRequest(id, maintenanceRequest){
    return axios.put(`${MAINTENANCEREQUEST_BASE_API_URL}/${id}`, maintenanceRequest);
}

export function deleteMaintenanceRequest(id){
    return axios.delete(`${MAINTENANCEREQUEST_BASE_API_URL}/${id}`);
}
