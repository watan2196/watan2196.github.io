var rndimg=document.querySelector("#rd");
	var roll=document.querySelector("#roll");
	var reset=document.querySelector("#reset");

	var uscore=document.querySelector("#user");
	var cpscore=document.querySelector("#cmp");
	var currentscore=document.querySelector("#cntscore");
	var upto = document.querySelector("#upto");
	var winningscore=Number(upto.textContent);
	// console.log(winningscore);
			function start()
			{
				window.location.href = "dice.html?pnm.value='"+document.forms.myForm.pnm.value+
				"'&tscore.value='"+document.forms.myForm.tscore.value+"'"
			}

	    var cscore=0;
	    var cmpscore=0;
	    var gameover=false;
	    var turn=false;
	 			



				roll.addEventListener("click",function(){
					if(!gameover)
					{
						if(cscore >= Number(winningscore))
							{
							alert("You won !");
							gameover=true;
							}
							else if(cmpscore >= Number(winningscore))
				            {
					         alert("Computer won !");
					         gameover=true;     
				            }
				            else
				            {
				                  if(!turn)
		                          {
					    		var rnd=Number(Math.floor(Math.random() *6)) + Number(1);
			 
					    			rndimg.setAttribute("src","image"+(rnd)+".jpg");
										if(rnd ===Number(1))
											{
											alert("Computer's Turn !");
											currentscore.textContent=0;
											turn=!turn;
											}
										else
										{
										currentscore.textContent=rnd;
										cscore=cscore+rnd;
										uscore.textContent=cscore;
										
									    }
									}						
							      else
								  {
							      while(rnd!=1)
		     	                  {
		     		              var rnd=Number(Math.floor(Math.random() *6)) + Number(1);
			             	      rndimg.setAttribute("src","image"+(rnd)+".jpg"); 
					     	      currentscore.textContent=rnd;
			                      cmpscore=cmpscore+rnd;
			                      cpscore.textContent=cmpscore;
		                          }
		                         alert("User's turn");
		                         turn=!turn;
		                         currentscore.textContent=0;	
		    			          }
		                     }
		                 }
		         else
		         {
		         	alert("Gameover!!! Click reset to play again");
		         }
		         reset.addEventListener("click",function () {
			cscore=0;
			cmpscore=0;
			uscore.textContent=0;
			cpscore.textContent=0;
			currentscore.textContent=0
			gameover=false;
				});
		    });