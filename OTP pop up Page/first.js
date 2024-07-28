// let generateOTP = () => {
//     // define the lenth of an Otp
//     const otpLength = 6;
//     // Generate a random numeric Otp
//     const otp = Math.floor(Math.random() * Math.pow(10, otpLength));
//     // display the generated otp
//     document.getElementById("otpDisplay").
//         innerText = otp;
// };

// document.getElementById("generateBtn").addEventListener("click", generateOTP);
// window.addEventListener("load", generateOTP);
document.addEventListener("DOMContentLoaded", function() {
    const otpButton = document.getElementById('generateBtn');
    const otpDisplay = document.getElementById('otpDisplay');
    const otpInput = document.getElementById('otpInput');
    let generatedOtp = '';

    otpButton.addEventListener('click', function() {
        if (otpButton.innerText === 'Generate OTP') {
            // Generate a 6-digit OTP
            generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

            // Display the OTP
            otpInput.innerText = `Your OTP: ${generatedOtp}`;
            
            // Alert the OTP
            alert(`Your OTP is: ${generatedOtp}`);
            
            // Change button text to "Confirm"
            otpButton.innerText = 'Confirm';
        } else if (otpButton.innerText === 'Confirm') {
            // Check if entered OTP matches generated OTP
            if (otpDisplay.value === generatedOtp) {
                alert('Successfully Registered');
            } else {
                alert('Incorrect OTP. Please try again.');
            }
        }
    });
    
});