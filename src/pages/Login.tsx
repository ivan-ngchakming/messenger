import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

import { useAuth } from '../contexts/AuthContext';

const loginSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().required(),	
});

/**
 * User Login page
 * 
 * TODO: Fix helper text not showing up
 * TODO: Implement better style for UI
 * TODO: Setup link to registration page for new users
 * TODO: Setup link to forget password page
 */
const Login = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	// @ts-ignore
	const from = location.state?.from?.pathname || "/";

	return (
		<Paper sx={{ m: 10, py: 5, px: 2 }}>
			<Typography variant='h1' textAlign='center' sx={{ mb: 4 }}>Login</Typography>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={loginSchema}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(true);
					login(values.email, values.password).then(res => {
						console.log(res);
						navigate(from, { replace: true});
					})
				}}
			>
				{({ isSubmitting, values, errors, touched, handleChange }) => (
					<Form>
						<Box pb={4}>
							<TextField
								fullWidth
								id="email"
								name="email"
								label="Email"
								value={values.email}
								onChange={handleChange}
								error={touched.email && Boolean(errors.email)}
								helperText={touched.email && errors.email}
							/>
						</Box>
						<Box pb={4}>
							<TextField
								fullWidth
								id="password"
								name="password"
								label="Password"
								type="password"
								value={values.password}
								onChange={handleChange}
								error={touched.password && Boolean(errors.password)}
								helperText={touched.password && errors.password}
							/>
						</Box>
						<Box display='flex' justifyContent='center'>
							<Button sx={{ m: 1 }} color="primary" variant="contained" type="submit" disabled={isSubmitting}>
								Submit
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</Paper>
	)
}

export default Login;
