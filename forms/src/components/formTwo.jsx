import { useFormik } from "formik";
import * as Yup from "yup";

const FormTwo = () => {

    const formik = useFormik({
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
    }
    );

    return(
        <div className="container">
            <div className="col-md-12 mt-5">
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstname">First name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="firstname"
                        {...formik.getFieldProps('firstname')} // this line is doing all below:
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.firstname}
                    />
                    {
                        formik.errors.firstname && formik.touched.firstname && (
                            <div className="text-danger">{formik.errors.firstname}</div>
                        )
                    }
                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        
    )
}

export default FormTwo;