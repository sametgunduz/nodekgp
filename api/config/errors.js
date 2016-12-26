exports.errorMessages = function(errorCode) {
    var returnMessage = null;
    switch (errorCode) {
        case 0: //-- Successfull
            returnMessage = 'Succesfull';
            break;
        case 999: //-- General
            returnMessage = 'Internal Server Error';
            break;
        case 998: //-- Token
            returnMessage = 'No Token Provided !';
            break;
        case 997: //-- Token
            returnMessage = 'Failed to authenticate token.';
            break;
        case 100: //-- Register
            returnMessage = 'No user type provided';
            break;
        case 101: //-- Register
            returnMessage = 'Password and Confirm password didnt match';
            break;
        case 102: //-- Register
            returnMessage = 'Email is already used by another user !';
            break;
        case 103: //-- Register
            returnMessage = 'Cannot upload this picture';
            break;
        case 104: //-- Register
            returnMessage = 'No image provided';
            break;
        case 105: //-- Register
            returnMessage = 'Mandatory field must be provided';
            break;
        case 106: //-- Activate
            returnMessage = 'Activation code is mandatory field';
            break;
        case 107: //-- Activate
            returnMessage = 'Activation code or email is wrong';
            break;
        case 108: //-- Login
            returnMessage = 'Credential should provided';
            break;
        case 109: //-- Login
            returnMessage = 'Account did not activated';
            break;
        case 110: //-- Login
            returnMessage = "Email or username couldn't find";
            break;
        case 111: //-- Login
            returnMessage = "Invalid username or password";
            break;
        case 112: //-- Forgot password
            returnMessage = "You already created restore code.Please provide it";
            break;
        case 113: //-- Forgot password
            returnMessage = "Your password locked.You should change your password";
            break;
        case 114: //-- Forgot password
            returnMessage = "Password restore code is invalid";
            break;
        case 115: //-- Forgot password
            returnMessage = "This password restore code already used";
            break;
        case 116: //-- General
            returnMessage = 'Some values should provide';
            break;
        case 117: //-- Package
            returnMessage = 'Your credential couldn\'t find in our system';
            break;
        case 118: //-- Profile
            returnMessage = 'This username already taken by another user';
            break;
        case 119: //-- Package
            returnMessage = 'No packages found';
            break;
        case 120: //-- Activate
            returnMessage = 'Activation Code was expired.Please check your mail box for new activation code.';
            break;
        case 121: //-- Forgot password
            returnMessage = 'Password Restore Code was expired.Please check your mail box for new restoration code.';
            break;
        case 122: //-- Create Package
            returnMessage = '<p>You have created a new package with PAKKAGE app.</p><p>Your new package record has been successfully created under your profile in the PAKKAGE app. If you have completed all the required information to send a package to your intended recipient, this means you can take your package to the nearest HUB in your area. Check available HUBS on your PAKKAGE app. Once you drop your package off at the HUB, simply relax and just track your package on your phone as it makes its way to the destination HUB for your recipient to pick up.</p><p>Thank you for choosing PAKKAGE</p>';
            break;
        case 123: //-- Scan QR Code
            returnMessage = 'This package couldn\t find in the system.';
            break;
        case 124: //-- Scan QR Code
            returnMessage = 'This hub couldn\t find in the system.';
            break;
        case 125: //-- check username
            returnMessage = 'Please fill out a username';
            break;
        default:
            returnMessage = 'Something went wrong !';
            break;
    }
    if (errorCode == 0) {
        return {
            status: 'OK',
            message: returnMessage,
            errorCode: errorCode
        };
    } else
        return {
            status: 'Error',
            message: returnMessage,
            errorCode: errorCode
        };

};
