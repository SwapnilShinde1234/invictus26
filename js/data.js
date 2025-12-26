const matches = [
    {
        id: 1,
        matchType: "TEAM",
        sport: "Cricket",
        category: "Outdoor",
        event: "Men",
        participants: {
            teamA: { department: "IT" },
            teamB: { department: "MECH" }
        },
        winnerDepartment: "IT",
        status: "Completed",
        points: 10,
        timestamp: "2025-01-24T16:30:00"
    },

    {
        id: 2,
        matchType: "INDIVIDUAL",
        sport: "Carrom",
        category: "Indoor",
        event: "Singles Men",
        participants: [
            {
                name: "Swapnil Shinde",
                class: "TY",
                department: "IT"
            },
            {
                name: "Amit Kadam",
                class: "TY",
                department: "ELE"
            }
        ],
        winnerDepartment: "IT",
        winnerName: "Swapnil Shinde",
        status: "Completed",
        points: 5,
        timestamp: "2025-01-25T18:45:00"
    }
];


const results = [
    {
        sport: "Cricket",
        department: "IT",
        position: "1st",
        class: "TY",
        points: 10
    }
];

const departments = [
    { name: "IT", points: 0 },
    { name: "Electrical", points: 0 },
    { name: "MECH", points: 0 },
    { name: "CIVIL", points: 0 },
    { name: "ENTC", points: 0 }
];
