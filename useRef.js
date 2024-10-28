//to create the UseRef function in react
const MyCss = useRef(null);
    const PreValue=useRef(0);
    useEffect(()=>{
        PreValue.current=count;//useref to count the previous value
    },[count])


    const upDateCss = () => {
        MyCss.current.style.backgroundColor = "red";
    }
      <>
       <h1 ref={MyCss}>These is useref in React</h1>
            <button onClick={() => { upDateCss() }}>Update css color</button>
        </>
      </>
