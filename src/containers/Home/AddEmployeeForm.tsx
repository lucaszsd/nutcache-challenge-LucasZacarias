//Importações Externas
import * as Yup from 'yup'
import React, { useState } from 'react'
import {
    Grid,
    TextField,
    Button,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core'
import { Formik, Form, FormikProps } from 'formik'

//Importações Internas
import { useDispatch } from 'react-redux';
import { actions } from '../../reducers/employees';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '450px',
            display: 'block',
            margin: '0 auto',
        },
        textField: {
            '& > *': {
                width: '100%',
            },
        },
        submitButton: {
            marginTop: '24px',
        },
        title: { textAlign: 'center' },
        successMessage: { color: 'green' },
        errorMessage: { color: 'red' },
    })
)

interface ISignUpForm {
    name: string
    birthdate: string,
    gender: string,
    email: string,
    CPF: string,
    startDate: string,
    team: string,
    password: string,
    confirmPassword: string 
}

interface IFormStatus {
    message: string
    type: string
}

interface IFormStatusProps {
    [key: string]: IFormStatus
}

const formStatusProps: IFormStatusProps = {
    success: {
        message: 'Signed up successfully.',
        type: 'success',
    },
    duplicate: {
        message: 'Email-id already exist. Please use different email-id.',
        type: 'error',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}

const AddEmployeeForm: React.FunctionComponent = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    
    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })


    const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
 
        try {
 
            dispatch(actions.addEmployees({
                name: data.name ,
                birthDate: data.birthdate ,
                gender: data.gender,
                email: data.email,
                CPF: data.CPF,
                startDate: data.startDate,
                team: data.team,
            }))
 
            // API call integration will be here. Handle success / error response accordingly.
            if (data) {

               
 
                setFormStatus(formStatusProps.success)
                resetForm({})
            }
        } catch (error) {
            const response = error.response
            if (
                response.data === 'user already exist' &&
                response.status === 400
            ) {
                setFormStatus(formStatusProps.duplicate)
            } else {
                setFormStatus(formStatusProps.error)
            }
        } finally {
            setDisplayFormStatus(true)
        }
    }

    return (
        <div className={classes.root}>
            <Formik
                initialValues={{
                    name: '',
                    birthdate: '',
                    gender: '',
                    email: '',
                    CPF: '',
                    startDate: '',
                    team: '',
                    password: '',
                    confirmPassword: '',
                   
                }}
                onSubmit={(values: ISignUpForm, actions) => {
                    createNewUser(values, actions.resetForm)
                    setTimeout(() => {
                        actions.setSubmitting(false)
                    }, 500)
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required('Por favor insira o nome completo'), 
                    birthdate: Yup.string().required('Por favor insira a data de nascimento'), 
                    gender: Yup.string().required('Por favor insira o gênero'),
                    email: Yup.string()
                        .email()
                        .required('Por favor insira um email válido'), 
                    CPF: Yup.string().required('Por favor insira um CPF válido'), 
                    startDate: Yup.string().required('Por favor insira uma data válida'), 
                    team: Yup.string().required('Por favor insira um time válido'),
                    
                  
                })}
            >
                {(props: FormikProps<ISignUpForm>) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                    } = props
                    return (
                        <Form>
                            <h1 className={classes.title}>Adicionar Funcionário</h1>
                            <Grid
                                container
                                justify="space-around"
                                direction="row"
                            >
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="name"
                                        id="name"
                                        label="Nome Completo"
                                        value={values.name}
                                        type="text"
                                        helperText={
                                            errors.name && touched.name
                                                ? errors.name
                                                : 'Insira seu nome completo .'
                                        }
                                        error={
                                            errors.name && touched.name
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>



                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="birthdate"
                                        id="birthdate"
                                        label="Data de Nascimento"
                                        value={values.birthdate}
                                        type="text"
                                        helperText={
                                            errors.birthdate && touched.birthdate
                                                ? errors.birthdate
                                                : 'Insira sua data de nascimento.'
                                        }
                                        error={
                                            errors.birthdate && touched.birthdate
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="gender"
                                        id="gender"
                                        label="Genero"
                                        value={values.gender}
                                        type="text"
                                        helperText={
                                            errors.gender && touched.gender
                                                ? errors.gender
                                                : 'Insira seu genero.'
                                        }
                                        error={
                                            errors.gender && touched.gender
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="email"
                                        id="email"
                                        label="Email"
                                        value={values.email}
                                        type="email"
                                        helperText={
                                            errors.email && touched.email
                                                ? errors.email
                                                : 'Insira o seu email'
                                        }
                                        error={
                                            errors.email && touched.email
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="CPF"
                                        id="CPF"
                                        label="CPF"
                                        value={values.CPF}
                                        type="text"
                                        helperText={
                                            errors.CPF && touched.CPF
                                                ? errors.CPF
                                                : 'Insira seu CPF'
                                        }
                                        error={
                                            errors.CPF && touched.CPF
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>

                               
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="startDate"
                                        id="startDate"
                                        label="Data de Início"
                                        value={values.startDate}
                                        type="text"
                                        helperText={
                                            errors.startDate && touched.startDate
                                                ? errors.startDate
                                                : 'Insira a data que começou na empresa.'
                                        }
                                        error={
                                            errors.startDate && touched.startDate
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="team"
                                        id="team"
                                        label="Time"
                                        value={values.team}
                                        type="text"
                                        helperText={
                                            errors.team && touched.team
                                                ? errors.team
                                                : 'Insira o time.'
                                        }
                                        error={
                                            errors.team && touched.team
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>

                                
                                  

                                



                                {/* <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="password"
                                        id="password"
                                        label="Password"
                                        value={values.password}
                                        type="password"
                                        helperText={
                                            errors.password && touched.password
                                                ? 'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                                                : 'One uppercase, one lowercase, one special character and no spaces'
                                        }
                                        error={
                                            errors.password && touched.password
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        label="Confirm password"
                                        value={values.confirmPassword}
                                        type="password"
                                        helperText={
                                            errors.confirmPassword &&
                                            touched.confirmPassword
                                                ? errors.confirmPassword
                                                : 'Re-enter password to confirm'
                                        }
                                        error={
                                            errors.confirmPassword &&
                                            touched.confirmPassword
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid> */}
                               
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.submitButton}
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        disabled={isSubmitting}
                                    >
                                        Add Employee
                                    </Button>
                                    {displayFormStatus && (
                                        <div className="formStatus">
                                            {formStatus.type === 'error' ? (
                                                <p
                                                    className={
                                                        classes.errorMessage
                                                    }
                                                >
                                                    {formStatus.message}
                                                </p>
                                            ) : formStatus.type ===
                                              'success' ? (
                                                <p
                                                    className={
                                                        classes.successMessage
                                                    }
                                                >
                                                    {formStatus.message}
                                                </p>
                                            ) : null}
                                        </div>
                                    )}
                                </Grid>
                            </Grid>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default AddEmployeeForm