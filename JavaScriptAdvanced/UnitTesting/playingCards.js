function playingCards(face, suit) {
  if (
    (face >= 2 && face <= 10) ||
    face === "J" ||
    face === "Q" ||
    face === "K" ||
    face === "A"
  ) {
    switch (suit) {
      case "S":
        console.log(face + "♠");
        break;
      case "H":
        console.log(face + "♥");
        break;
      case "D":
        console.log(face + "♦");
        break;
      case "C":
        console.log(face + "♣");
        break;
      default:
        console.log("Error");
    }
  } else {
    console.log("Error");
  }
}
playingCards('1', 'C');

// • Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// • Valid card suits are: S (♠), H (♥), D (♦), C (♣)
