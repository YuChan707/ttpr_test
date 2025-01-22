import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import
import { AppLogin } from './base/login-index';

const rootSearching = createRoot(
    document.getElementById('here')); // Corrected function call
rootSearching.render(<AppLogin />);
