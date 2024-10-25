//css in class component
<h1 className="text-center mt-5 mb-5">Css in Class Component</h1>
                <br />
                <div className="mx-auto" style={{ border: "1px solid black", width: "225px", height: "225px", backgroundColor: this.state.color }}></div>
                <button className="btn btn-primary" onClick={() => { this.setState({ color: "pink" }) }}>Change the Background</button>
