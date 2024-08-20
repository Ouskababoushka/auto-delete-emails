function deleteLabeledEmails() {
  var label = GmailApp.getUserLabelByName("AutoDelete");
  if (label) {
    var threads = label.getThreads();
    for (var i = 0; i < threads.length; i++) {
      var thread = threads[i];
      var lastMessageDate = thread.getLastMessageDate();
      var now = new Date();
      var age = (now - lastMessageDate) / (1000 * 60 * 60 * 24); // age in days
      if (age >= 30) { // change this number to set a different period
        thread.moveToTrash(); // or thread.moveToArchive() if you prefer archiving
      }
    }
  }
}
