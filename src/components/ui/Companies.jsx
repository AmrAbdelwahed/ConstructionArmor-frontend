import React, { useState } from 'react';
import '@/assets/LoginSignup.css';
import { TextField, Snackbar, Alert, CircularProgress, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import DialpadTwoToneIcon from '@mui/icons-material/DialpadTwoTone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BuildIcon from '@mui/icons-material/Build';
import Navbar from './Navbar';
import StreamlineHiring from './StreamlineHiring';
import GuardTypes from './GuardTypes';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const majorAreas = [
  'A - Street Construction & Site Work Jobs',
  'B - Paving & Road Work Jobs',
  'C - Warehouse & General Labor Roles',
  'D - Machine Operators (Industrial)',
  'E - Skilled Trades',
  'F - Welding Jobs',
  'G - Construction Trades'
];

const Companies = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cityProvince: '',
    majorArea: '',
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

    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone format';
    if (!formData.cityProvince.trim()) newErrors.cityProvince = 'City & Province is required';
    if (!formData.majorArea) newErrors.majorArea = 'Major area is required';

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
      const response = await fetch(`${API_URL}/api/submit-company`, {
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
          message: 'Company form submitted successfully!',
          severity: 'success',
        });
        setFormData({
          companyName: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          cityProvince: '',
          majorArea: '',
          details: '',
        });
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      setSnackbar({
        open: true,
        message: error.message || 'An unexpected error occurred',
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
          <div className="text"  style={{ color: '#f47d23' }}>Employers Start Here</div>
        </div>
        <div className="inputs">
          {[ 
            { icon: BusinessIcon, name: 'companyName', placeholder: 'Your Company Name' },
            { icon: AccountCircleIcon, name: 'firstName', placeholder: 'Your First Name' },
            { icon: AccountCircleIcon, name: 'lastName', placeholder: 'Your Last Name' },
            { icon: EmailIcon, name: 'email', placeholder: 'Your Email Address', type: 'email' },
            { icon: DialpadTwoToneIcon, name: 'phone', placeholder: 'Your Phone Number', type: 'tel' },
            { icon: LocationCityIcon, name: 'cityProvince', placeholder: 'Your City & Province' },
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

          {/* Major Area Dropdown */}
          <div className="input">
            <BuildIcon style={{ margin: '0px 30px', color: '#555' }} />
            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px' }}>
              <InputLabel id="major-area-label" style={{ color: '#555' }}>
                The major area you looking for?
              </InputLabel>
              <Select
                labelId="major-area-label"
                name="majorArea"
                value={formData.majorArea}
                onChange={handleChange}
                label="The major area you looking for?"
                style={{
                  backgroundColor: 'transparent',
                  color: '#797979',
                  fontSize: '19px',
                }}
              >
                {majorAreas.map((area, index) => (
                  <MenuItem key={index} value={area}>
                    {area}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors.majorArea && <p className="error" style={{ color: 'red' }}>{errors.majorArea}</p>}
          </div>

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
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#797979',
                    fontSize: '19px',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: '#555',
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

      <div id="streamline-hiring">
        <StreamlineHiring />
      </div>

      <div id="guard-types">
        <GuardTypes />
      </div>
    </div>
  );
};

export default Companies;