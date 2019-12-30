var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();
function isPasswordValid(){
    return $password.val().length > 8;
}
function arePasswordMatching() {
    return $password.val() === $confirmPassword.val();
}
function canSubmit() {
    return isPasswordValid() && arePasswordMatching();
}

function passwordEvent(){
    
    if(isPasswordValid()){
        
        $password.next().hide();
            }else{
                $password.next().show();
            }
}

function confirmPasswordEvent(){
    if(
    arePasswordMatching()
){
    $confirmPassword.next().hide(); 
}else{
    $confirmPassword.next().show();
}
}
function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());  
}


$password.focus(passwordEvent).keyup(passwordEvent)
.keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();