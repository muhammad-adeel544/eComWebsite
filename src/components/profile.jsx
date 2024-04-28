import React, { useState } from "react";
import { TextField, Box, FormControl, InputLabel, Select, MenuItem, Typography, Button } from "@mui/material";

import { styled } from "@mui/system";
import { useFormik } from "formik";
import { Link } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Profile = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const users = useSelector((state) => state.getuser?.getusers);

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [location, setLocation] = useState("");
  const [billingInfo, setBillingInfo] = useState("");
  const StyledTypography = styled(Typography)({
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 5,
  });

  const StyledButton = styled(Button)({
    width: "100%",
    marginTop: "1rem",
  });

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        username: "",
        email: "",
        interest: "",
        location: "",
        billingInfo: "",
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
      <Typography variant="h4" sx={{ marginBottom: '1.5rem' }}>Profile</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
          <InputLabel htmlFor="name" sx={{ marginRight: '1rem', minWidth: '120px', alignSelf: 'center',fontWeight:"Bold" }}>Name</InputLabel>
          <FormControl fullWidth>
            <TextField
              id="name"
              name="name"
              variant="outlined"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name && touched.name}
            />
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
          <InputLabel htmlFor="username" sx={{ marginRight: '1rem', minWidth: '120px', alignSelf: 'center',fontWeight:"Bold" }}>Username</InputLabel>
          <FormControl fullWidth>
            <TextField
              id="username"
              name="username"
              variant="outlined"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username && touched.username}
            />
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
          <InputLabel htmlFor="email" sx={{ marginRight: '1rem', minWidth: '120px', alignSelf: 'center',fontWeight:"Bold" }}>Email</InputLabel>
          <FormControl fullWidth>
            <TextField
              id="email"
              name="email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
            />
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
          <InputLabel htmlFor="interests" sx={{ marginRight: '1rem', minWidth: '120px', alignSelf: 'center',fontWeight:"Bold" }}>Interests</InputLabel>
          <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
            <InputLabel htmlFor="interests">Interests</InputLabel>
            <Select
              id="interests"
              name="interests"
              value={values.interests}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.interests && touched.interests}
              variant="outlined"
            >
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Fashion">Fashion</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
          <InputLabel htmlFor="location" sx={{ marginRight: '1rem', minWidth: '120px', alignSelf: 'center',fontWeight:"Bold" }}>Location</InputLabel>
          <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
            <iframe
              
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1686957630477!2d-77.0368704851609!3d38.907192081767846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d3f4b7e61b!2sWhite%20House!5e0!3m2!1sen!2sus!4v1633573829779!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
          <InputLabel htmlFor="billingInfo" sx={{ marginRight: '1rem', minWidth: '120px', alignSelf: 'center', fontWeight:"Bold" }}>Billing Info</InputLabel>
          <FormControl fullWidth>
            <TextField
              id="billingInfo"
              name="billingInfo"
              variant="outlined"
              value={values.billingInfo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.billingInfo && touched.billingInfo}
            />
          </FormControl>
        </Box>
      </form>
    </Box>
  </Box>
  );
};

export default Profile;
