import { Card, CardTitle } from 'reactstrap'

function RenderstaffList({staff, onClick}) {
    return (
        <Card key={staff.id}style={{marginTop: 10}} onClick ={() => onClick(staff.id)}>
            <CardTitle>{staff.name}</CardTitle>
        </Card>  
    )
}

const ListStaff = (props) => {
    const list = props.staffs.map((staff) => {
        return(
            <div key={staff.id} className ="col-md-4 col-sm-6 col-xs-12">
                <RenderstaffList staff={staff} onClick={props.onClick} />
                
            </div>    
    )    
    })

    return (
        <div className='container'>
            <div className='row'>
                {list}
            </div>
        </div>
    )
}

export default ListStaff