import { Component } from "react";
import { Modal, ModalBody, ModalHeader, Col, Label, Button, Row } from 'reactstrap'
import { Control, LocalForm, Errors  } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const maxValue = (max) => (val) => !(val) || (val <= max);
const minValue = (min) => (val) => val && (val >= min);

class AddStaff extends Component {
    constructor(props){
        super(props)
        // this.handleSubmit = this.handleSubmit.bind(this)
       
    }

    
    // handleSubmit(values) {
    //     values = {...values, id :1, image:  '/assets/images/alberto.png'}
    //     console.log('curent state is' + JSON.stringify(values))
    //     alert(JSON.stringify(values))
    // }
  

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal}>
                    <ModalHeader toggle={this.props.toggleModal}>Add Staff</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.prop.handleSubmit(values)}>
                            <Row className="form-group spacing">
                                <Label md={3} sm={3} xs={12} htmlFor="fullName">Full Name</Label>
                                <Col md={9} sm={9} xs={12}> 
                                    <Control type="text" model=".fullName" id="fullName" name="fullName"
                                        placeholder="Add name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(30)
                                        }}/>
                                    <Errors 
                                        className="text-danger"
                                        model=".fullName"
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
                                        <option>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Finance</option>
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
                                <Label md={3} sm={3} xs={12} htmlFor="overTime">Over Time</Label>
                                <Col md={9} sm={9} xs={12}> 
                                    <Control model="./overTime" type="text" id="overTime" name='overTime' className="form-control" />
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
            </div>
        )
    }
}

export default AddStaff