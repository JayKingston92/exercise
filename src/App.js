import { STAFFS } from './staffs'
import { Staff } from './components/Staff'
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {

  return (
    <div className="app"> 
        <Navbar dark color="primary">
          <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </Navbar>
      
      
      <div className='app-body'>
        {STAFFS.map(s => {
          return <Staff id="ai đi" name={s.name} />;
        })}
      </div>
    </div>
  );
}

export default App;

