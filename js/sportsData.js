const indoorGames = [
    { sport: "Carrom", type: "INDIVIDUAL", category: "Indoor Games", events: ["Singles", "Doubles"] },
    { sport: "Badminton", type: "INDIVIDUAL", category: "Indoor Games", events: ["Singles", "Doubles"] },
    { sport: "Table Tennis", type: "INDIVIDUAL", category: "Indoor Games", events: ["Singles", "Doubles"] },
    { sport: "Chess", type: "INDIVIDUAL", category: "Indoor Games", events: ["Open"] },
    { sport: "Yoga", type: "INDIVIDUAL", category: "Indoor Games", events: ["Solo"] }
];

const outdoorGames = [
    { sport: "Cricket", type: "TEAM", category: "Outdoor Games", events: ["Boys"] },
    { sport: "Cricket", type: "TEAM", category: "Outdoor Games", events: ["Girls"] },
    { sport: "Football", type: "TEAM", category: "Outdoor Games", events: ["Boys"] },
    { sport: "Football", type: "TEAM", category: "Outdoor Games", events: ["Girls"] },
    { sport: "Volleyball", type: "TEAM", category: "Outdoor Games", events: ["Boys"] },
    { sport: "Volleyball", type: "TEAM", category: "Outdoor Games", events: ["Girls"] },
    { sport: "Basketball", type: "TEAM", category: "Outdoor Games", events: ["Boys"] },
    { sport: "Basketball", type: "TEAM", category: "Outdoor Games", events: ["Gilrs"] },

];

const indianGames = [
    { sport: "Kho-Kho", type: "TEAM", category: "Indian Games", events: ["Boys"] },
    { sport: "Kho-Kho", type: "TEAM", category: "Indian Games", events: ["Girls"] },
    { sport: "Kabaddi", type: "TEAM", category: "Indian Games", events: ["Boys"] },
    { sport: "Kabaddi", type: "TEAM", category: "Indian Games", events: ["Girls"] },
    { sport: "Tug of War", type: "TEAM", category: "Indian Games", events: ["Boys"] },
    { sport: "Tug of War", type: "TEAM", category: "Indian Games", events: ["Girls"] },
    { sport: "Athletics", type: "INDIVIDUAL", category: "Outdoor Games", events: ["Individual", "Relay"] },
];

const gymnasiumGames = [
    { sport: "Powerlifting", type: "INDIVIDUAL", category: "Gymnasium", events: ["Boyss"] },
    { sport: "Powerlifting", type: "INDIVIDUAL", category: "Gymnasium", events: ["Girls"] },
    { sport: "GCEK Shree", type: "INDIVIDUAL", category: "Gymnasium", events: ["Boys Only"] }
];

const allSports = [
    ...indoorGames,
    ...outdoorGames,
    ...indianGames,
    ...gymnasiumGames
];

const matches = [
    {
        sport: "Carrom",
        category: "Indoor Games",
        event: "Singles",
        matchType: "INDIVIDUAL",
        participants: ["Swapnil Shinde", "Amit Kadam"],
        departments: ["IT", "MECH"],
        winner: "Swapnil Shinde",
        winnerDepartment: "IT",
        status: "Completed",
        result: "Swapnil Shinde won",
        date: "2025-01-25",
        time: "18:30",
        timestamp: "2025-01-25T18:30:00"
    },
    {
        sport: "Carrom",
        category: "Indoor Games",
        event: "Singles",
        matchType: "INDIVIDUAL",
        participants: ["Samrth Fatake", "Yashraj Borkar"],
        departments: ["IT", "IT"],
        winner: "Yashraj Borkar",
        winnerDepartment: "IT",
        status: "Completed",
        result: "Yashraj Borkar won",
        date: "2026-01-01",
        time: "08:30",
        timestamp: "2026-01-01T08:30:00"
    },

    {
        sport: "Carrom",
        category: "Indoor Games",
        event: "Singles",
        matchType: "INDIVIDUAL",
        participants: ["Swapnil Shinde", "Amit Kadam"],
        departments: ["IT", "Electrical"],
        winner: "Amit Kadam",
        winnerDepartment: "Electrical",
        status: "Completed",
        result: "Amit Kadam Won",
        date: "2026-01-25",
        time: "18:30",
        timestamp: "2025-01-25T18:30:00"
    },
    {
        sport: "Cricket",
        category: "Outdoor Games",
        event: "Boys",
        matchType: "TEAM",
        participants: ["TY IT", " SY MECH"],
        departments: ["IT", "MECH"],
        winner: "TY IT",
        winnerDepartment: "IT",
        status: "not completed",
        result: "IT won by 5 wickets",
        date: "2025-01-26",
        time: "09:00",
        timestamp: "2025-01-26T09:00:00"
    }

];
