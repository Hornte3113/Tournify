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

  get leftBracketRounds(): any[] {
    const rounds = this.bracketRounds;
    if (!rounds.length) return [];

    return rounds.slice(0, -1).map((round: any) => {
      const midpoint = Math.ceil((round.matches?.length ?? 0) / 2);
      return { ...round, matches: round.matches?.slice(0, midpoint) ?? [] };
    });
  }

  get rightBracketRounds(): any[] {
    const rounds = this.bracketRounds;
    if (rounds.length < 2) return [];

    return rounds
      .slice(0, -1)
      .map((round: any) => {
        const midpoint = Math.ceil((round.matches?.length ?? 0) / 2);
        const rightMatches = round.matches?.slice(midpoint) ?? [];
        return { ...round, matches: [...rightMatches].reverse() };
      })
      .reverse();
  }

  get finalRound(): any | null {
    if (!this.bracketRounds.length) return null;
    return this.bracketRounds[this.bracketRounds.length - 1];
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
