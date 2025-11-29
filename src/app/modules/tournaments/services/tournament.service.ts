import { Injectable } from '@angular/core';

// servicio para compartir datos de torneos
@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  
  private defaultBracket = {
    format: 'Eliminación directa',
    rounds: [
      {
        name: 'Cuartos de final',
        matches: [
          { team1: 'Cruz Azul', score1: 2, team2: 'Pelusa Caligari', score2: 0, winner: 'Cruz Azul', status: 'Finalizado' },
          { team1: 'T1', score1: 2, team2: 'Leones Negros', score2: 1, winner: 'T1', status: 'Finalizado' },
          { team1: 'Furia Azul', score1: 1, team2: 'Team Queso', score2: 0, winner: 'Furia Azul', status: 'Finalizado' },
          { team1: 'Nova Esports', score1: 2, team2: 'Dragones del Sur', score2: 1, winner: 'Nova Esports', status: 'Finalizado' }
        ]
      },
      {
        name: 'Semifinales',
        matches: [
          { team1: 'Cruz Azul', score1: 2, team2: 'T1', score2: 1, winner: 'Cruz Azul', status: 'Finalizado' },
          { team1: 'Furia Azul', score1: 2, team2: 'Nova Esports', score2: 3, winner: 'Nova Esports', status: 'Finalizado' }
        ]
      },
      {
        name: 'Gran Final',
        matches: [
          { team1: 'Cruz Azul', team2: 'Nova Esports', status: 'Programado', scheduledFor: '22 Mar 2024 · 19:00' }
        ]
      }
    ]
  };

  // datos de ejemplo de torneos
  tournaments = [
    {
      id: 1,
      name: 'Copa Primavera 2024',
      sport: 'Volleyball',
      maxTeams: 16,
      enrolled: 12,
      prize: '$5,000',
      startDate: '15 Mar 2024',
      status: 'Activo',
      image: 'assets/images/Background-card-play.avif',
      organizer: 'Club Deportivo Central',
      bracket: this.defaultBracket
    },
    {
      id: 2,
      name: 'Apex Legends: Champions Quest',
      sport: 'eSports',
      maxTeams: 64,
      enrolled: 0,
      prize: '$20,000',
      startDate: '14 Dic 2023',
      status: 'Próximo',
      image: 'assets/images/Card-valorant.png',
      organizer: 'ESports Pro League',
      bracket: this.defaultBracket
    },
    {
      id: 3,
      name: 'Call of Duty: Combat Challenge',
      sport: 'eSports (CoD)',
      maxTeams: 32,
      enrolled: 32,
      prize: '$10,000',
      winner: 'Team Queso',
      status: 'Finalizado',
      image: 'assets/images/Card-cod.png',
      organizer: 'Gaming Masters',
      bracket: this.defaultBracket
    },
    {
      id: 4,
      name: 'Liga Anual de Volleyball',
      sport: 'Volleyball',
      maxTeams: 8,
      enrolled: 8,
      prize: '$2,500',
      startDate: '01 Nov 2023',
      status: 'Activo',
      image: 'assets/images/Background-volley-card.png',
      organizer: 'Federación Nacional',
      bracket: this.defaultBracket
    }
  ];

  getTournamentById(id: number) {
    return this.tournaments.find(t => t.id === id);
  }
}
