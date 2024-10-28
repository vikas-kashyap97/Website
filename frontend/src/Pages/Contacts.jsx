import React, { useState } from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEye, 
    faEyeSlash, 
    faEnvelope, 
    faPhone, 
    faLock,
} from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contacts = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        github: '',
        linkedin: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        
        // Email validation
        if (!formData.email) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
        }

        // Phone validation
        if (!formData.phone) {
            tempErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            tempErrors.phone = 'Phone number must be 10 digits';
        }

        // Password validation
        if (!formData.password) {
            tempErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
        }

        // Confirm Password validation
        if (!formData.confirmPassword) {
            tempErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = 'Passwords do not match';
        }

        // GitHub validation (optional)
        if (formData.github && !/^https:\/\/github\.com\/.*/.test(formData.github)) {
            tempErrors.github = 'Please enter a valid GitHub URL';
        }

        // LinkedIn validation (optional)
        if (formData.linkedin && !/^https:\/\/www\.linkedin\.com\/.*/.test(formData.linkedin)) {
            tempErrors.linkedin = 'Please enter a valid LinkedIn URL';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log('Form submitted:', formData);
            alert('Congratulations! You have successfully logged in.'); // Success message
            // Add your API call or further processing here
        } else {
            // Show errors in a pop-up
            const errorMessages = Object.values(errors).join('\n');
            alert(`There were errors in your submission:\n${errorMessages}`);
        }
    };

    return (
        <div className="contacts-container">
            <div className="contacts-form-container">
                <h2>Contact Login</h2>
                <form onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div className="form-group">
                        <div className="input-group">
                            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    {/* Phone Field */}
                    <div className="form-group">
                        <div className="input-group">
                            <FontAwesomeIcon icon={faPhone} className="input-icon" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>

                    {/* Password Field */}
                    <div className="form-group">
                        <div className="input-group">
                            <FontAwesomeIcon icon={faLock} className="input-icon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="form-group">
                        <div className="input-group">
                            <FontAwesomeIcon icon={faLock} className="input-icon" />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <FontAwesomeIcon
                                icon={showConfirmPassword ? faEyeSlash : faEye}
                                className="toggle-password"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                        </div>
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                    </div>

                    {/* GitHub Field */}
                    <div className="form-group">
                        <div className="input-group">
                            <FaGithub className="input-icon" />
                            <input
                                type="text"
                                name="github"
                                placeholder="GitHub Profile URL (optional)"
                                value={formData.github}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.github && <span className="error">{errors.github}</span>}
                    </div>

                    {/* LinkedIn Field */}
                    <div className="form-group">
                        <div className="input-group">
                            <FaLinkedin className="input-icon" />
                            <input
                                type="text"
                                name="linkedin"
                                placeholder="LinkedIn Profile URL (optional)"
                                value={formData.linkedin}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.linkedin && <span className="error">{errors.linkedin}</span>}
                    </div>

                    <button type="submit" className="submit-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
