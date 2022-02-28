import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'


function PayrollList({staff}) {
    const payroll = (staff) => {
        return(staff.salaryScale*3000000 + staff.overTime*200000/8).toFixed(0)
    }
    return (
        <div>
            <Card style={{marginTop: 10}}>
                <CardTitle>
                    <h3>{staff.name}</h3>
                </CardTitle>
                <CardBody style={{margin: -16}} >
                    <div style={{marginLeft: 16, marginRight: 16}}>
                    <p>{`Mã nhân viên: ${staff.id}`}</p>
                    <p>{`Hệ số lương: ${staff.salaryScale}`}</p>
                    <p>{`Số giờ làm thêm: ${staff.overTime}`}</p>
                    <div  style={{backgroundColor: 'rgb(236, 236, 234)', height: 30, marginBottom: 16}}>
                        <div style={{marginLeft: 16}}>
                            <p style={{color: 'black'}}>{`Lương: ${payroll(staff)} `}</p>
                        </div>
                    </div>
                    
                    </div>
                </CardBody>
            </Card>
        </div>  
    )
}

function PayrollSheets(props) {
    
    const list = props.staffs.map((staff)=> {
        return(
            <div key={staff.id} className ="col-md-4 col-sm-6 col-xs-12">
                <PayrollList staff={staff} />
            </div>
        )
    })


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/StaffList'>Staff List</Link></BreadcrumbItem>
                    <BreadcrumbItem active>PayrollSheets</BreadcrumbItem>
                </Breadcrumb>
                {list}
            </div>
        </div>
    )
}
export default PayrollSheets