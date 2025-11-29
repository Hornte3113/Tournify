import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// componente para vista del torneo
@Component({
  selector: 'app-tournament-view',
  templateUrl: './tournament-view.component.html',
  styleUrls: ['./tournament-view.component.css']
})
export class TournamentViewComponent {
  @Input() tournament: any;

  constructor(private router: Router) {}

  get bracketRounds(): any[] {
    return this.tournament?.bracket?.rounds ?? [];
  }

  get totalBracketMatches(): number {
    return this.bracketRounds.reduce((total, round) => total + (round.matches?.length ?? 0), 0);
  }

  get finishedBracketMatches(): number {
    return this.bracketRounds.reduce((total, round) => {
      const finishedMatches = round.matches?.filter((match: any) => match.status?.toLowerCase() === 'finalizado') ?? [];
      return total + finishedMatches.length;
    }, 0);
  }

  joinTournament(): void {
    if (this.tournament) {
      this.router.navigate(['/tournaments/join', this.tournament.id]);
    }
  }
}
