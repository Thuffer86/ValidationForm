function btnCheckForm_onclick() {
    var myForm = document.validityForm;
    var formAge = document.validityForm.formAge;
    var formNameValue = myForm.formName.value;
    if (myForm.formName.value == "") {
        myForm.formName.focus();
        $(".alertName").append(" *Please enter a name");
        } else {
            myForm.formAge.focus();
        }
    if (isNaN(formAge.value) == true || formAge.value == "") {
            $(".alertAge").append(" *Please enter a valid age");
        } else if (isNaN(formAge.value) == false &&
            formNameValue != "") {
         $("form")[0].reset();
         $(".alertName").hide();
         $(".alertAge").hide();
    }
}
