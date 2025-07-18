import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const FormThree = () => {

    const formikProps = {
            initialValues: {
                firstname: '',
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
                    <Form>
                    <label htmlFor="firstname">First name</label>
                    <Field 
                        className="form-control" 
                        type="text" 
                        name="firstname"
                    />
                    
                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Submit
                    </button>
                    </Form>
                </Formik>
            </div>
        </div>
        
    )
}

export default FormThree;