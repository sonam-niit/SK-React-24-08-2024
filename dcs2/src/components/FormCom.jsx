function FormComp(props) {
    const setData=props.setData;
    return (
        <div style={{
            border: '2px solid blue',
            padding: '5px'
        }}>
            <h3>Child Component</h3>
            <input type="text" placeholder="Enter Data"
            onChange={(e)=>setData(e.target.value)}/>
        </div>
    );
}

export default FormComp;