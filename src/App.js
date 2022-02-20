import './App.css';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import ListStaff from './component/StaffListComponent';
import StaffDetailComponent from './component/StaffDetailComponent';
import {ROLE,DEPARTMENTS,STAFFS} from './shared/staffs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      staffs: STAFFS,
      selectedStaff: null,
      content: "Bấm vào tên nhân viên để xem thông tin",
      deparment: DEPARTMENTS
    }
  }

  onStaffSelect(staffId){
    console.log(staffId)
    this.setState({
      selectedStaff: staffId,
      content : '',
    })
  }
  
  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <div style={{marginTop: 10}}>
          <ListStaff staffs={this.state.staffs}
                     onClick={staffId => this.onStaffSelect(staffId)}
          />
          <div className='container'>
            <div className='row'>
            <p>{this.state.content}</p>
            </div>
          </div>
          <StaffDetailComponent
            staffSelected = {this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[0]}
          />
        </div>

      </div>
    );
  }


}


export default App;
