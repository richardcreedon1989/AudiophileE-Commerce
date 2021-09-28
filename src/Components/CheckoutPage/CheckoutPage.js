import "./CheckoutPage.css"
import {Formik, Form, useField, Field } from "formik"
import * as Yup from 'yup';

const className = "CheckoutPage"

let initialValues = {
  name: "",
  emailAddress: "",
  middleName: "",
  yourAddress: "",
  zipCode: "",
  city: "",
  country: "",
  paymentMethod: "",
  eMoney: "",
  eMoneyPin: "",

}

const validationSchema= Yup.object({
  name: Yup.string().required("Required"),
  emailAddress: Yup.string().required("Required"),
  middleName: Yup.string().required("Required"),
  yourAddress: Yup.string().required("Required"),
  zipCode: Yup.number().max(6, "Max 6").required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  paymentMethod: Yup.string().required("Required"),
  eMoney: Yup.string().required("Required"),
  eMoneyPin: Yup.string().required("Required"),
})

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
    <div className={`${className}LabelInputContainer`}>
        <div className={`${className}LabelErrorContainer`}> 
            <label className={`${className}Label`} htmlFor={props.id || props.name}>
                {label}   
            </label>
            <span className={`${className}Error`}>     
                {meta.touched && meta.error ? (
                <div>{meta.error}</div>
                ) : null} 
            </span>
        </div>
        <input className={`${className}Input`} {...field} {...props} />
    </div>
    </>
  );
};

const CheckoutPage = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
    
    > 
    {({values, errors, touched, handleBlur, handleReset}) => ( //Ctrl + Space brings up options ie initialValues 
      
    <Form>    
      <div className={`${className}OuterContainer`}> 
        <div className={`${className}Container`}> 
            <h5 className={`${className}FormGroupHeader`}> 
                BILLING DETAILS
            </h5>
            <MyTextInput
                label="Name"
                name="name"
                id="name"
                type="text"
                placeholder="John Doe"
            />

            <MyTextInput
                label="Email Address"
                name="emailAddress"
                id="emailAddress"
                type="email"
                placeholder="johndoe@gmail.com"
            />

            <MyTextInput
                label="Middle Name"
                name="middleName"
                id="middleName"
                type="text"
                placeholder="Kevin"
            />

            <h5 className={`${className}FormGroupHeader`}> 
                SHIPPING INFO
            </h5>
            <MyTextInput
                label="Your Address"
                name="yourAddress"
                id="yourAddress"
                type="text"
                placeholder="16 Dublin Road"
            />

            <MyTextInput
                label="ZIP CODE"
                name="zipCode"
                id="zipCode"
                type="text"
                placeholder="T12 76F4"
            />

            <MyTextInput
                label="City"
                name="city"
                id="city"
                type="text"
                placeholder="Dubin"
            />

            <MyTextInput
                label="Country"
                name="country"
                id="country"
                type="text"
                placeholder="Ireland"
            />

        
            <h5 className={`${className}FormGroupHeader`}> 
                PAYMENT DETAILS
            </h5>
            <div className={`${className}LabelInputContainer`} role="group" aria-labelledby="my-radio-group">   
                <div className={`${className}LabelErrorContainer`}> 
                    <label className={`${className}Label`} htmlFor="paymentMethod">  Payment Method </label>
                    <span className={`${className}Error`}>     
                        {touched.paymentMethod && errors.paymentMethod ? (
                    <div>
                        {errors.paymentMethod}
                    </div>
                        ) : null} 
                    </span>
                </div>
                <label className={`${className}RadioLabel ${className}Input`}>
                    <Field className={`${className}RadioBox`} type="radio" name="paymentMethod" value="e-money" />
                    e-Money
                </label>

                <label className={`${className}Input ${className}RadioGroupMargin ${className}RadioLabel`}>
                    <Field className={`${className}RadioBox`} type="radio" name="paymentMethod" value="cash" />
                    Cash on Delivery
                </label>
            </div>
        <MyTextInput
            label="e-Money Number"
            name="eMoney"
            id="eMoney"
            type="number"
            placeholder="246374765"
        />

        <MyTextInput
            label="e-Money PIN"
            name="eMoneyPin"
            id="eMoneyPin"
            type="number"
            placeholder="5674"
        />


            {console.log("values", values)}
            {console.log("errors", errors)}
        </div>
        </div>

    </Form>
      )}  
                    
      </Formik>
  )
}   


export default CheckoutPage