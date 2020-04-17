window.onload=function(){
    //Add an onclick event listener
 document.getElementById("generateFeedbackButton").addEventListener("click",downloadZip,false);

//Check if includes a string method for a string.
String.prototype.includes = function (str) {
  var returnValue = false;

  if (this.indexOf(str) !== -1) {
    returnValue = true;
  }

  return returnValue;
}
//Check if the csv has been uploaded or not
function checkIfEmpty(csv)
{
    if(csv.files.length == 0)
        {
            return true;
        }
    else
        {
            return false;
        }
}
//Check if the file is csv
function checkCSV(csv)
{
    var array = csv.value.split(".");
    
    
    if(array[1] == "csv")
        {
            return true;
        }
    else
        {
            return false;
        }
}
//Unit test
function emptyIsEmpty(csv)
{
    var result = checkIfEmpty(csv);

    if(result == true)
    {
        console.log("checkIfEmpty report: Pass.");
    }
    else
    {
        console.log("checkIfEmpty report: Fail.");
    }
}
//Unit test
function emptyNotEmpty(csv)
{
    var result = checkIfEmpty(csv);

    if(result == false)
    {
        console.log("checkIfEmpty report: Pass.");
    }
    else
    {
        console.log("checkIfEmpty report: Fail.");
    }
}
//Unit test
function CSVtestOther(csv)
{
    var result = checkCSV(csv);

    if(result == false)
    {
        console.log("checkCSV report: Pass.");
    }
    else
    {
        console.log("checkCSV report: Fail.");
    }
}
//Unit test
function CSVtestCSV(csv)
{
    var result = checkCSV(csv);

    if(result == true)
    {
        console.log("checkCSV report: Pass.");
    }
    else
    {
        console.log("checkCSV report: Fail.");
    }
}
//Unit test:
function checkCSVToXML(csvData)
{
    //1 Feedback: 
    //var xmlString="<Feedback1>\n\t<Programme>Btec Level 2 First Certificate in ICT</Programme>\n\t <Unit no. & title>Unit 13: Website Development</Unit no. & title>\n\t<Assignment title>Assignment 2: Designing a sandwich shop website</Assignment title>\n\t<Assessor name>John Rogers</Assessor name>\n\t<Learner number>293779</Learner number>\n\t<Learner name>Nikita Skripnikov</Learner name>\n\t<Target learning aims>\"2B.P2 2B.P3 2B.M2 2B.D2\"</Target learning aims>\n\t<Issue date>20/11/17</Issue date>\n\t<Submission date>04/12/17</Submission date>\n\t<First submission / resubmission?*>First</First submission / resubmission?*>\n\t<Submitted date>04/12/17</Submitted date>\n\t<criteria1>2B.P2</criteria1>\n\t<pass1>Yes</pass1>\n\t<Achieved>0</Achieved>\n\t<comment1>You have achieved this</comment1>\n\t<criteria2>2B.P3</criteria2>\n\t<pass2>Yes</pass2>\n\t<Achieved>1</Achieved>\n\t<comment2>Well done</comment2>\n\t<criteria3>2B.M2</criteria3>\n\t<pass3>n/a</pass3>\n\t<Achieved>0</Achieved>\n\t<comment3></comment3>\n\t<criteria4>2B.D2</criteria4>\n\t<pass4>n/a</pass4>\n\t<Achieved>0</Achieved>\n\t<comment4></comment4>\n\t<criteria5></criteria5>\n\t<pass5></pass5>\n\t<Achieved>0</Achieved>\n\t<comment5></comment5>\n\t<criteria6></criteria6>\n\t<pass6></pass6>\n\t<Achived>0</Achived>\n\t<comment6></comment6>\n\t<criteria7></criteria7>\n\t<pass7></pass7>\n\t<Achieved>0</Achieved>\n\t<comment7></comment7>\n\t<criteria8></criteria8>\n\t<pass8></pass8>\n\t<Achieved>0</Achieved>\n\t<comment8></comment8>\n\t<final comment>Thank you for this submission</final comment>\n\t<passed_0>1</passed_0>\n\t<Unused>#N/A</Unused>\n\t<Allowed Resub>0</Allowed Resub>\n\t<criteria1a></criteria1a>\n\t<pass1a></pass1a>\n\t<Achieved>0</Achieved>\n\t<comment1a></comment1a>\n\t<criteria2a></criteria2a>\n\t<pass2a></pass2a>\n\t<Achieved>0</Achieved>\n\t<comment2a></comment2a>\n\t<criteria3a></criteria3a>\n\t<pass3a></pass3a>\n\t<Achieved>0</Achieved>\n\t<comment3a></comment3a>\n\t<criteria4a></criteria4a>\n\t<pass4a></pass4a>\n\t<Achieved>0</Achieved>\n\t<comment4a></comment4a>\n\t<criteria5a></criteria5a>\n\t<pass5a></pass5a>\n\t<Achieved>0</Achieved>\n\t<comment5a></comment5a>\n\t<criteria6a></criteria6a>\n\t<pass6a></pass6a>\n\t<Achieved>0</Achieved>\n\t<comment6a></comment6a>\n\t<criteria7a></criteria7a>\n\t<pass7a></pass7a>\n\t<Achieved>0</Achieved>\n\t<comment7a></comment7a>\n\t<criteria8a></criteria8a>\n\t<pass8a></pass8a>\n\t<Achieved>0</Achieved>\n\t<comment8a></comment8a>\n\t<Resubmission date></Resubmission date>\n\t<ReSubmitted date></ReSubmitted date>\n\t<Resub General Comment></Resub General Comment>\n</Feedback1>\n";
    
    //3 Feedbacks: 
    //var xmlString="<Feedback1>\n\t<Programme>Btec Level 2 First Certificate in ICT</Programme>\n\t <Unit no. & title>Unit 13: Website Development</Unit no. & title>\n\t<Assignment title>Assignment 2: Designing a sandwich shop website</Assignment title>\n\t<Assessor name>John Rogers</Assessor name>\n\t<Learner number>293779</Learner number>\n\t<Learner name>Nikita Skripnikov</Learner name>\n\t<Target learning aims>\"2B.P2 2B.P3 2B.M2 2B.D2\"</Target learning aims>\n\t<Issue date>20/11/17</Issue date>\n\t<Submission date>04/12/17</Submission date>\n\t<First submission / resubmission?*>First</First submission / resubmission?*>\n\t<Submitted date>04/12/17</Submitted date>\n\t<criteria1>2B.P2</criteria1>\n\t<pass1>Yes</pass1>\n\t<Achieved>0</Achieved>\n\t<comment1>You have achieved this</comment1>\n\t<criteria2>2B.P3</criteria2>\n\t<pass2>Yes</pass2>\n\t<Achieved>1</Achieved>\n\t<comment2>Well done</comment2>\n\t<criteria3>2B.M2</criteria3>\n\t<pass3>n/a</pass3>\n\t<Achieved>0</Achieved>\n\t<comment3></comment3>\n\t<criteria4>2B.D2</criteria4>\n\t<pass4>n/a</pass4>\n\t<Achieved>0</Achieved>\n\t<comment4></comment4>\n\t<criteria5></criteria5>\n\t<pass5></pass5>\n\t<Achieved>0</Achieved>\n\t<comment5></comment5>\n\t<criteria6></criteria6>\n\t<pass6></pass6>\n\t<Achived>0</Achived>\n\t<comment6></comment6>\n\t<criteria7></criteria7>\n\t<pass7></pass7>\n\t<Achieved>0</Achieved>\n\t<comment7></comment7>\n\t<criteria8></criteria8>\n\t<pass8></pass8>\n\t<Achieved>0</Achieved>\n\t<comment8></comment8>\n\t<final comment>Thank you for this submission</final comment>\n\t<passed_0>1</passed_0>\n\t<Unused>#N/A</Unused>\n\t<Allowed Resub>0</Allowed Resub>\n\t<criteria1a></criteria1a>\n\t<pass1a></pass1a>\n\t<Achieved>0</Achieved>\n\t<comment1a></comment1a>\n\t<criteria2a></criteria2a>\n\t<pass2a></pass2a>\n\t<Achieved>0</Achieved>\n\t<comment2a></comment2a>\n\t<criteria3a></criteria3a>\n\t<pass3a></pass3a>\n\t<Achieved>0</Achieved>\n\t<comment3a></comment3a>\n\t<criteria4a></criteria4a>\n\t<pass4a></pass4a>\n\t<Achieved>0</Achieved>\n\t<comment4a></comment4a>\n\t<criteria5a></criteria5a>\n\t<pass5a></pass5a>\n\t<Achieved>0</Achieved>\n\t<comment5a></comment5a>\n\t<criteria6a></criteria6a>\n\t<pass6a></pass6a>\n\t<Achieved>0</Achieved>\n\t<comment6a></comment6a>\n\t<criteria7a></criteria7a>\n\t<pass7a></pass7a>\n\t<Achieved>0</Achieved>\n\t<comment7a></comment7a>\n\t<criteria8a></criteria8a>\n\t<pass8a></pass8a>\n\t<Achieved>0</Achieved>\n\t<comment8a></comment8a>\n\t<Resubmission date></Resubmission date>\n\t<ReSubmitted date></ReSubmitted date>\n\t<Resub General Comment></Resub General Comment>\n</Feedback1>\n<Feedback2>\n\t<Programme>Btec Level 2 First Certificate in ICT</Programme>\n\t <Unit no. & title>Unit 13: Website Development</Unit no. & title>\n\t<Assignment title>Assignment 2: Designing a sandwich shop website</Assignment title>\n\t<Assessor name>John Rogers</Assessor name>\n\t<Learner number>293779</Learner number>\n\t<Learner name>Nikita Skripnikov</Learner name>\n\t<Target learning aims>\"2B.P2 2B.P3 2B.M2 2B.D2\"</Target learning aims>\n\t<Issue date>20/11/17</Issue date>\n\t<Submission date>04/12/17</Submission date>\n\t<First submission / resubmission?*>First</First submission / resubmission?*>\n\t<Submitted date>04/12/17</Submitted date>\n\t<criteria1>2B.P2</criteria1>\n\t<pass1>Yes</pass1>\n\t<Achieved>0</Achieved>\n\t<comment1>You have achieved this</comment1>\n\t<criteria2>2B.P3</criteria2>\n\t<pass2>Yes</pass2>\n\t<Achieved>1</Achieved>\n\t<comment2>Well done</comment2>\n\t<criteria3>2B.M2</criteria3>\n\t<pass3>n/a</pass3>\n\t<Achieved>0</Achieved>\n\t<comment3></comment3>\n\t<criteria4>2B.D2</criteria4>\n\t<pass4>n/a</pass4>\n\t<Achieved>0</Achieved>\n\t<comment4></comment4>\n\t<criteria5></criteria5>\n\t<pass5></pass5>\n\t<Achieved>0</Achieved>\n\t<comment5></comment5>\n\t<criteria6></criteria6>\n\t<pass6></pass6>\n\t<Achived>0</Achived>\n\t<comment6></comment6>\n\t<criteria7></criteria7>\n\t<pass7></pass7>\n\t<Achieved>0</Achieved>\n\t<comment7></comment7>\n\t<criteria8></criteria8>\n\t<pass8></pass8>\n\t<Achieved>0</Achieved>\n\t<comment8></comment8>\n\t<final comment>Thank you for this submission</final comment>\n\t<passed_0>1</passed_0>\n\t<Unused>#N/A</Unused>\n\t<Allowed Resub>0</Allowed Resub>\n\t<criteria1a></criteria1a>\n\t<pass1a></pass1a>\n\t<Achieved>0</Achieved>\n\t<comment1a></comment1a>\n\t<criteria2a></criteria2a>\n\t<pass2a></pass2a>\n\t<Achieved>0</Achieved>\n\t<comment2a></comment2a>\n\t<criteria3a></criteria3a>\n\t<pass3a></pass3a>\n\t<Achieved>0</Achieved>\n\t<comment3a></comment3a>\n\t<criteria4a></criteria4a>\n\t<pass4a></pass4a>\n\t<Achieved>0</Achieved>\n\t<comment4a></comment4a>\n\t<criteria5a></criteria5a>\n\t<pass5a></pass5a>\n\t<Achieved>0</Achieved>\n\t<comment5a></comment5a>\n\t<criteria6a></criteria6a>\n\t<pass6a></pass6a>\n\t<Achieved>0</Achieved>\n\t<comment6a></comment6a>\n\t<criteria7a></criteria7a>\n\t<pass7a></pass7a>\n\t<Achieved>0</Achieved>\n\t<comment7a></comment7a>\n\t<criteria8a></criteria8a>\n\t<pass8a></pass8a>\n\t<Achieved>0</Achieved>\n\t<comment8a></comment8a>\n\t<Resubmission date></Resubmission date>\n\t<ReSubmitted date></ReSubmitted date>\n\t<Resub General Comment></Resub General Comment>\n</Feedback2>\n<Feedback3>\n\t<Programme>Btec Level 2 First Certificate in ICT</Programme>\n\t <Unit no. & title>Unit 13: Website Development</Unit no. & title>\n\t<Assignment title>Assignment 2: Designing a sandwich shop website</Assignment title>\n\t<Assessor name>John Rogers</Assessor name>\n\t<Learner number>293779</Learner number>\n\t<Learner name>Nikita Skripnikov</Learner name>\n\t<Target learning aims>\"2B.P2 2B.P3 2B.M2 2B.D2\"</Target learning aims>\n\t<Issue date>20/11/17</Issue date>\n\t<Submission date>04/12/17</Submission date>\n\t<First submission / resubmission?*>First</First submission / resubmission?*>\n\t<Submitted date>04/12/17</Submitted date>\n\t<criteria1>2B.P2</criteria1>\n\t<pass1>Yes</pass1>\n\t<Achieved>0</Achieved>\n\t<comment1>You have achieved this</comment1>\n\t<criteria2>2B.P3</criteria2>\n\t<pass2>Yes</pass2>\n\t<Achieved>1</Achieved>\n\t<comment2>Well done</comment2>\n\t<criteria3>2B.M2</criteria3>\n\t<pass3>n/a</pass3>\n\t<Achieved>0</Achieved>\n\t<comment3></comment3>\n\t<criteria4>2B.D2</criteria4>\n\t<pass4>n/a</pass4>\n\t<Achieved>0</Achieved>\n\t<comment4></comment4>\n\t<criteria5></criteria5>\n\t<pass5></pass5>\n\t<Achieved>0</Achieved>\n\t<comment5></comment5>\n\t<criteria6></criteria6>\n\t<pass6></pass6>\n\t<Achived>0</Achived>\n\t<comment6></comment6>\n\t<criteria7></criteria7>\n\t<pass7></pass7>\n\t<Achieved>0</Achieved>\n\t<comment7></comment7>\n\t<criteria8></criteria8>\n\t<pass8></pass8>\n\t<Achieved>0</Achieved>\n\t<comment8></comment8>\n\t<final comment>Thank you for this submission</final comment>\n\t<passed_0>1</passed_0>\n\t<Unused>#N/A</Unused>\n\t<Allowed Resub>0</Allowed Resub>\n\t<criteria1a></criteria1a>\n\t<pass1a></pass1a>\n\t<Achieved>0</Achieved>\n\t<comment1a></comment1a>\n\t<criteria2a></criteria2a>\n\t<pass2a></pass2a>\n\t<Achieved>0</Achieved>\n\t<comment2a></comment2a>\n\t<criteria3a></criteria3a>\n\t<pass3a></pass3a>\n\t<Achieved>0</Achieved>\n\t<comment3a></comment3a>\n\t<criteria4a></criteria4a>\n\t<pass4a></pass4a>\n\t<Achieved>0</Achieved>\n\t<comment4a></comment4a>\n\t<criteria5a></criteria5a>\n\t<pass5a></pass5a>\n\t<Achieved>0</Achieved>\n\t<comment5a></comment5a>\n\t<criteria6a></criteria6a>\n\t<pass6a></pass6a>\n\t<Achieved>0</Achieved>\n\t<comment6a></comment6a>\n\t<criteria7a></criteria7a>\n\t<pass7a></pass7a>\n\t<Achieved>0</Achieved>\n\t<comment7a></comment7a>\n\t<criteria8a></criteria8a>\n\t<pass8a></pass8a>\n\t<Achieved>0</Achieved>\n\t<comment8a></comment8a>\n\t<Resubmission date></Resubmission date>\n\t<ReSubmitted date></ReSubmitted date>\n\t<Resub General Comment></Resub General Comment>\n</Feedback3>\n";

    var actualXML = convertCSVToXML(csvData);

    xmlString = xmlString.replace(/ /g,'');

    actualXML = actualXML.replace(/ /g,'');

    if(xmlString == actualXML)
    {
        console.log("CheckCSVToXML report: Pass.");
    }
    else
    {
        console.log("CheckCSVToXML report: Fail.")
    }

}
////XML GENERATOR (DONT TOUCH)
function convertCSVToXML(csv)
{
    var xmlHeadings = [];
    var xml = "";

    // get all headings
    var headings = csv.split("\n");

    //Loop through headings
    for(var i = 0; i < 85; i++)
    {
        var heading = csv.split(",");//Split all headings

        if(i==0) //If first heading
        {
            xmlHeadings.push("Programme");//It is programme
        }
        else
        {
            xmlHeadings.push(heading[i]);//Else, put it in the array
        }
    }
    if(xmlHeadings.length != 0)//If the array is not empty.
    {
        var end = headings.length;

        var start = 2;

        for(start; start<end-1; start++)
        {
            var counter = start - 1;
            xml+="<Feedback"+ counter+">\n";//Feedback tag + number
            var j=0;

            var array = headings[start].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);//Split the row contents

            for(var i =0; i<=xmlHeadings.length-4; i++)//Loop through xml headings
            {
                if(i == 6)//If it is row 6, deal with Criteria
                    {
                        xml+= "\t<"+ xmlHeadings[i]+ ">";

                        for(j =i; j<=9; j++)
                        {
                            if(array[j].includes('P') || array[j].includes('D') || array[j].includes('M'))//If includes p,m or d
                            {
                                xml +=  array[j];//Put into xml
                            }
                            else
                            {
                                break;//Else exit
                            }
                        }
                        xml+= "</"+ xmlHeadings[i]+">  \n";//Close the heading tag
                    }
                    else
                    {
                        xml += "\t<"+ xmlHeadings[i] + ">" + array[j] + "</"+ xmlHeadings[i]+ "> \n";//Else, add the normal value to XML
                        j++;
                    }
                }
                xml+="</Feedback"+ counter+"> \n";//Close the feedback tag
            }
        }
        return xml;
}
//Build starting HMTML string, with all functions and styles (pre-defined)
function buildStartingHTML(html)
{
    html = '<!DOCTYPE html>\n<html lang="en">';
    html+='\n\t<head>\n\t\t<title>Feedback</title>';
    html+='\n\t\t<meta charset="utf-8">';
    html+='\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1">';
    html+='\n<script>';

    html+='\n\t window.onload=function(){';
    html+='\n\t var grade = document.getElementById("grade");';
    html+='\n\t var criteria = document.getElementById("withGrade");';
    html+='\n\t criteria.textContent+= grade.innerHTML;';
    html+='\n\t var accordions = document.getElementsByClassName("accordion");';
    html+='\n\t var dark_mode = false;';
    html+='\n\t for(var i = 0; i<accordions.length; i++)';
    html+='\n\t {';
    html+='\n\t\t accordions[i].addEventListener("click",function(){';
    html+="\n\t\t this.classList.toggle('active'); \n\t\t var panel = this.nextElementSibling;";
    html+='\n\t\t if(panel.style.display == "block") \n\t\t {   \n\t\t\t panel.style.display = "none"; \n\t\t }';
    html+='\n\t\t else \n\t\t { \n\t\t\t panel.style.display = "block"; \n\t\t\t var pannels = document.getElementsByClassName("section");';
    html+='\n\t\t\t for(var i=0; i<pannels.length; i++) \n\t\t\t {';
    html+='\n\t\t\t\t if(pannels[i] != panel) \n\t\t\t\t { \n\t\t\t\t\t pannels[i].style.display = "none"; \n\t\t\t\t }';
    html+='\n\t\t\t }';
    html+='\n\t\t }';
    html+='\n\t\t });';
    html+='\n\t }';

    html+='\n\t var darkButton = document.getElementById("dark_mode").addEventListener("click",function(){ \n\t var pannels = document.getElementsByClassName("section");';
    html+='\n\t\t if(!dark_mode)';
    html+='\n\t\t { \n\t\t\t document.body.style.backgroundColor = "#121212";';
    html+='\n\t\t\t for(var i = 0; i<accordions.length; i++)';
    html+='\n\t\t\t { \n\t\t\t\t accordions[i].style.backgroundColor = "#1F1B24"; \n\t\t\t\t pannels[i].style.backgroundColor = "#D3D3D3"; \n\t\t\t }';
    html+='\n\t\t\t this.style.backgroundColor = "#1F1B24"; \n\t\t\t this.innerHTML = "Normal theme"; \n\t\t\t dark_mode = true;';
    html+='\n\t\t } \n\t\t else \n\t\t { \n\t\t\t document.body.style.backgroundColor = "";';
    html+='\n\t\t\t for(var i = 0; i<accordions.length; i++)';
    html+='\n\t\t\t { \n\t\t\t\t accordions[i].style.backgroundColor = ""; \n\t\t\t\t pannels[i].style.backgroundColor = ""; \n\t\t\t }';
    html+='\n\t\t\t this.style.backgroundColor = ""; \n\t\t\t this.innerHTML = "Dark mode"; \n\t\t\t dark_mode = false;';
    html+='\n\t\t }';
    html+='\n\t });';

    html+='\n }';
    html+='\n</script>';

    //Build styles
    html+='\n <style>';

    html+='\n body{ \n\t background-color: #3399cc; \n\t font-family:Verdana, Geneva, Tahoma, sans-serif; \n\t color: white; \n }';

    html+='\n .container{ \n\t position: absolute; \n\t top:22%; \n\t left: 50%; \n\t -webkit-transform: translate(-50%); \n\t -ms-transform: translate(-50%); \n\t transform: translate(-50%); \n\t width: 30%; \n }';
    
    html+='\n .accordion { \n\t color:white; \n\t cursor: pointer; \n\t padding: 18px; \n\t width:100%; \n\t border: none; \n\t text-align: center; \n\t outline: none;';
    html+='\n\t -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n\t -ms-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n\t -o-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n\t box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n\t font-size: 1.1vw; \n\t font-weight: bold; \n\t -webkit-transition: all 0.5s ease-in-out; \n\t -o-transition: all 0.5s ease-in-out; \n\t transition: all 0.5s ease-in-out; \n }';

    html+='\n .fail{ \n\t background-color: #FF0000; \n }';

    html+='\n .pass{ \n\t background-color: #339900; \n }';

    html+='\n .accordion:active, .pass:hover { \n\t background-color:#33cc33; \n }';

    html+='\n .accordion:active, .fail:hover { \n\t background-color:#FF3333; \n }';

    html+='\n .section { \n\t padding: 0 18px; \n\t height:200px; \n\t display: none; \n\t background-color:white; \n\t -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n\t box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n\t overflow: auto; \n }';

    html+='\n .section-text{ \n\t color:black; \n\t font-family: Verdana, Geneva, Tahoma, sans-serif; \n\t text-align: left; \n\t font-size:1.2vw; \n }';

    html+='\n #sub-details{ \n\t position: absolute; \n\t bottom: 5px; \n\t text-align:right; \n\t right: 5px; \n\t font-size: 1.2vw; \n }';

    html+='\n #reward{ \n\t display: block; \n\t margin-left: auto; \n\t margin-right: auto; \n\t border-radius: 50%; \n\t border-style:solid; \n\t border-color: black; \n\t height:100px; \n\t width:100px; \n }';

    html+='\n #assignment_info{ \n\t font-size: 1.2vw; \n }';

    html+='\n #learner{ \n\t font-size: 1.2vw; \n }';

    html+='\n #dark_mode{ \n\t background-color: #339900; \n\t font-size: 1vw; \n\t position:absolute; \n\t -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n\t -ms-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n\t -o-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n\t box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \n\t outline: none;';
    html+='\n\t top:0px; \n\t margin: 5px; \n\t right:5px; \n\t border:none; \n\t color:white; \n\t cursor:pointer; \n\t text-align: center; \n }';

    html+='\n #quote{ \n\t font-size:1vw; \n }';

    //Media queries

    html+='\n @media screen and (max-width:1920px) \n { \n\t .container{ \n\t\t width:40%; \n\t } \n\t .accordion{ \n\t\t font-size: 3vw; \n\t } \n\t .section-text{ \n\t\t font-size:2vw; \n\t } \n\t #assignment_info{ \n\t\t font-size: 1.7vw; \n\t } \n\t #dark_mode{ \n\t\t font-size: 2vw; \n\t }';
    html+='\n\t #learner{ \n\t\t font-size: 1.5vw; \n\t } \n\t #sub-details{ \n\t\t  font-size: 1.5vw; \n\t } \n\t #reward{ \n\t\t height:200px; \n\t\t  width:200px; \n\t } \n\t #quote{ \n\t\t font-size: 1.5vw; \n\t } \n }';

    html+='\n @media screen and (max-width:1536px) \n { \n\t .container{ \n\t\t width:35%; \n\t } \n\t .accordion{ \n\t\t font-size: 2vw; \n\t } \n\t .section-text{ \n\t\t font-size:2vw; \n\t } \n\t #assignment_info{ \n\t\t font-size: 1.5vw; \n\t } \n\t #dark_mode{ \n\t\t font-size: 2vw; \n\t }';
    html+='\n\t #learner{ \n\t\t font-size: 1.5vw; \n\t } \n\t #sub-details{ \n\t\t  font-size: 1.5vw; \n\t } \n\t #reward{ \n\t\t height:200px; \n\t\t  width:200px; \n\t } \n\t #quote{ \n\t\t font-size: 1.5vw; \n\t } \n }';

    html+='\n @media screen and (max-width:1440px) \n { \n\t .container{ \n\t\t width:40%; \n\t } \n\t .accordion{ \n\t\t font-size: 2vw; \n\t } \n\t .section-text{ \n\t\t font-size:2vw; \n\t } \n\t #assignment_info{ \n\t\t font-size: 1.8vw; \n\t } \n\t #dark_mode{ \n\t\t font-size: 2vw; \n\t }';
    html+='\n\t #learner{ \n\t\t font-size: 1.5vw; \n\t } \n\t #sub-details{ \n\t\t  font-size: 1.5vw; \n\t } \n\t #reward{ \n\t\t height:200px; \n\t\t  width:200px; \n\t } \n\t #quote{ \n\t\t font-size: 1.2vw; \n\t } \n }';

    html+='\n @media screen and (max-width:1366px) \n { \n\t .container{ \n\t\t width:40%; \n\t } \n\t .accordion{ \n\t\t font-size: 2vw; \n\t } \n\t .section-text{ \n\t\t font-size:1.5vw; \n\t } \n\t #assignment_info{ \n\t\t font-size: 1.4vw; \n\t } \n\t #dark_mode{ \n\t\t font-size: 2vw; \n\t }';
    html+='\n\t #learner{ \n\t\t font-size: 1.5vw; \n\t } \n\t #sub-details{ \n\t\t  font-size: 1.2vw; \n\t } \n\t #reward{ \n\t\t height:150px; \n\t\t  width:150px; \n\t } \n\t #quote{ \n\t\t font-size: 1.5vw; \n\t } \n }';

    
    html+='\n @media screen and (max-width:1100px) \n { \n\t .container{ \n\t\t width:50%; \n\t } \n\t .accordion{ \n\t\t font-size: 3vw; \n\t } \n\t .section-text{ \n\t\t font-size:2vw; \n\t } \n\t #assignment_info{ \n\t\t font-size: 2vw; \n\t } \n\t #dark_mode{ \n\t\t font-size: 2.5vw; \n\t }';
    html+='\n\t #learner{ \n\t\t font-size: 1.5vw; \n\t } \n\t #sub-details{ \n\t\t  font-size: 2vw; \n\t } \n\t #reward{ \n\t\t height:150px; \n\t\t  width:150px; \n\t } \n\t #quote{ \n\t\t font-size: 2vw; \n\t } \n }';

    
    html+='\n @media screen and (max-width:800px) \n { \n\t .container{ \n\t\t width:45%; \n\t } \n\t .accordion{ \n\t\t font-size: 2.5vw; \n\t } \n\t .section-text{ \n\t\t font-size:2vw; \n\t } \n\t #assignment_info{ \n\t\t font-size: 1.8vw; \n\t } \n\t #dark_mode{ \n\t\t font-size: 2vw; \n\t }';
    html+='\n\t #learner{ \n\t\t font-size: 1.5vw; \n\t } \n\t #sub-details{ \n\t\t  font-size: 1.2vw; \n\t } \n\t #reward{ \n\t\t height:100px; \n\t\t  width:100px; \n\t } \n\t #quote{ \n\t\t font-size: 2vw; \n\t } \n }';

    
    html+='\n @media screen and (max-width:375px) \n { \n\t .container{ \n\t\t width:60%; \n\t\t top:25%; \n\t } \n\t .accordion{ \n\t\t font-size: 3vw; \n\t } \n\t .section-text{ \n\t\t font-size:2.4vw; \n\t } \n\t #assignment_info{ \n\t\t font-size: 2.5vw; \n\t } \n\t #dark_mode{ \n\t\t font-size: 2.5vw; \n\t }';
    html+='\n\t #learner{ \n\t\t font-size: 2.2vw; \n\t } \n\t #sub-details{ \n\t\t  font-size: 1.8vw; \n\t } \n\t #reward{ \n\t\t height:100px; \n\t\t  width:100px; \n\t } \n\t #quote{ \n\t\t font-size: 2vw; \n\t } \n }';

    html+='\n @media screen and (max-width:360px) \n { \n\t .container{ \n\t\t width:60%; \n\t\t top:30%; \n\t } \n\t .accordion{ \n\t\t font-size: 3vw; \n\t } \n\t .section-text{ \n\t\t font-size:2.5vw; \n\t } \n\t #assignment_info{ \n\t\t font-size: 2.8vw; \n\t } \n\t #dark_mode{ \n\t\t font-size: 2.5vw; \n\t }';
    html+='\n\t #learner{ \n\t\t font-size: 2.5vw; \n\t } \n\t #sub-details{ \n\t\t  font-size: 1.5vw; \n\t\t bottom:5px; \n\t } \n\t #reward{ \n\t\t height:50px; \n\t\t  width:50px; \n\t } \n\t #quote{ \n\t\t font-size: 2.2vw; \n\t } \n }';


    html+='\n</style>';
    html+='\n\t</head>';

    html+='\n<body>';

    return html;

}
function downloadZip()
{
    
    var zip = new JSZip();
    var stringArray = [];//Array to hold all strings.
    
    var CSV = document.getElementById("csvUpload");
    
    //emptyNotEmpty(CSV);
    //emptyIsEmpty(CSV);
    //check if there is no file uploaded.
    var empty = checkIfEmpty(CSV);
    
    //If is not empty, check if the file is a CSV file.
    if(!empty)
        {
            //CSVtestCSV(CSV);
            //CSVtestOther(CSV);
            var isCSV = checkCSV(CSV);

            if(isCSV)
            {

                if (CSV.files && CSV.files[0]) {

                    var myFile = CSV.files[0];
                    var reader = new FileReader();
                    var xml = "";
                    reader.readAsText(myFile);
                    //reader.readAsBinaryString(myFile);
        
                    reader.addEventListener("load", function(e) {
                        
                        var csvdata = e.target.result; 
                        
                        //checkCSVToXML(csvdata);//Unit test

                        xml = convertCSVToXML(csvdata); // Convert CSV data to xml.
                        
                        //console.log(xml);
                        var result = $(xml);

                        var html = "";
                        var feedbackCounter = 1;
                        var quotes = [];
                        quotes[0] = "“Ive failed over and over and over in my life and that is why I succeed.” – Michael Jordan";
                        quotes[1] = "“Success is most often achieved by those who don't know that failure is inevitable.” – Coco Chanel";
                        quotes[2] = "“It does not matter how slowly you go as long as you do not stop.” – Confucius";
                        quotes[3] = "“You don’t learn to walk by following rules. You learn by doing, and by falling over.” – Richard Branson";
                        quotes[4] = "“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.” – Pele";

                        var imgLink = "";

                        for(var i=0; i<result.length; i++)
                        {
                            html = buildStartingHTML(html);//Build pre-defined HTML string
                            var finalGrade = "";

                            var pass = false, merit = false, distinction = false;

                            var submissionDate = "";
                            var submitedDate = "";

                            html+='\n\t<button id="dark_mode">Dark mode</button>';//Add button for dark mode

                            var programme = $(result[i]).find("programme").text();//Get programme title

                            html+='\n\t <div id="assignment_info">';
                            html+='\n\t\t <p><b> Programme: '+ programme + '</b></p>';

                            var unit = $(result[i]).find("unit").text(); // Get unit title

                            var assignmentTitle =  $(result[i]).find("assignment").text(); // Get assignment title

                            html+='\n\t\t <p>'+ unit + ' ' + assignmentTitle +'</p>';

                            var targetCriteria = $(result[i]).find("target").text();//get all target criteria
                            targetCriteria = targetCriteria.replace(/["']/g, "");//Replace Speech marks inside that string to nothing.
                            targetCriteria = targetCriteria.replace(/,/g, "");//Replace comma with empty space

                            html+='\n\t\t <p> Target criteria: '+ targetCriteria +'&ensp; &ensp; <span id="withGrade" style="font-weight: bold;"></span></p>';

                            var targetCriteriaArray = targetCriteria.split(" ");//Split string using white spaces and put inside the target criteria array

                            html+='\n\t </div>';
                            html+='\n\t <br>';
                            
                            html+='\n\t <div id="learner">';

                            var assessor = $(result[i]).find("assessor").text(); //Get assesor name

                            html+='\n\t\t <p> Assessor: '+ assessor + '</p>';

                            //Get learner name and number
                            var learner = $(result[i]).find("learner").text();

                            var match = learner.match(/[a-zA-Z]+|[0-9]+/g); //Use REGEX to split the string into numbers and letters

                            var studentNumber = "";
                            var learnerName = "";
                            if(match == null)//If match is not found, student details have not been filled in
                            {
                                studentNumber = "Not found";
                                learnerName = "Not found";
                            }
                            else
                            {
                                studentNumber = match[0]; //Number
                                learnerName = match[1] + " " + match[2]; //First name and last name
                            }
                            html+='\n\t\t <p> Student number: '+ studentNumber + '</p>';
                            html+='\n\t\t <p> Student name: '+ learnerName + '</p>';

                            html+='\n\t </div>';

                            html+='\n\t <div id="sub-details">';

                            var issueDate = $(result[i]).find("issue").text(); //Get assignment issue date

                            html+='\n\t\t <p> Issue date: '+ issueDate + '</p>';

                            var submissionType = $(result[i]).find("first").text(); //Get submission type
                            
                            var finalComment = "";
                            if(submissionType !="First")//If it is not a first submission, only take resubmission dates.
                            {
                                submissionDate = $(result[i]).find("resubmission").text();
                                submitedDate = $(result[i]).find("resubmitted").text();
                                finalComment = $(result[i]).find("Resub").text();
                                finalComment = finalComment.replace(/["']/g, "");
                            }
                            else //If it is a first submission, take normal dates.
                            {
                                submissionDate = $(result[i]).find("submission").text();
                                submitedDate = $(result[i]).find("submitted").text();
                                finalComment = $(result[i]).find("final").text();
                                finalComment = finalComment.replace(/["']/g, "");
                            }

                            html+='\n\t\t <p> Submission date: '+ submissionDate + '</p>';
                            html+='\n\t\t <p> Submitted date: '+ submitedDate + ' ' + 'Type: ' + submissionType +'</p>';
                            html+='\n\t </div>';

                            html+='\n\t <div class="container">';

                            var passCounter = 0, meritCounter = 0, distinctionCounter = 0; //Counters for criteria
                            var countPass = 0, countMerit = 0, countDistinction = 0; //Counters for achieved

                            //Loop through length of all target criteria.
                            for(var j = 0; j<targetCriteriaArray.length; j++)
                            {
                                var counter = j+1;
                                var criteria = "";
                                var identifier = "";//Identifier helps to recognise get grades for first submission and re-submission.

                                if(submissionType !="First")//If not the first submission, identifier is a for resubmission criterias
                                {
                                    identifier = "a";
                                }
                                else
                                {
                                    identifier = "";
                                }
                                criteria = $(result[i]).find("criteria"+counter+identifier).text();//Get criteria
                
                                if(criteria == targetCriteriaArray[j])//If criteria matches the target learning aims array.
                                {
                                    if(criteria.includes("P"))//Check for pass
                                    {
                                        var passed = $(result[i]).find("pass"+counter+identifier).text();
                                        passCounter++;

                                        if(passed == "Yes" || passed == "yes")
                                        {
                                            html+='\n\t\t <button class="accordion pass">'+ criteria +'</button>';
                                            countPass++;//Increase pass acheived counter
                                        }
                                        else
                                        {
                                            html+='\n\t\t <button class="accordion fail">'+ criteria +'</button>';
                                        }
                                    }
                                    if(criteria.includes("M"))//Check for merit
                                    {
                                        var passed = $(result[i]).find("pass"+counter+identifier).text();
                                        meritCounter++;

                                        if(passed == "Yes" || passed == "yes")
                                        {
                                            html+='\n\t\t <button class="accordion pass">'+ criteria +'</button>';
                                            countMerit++;//Increase merit achieved counter
                                        }
                                        else
                                        {
                                            html+='\n\t\t <button class="accordion fail">'+ criteria +'</button>';
                                        }
                                    }
                                    if(criteria.includes("D"))//Check for distinction
                                    {
                                        var passed = $(result[i]).find("pass"+counter+identifier).text();
                                        distinctionCounter++;

                                        if(passed == "Yes" || passed == "yes")
                                        {
                                            html+='\n\t\t <button class="accordion pass">'+ criteria +'</button>';
                                            countDistinction++;//Increase distinction achived counter
                                        }
                                        else
                                        {
                                            html+='\n\t\t <button class="accordion fail">'+ criteria +'</button>';
                                        }
                                    }
                                    html+='\n\t\t <div class="section">';
                                    var comment = $(result[i]).find("comment"+counter+identifier).text();
                                    comment = comment.replace(/["']/g, "");
                                    html+='\n\t\t\t <p class="section-text">'+ comment +'</p>';
                                    html+='\n\t\t </div>';
                                    html+='\n\t\t <br> \n\t\t <br>';
                                }
                            }
                            //Setting final grades
                            if(countPass < passCounter)//If achieved passes are lower than all passes
                            {
                                pass = false;//Pass is false
                            }
                            else
                            {
                                pass = true;//Else pass is true
                            }
                            if(countMerit < meritCounter)//If achieved merits are lower than all merits
                            {
                                merit = false;//Merit is false
                            }
                            else
                            {
                                merit = true;//Else merit is true
                            }
                            if(countDistinction < distinctionCounter)//If achieved distinctions are lower than all distinctions
                            {
                                distinction = false;//Distinction is false
                            }
                            else
                            {
                                distinction = true;//Else distinction is true
                            }
                            //Final grade determination
                            if(pass == true && merit == true && distinction == true)
                            {
                                finalGrade = "Distinction";
                                imgLink = "../Images/cat2.png";
                            }
                            if(pass == true && merit == true && distinction == false)
                            {
                                finalGrade = "Merit";
                                imgLink = "../Images/cat2.png";
                            }
                            if(pass == true && merit == false && distinction == false)
                            {
                                finalGrade = "Pass";
                                imgLink = "../Images/cat2.png";
                            }
                            if(pass == true && merit == false && distinction == true)
                            {
                                finalGrade = "Pass";
                                imgLink = "../Images/cat2.png";
                            }
                            if(pass == false)
                            {
                                finalGrade = "Fail";
                                imgLink = "../Images/cat1.png";
                            }
                            html+='\n\t\t <button class="accordion pass">Final comment</button>';
                            html+='\n\t\t <div class="section">';
                            html+='\n\t\t\t <p class="section-text">'+ finalComment +'</p>';
                            html+='\n\t\t </div>';
                            html+='\n\t\t <br>';
                            html+='\n\t\t <br>';
                            html+='\n\t\t <img id="reward" src="' + imgLink + '" alt="Reward">';
                            html+='\n\t\t <p id="quote" style="text-align: center;"> ' + quotes[Math.floor(Math.random() * 5)] + '</p>';
                            html+='\n\t </div>';
                            html+='\n\t<p id="grade" style="display:none;"> Final grade: '+ finalGrade + '</p>';

                            if(finalGrade != "" && finalComment != "")//If final grade is not blank and final comment is not blank
                            {
                                html+="\n</body>\n</html>";
                                zip.file("Feedback"+ feedbackCounter + ".html", html);//Put html string into the ZIP ARCHIVE
                            }
                            html = "";//Clear html
                            i+=1;//Increase counter by one in order to skip a line in the result array.
                            feedbackCounter++;
                        }
                        zip.generateAsync({
                            type: "blob"
                            }).then(function(content) {
                                saveAs(content,"studentFeedback.zip");//Request ZIP download
                            });

                    });
                }
            }
            else
            {
                alert("The file is not in a CSV format.");
            }

        }
        else
        {
            alert("Please upload a CSV format file.");
        }
    }
}