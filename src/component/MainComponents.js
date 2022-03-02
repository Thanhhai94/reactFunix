import React , { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import StaffListComponent from './StaffListComponent'
import StaffDetailComponent from './StaffDetailComponent';
import {ROLE,DEPARTMENTS,STAFFS} from '../shared/staffs'
import HeaderComponent from './HeaderComponent';
import FooterComponents from './FooterComponent';
import {Switch , Route, Redirect } from 'react-router-dom';
import Departments from './Departments';
import PayrollSheets from './PayrollSheets';

class MainComponents extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      staffs: STAFFS,
      depts: DEPARTMENTS
    }
  }
  render() {
    
    const StaffWithId = ({match}) => {
      return(
        <StaffDetailComponent staff = {this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
        )}

    return (
      <div>
        <HeaderComponent />
            <Switch>
                <Route exact path='/StaffList' component={() => <StaffListComponent staffs={this.state.staffs}/>} />
                <Route path='/StaffList/:staffId' component={StaffWithId} />
                <Route exact path='/Departments' component={() => <Departments depts={this.state.depts}/>}/>
                <Route exact path='/Salary' component={() => <PayrollSheets staffs={this.state.staffs}/>}/>
                <Redirect to='StaffList'/>
            </Switch>
        <FooterComponents />
      </div>
    );
  }


}


export default MainComponents;



