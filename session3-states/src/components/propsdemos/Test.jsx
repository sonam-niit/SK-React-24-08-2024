function Test(props) {
    return ( 
        <div className="my-2 p-2"
        style={{border:'2px solid yellow'}}>
            <h3>Test Component</h3>
            <button onClick={props.increment}>
                CLick to Inc
            </button>
        </div>
     );
}

export default Test;