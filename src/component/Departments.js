import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
function Dept({dept, onSelectDept}) {
    return(

        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <div>
            <Card onClick={()=> onSelectDept(dept.id)}>
                <Link style={{ textDecoration: 'none' }} to={`/Departments/${dept.id}`}>
                    <CardBody style={{color:'black'}}>
                        <CardTitle>
                            <h3>{dept.name}</h3>
                        </CardTitle>
                        <CardText>{`Số lượng nhân viên: ${dept.numberOfStaff}`}</CardText>
                    </CardBody>
                </Link>
            </Card>
        </div>
        </FadeTransform>

    )
}

const Departments = (props) => {
    const Departments = props.depts.map((dept) => {
        return(
            <div key={dept.id} className="col-md-4 col-sm-6 col-xs-12" style={{marginTop:12, marginBottom:12}}>
                <Dept dept = {dept}
                      onSelectDept={props.onSelectDept}           />
            </div>
        )
    })
return(
    <div className="container">
        <div className="row">
            {Departments}
        </div>
    </div>
)

}

export default Departments