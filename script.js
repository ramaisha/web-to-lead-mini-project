let captchachecked = false;
function beforesubmit(event) {
  if (captchachecked) {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value", inputdate.value); //string ---> date(en-US) (lead owner locale)
    console.log("ramesh");
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-US"); //converting date to "en-US" (converting to lead owner locale)
    outputdate.value = formatteddate;
  } else {
    alert("please check the reCAPTCHA box to submit the lead");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchasuccess() {
  captchachecked = true;
}
