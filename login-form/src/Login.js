import React from 'react'

function Login(props) {
    
    function onFormSubmit(e) {
        e.preventDefault();

        const userCredentials = {
            username: e.target.username.value,
            password: e.target.password.value
        };

        e.target.username.value = "";
        e.target.password.value = "";

        props.onValidate(userCredentials);
    }
    
    return (
        <div onSubmit={onFormSubmit}>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Email</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type Here"/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Password</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Type Here"/>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </div>
    )
}

export default Login;
