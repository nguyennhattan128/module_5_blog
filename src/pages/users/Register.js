import {useState} from "react";
import axios from "axios";
import SignUpSuccess from "../../components/SignUpSuccess";
import {notification} from "antd";

function Error(props) {
    const {status, message} = props
    return (<>
        {status ? <p style={{color: 'red', fontSize: '20px'}}>{message}</p> : ''}
    </>)
}

export function Register() {
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({status: false, message: ''});
    const [success, setSuccess] = useState(false);
    const [api, contextHolder] = notification.useNotification();


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!username || !password1) {
            api.info({
                message: 'Please fill in the information'
            })
            setError({status: true, message: 'Điền cho đầy đủ thông tin vào'});
        } else {
            if (password1 === password2) {
                const user = {username: username, password: password1}
                try {
                    const res = await axios.post(`http://localhost:3001/users/register`, user)
                    setSuccess(true)
                } catch (e) {
                    console.log('check axios error: ',e, axios.isAxiosError(e))
                    if (axios.isAxiosError(e)) {
                        if(e.response.data){
                            api.info({
                                message: e.response.data
                            });
                        }else{
                            setError({status: true, message: e.response.data.message})
                            api.info({
                                message: e.response.data.message
                            });
                        }
                    }
                }
            } else {
                api.info({
                    message: 'Error password'
                })
            }
        }

    }

    return (

        <>
            {contextHolder}
            {success ? (<SignUpSuccess/>) : (<div className="container">
                <div className="row justify-content-center align-items-center vh-100 py-5">
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">

                        <div className="card card-body rounded-3 p-4 p-sm-5">
                            <div className="text-center">

                                <h1 className="mb-2">Sign up</h1>
                                <span className="d-block">Already have an account? <a
                                    href="/login">Sign in here</a></span>
                            </div>
                            <form className="mt-4">
                                <div className="mb-3 input-group-lg">
                                    <input type="email" className="form-control" placeholder="Enter username"
                                           onChange={(event) => setUsername(event.target.value)}/>
                                </div>
                                <div className="mb-3 position-relative">
                                    <div className="input-group input-group-lg">
                                        <input className="form-control fakepassword"
                                               type={showPassword ? "text" : "password"} id="psw-input"
                                               placeholder="Enter new password"
                                               onChange={(event) => setPassword1(event.target.value)}/>
                                        <span className="input-group-text p-0">
                      <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"
                         onClick={handleShowPassword}/>
                    </span>
                                    </div>
                                    <div id="pswmeter" className="mt-2"/>
                                    <div className="d-flex mt-1">
                                        <div id="pswmeter-message" className="rounded"/>
                                        <div className="ms-auto">
                                            <i className="bi bi-info-circle ps-1" data-bs-container="body"
                                               data-bs-toggle="popover" data-bs-placement="top"
                                               data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long."
                                               data-bs-original-title title/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 input-group-lg">
                                    <input className="form-control" type="password" placeholder="Confirm password"
                                           onChange={(event) => setPassword2(event.target.value)}/>/>
                                </div>
                                <div className="mb-3 text-start">
                                    <input type="checkbox" className="form-check-input" id="keepsingnedCheck"/>
                                    <label className="form-check-label" htmlFor="keepsingnedCheck"> Keep me signed
                                        in</label>
                                </div>
                                <Error status={error.status} message={error.message}/>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-lg btn-primary"
                                            onClick={handleSubmit}>Sign me up
                                    </button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>)}
        </>)
}