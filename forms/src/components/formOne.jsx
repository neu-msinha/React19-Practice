import {Form, Formik} from 'formik';
import * as Yup from 'yup';

const FormOne = () => {

    return (
     <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        country: '',
        state: '',
        zip: ''
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastname: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        zip: Yup.string()
          .matches(/^\d{5}(-\d{4})?$/, 'Invalid zip code')
          .required('Required'),
        country: Yup.string()
          .oneOf(
            ['US', 'CA', 'NL'],
            'Invalid Country'
          )
          .required('Required'),
        state: Yup.string()
          .oneOf(
            ['California', 'Toronto', 'Utrech'],
            'Invalid State'
          )
          .required('Required')
      }
      )
      }
      // validate={(values)=> {
      //   const errors = {};
      //   if (!values.firstname) {
      //     errors.firstname = 'Required';
      //   }
      //   if (!values.lastname) {
      //     errors.lastname = 'Required';
      //   }
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      //     errors.email = 'Invalid email address';
      //   }
      //   if (!values.zip) {
      //     errors.zip = 'Required';
      //   } else if (!/^\d{5}(-\d{4})?$/.test(values.zip)) {
      //     errors.zip = 'Invalid zip code';
      //   }
      //   return errors;
      // }}
      onSubmit={(values) => {
        console.log(values);
      }}
     >
      {({
        values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
        })=>(
        <div className="container">
          <div className="col-md-12 mt-5">
          <form onSubmit={handleSubmit}>
            <h4 className="mb-3">Personal information</h4>
    
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstname">First name</label>
                <input 
                type="text" 
                className="form-control"
                id="firstname" 
                onChange={handleChange}
                value={values.firstname}
                />
                {errors.firstname && touched.firstname && (
                  <div className="text-danger">{errors.firstname}</div>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastname">Last name</label>
                <input type="text" className="form-control" id="lastname" onChange={handleChange}
                value={values.lastname}/>
                 {errors.lastname && touched.lastname && (
                  <div className="text-danger">{errors.lastname}</div>
                )}
              </div>
            </div>
    
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" onChange={handleChange}
                value={values.email} placeholder="you@example.com"/>
                {errors.email && touched.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
            </div>
    
      
            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select className="custom-select d-block w-100" id="country" onChange={handleChange}
                value={values.country}>
                  <option value="">Choose...</option>
                  <option value="US">US</option>
                  <option value="CA">CA</option>
                  <option value="NL">NL</option>
                </select>
                {errors.country && touched.country && (
                  <div className="text-danger">{errors.country}</div>
                )}
              
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select className="custom-select d-block w-100" id="state" onChange={handleChange}
                value={values.state}>
                  <option value="">Choose...</option>
                  <option value="California">California</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Utrech">Utrech</option>
                </select>

                 {errors.state && touched.state && (
                  <div className="text-danger">{errors.state}</div>
                )}
              
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="zip" onChange={handleChange}
                value={values.zip}/>
                {errors.zip && touched.zip && (
                  <div className="text-danger">{errors.zip}</div>
                )}
              </div>
            </div>
    
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Submit
            </button>
          </form>
          </div>
        </div>
      )}
     </Formik>
    );

}

export default FormOne;