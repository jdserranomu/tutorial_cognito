import {useEffect, useState} from "react";

function Signin() {

    let [isSignup, setSignup] = useState(false);

    // useEffect(()=>{
    //     console.log(isSignup)
    // }, [isSignup])


    function onSubmit(){
        
    }

    return (
        <div id="signin">
            <article className="row d-flex justify-content-center">
                <section className="col-5">
                    <form>
                        <div className="form-group col-">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" checked={isSignup} className="form-check-input" id="exampleCheck1"  onClick={()=>{setSignup(!isSignup)}}/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Signup</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </section>
            </article>
        </div>
    )
}


export default Signin