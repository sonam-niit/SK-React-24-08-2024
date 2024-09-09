import { useState } from "react";

const users = [
    { id: 1, name: 'Alice', online: true },
    { id: 2, name: 'Bob', online: false },
    { id: 3, name: 'Catty', online: true },
    { id: 4, name: 'Devid', online: true },
    { id: 5, name: 'Ekki', online: false },
]
function FilteredData() {
    const [show, setShow] = useState(true)
    const filteredUser = users.filter(user => user.online == show);
    return (<>
            <h3>Filtered Data</h3>
            <button onClick={()=>setShow(!show)}>{show?'Show Offline':'Show Online'}</button>
            <ul>
                {
                    filteredUser.map(user=>(
                        <li>{user.id} {user.name}- Status: {show?
                            <i className="fa-solid fa-circle fa-sm" style={{color: '#07ed58'}}></i>
                            :'Offline'}</li>
                    ))
                }
            </ul>
    </>);
}

export default FilteredData;