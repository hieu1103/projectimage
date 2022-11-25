export function validateRegisterForm(registerData) {
    if (registerData.email == '')
        return {
            status: false,
            msg: "Let provide an email !",
            route: "#"
        }
    if (registerData.user_name == '') return {
        status: false,
        msg: "Let provide an username !",
        route: "#"
    }
    if (registerData.password == '') return {
        status: false,
        msg: "Let provide a password !",
        route: "#"
    }
    if (registerData.password2 == '') return {
        status: false,
        msg: "Let provide a confirm password !",
        route: "#"
    }
    if (registerData.phone_number == '') return {
        status: false,
        msg: "Let provide a number phone!",
        route: "#"
    }
    if (registerData.password != registerData.password2) return {
        status: false,
        msg: "Password does not match",
        route: "#"
    }

    return {
        status: true
    }

}
export function validateLoginForm(loginData) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (loginData.email == '')
        return {
            status: false,
            msg: "Let provide an email !",
            route: "#"
        }
    if (!loginData.email.match(validRegex)) return {
        status: false,
        msg: "invalid Email !",
        route: "#"
    }
    if (loginData.password == '') return {
        status: false,
        msg: "Let provide a password !",
        route: "#"
    }

    return { status: true }
}


export function validateOrderForm(orderData) {
    if (orderData.name =='')  return {
        status: false,
        msg: "Let provide your name !",
        route: "#"
    }
    if (orderData.address=='')  return {
        status: false,
        msg: "Let provide your address !",
        route: "#"
    }
    if (orderData.numberPhone =='')  return {
        status: false,
        msg: "Let provide a number phone !",
        route: "#"
    }
    return true

}

export function changePasswordFormValidate(changePasswordForm) {
    if (changePasswordForm.password =='') return {
        status: false,
        msg: "Let provide your password!",
        route: "#"
    }
    if (changePasswordForm.new_password =='') return {
        status: false,
        msg: "Let provide your new password!",
        route: "#"
    } 
    if (changePasswordForm.new_password_confirm=='') return {
        status: false,
        msg: "Let provide your confirm password !",
        route: "#"
    }
    // if (changePasswordForm.new_password.length <6) return {
    //     status: false,
    //     msg: "Your New password is too short, please try another",
    //     route: "#"
    // } 

    if (changePasswordForm.new_password != changePasswordForm.new_password_confirm) return  {
        status: false,
        msg: "New Password and Confirm password is not match, please try again !!",
        route: "#"
    }
    return true
}