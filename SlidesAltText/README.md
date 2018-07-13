#Alt Text Google Slide Extension Example

This example is to deminstrate how to use googles advance api to add alt text to your images.

![Example of AltText in google Slide](./Results.png?raw=true "Title")

## To update alt text
To update alt text you use Google Slides advance api's.  The specific request is [UpdatePageElementAltTextRequest](https://developers.google.com/slides/reference/rest/v1/presentations/request#UpdatePageElementAltTextRequest)

To use these api call your going to need to enable the advance [google slide api](https://developers.google.com/apps-script/guides/services/advanced#enabling_advanced_services).

Your'll turn on the Advance api from your google app script page and then from the [Google API Console page](https://console.cloud.google.com/).

```javascript
var requests = [{
    updatePageElementAltText: 
    {
        objectId: imageId,
        title: "altTitle",
        description: "altDescription",
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
    
```


## To Get alt text
if you have the page element image you can then just call getTitle() and getDescription().


```javascript
var pageElementImage;

pageElementImage.getTitle();
pageElementImage.getDescription();


```