import React , { Component } from 'react';
import StaffListComponent from './StaffListComponent'
import StaffDetailComponent from './StaffDetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponents from './FooterComponent';
import {Switch , Route, Redirect } from 'react-router-dom';
import Departments from './Departments';
import PayrollSheets from './PayrollSheets';
import { DEPARTMENTS, STAFFS } from '../shared/staffs'

localStorage.setItem('listStaff', JSON.stringify(STAFFS))

class MainComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      depts: DEPARTMENTS,
      newStaff : '',
    }
    this.addNewStaff = this.addNewStaff.bind(this)
  }

  addNewStaff(newStaff) {
    
    this.setState({
      newStaff: newStaff
    })
    console.log(newStaff)

    let listStaff = JSON.parse(localStorage.getItem('listStaff'))

    let newListStaff = [...listStaff, newStaff]
    console.log('newListStaff' + newListStaff)

    localStorage.setItem('listStaff', JSON.stringify(newListStaff))
    this.setState({
      staffs: newListStaff
    })

    // let newStaffs = localStorage.getItem('newStaffs') ? JSON.parse(localStorage.getItem('newStaffs')) : [];

    // let id = this.state.staffs.length + newStaffs.length
    // let newStaff = JSON.parse(localStorage.getItem('newStaffs'))

    // let addnewStaff= {...newStaff, id : 16+newStaffs.length, image:  '/assets/images/alberto.png'}

    // newStaffs=[...newStaffs, addnewStaff]

    // localStorage.setItem('newStaffs', JSON.stringify(newStaffs))

    // let newStaffList = JSON.parse(localStorage.getItem('newStaffs'))

    // let totalStaff = [...STAFFS, ...newStaffList]

    // this.setState({
    //   staffs : totalStaff
    // })

    // console.log('totalStaff',totalStaff)
    
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
                <Route exact path='/StaffList' component={() => <StaffListComponent staffs={this.state.staffs} handleSubmit={(newStaff) => this.addNewStaff(newStaff)}/>} />
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



