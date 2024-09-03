const email = document.querySelector("#email");
const emailError = document.querySelector("#error-msg");
const fname = document.querySelector("#fname");
const fnameError = document.querySelector("#fname-Error-msg");
const query1 = document.querySelector("#query1");
const query2 = document.querySelector("#query2");
const label = document.querySelector('label[for="query1"]');
const checkQuery1 = document.querySelector('.checkQuery1');
const checkQuery2 = document.querySelector('.checkQuery2');
const policy = document.querySelector('#policy');
const submitBtn = document.querySelector('.btn');


const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
function validateEmail() {
  if (!email.value.match(emailPattern)) {
    emailError.innerHTML = "Please enter a valid email";
    return false;
  }
  emailError.innerHTML = "";
  return true;
}

function validatesName() {
  if (!fname.value == " ") {
    fnameError.innerHTML = "";
  } else {
    fnameError.innerHTML = "Required";
  }
}





query1.addEventListener('click', function () {
  if (query1.checked) 
    {
        checkQuery1.style.backgroundColor = "#0c7d6885";
        query2.checked = false;
        checkQuery2.style.backgroundColor = "";
    }
    else{
        checkQuery1.style.backgroundColor = "";
    }
});

query2.addEventListener('click', function () {
  if (query2.checked) 
    {
        checkQuery2.style.backgroundColor = "#0c7d6885";
        query1.checked = false;
        checkQuery1.style.backgroundColor = "";
    }
    else{
        checkQuery2.style.backgroundColor = "";
    }
});



const successMsg = document.querySelector('.successMsg');

function submitmsg(){
    if(fname.value.trim() == ''){
        
        return false;
    }
    return true
}

const myform = document.querySelector('#myform')



myform.addEventListener('submit',function(event){
    event.preventDefault();
    successMsg.style.display = 'block';
    successMsg.classList.add('show');

    setTimeout(function() {
        successMsg.style.display = 'none';
      }, 2000);

      checkQuery1.style.backgroundColor = "";
      checkQuery2.style.backgroundColor = "";
      this.reset();
})




submitBtn.addEventListener('click',function(){
  if(policy)
})