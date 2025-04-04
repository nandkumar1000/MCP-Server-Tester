const axios = require('axios');
const mcpValidator = require('../utils/mcpValidator');

exports.testMCPServer = async (req, res) => {
  const { installationCode } = req.body;

  if (!installationCode) {
    return res.render('error', { message: 'Installation code is required' });
  }

  // ✅ Server-side URL validation
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  if (!isValidUrl(installationCode)) {
    return res.render('error', { message: 'Invalid URL format. Please enter a valid URL.' });
  }

  try {
    // ✅ Replace this with dynamic URL later if needed
    const response = await axios.get(installationCode);
    // console.log('Response Data:', response.data);

    // ✅ Custom validator logic
    const isValid = mcpValidator.validate(response.data);

    res.render('results', { success: isValid, data: response.data });
  } catch (error) {
    let errorMessage = 'Failed to connect to MCP server';

    if (error.response) {
      errorMessage += ` - ${error.response.status}: ${error.response.statusText}`;
    } else if (error.request) {
      errorMessage += ' - No response received from server';
    } else {
      errorMessage += ` - ${error.message}`;
    }

    console.error("Detailed Error:", errorMessage);
    res.render('error', { message: errorMessage });
  }
};
