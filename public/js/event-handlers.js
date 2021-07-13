// let genresSelector = document.querySelector("#user-registration-form #genres-preferred");
// let registrationForm = document.querySelector("#user-registration-form form");
// let genresSelected = document.querySelector("#user-registration-form #genres-selected");

// genresSelector.addEventListener("change", function(){

//     if(!genresSelected.textContent.includes(this.value))
//         genresSelected.textContent = genresSelected.textContent + this.value + " ";
// }, false);


// registrationForm.addEventListener("submit", handleFormSubmit);

// async function handleFormSubmit(event) {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const url = form.action;
//     try {
//         const formData = new FormData(form);
//         formData.set("genresPreferred", genresSelected.textContent);
//         const responseData = await postFormDataAsJson({url, formData});
//         console.log({responseData});
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// async function postFormDataAsJson({url, formData}) {

//     const plainFormData = Object.fromEntries(formData.entries());
//     const formDataJsonString = JSON.stringify(plainFormData);

//     const fetchOptions = {

//         method: "POST",

//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },

//         body: formDataJsonString
//     };

//     const response = await fetch(url, fetchOptions);

//     if(!response.ok) {
//         const errorMessage = await respose.text();
//         throw new Error(errorMessage);
//     }

//     return response.json();
// }