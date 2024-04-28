import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useFormik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import { signup } from '../Redux/UserSlices';
// import { crudopeUser } from '../schema/UserScheme';
// import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
// import { Spinner } from '../Components/Spinner';
import { toast } from 'react-toastify';

const SignUp = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const users = useSelector((state) => state.getuser?.getusers);

  const StyledTypography = styled(Typography)({
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 5,
  });

  const StyledButton = styled(Button)({
    width: '100%',
    marginTop: '1rem',
  });


  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      contact: '',
      password: '',
      contactNumber: '',
    },
    // validationSchema: crudopeUser,
    onSubmit: async (values) => {
  //     const [username, setusername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setpassword] = useState("");
  // const [rePassword, setrePassword] = useState("");
  // const dispatch = useDispatch();
  //     e.preventDefault();
  //     if (password !== rePassword) {
  //       toast.error("Password does not match");
  //     } else {
  //       signup(dispatch, { username, email, password });
  //       setusername("");
  //       setEmail("");
  //       setpassword("");
  //       setrePassword("");
  //       redirect("/signup")
  //     }
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: "linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))",
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 550, backgroundColor: 'white', padding: '2rem', margin: ".5rem", borderRadius: '15px' }}>

        <StyledTypography variant="h4">Create an account</StyledTypography>
        <form onSubmit={"handleSubmit"}>
          <TextField
            sx={{ mt: 1, mb: 1 }}
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name}
            helperText={errors.name && touched.name && errors.name}
            id="name"
            name="name"
          />
          <TextField
            sx={{ mt: 1, mb: 1 }}
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email && errors.email}
            id="email"
            name="email"
          />
          <TextField
            sx={{ mt: 1, mb: 1 }}
            fullWidth
            label="Address"
            variant="outlined"
            margin="normal"
            value={values.contact}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.contact && touched.contact}
            helperText={errors.contact && touched.contact && errors.contact}
            id="contact"
            name="contact"
          />
          <TextField
            sx={{ mt: 1, mb: 1 }}
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password && touched.password}
            helperText={errors.password && touched.password && errors.password}
            id="password"
            name="password"
          />
          <TextField
            sx={{ mt: 1, mb: 1 }}
            fullWidth
            label="Contact Number"
            variant="outlined"
            margin="normal"
            value={values.contactNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.contactNumber && touched.contactNumber}
            helperText={errors.contactNumber && touched.contactNumber && errors.contactNumber}
            id="contactNumber"
            name="contactNumber"
          />
          <Box sx={{ mt: 1, mb: 2, pb: { lg: 0 }, color: '#393f81' }}>
            Already have an account?{' '}
            <Link href="/" sx={{ color: 'dark' }}>
              Login
            </Link>
          </Box>

          <div>
            
             
              <StyledButton type="submit" variant="contained" color="primary">
                SignUp
              </StyledButton>
            
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
