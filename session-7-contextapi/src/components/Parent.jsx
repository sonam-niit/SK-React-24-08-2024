import Child from "./Child";

function Parent({data}) {
    return (
        <div style={{border:'2px solid blue'}} 
        className="m-2">
            <h3>Parent Component</h3>
            <Child data={data}/>
        </div>
      );
}

export default Parent;