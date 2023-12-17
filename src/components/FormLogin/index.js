import './index.scss'
import {useState} from "react";
import Notification from "../Notification";
import FormSubmitSuccessMessage from "../FormSubmitSuccessMessage";
import Loader from "../Loader";
import {submitAPI} from "../../__mocks__/apiMock";

const FormLogin = () => {

    const [formState, setState] = useState( {
        state: { loading: false, success: false, error: false },
        fields: {
            login: { isValid: null, message: '', value: '' },
            password: { isValid: null, message: '', value: '' },
        }
    });


    const checkLoginValueAndUpdateState = ( value ) => {
        if ( !value ) {
            setState( (prevState) => {
                const newState = {...prevState};
                newState.fields.login = { isValid: false, message: 'type smth here', value }
                return newState;
            });
            return;
        }

        setState( (prevState) => {
            const newState = {...prevState};
            newState.fields.login = { isValid: true, message: '', value }
            return newState;
        });
    }
    const updateLogin = ( e ) => {
        e.preventDefault();
        checkLoginValueAndUpdateState(e.target.value);
    }


    const checkPasswordValueAndUpdateState = ( value ) => {
        if ( !value ) {
            setState( (prevState) => {
                const newState = {...prevState};
                newState.fields.password = { isValid: false, message: 'type smth here', value }
                return newState;
            });
            return;
        }
        setState( (prevState) => {
            const newState = {...prevState};
            newState.fields.password = { isValid: true, message: '', value }
            return newState;
        });
    }
    const updatePassword = ( e ) => {
        e.preventDefault();
        checkPasswordValueAndUpdateState(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        checkLoginValueAndUpdateState(formState.fields.login.value);
        checkPasswordValueAndUpdateState(formState.fields.password.value);

        if ( formState.fields.login.isValid && formState.fields.password.isValid ) {
            setState( (prevState) => ({
                ...prevState,
                state: {loading: true, success: false, error: false}
            }));
            submitAPI(new FormData(e.target))
                .then( (response) => {
                    setState( (prevState) => ({
                        ...prevState,
                        state: {loading: false, success: true, error: false}
                    }));
                })
                .catch((e)=>{
                    setState( (prevState) => ({
                        ...prevState,
                        state: {loading: false, success: false, error: true}
                    }));
                })
        }

    }

    return (
        <section className="login-group">
            <div className="container">

                {
                    formState.state.success ? <FormSubmitSuccessMessage title={'Something must happen next here!'} message={'But we don\'t have this in the task :)'}  /> : <div className="form-login-group">
                        <div className="form-login-group_notify">
                            { formState.state.error && <Notification type={'danger'} message={'Server Error'} />}
                        </div>
                        <form onSubmit={onSubmit} className={`login-form`}>
                            <div className="login-form_fields">
                                <div className="login-group">
                                    <label htmlFor="login-input">User login*</label>
                                    <input id={`login-input`} className={ formState.fields.login.isValid === false ? 'invalid' : '' } type={'text'} value={formState.fields.login.value} onChange={updateLogin} />
                                    { formState.fields.login.isValid === false && <span className="alert">{formState.fields.login.message}</span> }
                                </div>
                                <div className="password-group">
                                    <label htmlFor="password-input">Password*</label>
                                    <input id={`password-input`}  className={ formState.fields.password.isValid === false ? 'invalid' : '' } type={'password'} value={formState.fields.password.value} onChange={updatePassword} />
                                    { formState.fields.password.isValid === false && <span className="alert">{formState.fields.password.message}</span> }
                                </div>
                            </div>
                            <div className="login-form_submit">
                                <button type="submit" className={`brand-button`} >Reserve a table</button>
                            </div>
                            { formState.state.loading && <Loader />}
                        </form>
                    </div>
                }


            </div>
        </section>
    )
}

export default FormLogin;
