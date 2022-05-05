export class Outline {
  // NOTE default outline setup - will have these default markdown strings OR will take in a outline that is passed in if needed down the line
  constructor(data) {
    this.header = "# Header" || data.header
    this.morningChallenge = "## Morning Challenge" || data.morningChallenge
    this.morningChallengeDescription = "### Morning Challenge Description Here..." || data.morningChallengeDescription
    this.dailyProject = "## Daily Project" || data.dailyProject
    this.dailyProjectDescription = "### Daily Project Description Here..." || data.dailyProjectDescription
    this.fireside = "## Fireside" || data.fireside
    this.firesideDescription = "### Fireside Description Here..." || data.firesideDescription
  }
}
