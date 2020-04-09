import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import { browserHistory } from 'react-router';
import { createStore } from 'redux';
import { useSelector,useDispatch } from 'react-redux';
import { setLogin, setLoginError } from '../../actions';
import axios from 'axios';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        },
        card: {
            marginTop: theme.spacing(10)
        }

    }),
);

const Login = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (username.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [username, password]);

    const dispatch = useDispatch();//......dispatch added to call actions
    
    const logstate = useSelector((state: any) => state.isLogged);
  

    const handleLogin = () => {

        //dispatch(setLoginLoad());
        setHelperText('Please wait...');
        axios.get("https://localhost:44391/api/Auth?username=" + username + "&password=" + password)
            .then(response => {
                
                console.log(response.data);
                if (response.data !== "Invalid credentials") {
                    dispatch(setLogin(response.data));
                    
                    setError(false);
                    setHelperText('Login Successfully');
                    browserHistory.push("/Dashboard");
                } else {
                    setError(true);
                    dispatch(setLoginError());
                    setHelperText('Incorrect username or password')
                }
            })
            .catch(error => {
              
            })

        /*callLoginApi(username, password, (error: any) => {

           
            setHelperText('Login status '+ logstate);

            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
                setHelperText('Login Successfully');
                browserHistory.push("/dashboard");
            } else {
                dispatch(setLoginError(error));
                setHelperText('Error');
            }
        });*/

       
    };
    /*function callLoginApi(username: string, password: string, callback:any) {
        setTimeout(() => {
            
            if (username === 'abc@email.com' && password === 'password') {
                dispatch(setLoginSuccess);
                return callback(null);
            } else {
                dispatch(setLoginError);
                return callback(new Error('Invalid email and password'));
            }
        }, 1000);
    }*/


    const handleKeyPress = (e: any) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleLogin();
        }
    };

    return (
        <React.Fragment>
            <form className={classes.container} noValidate autoComplete="off">
                <Card className={classes.card}>
                    <CardHeader className={classes.header} title="Login App" />
                    <CardContent>
                        <div>
                            
                            <TextField
                                error={error}
                                fullWidth
                                id="username"
                                type="email"
                                label="Username"
                                placeholder="Username"
                                margin="normal"
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e)}
                            />
                            <TextField
                                error={error}
                                fullWidth
                                id="password"
                                type="password"
                                label="Password"
                                placeholder="Password"
                                margin="normal"
                                helperText={helperText}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e)}
                            />
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className={classes.loginBtn}
                            onClick={() => handleLogin()}
                            disabled={isButtonDisabled}>
                            Login
                        </Button>
                       
                    </CardActions>

                </Card>
            </form>
        </React.Fragment>
    );
}

export default Login;