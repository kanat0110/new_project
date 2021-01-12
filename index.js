var users = [
  {
    "index": 0,
    "isActive": false,
    "balance": "$1,505.52",
    "age": 28,
    "eyeColor": "green",
    "name": "Humphrey Carroll",
    "gender": "male",
    "company": "SKINSERVE",
    "email": "humphreycarroll@skinserve.com",
    "phone": "+1 (937) 429-2609"
  },
  {
    "index": 1,
    "isActive": true,
    "balance": "$2,879.37",
    "age": 22,
    "eyeColor": "green",
    "name": "Massey Rowe",
    "gender": "male",
    "company": "ZAGGLE",
    "email": "masseyrowe@zaggle.com",
    "phone": "+1 (885) 512-3236"
  },
  {
    "index": 2,
    "isActive": true,
    "balance": "$2,711.88",
    "age": 24,
    "eyeColor": "brown",
    "name": "Randolph Fernandez",
    "gender": "male",
    "company": "UNEEQ",
    "email": "randolphfernandez@uneeq.com",
    "phone": "+1 (988) 521-2580"
  },
  {
    "index": 3,
    "isActive": true,
    "balance": "$2,439.15",
    "age": 24,
    "eyeColor": "blue",
    "name": "Acevedo Merritt",
    "gender": "male",
    "company": "INQUALA",
    "email": "acevedomerritt@inquala.com",
    "phone": "+1 (928) 536-2296"
  },
  {
    "index": 4,
    "isActive": false,
    "balance": "$3,160.95",
    "age": 24,
    "eyeColor": "brown",
    "name": "Patrice Lowe",
    "gender": "female",
    "company": "VELOS",
    "email": "patricelowe@velos.com",
    "phone": "+1 (968) 459-2179"
  },
  {
    "index": 5,
    "isActive": true,
    "balance": "$2,834.30",
    "age": 40,
    "eyeColor": "brown",
    "name": "Rutledge Stein",
    "gender": "male",
    "company": "NEOCENT",
    "email": "rutledgestein@neocent.com",
    "phone": "+1 (802) 485-2503"
  }
]

for (var i = 0; i < users.length; i++) {
  if (users[i].eyeColor==="brown") {
    console.log(users[i].name)
  } else {
    console.log(users[i].company)
  }
}

