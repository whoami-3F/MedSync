import './App.css'
import {
  LoginPage,
  PatientFormPage,
  AppointmentFormPage,
  Dashboard
} from './components/index'
import {
  BrowserRouter as Router,
  Routes,Route
} from 'react-router-dom';

function App() {

  return (
  <Router>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/patient-from-page' element={<PatientFormPage />}/>
        <Route path='/appointment-form-page' element={<AppointmentFormPage />}/>
        <Route path='/Dashboard' element={<Dashboard />}/>

      </Routes>
    </Router>
      )
}

export default App
