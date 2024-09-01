function Child(props) {
    return ( 
        <div className="p-2 my-2" 
        style={{border: '2px solid blue'}}>
            <h3>Child Component</h3>
            <h4>Welcome {props.name}</h4>
            <p>Message: {props.message}</p>
        </div>
     );
}

export default Child;