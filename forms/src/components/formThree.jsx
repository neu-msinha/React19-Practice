import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormThree = () => {

    const formikProps = {
            initialValues: {
                firstname: '',
                color: ''
            },
            validationSchema: Yup.object({
                firstname: Yup.string()
                    .max(15, 'Must be 15 characters or less')
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