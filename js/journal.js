// exports.journal = function() {
  //business logic

  // exports.JournalEntry = function (title, timeStamp, bodyText) {
  //   this.newTitle = title;
  //   this.newTimeStamp = timeStamp;
  //   this.newBodyText = bodyText;
  // }
  //
  // exports.JournalEntry.prototype.bodyWordCount = function() {
  //   return this.newBodyText.split(" ").length;
  // };
  //
  // exports.JournalEntry.prototype.concatEntryDetails = function() {
  //     return this.newTitle + "<br>" + this.newTimeStamp + "<br>" + this.newBodyText;
  // };

var JournalEntry = function (title, timeStamp, bodyText) {
  this.newTitle = title;
  this.newTimeStamp = timeStamp;
  this.newBodyText = bodyText;
}

JournalEntry.prototype.bodyWordCount = function() {
  return this.newBodyText.split(" ").length;
};

JournalEntry.prototype.concatEntryDetails = function() {
    return this.newTitle + "<br>" + this.newTimeStamp + "<br>" + this.newBodyText;
};

exports.JournalModule = JournalEntry;
