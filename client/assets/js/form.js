

////////// Contact Form ///////////
const btn = document.getElementById("contact");

let fName = "";
let organization = "";
let email = "";
let number = "";


btn.addEventListener("click", () => {

   const anchor = document.getElementById("page-wrapper");
   const form = document.createElement("form");
   const sendBtn = document.createElement("button");
   const nameInput = document.createElement("input", "text");
   const orgInput = document.createElement("input", "text");
   const emailInput = document.createElement("input", "text");
   const numInput = document.createElement("input", "tel");
   const exitBtn = document.createElement("button");
   const privBlrb = document.createElement("p");
   const messageBox = document.createElement("input");
   const errHandle = document.createElement("p");

   privBlrb.textContent = `Your privacy is of paramount importance to me.
                           I am committed to securly storing and handling your email address,
                           ensuring it is not shared without your explicit permission.`  
   numInput.setAttribute("type", "number");              
   numInput.setAttribute("placeholder", "800-555-1234");
   numInput.setAttribute("autocomplete", "on");
   numInput.setAttribute("name", "number");
   messageBox.setAttribute("type", "text");
   messageBox.setAttribute("placeholder", "type your message here.")
   messageBox.setAttribute("name", "message");
   messageBox.setAttribute("class", "message")
   emailInput.setAttribute("placeholder", "Your E-Mail");
   emailInput.setAttribute("type", "email");
   emailInput.setAttribute("autocomplete", "on");
   emailInput.setAttribute("name", "email");
   emailInput.setAttribute("required", "true");
   orgInput.setAttribute("placeholder", "Organization");
   orgInput.setAttribute("required", "true");
   orgInput.setAttribute("name", "org");
   nameInput.setAttribute("placeholder", "Your Name");
   nameInput.setAttribute("autocomplete", "on");
   nameInput.setAttribute("required", "true");
   nameInput.setAttribute("name", "name");
   form.setAttribute("name", "contactForm");
   form.setAttribute("class", "contact");
   exitBtn.setAttribute("id", "cancel");
   sendBtn.setAttribute("id", "send");
   sendBtn.textContent = "Send";
   exitBtn.textContent = "Cancel";

   sendBtn.addEventListener("click", (e) => {
      e.preventDefault();

      let fName = form.name.value
      let organization = form.org.value
      let number = form.number.value
      let email = form.email.value
      let message = form.message.value

      let formData ={
         name: fName,
         org: organization,
         number: number,
         email: email,
         message: message
      }

      const api = 'http://localhost:8080/api/mail'
      const params = {
         method: 'POST',
         body: JSON.stringify(formData),
         headers: {
            'Content-Type': 'application/json'
         }
      }
      fetch(api, params)
         .then(res => res.json())
         .then(data => console.log(data))
         .catch(err => console.log(err))
      // console.log(formData)
      exitBtn.remove();
      emailInput.remove();
      orgInput.remove();
      sendBtn.remove();
      exitBtn.remove();
      nameInput.remove();
      messageBox.remove();
      form.textContent = "Thank You! I will be in touch with you shortly!";
      exitBtn.textContent = "Close Window";
      form.appendChild(exitBtn);

      

   })

   exitBtn.addEventListener("click", e => form.remove())
   anchor.appendChild(form);
   form.appendChild(nameInput);
   form.appendChild(orgInput);
   form.appendChild(emailInput);
   form.appendChild(numInput);
   form.appendChild(messageBox)
   form.appendChild(sendBtn);
   form.appendChild(exitBtn);
   form.appendChild(privBlrb);

})

// build form for users to send a message to email