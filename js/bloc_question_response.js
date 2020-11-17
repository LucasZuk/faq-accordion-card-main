let faqNode = document.getElementsByClassName("faq")[0];

/* CREATE QUESTION / RESPONSE BLOC */
class faqBloc
{
	constructor(question, response)
	{
		this.question = question;
		this.response = response;
	}

	/* SIMPLE FUNCTION IN ORDER TO PUBLISH THE BLOC */
	publishFaqBloc() 
	{

		let unit = document.createElement("div");
		let question = document.createElement("li");
		let arrow = document.createElement("img");
		let response = document.createElement("p");

		question.innerHTML = this.question;
		response.innerHTML = this.response;
		arrow.src = "./images/icon-arrow-down.svg";
		arrow.alt = ">"
		
		unit.classList.add("faq__unit");
		question.classList.add("faq__question", "faq__question--layout");
		arrow.classList.add("faq__arrow", "faq__arrow--animation");
		response.classList.add("faq__response", "faq__response--layout", "faq__response-unselected");

		faqNode.append(unit);
		unit.append(question);
		question.append(arrow);
		question.append(response);	
	}
}

/* LIST OF ALL THE FAQ QUESTION/RESPONSE */
let faq = [];
faq.push(new faqBloc("How many team members can I invite?", "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."));
faq.push(new faqBloc("What is the maximum file upload size?", "No more than 2GB. All files in your account must fit your allotted storage space."));
faq.push(new faqBloc("How do I reset my password?", "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."));
faq.push(new faqBloc("Can I cancel my subscription?", "Yes! Send us a message and we’ll process your request no questions asked."));
faq.push(new faqBloc("Do you provide additional support?", "Chat and email support is available 24/7. Phone lines are open during normal business hours."));

/* PUBLICATION OF ALL THE BLOCS */
for (var i=0; i < faq.length ; i++)
{
	faq[i].publishFaqBloc();
}