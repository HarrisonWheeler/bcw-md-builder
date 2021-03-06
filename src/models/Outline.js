export class Outline {
  // NOTE default outline setup - will have these default markdown strings OR will take in a outline that is passed in if needed down the line
  constructor(data = {}) {
    this.outlineHeader = "Header" || data.header
    this.morningChallenge = "Morning Challenge" || data.morningChallenge
    this.morningChallengeDescription = "Morning Challenge Description" || data.morningChallengeDescription
    this.dailyProject = "Daily Project" || data.dailyProject
    this.dailyProjectDescription = "Daily Project Description" || data.dailyProjectDescription
    this.fireside = "Fireside" || data.fireside
    this.firesideDescription = "Fireside Description" || data.firesideDescription
  }
}
