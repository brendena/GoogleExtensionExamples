function myFunction() {
  
}

function onOpen() {
  SlidesApp.getUi().createMenu('Math Equations')
      .addItem('Menu', 'showSidebar')
      .addToUi();
   Logger.log("started");
}

function showSidebar() {
  
  var html = doGet().setTitle('Math Solver').setWidth(300);
  SlidesApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
  
}

function doGet() {
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate();
}

function grabAltText(){
  var imageSlide = findImageID();
  return {
  "title":imageSlide.getTitle(),
  "description":imageSlide.getDescription()
  };
}

function setAltText(altTitle, altDescription){
  Logger.log("Setting alt text to - " + altTitle);
  var imageSlide = findImageID();
  Logger.log("id of image " + imageSlide);
  if(imageSlide != undefined){
      var requests = [{
          updatePageElementAltText: 
          {
            objectId: imageSlide.getObjectId(),
            title: altTitle,
            description: altDescription,
          }
      
      }];
    try {
        var batchUpdateResponse = Slides.Presentations.batchUpdate({
          requests: requests
        },SlidesApp.getActivePresentation().getId());
        Logger.log(batchUpdateResponse);
    } catch (e) {
      Logger.log(" yielded an error: " + e);
    }
    
  }
  
}
function findImageID(){
  var selection = SlidesApp.getActivePresentation().getSelection();
  var selectionRange = selection.getPageElementRange();
 
  if(selectionRange == null)            
    throw "you need to select a image"   
    
  var pageElements = selectionRange.getPageElements();
  
  if(pageElements.length <= 0)
    throw "please select a item"
  else if(pageElements.length >= 2)
    throw "can only select one item"
    
  var image = pageElements[0].asImage();
  return image;
  
}

