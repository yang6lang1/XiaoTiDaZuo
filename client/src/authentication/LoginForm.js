import React from "react";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './resources/LoginForm.css';

function LoginForm(props) {
    return (
        <div className="LoginForm">
            <div className="LoginFormSection">
                <Typography className="LoginFormTitle" variant="h4" gutterBottom>
                    小蹄大做
                </Typography>
                <Typography className="LoginFormSubtitle" variant="h6" gutterBottom>
                    登录
                </Typography>
                <div className="LoginFormInputArea">
                    <TextField className="LoginFormUserNameField" label="账号" type="text"/>
                    <TextField className="LoginFormPasswordField" label="密码" type="password"/>
                </div>
                <div className="LoginFormInputButtonField">
                    <Button variant="contained" color="primary" className="LoginFormLoginButton">
                        登录
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;