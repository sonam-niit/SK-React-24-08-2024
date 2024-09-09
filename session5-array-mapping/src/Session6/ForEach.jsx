import Customers from '../assets/customers.json';

function ForEach() {
    const tbody=[];
    Customers.forEach(user=>{
        tbody.push(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
            </tr>
        )
    })
    return ( 
        <>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Email</th><th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
            </table>
        </>
     );
}

export default ForEach;