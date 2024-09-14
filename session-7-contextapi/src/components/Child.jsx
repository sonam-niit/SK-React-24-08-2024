function Child({data}) {
    return ( 
        <div style={{border:'2px solid black'}} 
        className="m-2">
            <h3>Child Component</h3>
            <p>Data Coming from Parent: {data}</p>
        </div>
     );
}

export default Child;