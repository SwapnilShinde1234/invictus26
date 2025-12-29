/* ================= INDOOR GAMES ================= */
export const indoorGames = [
    { sport: "Carrom", type: "INDIVIDUAL", category: "Indoor Games", event: "Singles" },
    { sport: "Carrom", type: "INDIVIDUAL", category: "Indoor Games", event: "Doubles" },
  
    { sport: "Badminton", type: "INDIVIDUAL", category: "Indoor Games", event: "Singles" },
    { sport: "Badminton", type: "INDIVIDUAL", category: "Indoor Games", event: "Doubles" },
  
    { sport: "Table Tennis", type: "INDIVIDUAL", category: "Indoor Games", event: "Singles" },
    { sport: "Table Tennis", type: "INDIVIDUAL", category: "Indoor Games", event: "Doubles" },
  
    { sport: "Chess", type: "INDIVIDUAL", category: "Indoor Games", event: "Open" },
    { sport: "Yoga", type: "INDIVIDUAL", category: "Indoor Games", event: "Solo" }
  ];

  export const outdoorGames = [
    { sport: "Marathon", type: "INDIVIDUAL", category: "Outdoor Games", event: "Boys & Girls" },
   
  
    { sport: "Cricket", type: "TEAM", category: "Outdoor Games", event: "Boys" },
    { sport: "Cricket", type: "TEAM", category: "Outdoor Games", event: "Girls" },
  
    { sport: "Football", type: "TEAM", category: "Outdoor Games", event: "Boys" },
    { sport: "Football", type: "TEAM", category: "Outdoor Games", event: "Girls" },
  
    { sport: "Volleyball", type: "TEAM", category: "Outdoor Games", event: "Boys" },
    { sport: "Volleyball", type: "TEAM", category: "Outdoor Games", event: "Girls" },
  
    { sport: "Basketball", type: "TEAM", category: "Outdoor Games", event: "Boys" },
    { sport: "Basketball", type: "TEAM", category: "Outdoor Games", event: "Girls" },
  
    { sport: "Athletics", type: "INDIVIDUAL", category: "Outdoor Games", event: "Individual" },
    { sport: "Athletics", type: "INDIVIDUAL", category: "Outdoor Games", event: "Relay" }
  ];
  export const indianGames = [
    { sport: "Kho-Kho", type: "TEAM", category: "Indian Games", event: "Boys" },
    { sport: "Kho-Kho", type: "TEAM", category: "Indian Games", event: "Girls" },
  
    { sport: "Kabaddi", type: "TEAM", category: "Indian Games", event: "Boys" },
    { sport: "Kabaddi", type: "TEAM", category: "Indian Games", event: "Girls" },
  
    { sport: "Tug of War", type: "TEAM", category: "Indian Games", event: "Boys" },
    { sport: "Tug of War", type: "TEAM", category: "Indian Games", event: "Girls" }
  ];
  export const gymnasiumGames = [
    { sport: "Powerlifting", type: "INDIVIDUAL", category: "Gymnasium", event: "Boys" },
    { sport: "Powerlifting", type: "INDIVIDUAL", category: "Gymnasium", event: "Girls" },
  
    { sport: "GCEK Shree", type: "INDIVIDUAL", category: "Gymnasium", event: "Boys Only" }
  ];
      
  
  /* ================= ALL SPORTS ================= */
  export const allSports = [
    ...indoorGames,
    ...outdoorGames,
    ...indianGames,
    ...gymnasiumGames
  ];
  