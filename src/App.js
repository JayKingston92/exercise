// import { STAFFS } from './staffs'
// import { Staff } from './components/Staff'
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Ứng dụng quản lý nhân viên 1.0</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

// function App() {

//   const dish={id:0, name:'Uthappizza'}  
//   return (
//     <div key={dish.id} className="col-12 mt-5">
//       <Media tag="li">
//         <Media body className="ml-5">
//           <Media heading>{dish.name}</Media>
//         </Media>
//       </Media>
//     </div>
//     // <div className="app"> 
//     //     <Navbar dark color="primary">
//     //       <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
//     //     </Navbar>
      
      
//     //   <div className='app-body'>
//     //     {STAFFS.map(s => {
//     //       return <Staff id="ai đi" name={s.name} />;
//     //     })}
//     //   </div>
//     // </div>
//   );
// }

export default App;

