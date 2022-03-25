import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


function PayrollList({salary}) {
    return (
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <div>
            <Card style={{marginTop: 10}}>
                <CardTitle>
                    <h3>{salary.name}</h3>
                </CardTitle>
                <CardBody style={{margin: -16}} >
                    <div style={{marginLeft: 16, marginRight: 16}}>
                    <p>{`Mã nhân viên: ${salary.id}`}</p>
                    <p>{`Hệ số lương: ${salary.salaryScale}`}</p>
                    <p>{`Số giờ làm thêm: ${salary.overTime}`}</p>
                    <div  style={{backgroundColor: 'rgb(236, 236, 234)', height: 30, marginBottom: 16}}>
                        <div style={{marginLeft: 16}}>
                            <p style={{color: 'black'}}>{`Lương: ${salary.salary} `}</p>
                        </div>
                    </div>
                    
                    </div>
                </CardBody>
            </Card>
        </div>  
        </FadeTransform>
    )
}

function PayrollSheets(props) {
    
    const list = props.salary.map((salarydetail)=> {
        return(
            <div key={salarydetail.id} className ="col-md-4 col-sm-6 col-xs-12">
                <PayrollList salary={salarydetail} />
            </div>
        )
    })


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/StaffList'>Staff List</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Salary</BreadcrumbItem>
                </Breadcrumb>
                {list}
            </div>
        </div>
    )
}
export default PayrollSheets