import Child from "./Child";

function Parent() {
    return (
        <div className="p-2 mt-2"
            style={{ border: '2px solid red' }}>
            <h3>Parent Component</h3>

            <Child name="alex"
                message="Good Morning" />

            <Child name="sonam"
                message="Education is Power" />
        </div>
    );
}

export default Parent;