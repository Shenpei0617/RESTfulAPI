import { useState } from "react";

 function Login() {
    const[formData,setFormData]=useState({
        account: "",
        password: "",
    });

    const handler = e =>{
        const id = e.currentTarget.id;
        const val = e.currentTarget.value;
        console.log({id, val});
    
        setFormData({...formData, [id]: val});
      };
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form>
              <div className="mb-3">
                <label htmlFor="account" className="form-label">
                  Account
                </label>
                <input type="text" className="form-control" id="account" 
              onChange={handler}
              value={formData.account} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" 
              onChange={handler}
              value={formData.password} />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  export default Login
  