import { Card , CardText, CardTitle } from 'reactstrap'
import dateFormat from "dateformat";


function RenderDetail({staffSelected}) {
    return(
        <div className ="col-md-4 col-sm-6 col-xs-12">
              <Card style={{marginTop: 10}}>
                <CardTitle>{staffSelected.name}</CardTitle>
                <CardText>
                    <div>
                    <p>{`Ngày sinh: ${dateFormat(staffSelected.doB,"dd/mm/yyyy")}`}</p>
                    <p>{`Ngày vào công ty: ${dateFormat(staffSelected.startDate,"dd/mm/yyyy" )}`}</p>
                    <p>{`Phòng ban: ${staffSelected.department.name}`}</p>
                    <p>{`Ngày ngày nghỉ còn lại: ${staffSelected.annualLeave}`}</p>
                    <p>{`Ngày ngày đã đi làm thêm: ${staffSelected.overTime}`}</p>
                    </div>
                </CardText>

              </Card>
        </div>
    )
}
const StaffDetailComponent = (props) => {
    if(props.staffSelected != null){
        return(
            <div className='container'>
            <div className='row'>
            <RenderDetail staffSelected={props.staffSelected}/>
            </div>
        </div>
            
        )
    } else {
        return(<div></div>)
    }
}
export default StaffDetailComponent
