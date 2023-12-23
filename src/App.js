import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container} from '@mui/material';
import {MaintenanceRequest} from "./pages/MaintenanceRequest";
import {NoContent} from "./pages/NoContent";
import {Update} from "./pages/Update";
import {Add} from "./pages/Add.js";
function App() {

  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MaintenanceRequest />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NoContent />} />
        </Routes>
      </BrowserRouter>
     
    </Container>
  );
}

export default App;

