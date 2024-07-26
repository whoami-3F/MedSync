import './App.css'
import {
  LoginPage,
  PatientFormPage,
  AppointmentFormPage
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
      </Routes>
    </Router>
      )
}

export default App
