window.onload=function(){
    //set the onclick listener to all elements that have a class accordion.
    var accordions = document.getElementsByClassName("accordion");

    for(var i = 0; i<accordions.length; i++)
    {
            accordions[i].addEventListener("click",function(){
                this.classList.toggle('active');
                var panel = this.nextElementSibling;

                //If the same panel is clicked that is visible
                if(panel.style.display == "block")
                {
                    panel.style.display = "none";//Hide the panel
                }
                else //Else
                {
                    panel.style.display = "block"; //Display the panel

                    var pannels = document.getElementsByClassName("section"); //Get all panels

                    //disable panels that are visible
                    if(pannels[0] == panel)
                    {
                        pannels[1].style.display = "none";
                    }
                    if(pannels[1] == panel)
                    {
                        pannels[0].style.display = "none";
                    }
                }
            });
    }

}
//Download the template method, downloads the EXCEL method
function downloadTemplate()
{
    var anchor = document.createElement('a');
	anchor.href = "../Files/FeedbackTemplate.xlsx";
	anchor.download = "../Files/FeedbackTemplate.xlsx";
	document.body.appendChild(anchor);
	anchor.click();
}