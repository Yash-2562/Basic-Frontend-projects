let generateOTP = () => {
    // define the lenth of an Otp
    const otpLength = 6;
    // Generate a random numeric Otp
    const otp = Math.floor(Math.random() * Math.pow(10, otpLength));
    // display the generated otp
    document.getElementById("otpDisplay").
        innerText = otp;
};

document.getElementById("generateBtn").addEventListener("click", generateOTP);
window.addEventListener("load", generateOTP);