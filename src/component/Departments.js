import { Card, CardBody, CardTitle, CardText } from "reactstrap"

function Dept({dept}) {
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h3>{dept.name}</h3>
                    </CardTitle>
                    <CardText>{`Số lượng nhân viên: ${dept.numberOfStaff}`}</CardText>
                </CardBody>
            </Card>
        </div>

    )
}

const Departments = (props) => {
    const Departments = props.depts.map((dept) => {
        return(
            <div key={dept.id} className="col-md-4 col-sm-6 col-xs-12" style={{marginTop:12, marginBottom:12}}>
                <Dept dept = {dept} />
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