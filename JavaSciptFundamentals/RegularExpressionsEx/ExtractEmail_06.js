function extractEmail(data) {
  const regex = /\b[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  const emails = data.match(regex);
  if (emails) {
      emails.forEach(email => console.log(email));
  }
}
extractEmail("Many users @ SoftUni confuse email addresses. We @Softuni.BG provide high-quality training @ home or @ class.–- steve.parker@softuni.de.");