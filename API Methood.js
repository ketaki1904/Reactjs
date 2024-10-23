//to get the data on the API
const url='http://localhost:3005/quotes'

     axios.get(url).then(resp=>{               //
        console.log(resp.data)
        SetQuotes(resp.data)
    })

//to delete the data on the API
const Delete =(id) =>{
        fetch(`http://localhost:3005/quotes/${id}`,{
            method:"DELETE"

        }).then(
            SetQuotes(quotes.filter(item=>item.id!==id))
        )
    }

//to update the data on the API on the POST methood
const[title,SetTitle]=useState('');

const[verbs,SetVerbs]=useState('');
const upData={
        author:title,
        quote:verbs

        const submitData=() =>{
        fetch('http://localhost:3005/quotes',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(upData)
        })


          <h3 className="text-center">Enter Your Quotes on your DataBase</h3>
          <form onSubmit={submitData} className="mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <input  value={title} onChange={(e)=>{SetTitle(e.target.value)}} className="form-control" placeholder="Enter your Name"/>
                        </div>

                        
                        <div className="col-lg-6">
                        <input  value={verbs} onChange={(e)=>{SetVerbs(e.target.value)}} className="form-control" placeholder="Enter your Quote"/>

                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">submit</button>


            </div>
          </form>
