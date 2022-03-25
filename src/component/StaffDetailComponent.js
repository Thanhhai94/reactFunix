import { Card , CardImg, CardText } from 'reactstrap'
import dateFormat from "dateformat";
import { useState } from 'react';
import { Loading } from './LoadingComponent'


function RenderDetail({staff, dept}) {
    console.log({dept})
    const [salary, setSalary] = useState('payroll')
    const [type, setType] = useState('button')
    const handlePayroll = () => {
        setSalary((staff.salaryScale*3000000 + staff.overTime*200000/8).toFixed(0))
        setType("text")
    }
    // let staffDept = depts.filter(id => id.id === staff.departmentId)[0]
    
    return(
        <div>
              <Card style={{marginTop: 10, border:'none'}}>
                <CardText>
                    <div>
                    <h3>{`Họ và tên: ${staff.name}`}</h3>
                    <p>{`Ngày sinh: ${dateFormat(staff.doB,"dd/mm/yyyy")}`}</p>
                    <p>{`Ngày vào công ty: ${dateFormat(staff.startDate,"dd/mm/yyyy" )}`}</p>
                    <p>{`Phòng ban: ${dept.name}`}</p>
                    <p>{`Ngày nghỉ còn lại: ${staff.annualLeave}`}</p>
                    <p>{`Ngày đã đi làm thêm: ${staff.overTime}`}</p>
                    </div>
                    <div>
                        <input value={salary} type={type} onClick={handlePayroll} />
                    </div>
                </CardText>

              </Card>
        </div>
    )
}



function RenderImage({staff}) {
    return(
        <div>
            <Card>
                <CardImg top src={staff.image} alt={staff.name}/>
            </Card>
        </div>
    )
}

const StaffDetailComponent = (props) => {
    if(props.isLoading) {
        return(
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        )
    } else if(props.errMess) {
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }
    else
    if(props.staff != null){
        return(
            <div className='container'>
                <div className='row'>
                    <div className ="col-md-3 col-sm-4 col-xs-12">
                        <RenderImage staff={props.staff} />
                    </div>
                    <div className ="col-md-9 col-sm-8 col-xs-12">
                        <RenderDetail staff={props.staff}
                                      dept = {props.dept}/>
                    </div>
                </div>
                
        </div>
            
        )
    } else {
        return(<div></div>)
    }
}
export default StaffDetailComponent
