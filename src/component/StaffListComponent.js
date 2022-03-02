import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'
import { useState } from 'react';

function RenderstaffList({ staff }) {
    return (
        <Card style={{ marginTop: 10, textAlign: 'center' }}>
            <Link style={{ textDecoration: 'none' }} to={`/StaffList/${staff.id}`}>
                <CardImg width='100%' src={staff.image} alt={staff.name} />
                <CardBody style={{ margin: -16 }} >
                    <CardTitle style={{ marginBottom: 0, color: 'black' }} >{staff.name}</CardTitle>
                </CardBody>
            </Link>
        </Card>
    )
}

const StaffListComponent = (props) => {

    const [searchName, setSearchName] = useState("")
    console.log(typeof (searchName))
    console.log(searchName)
    const handleInputchange = (e) => {
        setSearchName(e.target.value)
        console.log(e.target.value)
    }


    const filterList = props.staffs.filter(staff_list => {
        return staff_list.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1;
    });

    const list = filterList.map((staff) => {
        return (
            <div key={staff.id} className="col-md-2 col-sm-4 col-xs-6">
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
            <div className='row'>
                <div className="col-md-2 col-sm-4 col-xs-6">
                    <input style={{width: 200}} type='text' placeholder='Search your name' value={searchName} onChange={handleInputchange} />
                </div>
            </div>
            <div className='row'>
                {list}
            </div> 
              

            </div>
        </div>
    )
}

export default StaffListComponent