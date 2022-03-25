import {Modal, ModalBody, ModalHeader, Row, Label, Form, FormGroup, Input, Button, Col} from 'reactstrap';
import { Component } from 'react';
import RenderstaffList from './RenderstaffList';
import { Control, LocalForm, Errors  } from 'react-redux-form'

import AddStaff from './AddStaff';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const maxValue = (max) => (val) => !(val) || (val <= max);
const minValue = (min) => (val) => val && (val >= min);

class StaffListComponent extends Component {
  constructor(props){
      super(props);
      this.state = {
          searchStaff : '',
          isModalOpen: false,
          newStaff: ''
      }
      this.handleSearch = this.handleSearch.bind(this)
      this.toggleModal = this.toggleModal.bind(this)
  }

  handleSearch(event) {
      this.setState({
          searchStaff : this.find.value
      })
      event.preventDefault()
  }
  toggleModal(){
    //   console.log('isModalOpen',this.state.isModalOpen)
      this.setState({
          isModalOpen: !this.state.isModalOpen
      })

  }
    
render() {
    // console.log('STAFFLIST ' + JSON.stringify(this.props.staffs));
    // const filterList = this.props.staffs.filter(staff_list => staff_list.name.toLowerCase().indexOf(this.state.searchStaff.trim().toLowerCase()) !== -1);

    const list = this.props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-md-2 col-sm-4 col-xs-6">
                <RenderstaffList staff={staff} isLoading={this.props.staffsLoading} errMess={this.props.staffsErrMess}/>
            </div>
        )
    })

    return (
        <div className="container">
            <div className='row'>
                <div className='col-12' style={{marginTop: 20}}>
                    <div className='row'>
                        <Col md={6} sm={6} xs={12}>
                                <FormGroup row>
                                    <Col md={6} sm={6} xs={8} >
                                        <h3>Staff</h3> 
                                    </Col>
                                    <Col md={2} sm={2} xs={4}> 
                                        <Button type='submit' color='secondary' onClick={this.toggleModal} style={{minWidth:"100%"}}>
                                                +
                                        </Button>
                                    </Col>
                                </FormGroup>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <Form onSubmit={this.handleSearch}>
                                <FormGroup row>
                                    <Col md={9} sm={9} xs={8}>
                                        <Input type="text" id="find" name="find" innerRef={(input) => this.find = input}/>    
                                    </Col>
                                    <Col md={2} sm={3} xs={4}> 
                                        <Button type="submit" value="submit" color='primary' style={{minWidth:"100%"}} >
                                                Find
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                    </div>
                </div>
            </div>
            <div className='row'>
                {list}
            </div> 
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Staff</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.props.handleSubmit(values)}>
                            <Row className="form-group spacing">
                                <Label md={3} sm={3} xs={12} htmlFor="name">Full Name</Label>
                                <Col md={9} sm={9} xs={12}> 
                                    <Control type="text" model=".name" id="name" name="name"
                                        placeholder="Add name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(30)
                                        }}/>
                                    <Errors 
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 30 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group spacing">
                                <Label md={3} sm={3} xs={12} htmlFor="dOB">Date of Birth</Label>
                                <Col md={9} sm={9} xs={12}> 
                                    <Control type="date" model=".dOB" id="dOB" name="dOB" className="form-control"
                                        validators={{
                                        required,
                                    }}/>
                                    <Errors 
                                        className="text-danger"
                                        model=".dOB"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group spacing">
                                <Label md={3} sm={3} xs={12} htmlFor="startDate">Date Working</Label>
                                <Col md={9} sm={9} xs={12}> 
                                    <Control type="date" model=".startDate" id="startDate" name="startDate" className="form-control"
                                        validators={{
                                        required,
                                    }}/>
                                    <Errors 
                                        className="text-danger"
                                        model=".startDate"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group spacing">
                                <Label md={3} sm={3} xs={12} htmlFor="department">Department</Label>
                                <Col md={9} sm={9} xs={12}> 
                                    <Control.select model=".department" id="department" name='department' className="form-control">
                                        <option value="Dept01">Sale</option>
                                        <option value="Dept02">HR</option>
                                        <option value="Dept03">Marketing</option>
                                        <option value="Dept04">IT</option>
                                        <option value="Dept05">Finance</option>
                                    </Control.select>                                 
                                </Col>
                            </Row>
                            <Row className="form-group spacing">
                                <Label md={3} sm={3} xs={12} htmlFor="salaryScale">Salary Scale</Label>
                                <Col md={9} sm={9} xs={12}> 
                                    <Control model=".salaryScale" type="text" id="salaryScale" name='salaryScale' className="form-control"
                                        validators={{
                                            required,
                                            maxValue: maxValue(3),
                                            minValue: minValue(1),
                                        }}/>
                                    <Errors 
                                        className="text-danger"
                                        model=".salaryScale"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            maxValue: 'From 1.0-3.0',
                                            minValue: 'From 1.0-3.0'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group spacing">
                                <Label md={3} sm={3} xs={12} htmlFor="annualLeave">AnnualLeave</Label>
                                <Col md={9} sm={9} xs={12}> 
                                    <Control model=".annualLeave" type="text" id="annualLeave" name='annualLeave' className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group spacing">
                                <Label md={3} sm={3} xs={12} htmlFor="overTime">OverTime</Label>
                                <Col md={9} sm={9} xs={12}> 
                                    <Control model=".overTime" type="text" id="overTime" name='overTime' className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group spacing">
                                <Col md={{size: 10, offset:3}} sm={{size: 10, offset:3}}>
                                    <Button type="submit" color="primary">
                                        ADD
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            
        </div>
    )
}
    
}

export default StaffListComponent

