import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'

function RenderstaffList({staff}) {
    return (
        <Card style={{marginTop: 10, textAlign: 'center'}}>
            <Link style={{textDecoration: 'none'}} to ={`/StaffList/${staff.id}`}>
            <CardImg width='100%' src={staff.image} alt={staff.name} />
            <CardBody style={{margin: -16}} >
            <CardTitle style={{marginBottom: 0, color: 'black'}} >{staff.name}</CardTitle>
            </CardBody>
            </Link>
        </Card>  
    )
}

const StaffListComponent = (props) => {
    const list = props.staffs.map((staff) => {
        return(
            <div key={staff.id} className ="col-md-2 col-sm-4 col-xs-6">
                <RenderstaffList staff={staff} />
            </div>    
    )    
    })

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/StaffList'>Staff List</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.staffs.name}</BreadcrumbItem>
                </Breadcrumb>
                {list}
            </div>
        </div>
    )
}

export default StaffListComponent