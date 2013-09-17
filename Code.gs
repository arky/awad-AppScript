//Parses Wordsmith XML Feed

function doGet(){

  // Fetch XML
  var response = UrlFetchApp.fetch("http://wordsmith.org/awad/rss1.xml").getContentText();

  // Parse XML
  var parsedResponse = Xml.parse(response, false);
  var word = parsedResponse.getElement().getElement('channel').getElement('item').getElement('title').getText(); 
  var desc = parsedResponse.getElement().getElement('channel').getElement('item').getElement('description').getText(); 
  
  // Create UI
  var app = UiApp.createApplication();

 // Create labels
  var wordLabel= app.createLabel(word).setStyleAttribute("fontSize","16px");
  var descLabel= app.createLabel(desc).setStyleAttribute("fontSize","12px");
  
  // add the label to the app container
  app.add(wordLabel);
  app.add(descLabel);

  // Return App
  return app;
  
}

