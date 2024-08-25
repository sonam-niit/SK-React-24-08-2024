import './mystyle.css';

function CSSDemo() {
  const mystyle={
    height:'150px',
    width:'150px',
    backgroundColor:'red'
  }
  return (
    <div className="App">
      <style>
        {`
          .container{
            background-color:lightgreen;
            padding:20px;
            border-radius:5px;
          }
        `}
      </style>
      <h1>Sample App</h1>
      <h2 style={{backgroundColor:'blue',color:'white',padding:'5px'}}>My Sample CSS</h2>
      <div style={mystyle}></div>
      <div className='container'>My Section</div>
    </div>
  );
}

export default CSSDemo;
