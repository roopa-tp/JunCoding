# JunCoding

The problem has been interpreted as follows: -
•	The table name has to be entered by the user
•	The start and end time in UNIX epoch format has to be entered
•	Source_VN, Source_Port, Destination_VN, Destination_Port and its corresponding operator has to be selected
•	The form is submitted and the JSON query formulated is displayed

The following approach has been followed: -
•	AngularJS framework and Bootstrap(for styling) has been used
•	There are 4 files, index.html, app.js, style.css and questionMark.jpg 
     o	Index.html for form and query display
     o	App.js for collecting data from the form and formulating the query
     o	Style.css for good display of the form
     o	JPG file is used in the HTML form
•	All fields are mandatory in the form
•	Table Name is a required text field 
•	Start Time and End Time fields are required Number fields. The end time has to be greater than or equal to the start time
•	Source_VN, Source_Port, Destination_VN, Destination_Port and its corresponding operators are all mandatory fields and should be selected
•	Error will be thrown against each field if not valid
•	Submit button will be enabled only after all the fields are entered and valid
•	The JSON query is formulated and displayed below the form
•	Reset button will reset the form

The entire folder has to be downloaded and the index.html file has to be open with a browser.

