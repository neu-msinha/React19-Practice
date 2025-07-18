import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const lastnameComponent = ({
    field, // these details passed autmatically through this argument{ name, value, onChange, onBlur }
    form: {touched, errors}, // also passed automatically
    ...props // other props passed
}) => (
    <>
    <label htmlFor={field.name}>{props.labelName}</label>
    <input
        className="form-control"
        type="text"  
        {...field}
    />
    {errors[field.name] && touched[field.name] && (
        <div className="text-danger">{errors[field.name]}</div>
    )}
    </>
);   

const FormThree = () => {

    const formikProps = {
            initialValues: {
                firstname: '',
                color: '',
                lastname: ''
            },
            validationSchema: Yup.object({
                firstname: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'), 
                lastname: Yup.string()
                    .max(15, 'lastname must be 15 characters or less')
                    .required('Required'),      
            }),
            onSubmit: values => {
                console.log(values);
            }
        };
    

    return(
        <div className="container">
            <div className="col-md-12 mt-5">
                <Formik {...formikProps}>
                    { formik => (
                        <Form>
                    <label htmlFor="firstname">First name</label>
                    <Field 
                        className="form-control" 
                        type="text" 
                        name="firstname"
                    />
                    {/* <ErrorMessage name="firstname" component="div" className="text-danger" /> */}
                    {
                        formik.errors.firstname && formik.touched.firstname && (
                            <div className="text-danger">{formik.errors.firstname}</div>
                        )
                    }
                    {/* {formik.values.firstname} */}
                    <hr className="mb-4" />

                    <label htmlFor="color">Color</label>
                    <Field 
                        className="custom-select" 
                        as="select" 
                        name="color"
                    >
                        <option values="red">Red</option>
                        <option values="green">Green</option>
                        <option values="blue">Blue</option>
                        <option values="yellow">Yellow</option>
                    </Field>

                    
                    <ErrorMessage name="color" component="div" className="text-danger" />

                    <hr className="mb-4" />
                    <Field
                        name="lastname"
                        component={lastnameComponent}
                        placeholder="Last Name"
                        labelName="Enter your last name"
                    
                    />


                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Submit
                    </button>
                    </Form>
                    )}
                    
                </Formik>
            </div>
        </div>
        
    )
}

export default FormThree;