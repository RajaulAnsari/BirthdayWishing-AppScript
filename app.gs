//create a function

function myFunction() {
  var NameSheet=SpreadsheetApp.getActive().getSheetByName("Birthday"); // Select the sheet with Birthday data
  var NameRowCount=NameSheet.getLastRow(); // Find the last row
  var AllList=NameSheet.getRange(2,1,NameRowCount,6).getValues(); // create an array of data

// set the date time zone
  var date=new Date();
  var currentdate= Utilities.formatDate(date,"GMT+05:45","yyyy-M-d")
  var currentyear= Utilities.formatDate(date,"GMT+05:45","yyyy")

//put your link of image from your google drive with public acess
   
  var picture = DriveApp.getFileById('your public link of photo here'); //public with link eg: 45WEhvlqGt2HjOjBmLuOZ_y3dsacflh 

  var inlineImages = {};
  inlineImages[picture.getId()] = picture.getBlob();


  var firstname="";
  var email="";
  var message="";

//This loop checks the whole sheet with the currentdate and execute 

  for(i=0;i<AllList.length;i++){
    if (currentdate == currentyear+"-"+AllList[i][3]+"-"+AllList[i][2]){
      first_name=AllList[i][0];
      email=AllList[i][4];
      message=AllList[i][5];
      
     MailApp.sendEmail({
     to: email, 
     subject: "Happy Birthday "+ first_name, 
     body:"",
//Plese specify the sender name in htmlBody eg: MD. Rajaul Ansari
     htmlBody: 'Dear '+first_name +'<br><br>'+message +'<br><br><br><img src="cid:' + picture.getId() + '" /><br>'+"Your's"+'<br>'+"Sender Name", 
     inlineImages: inlineImages   
  });
    }
  }
}

