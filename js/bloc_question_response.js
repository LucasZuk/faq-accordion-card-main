let faqNode = document.getElementsbyClassName("faq")[0];

class faqBloc
{
	constructor(question, response)
	{
		this.question = question;
		this.response = response;
	}

	publishFaqBloc()
	{
		let unit = document.createElement("div");
		let question = document.createElement("li");
		let arrow = document.createElement("img");
		let response = document.createElement("p");

		question.innerText = question;
		response.innerText = response;
		arrow.src = "../images/icon-arrow-down.svg";
		arrow.alt = ">"
		
		unit.classList.add("faq__unit");
		question.classList.add("faq__question", "faq__question--layout");
		arrow.classList.add("faq__arrow", "faq__arrow--animation");
		response.classList.add("faq__response", "faq__response--layout");

		faqNode.append(unit);
		unit.append(question);
		question.append(arrow);
		unit.append(response);


		
	}
}


const faq[0] = new faqBloc("How many team members can I invite?" , "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.");
const faq[1] = new faqBloc("How many team members can I invite?" , "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.");

// <div class="faq__unit">
//         <li class="faq_question">
//           <h2 class="faq__question--layout"> How many team members can I invite? </h2>
//           <img src="./images/icon-arrow-down.svg" alt=">" class="faq__icon-arrow"/>
//         </div>
//         <p class="faq__response faq__response--layout">You can invite up to 2 additional users on the Free plan. There is no limit on 
//       team members for the Premium plan.</p>
//       </div>

//       <!-- QUESTION / RESPONSE BLOC-->
//       <div>
//         <div>
//           <h2>What is the maximum file upload size?</h2>
//           <img src="./images/icon-arrow-down.svg" alt=">" class="icon-arrow"/>
//         </div>
//         <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
//       </div>

//       <!-- QUESTION / RESPONSE BLOC-->
//       <div>
//         <div>
//           <h2>How do I reset my password?</h2>
//           <img src="./images/icon-arrow-down.svg" alt=">" class="icon-arrow"/>
//         </div>
//         <p>Click “Forgot password” from the login page or “Change password” from your profile page.
//       A reset link will be emailed to you.</p>  
//       </div>

//       <!-- QUESTION / RESPONSE BLOC-->
//       <div>
//         <div>
//           <h2>Can I cancel my subscription?</h2>
//           <img src="./images/icon-arrow-down.svg" alt=">" class="icon-arrow"/>
//         </div>
//         <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
//       </div>

//       <!-- QUESTION / RESPONSE BLOC-->
//       <div>
//         <div>
//           <h2>Do you provide additional support?</h2>
//           <img src="./images/icon-arrow-down.svg" alt=">" class="icon-arrow"/>
//         </div>
//         <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
//       </div>