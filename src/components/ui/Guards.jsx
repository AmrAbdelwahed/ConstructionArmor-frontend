import React, { useState } from 'react';
import '@/assets/LoginSignup.css';
import '@/assets/navbar.css';
import { TextField, Snackbar, Alert, CircularProgress } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import DialpadTwoToneIcon from '@mui/icons-material/DialpadTwoTone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InfoIcon from '@mui/icons-material/Info';
import Navbar from './Navbar';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';  // Changed from 5173 to 3001

const Guards = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    license: '',
    yearsOfExperience: '',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone format';
    if (!formData.license.trim()) newErrors.license = 'Security guard license is required';
    if (!formData.yearsOfExperience.trim()) newErrors.yearsOfExperience = 'Years of experience is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/submit-guard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Guard form submitted successfully!',
          severity: 'success',
        });
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          city: '',
          license: '',
          yearsOfExperience: '',
          details: '',
        });
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message,
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container" style={{ backgroundColor: 'rgb(255, 255, 255)', minHeight: '100vh', color: '#fff' }}>
      <Navbar />

      <div className="container-form">
        <div className="header">
          <div className="text">Security Guards Application</div>
        </div>
        <div className="inputs">
          {[ 
            { icon: AccountCircleIcon, name: 'fullName', placeholder: 'Full Name' },
            { icon: DialpadTwoToneIcon, name: 'phone', placeholder: 'Phone Number', type: 'tel' },
            { icon: EmailIcon, name: 'email', placeholder: 'Email Address', type: 'email' },
            { icon: LocationCityIcon, name: 'city', placeholder: 'City' },
            { icon: InfoIcon, name: 'license', placeholder: 'Security Guard License' },
            { icon: InfoIcon, name: 'yearsOfExperience', placeholder: 'Years of Experience' },
          ].map(({ icon: Icon, name, placeholder, type = 'text' }) => (
            <div className="input" key={name}>
              <Icon style={{ margin: '0px 30px', color: '#555' }} />
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
              />
              {errors[name] && <p className="error" style={{ color: 'red' }}>{errors[name]}</p>}
            </div>
          ))}

        <div className="input-container">
          <div className="input">
            <TextField
              label="Additional Details"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              name="details"
              value={formData.details}
              onChange={handleChange}
              InputProps={{
                style: {
                  backgroundColor: 'transparent', // Matches `.input input`
                  border: 'none',
                  outline: 'none',
                  color: '#797979', // Matches `.input input`
                  fontSize: '19px', // Matches `.input input`
                },
              }}
              InputLabelProps={{
                style: {
                  color: '#555', // Matches label text color in `.input`
                },
              }}
            />
            {errors.details && (
              <p
                className="error"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '0',
                  color: 'red',
                  margin: 0,
                  textAlign: 'right',
                }}
              >
                {errors.details}
              </p>
            )}
          </div>
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" onClick={handleSubmit}>
            Submit
            {loading && <CircularProgress size={20} style={{ marginLeft: '10px', color: '#fff' }} />}
          </button>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Guards;
