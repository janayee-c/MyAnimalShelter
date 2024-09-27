import React from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import AnimalInformation from "./pages/AnimalInformation";
import Services from "./pages/Services";
import Sponsors  from "./pages/Sponsors";
import StaffInformation from "./pages/StaffInformation";
import VisitorsAndAppointments from "./pages/VisitorsAndAppointments";

class App extends React.Component {
  state = {
    name: ""
  }
  componentDidMount() {
    fetch("http://localhost:3001")
        .then(res => res.json())
        .then(data => this.setState({ name: data.name }))
  }

  render() {
    return (
        <div>
        <BrowserRouter>
          <Routes>
            <Route index element = {<Home />} />
              <Route path="/animal_information" element={<AnimalInformation />} />
              <Route path="/services" element={<Services />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/staff_information" element={<StaffInformation />} />
              <Route path="/visitors_and_appointments" element={<VisitorsAndAppointments />} />
          </Routes>
        </BrowserRouter>
        </div>
  )
  }
}
export default App

