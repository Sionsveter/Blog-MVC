/**
 * Created by user on 8.3.2016 г..
 */
var SignUpUserModel = (function(){
    function SignUpUserModel(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;

    }
    return SignUpUserModel;
})();
var test = new SignUpUserModel("pesho", "sdasa","dsadsa");

console.log(JSON.stringify(test));