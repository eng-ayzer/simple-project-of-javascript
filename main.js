const userName = document.querySelector("#userName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form")
const showError =(input, message)=>{
   let parentElement = input.parentElement;
   parentElement.className = "formControl Error";
   const small = parentElement.querySelector("small");
   const successIcon = parentElement.querySelectorAll("i")[0]
   const errorIcon = parentElement.querySelectorAll("i")[1]
   
   errorIcon.style.visibility = "visible";
  successIcon.style.visibility = "hidden"
   
   small.innerText = message;
}

const showsuccess =(input, message)=>{
   let parentElement = input.parentElement;
   parentElement.className = "formControl success";

   const successIcon = parentElement.querySelectorAll("i")[0]
   const errorIcon = parentElement.querySelectorAll("i")[1]
   
   errorIcon.style.visibility = "hidden";
  successIcon.style.visibility = "visible"
   
   
}

const checkpasswordlength =(input,max,min)=>{
   if(password.value !== confirmPassword.value){
      showError(confirmPassword,  "Passwords do not match")
   }
   else if (input.value.length < min){
      showError(input,`password atleast ${min} character`);
   }
   else if(input.value.length > max){
      showError(input, `password maximum ${max} character`)
   }
   else{
      showsuccess(input)
   }
}

const checkEmail =()=>{
   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (reg.test(email.value)) {
      showsuccess(email)
   }
   else{
      showError(email, "invalid email")
   }
}

const checkEmpty  =(Elements)=>{
   console.log(Elements)
   Elements.forEach(element => {
      if (element.value === "") {
// console.log(element , "input required")
         showError(element ,"input required")

      }else{
         showsuccess(element)
      }
   });

}

form.addEventListener("submit", (event)=>{
   event.preventDefault();
   checkEmpty   ([userName,email,password,confirmPassword])
   checkEmail(email)
   checkpasswordlength(password , 10,6)
   checkpasswordlength(confirmPassword , 10 ,6)
});

