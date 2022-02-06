import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useLocation, Link as RouterLink } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper, Link } from '@mui/material';
import { setDoc, doc } from 'firebase/firestore';

import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';

const registerSchema = Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string().email().required(),
	password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
	passwordConfirmation: Yup.string().required('Please retype your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

/**
 * User Registration page
 */
const Register = () => {
	const { register } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	// @ts-ignore
	const from = location.state?.from?.pathname || "/";

	return (
		<Paper sx={{ m: 10, py: 5, px: 2 }}>
			<Typography variant='h1' textAlign='center' sx={{ mb: 4 }}>Register</Typography>
			<Formik
				initialValues={{ name: '', email: '', password: '', passwordConfirmation: '' }}
				validationSchema={registerSchema}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(true);
					register(values.email, values.password).then(userCredential => {
						// TODO: Move this to auth context
						setDoc(doc(db, 'users', userCredential.user.uid), {
							displayName: values.name,
						});
						navigate(from, { replace: true});
					}).catch(err => {
						console.error(err);
					})
				}}
			>
				{({ isSubmitting, values, errors, touched, handleChange, handleBlur }) => (
					<Form>
						<Box pb={4}>
							<TextField
								fullWidth
								id="name"
								name="name"
								label="Name"
								value={values.name}
								onChange={handleChange}
								onBlur={handleBlur}
								error={touched.name && Boolean(errors.name)}
								helperText={touched.name && errors.name}
							/>
						</Box>
						<Box pb={4}>
							<TextField
								fullWidth
								id="email"
								name="email"
								label="Email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
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
								onBlur={handleBlur}
								error={touched.password && Boolean(errors.password)}
								helperText={touched.password && errors.password}
							/>
						</Box>
						<Box pb={4}>
							<TextField
								fullWidth
								id="passwordConfirmation"
								name="passwordConfirmation"
								label="Confirm Password"
								type="password"
								value={values.passwordConfirmation}
								onChange={handleChange}
								onBlur={handleBlur}
								error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
								helperText={touched.passwordConfirmation && errors.passwordConfirmation}
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
			<Box display='flex' justifyContent='flex-end' marginTop={4}>
				<Link>
					<RouterLink to='/login'>Existing user? Login here!</RouterLink>
				</Link>
			</Box>
		</Paper>
	)
}

export default Register;
