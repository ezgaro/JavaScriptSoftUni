function constructionCrew(obj) {
  if (obj.dizziness) {
    let waterToIntake = 0.1 * obj.weight * obj.experience;
    obj.levelOfHydrated += waterToIntake;
    obj.dizziness = false;
  }
}
constructionCrew({ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }
);