import React , { Component } from 'react';
import StaffListComponent from './StaffListComponent'
import StaffDetailComponent from './StaffDetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponents from './FooterComponent';
import {Switch , Route, Redirect, withRouter } from 'react-router-dom';
import Departments from './Departments';
import PayrollSheets from './PayrollSheets';
import {connect} from 'react-redux';
import { fetchStaffs,fetchDepts, fetchSalary, fetchStaffDept, postNewStaff } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    depts : state.depts,
    salary: state.salary,
    staffDept: state.staffDept
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {dispatch(fetchStaffs())},
  fetchDepts: () => {dispatch(fetchDepts())},
  fetchSalary: () => {dispatch(fetchSalary())},
  fetchStaffDept: (deptId) => {dispatch(fetchStaffDept(deptId))},
  postNewStaff: (value) => {dispatch(postNewStaff(value))}
})


class MainComponents extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   staffs: STAFFS,
    //   depts: DEPARTMENTS,
    //   newStaff : '',
    // }
    // this.addNewStaff = this.addNewStaff.bind(this)
  }

  // addNewStaff(newStaff) {
    
  //   this.setState({
  //     newStaff: newStaff
  //   })
  //   console.log(newStaff)

   

  //   let listStaff = JSON.parse(localStorage.getItem('listStaff'))
    
  //   let findDept = DEPARTMENTS.filter(x => x.id === newStaff.department)[0];

  //   let addNewStaff = {...newStaff, id : listStaff.length, department: findDept, image:'/assets/images/alberto.png' }

  //   let newListStaff = [...listStaff, addNewStaff]

  //   console.log('newListStaff' + JSON.stringify(newListStaff))

  //   localStorage.setItem('listStaff', JSON.stringify(newListStaff))
    
  //   this.setState({
  //     staffs: newListStaff
  //   })
    
  // }
  addNewStaff = (value) => {
    console.log(value);
    this.props.postNewStaff(value)
   
  }

  onDeptSelect = (deptID) => {
    console.log('SELECTED ID' + deptID);
    this.props.fetchStaffDept(deptID)
  }

  componentDidMount(){
    // console.log('didmount')
    this.props.fetchStaffs();
    this.props.fetchDepts();
    this.props.fetchSalary();
    // this.props.fetchStaffDept();
  }


  render() {
    const StaffWithId = ({match}) => {
      let staff = this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0];
      let deptName = this.props.depts.depts.filter((dept) => dept.id === staff.departmentId)[0]
      console.log(deptName)
      return(
        <StaffDetailComponent staff = {staff}
                              dept = {deptName} />
        )}

    return (
      <div>
        <HeaderComponent />
          <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={200}>
            <Switch>
                <Route exact path='/StaffList' component={() => <StaffListComponent staffs={this.props.staffs.staffs}
                                                                                    staffsLoading={this.props.staffs.isLoading}
                                                                                    staffsErrMess={this.props.staffs.errMess}
                                                                                    handleSubmit={(newStaff) => this.addNewStaff(newStaff)}/>} />
                <Route path='/StaffList/:staffId' component={StaffWithId} />
                <Route exact path='/Departments' component={() => <Departments depts={this.props.depts.depts}
                                                                                onSelectDept={deptID => this.onDeptSelect(deptID)}/>}/>
                <Route path='/Departments/:deptId'component={() => <StaffListComponent staffs={this.props.staffDept.staffDept}/>} />
                <Route exact path='/Salary' component={() => <PayrollSheets salary={this.props.salary.salary}/>}/>
                <Redirect to='StaffList'/>
              </Switch>
            </CSSTransition>
          </TransitionGroup> 
        <FooterComponents />
      </div>
    );
  }


}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponents));



