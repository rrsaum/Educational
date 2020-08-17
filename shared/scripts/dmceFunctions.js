// JavaScript Document
function Trim(s)
{
  // Remove leading spaces and carriage returns

  while ((s.substring(0,1) == ' ') || (s.substring(0,1) == '\n') || (s.substring(0,1) == '\r'))
  {
    s = s.substring(1,s.length);
  }

  // Remove trailing spaces and carriage returns

  while ((s.substring(s.length-1,s.length) == ' ') || (s.substring(s.length-1,s.length) == '\n') || (s.substring(s.length-1,s.length) == '\r'))
  {
    s = s.substring(0,s.length-1);
  }
  return s;
}

// Global variables
var IntraNavigation = false

/*******************************************************************************
**
** This function is used to go to another page of a multi-page SCO
**
** Inputs:  page - the location that we're bookmarking
**
**
*******************************************************************************/
function GoToPage( page )
{
	IntraNavigation = true;

	// replace the current page with the page specified
	window.location.replace( page );
}

/*******************************************************************************
**
** This function asks the LMS if there exists a previous SCO or Asset to go to.
** If a SCO or Asset exists, then the previous button is displayed.
**
** Inputs:  None
**
** Return:  String - "true" if the previous button should be displayed
**                   "false" if failed.
**
*******************************************************************************/
function renderPreviousButton()
{
   var value = retrieveDataValue( "adl.nav.request_valid.previous" );
   return value;
}

/*******************************************************************************
**
** This function asks the LMS if there exists a next SCO or Asset to continue
** to.  If a SCO or Asset exists, then the continue button is displayed.
**
** Inputs:  None
**
** Return:  String - "true" if the continue button should be displayed
**                   "false" if failed.
**
*******************************************************************************/
function renderContinueButton()
{
   var value = retrieveDataValue( "adl.nav.request_valid.continue" );
   return value;
}


/*******************************************************************************
**
** This function is used to go to a previous SCO
**
*******************************************************************************/
function Previous()
{
	// we request the previous SCO from the LMS
	storeDataValue("adl.nav.request", "previous");

	// we terminate this SCO's communication with the LMS
	terminateCommunication();
}

/*******************************************************************************
**
** This function is used to go to a next SCO
**
*******************************************************************************/
function Continue()
{
	// we request the next SCO from the LMS
	storeDataValue ("adl.nav.request", "continue");

	// we terminate this SCO's communication with the LMS
	terminateCommunication();
}


/*******************************************************************************
**
** This function is used to tell the LMS to set a bookmark
**
** Inputs:  value - the location that we're bookmarking
**
** Return:  None
**
*******************************************************************************/
function onUnexpectedExit( value )
{
	// set a bookmark
	storeDataValue( "cmi.location", value );

	// we're going to check to see if this is a "good" exit or a "bad" exit
	if ( IntraNavigation == false )
	{
		// terminate our communication with the LMS
		terminateCommunication();
	}
	else
	{
		IntraNavigation = false;
	}
}


/*******************************************************************************
**
** This function is used to by multi-page SCOs in the process of determining
** whether or not to display a next button on the last page of a multi-page SCO
**
** Inputs:  None
**
** Return:  None
**
*******************************************************************************/
function displayNext()
{
    // if there is somewhere to go next and previous enable the buttons
	if ( renderContinueButton() == "true" )
    {
		document.getElementById("nextBtn").style.visibility = "visible";
	}
}

/*******************************************************************************
**
** This function is used to tell the LMS to initiate the communication session
** using the APIWrapper.js file as a pass through.
**
** Inputs:  showNext - "false" (optional parameter)
**
** Return:  String - "true" if the initialization was successful, or
**          "false" if the initialization failed.
**
*******************************************************************************/
function Initialize(showNext)
{
	if ( !(entryStatus == "resume") )
	{
   		initializeCommunication();
	}
	// if there is somewhere to go next and previous enable the buttons
	if ( renderContinueButton() == "true")
    {
		if ( showNext != "false" ) document.getElementById("nextBtn").style.visibility = "visible";
	}


	if ( renderPreviousButton() == "true" )
	{
		document.getElementById("prevBtn").style.visibility = "visible";
	}


	// we need to determine if this is a new "learner attempt" or a
   	// suspended "learner attempt
   	var entryStatus = retrieveDataValue( "cmi.entry" );


	// check to see if this a resumption of a suspended learner attempt
	/***********************************************************
	** Currently NOT needed (keep for future use/reminder)
	************************************************************
	if ( entryStatus == "resume" )
	{
		var location = retrieveDataValue( "cmi.location" );

		// jump to the location we just retrieved

			//find the path name of the current SCO
			var path = getSCOLocation(currentSCO);  //Need to recreate getSCOLocation function with method you decided to use
			var newLocation = path+location+".html";
			window.location.replace( newLocation );
	}
	*************************************************/
}

/*******************************************************************************
**
** Makes the appropriate calls for a normal exit calling Terminate and
** setting some data model elements for a normal exit
**
** Inputs:  None
**
** Return:  None
**
*******************************************************************************/
function Terminate()
{
   if (!IntraNavigation)
   {
      storeDataValue( "cmi.completion_status", "completed" );

      storeDataValue( "cmi.exit", "" );

      terminateCommunication();
   }
}


/********************************************************************************
** This function pops opens up a new window while the first one remains visible
**
** Inputs: String - The name/location of the page that will appear in the new window
**
** Return: A new window is open with the page specified
**
********************************************************************************/
function popup(pageName)
{
	window.open(pageName, "newWindow", "resizable=yes,scrollbars=yes,width=800,height=600");
}


function disableSubmit()
{
	document.getElementById('submit').disabled = true;
	document.getElementById('reset').disabled = true;
}

function enableSubmit()
{
	document.getElementById( "submit" ).disabled = false;
	document.getElementById( "reset" ).disabled = false;
}

//-- BEGIN ASSESSMENT VALIDATION and FEEDBACK FUNCTIONS

//initalize global variables
var correct = "Correct. ";
var incorrect = "Incorrect. ";
var alreadyAnswered = "You have already answered the question.";
var answerResult = "";


/*******************************************************************************
**
** Finds the element with with id "feedback" and writes text between the appropriate tags
**
** Inputs:	result - string
**			feedback - string
**
** Return:  Displays the appropriate feedback at the specified location
**
*******************************************************************************/
function displayFeedback(result, feedback)
{
	//document.getElementById('feedback').innerText=result+feedback;

	if( result == correct ){
		document.getElementById('right').style.color = "teal";
	}
	if( result == incorrect ){
		document.getElementById('wrong').style.color = "orange";
	}
}

//--------------------------------------------------------------------------------


//END functions to check answers

function storeLearnersCode( feedbackPage, startingIndex )
{
		if (startingIndex == null)
		{
			var index = retrieveDataValue("cmi.interactions._count");
		}
		else
		{
			index = startingIndex;
		}

		var numExercises = applicationExercise.elements.length - 1;
		var appID = "";
		var currentIndex = index;
		var lastIndexNumber = index + (numExercises - 1);
		for ( i = 0; i < ( numExercises ); i++ )
		{
			if(i != 0)
			{
				currentIndex++;
			}

			appID = "app_ex_"+currentIndex;

			// Set the Interaction ID
			storeDataValue("cmi.interactions."+currentIndex+".id", appID);

			storeDataValue("cmi.interactions."+currentIndex+".type", "fill-in");

			currElem = applicationExercise.elements[i];
			answer = currElem.value;

			// store the answer
			storeDataValue("cmi.interactions." + currentIndex + ".learner_response", answer);
		}
		GoToPage( feedbackPage );
}

/**********************************************************************
 **  Function: get_params()
 **  Description: This function is used to get the parameters from the
 **               query string
 **********************************************************************/
function get_params()
{
      var strSearch = window.location.search;
      var idx = strSearch.indexOf('?');
      if (idx != -1)
      {
         var pairs = strSearch.substring(idx+1, strSearch.length).split('&');
         alert("testing");
		 for (var i=0; i<pairs.length; i++)
         {
            nameVal = pairs[i].split('=');
            g_params[nameVal[0]] = nameVal[1];
			alert(nameVal[0]+"and"+nameVal[1]);
         }
	  }

}

function quit(){

   if(courseStatus === "completed"){
      scorm.set("cmi.exit", "logout");
   } else {
      scorm.set("cmi.exit", "suspend");
   }
   
   scorm.quit();

}

// From: https://stackoverflow.com/questions/16604407/jquery-remove-bootstrap-alert-after-certain-amount-of-time
// Alert Type: alert-success, alert-info, alert-warning, alert-danger
// https://www.w3schools.com/bootstrap/bootstrap_alerts.asp
$(document).ready(function() {
    $('#msgFail').on( "click", function() {
      showAlert( "Incorrect: You have selected the wrong item. Try again or selct the Information icon for instructions.", "alert-danger", "fa fa-warning" );
    } );
    // Match string (https://api.jquery.com/attribute-contains-selector/)
    $("div[id*='msgFail']").on( "click", function() {
      showAlert( "Incorrect: You have selected the wrong item. Try again or selct the Information icon for instructions.", "alert-danger", "fa fa-warning" );
    } );
    $("li[id*='msgFail']").on( "click", function() {
      showAlert( "Incorrect: You have selected the wrong item. Try again or selct the Information icon for instructions.", "alert-danger", "fa fa-warning" );
    } );
    $("img[id*='msgFail']").on( "click", function() {
      showAlert( "Incorrect: You have selected the wrong item. Try again or selct the Information icon for instructions.", "alert-danger", "fa fa-warning" );
    } );
    $("button[id*='msgFail']").on( "click", function() {
      showAlert( "Incorrect: You have selected the wrong item. Try again or selct the Information icon for instructions.", "alert-danger", "fa fa-warning" );
    } );
    $("p[id*='msgFail']").on( "click", function() {
      showAlert( "Incorrect: You have selected the wrong item. Try again or selct the Information icon for instructions.", "alert-danger", "fa fa-warning" );
    } );
    $("a[id*='msgFail']").on( "click", function() {
      showAlert( "Incorrect: You have selected the wrong item. Try again or selct the Information icon for instructions.", "alert-danger", "fa fa-warning" );
    } );
    $('#msgPass').on( "click", function() {
      showAlert( "Correct: You performed the correct action. Select the <strong>Next -></strong> button to continue.", "alert-success", "far fa-check-circle" );
    } );
});


function showAlert( message, alerttype, icontype ) {
    $('#alert_placeholder').append( $('#alert_placeholder').append(
      '<div id="alertdiv" role="alert" class="alert alert-dismissible fade show ' +  alerttype + '" >' +
          '<i class="'+ icontype +'"></i>&nbsp;&nbsp;' +
          '<a class="close" data-dismiss="alert" aria-label="close" >x</a>' +
          '<span>' + message + '</span>' + 
      '</div>' )
    );

    // close it in 6 secs, better to be longer and allow users to close it than to be too quick
    setTimeout( function() {
        $("#alertdiv").remove();
    }, 7000 );
}


function closeMsg() {
    $('#alertdiv');
    // close it in 6 secs, better to be longer and allow users to close it than to be too quick
    setTimeout( function() {
        $("#alertdiv").remove();
    }, 7000 );
}


function showButtons() {
  var x = document.getElementById("buttons");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function showHighlight() {
  var element = document.getElementById("mark");
  var highlightFeedback = document.getElementById("msgMark");
  element.classList.toggle("highlight");

  if (highlightFeedback.style.display === "none") {
    highlightFeedback.style.display = "block";
  } else {
    highlightFeedback.style.display = "none";
  }

} 
