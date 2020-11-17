/* CHOICE OF ILLUSTRATION IN FUNCTION OF THE TYPE OF DEVICE */

	function illustrationSetting(x)
	{
		let imageBox = document.getElementsByClassName("box__img")[0];
		let imageWoman = document.getElementsByClassName("woman__img")[0];
		let womanShadow = document.getElementsByClassName("woman__shadow--layout")[0];

		/* IF THE WINDOW IS BIGGER THAN 800PX */
		if (x.matches)
		{
			imageBox.style.visibility = "visible";
			imageBox.src = "./images/illustration-box-desktop.svg";
			imageBox.alt = "A box with @ logo upside";
			imageWoman.src = "./images/illustration-woman-online-desktop.svg";
			imageWoman.alt = "illustration of a womean on a computeur";
			womanShadow.style.visibility = "hidden";
		}
		else
		{
			imageBox.style.visibility = "hidden";
			imageWoman.src = "./images/illustration-woman-online-mobile.svg";
			imageWoman.alt = "illustration of a woman on a computeur";
			womanShadow.style.visibility = "visible";
		}
	}


	var x = window.matchMedia("(min-width : 430px)");
	/* CALL THE FUNCTION AT THE BEGINNING */
	illustrationSetting(x);
	/* CALL THE FUNCTION IF THE SIZE OF THE WINDOW CHANGE */
	x.addListener(illustrationSetting);


/* DEPLOY AND REDUCE THE QUESTIONS/RESPONSES BLOCKS BY ADDING/REMOVING CLASS*/
	let questions = document.getElementsByClassName("faq__question");
	var questionsLength = questions.length;
	let box = document.getElementsByClassName("illustration__box")[0];

	/* FOR ALL THE QUESTIONS/RESPONSES BLOCKS */
	for (var i=0; i<questionsLength; i++)
	{
		questions[i].addEventListener('click', function()
		{
			/* ALREADY SELECTED -> WE CLOSE THE BLOCK */
			if (this.lastChild.classList.contains("faq__response-selected"))
			{
				this.lastChild.classList.add("faq__response-unselected");
				this.lastChild.classList.remove("faq__response-selected");

				this.lastChild.previousSibling.classList.remove("faq__arrow-selected");

				this.classList.remove("faq__question-selected");
				box.style.right = "290px";
			}
			else
			{
				/* WE CLOSE THE BLOCK WHO COULD BE ALREADY DEPLOYED */
				for (var j=0; j<questionsLength; j++)
				{
					if (i!=j)
					{
						questions[j].lastChild.classList.add("faq__response-unselected");
						questions[j].lastChild.classList.remove("faq__response-selected");

						questions[j].lastChild.previousSibling.classList.remove("faq__arrow-selected");

						questions[j].classList.remove("faq__question-selected");
					}
				}

				/* WE DEPLOY THE BLOCK */
				this.lastChild.classList.remove("faq__response-unselected");
				this.lastChild.classList.add("faq__response-selected");

				this.lastChild.previousSibling.classList.add("faq__arrow-selected");

				this.classList.add("faq__question-selected");

				box.style.right = "330px";
			}
		});
	}

