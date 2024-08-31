function StudentResult() {
    const result=[
        {id:1,name:"alex",per:70},
        {id:2,name:"bob",per:30},
        {id:3,name:"catt",per:89},
        {id:4,name:"john",per:24},
        {id:5,name:"sandy",per:90}
    ]
    return ( 
        <div className="container">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr className="table-dark"><th>Id</th><th>Name</th><th>Percentage</th></tr>
                </thead>
                <tbody>
                    {
                        result.map(item=>(
                            <tr key={item.id} className={`${item.per>=35?'table-success':'table-danger'}`}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.per}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default StudentResult;