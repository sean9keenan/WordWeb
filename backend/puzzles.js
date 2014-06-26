team1    = {"name" : "Iron Patriot",
      "key": "MURICA",
      "puzzles" :
        [{"idPz": 0}, // Breakfast
        {"idPz": 1},  // Blueprints, all
        {"idPz": 2},  // Morning Rotation # 1
        // {"idPz": 14}, // Morning Rotation # 1 Item! (to alieviate routing issues slightly)
        {"idPz": 3},  // Morning Rotation # 2
        // {"idPz": 15}, // Morning Rotation # 2 Item! (to alieviate routing issues slightly)
        {"idPz": 4},  // Morning Rotation # 3
        // {"idPz": 16}, // Morning Rotation # 3 Item! (to alieviate routing issues slightly)
        {"idPz": 5},  // Morning Rotation # 4
        // {"idPz": 17}, // Morning Rotation # 4 Item! (to alieviate routing issues slightly)
        {"idPz": 6},  // All together now.
        {"idPz": 7},  // Lunch Time
        {"idPz": 8},  // Evening Rotation # 1
        {"idPz": 9},  // Evening Rotation # 2
        {"idPz": 10}, // Evening Rotation # 3
        {"idPz": 11}, // Evening Rotation # 4
        {"idPz": 12}, // All together now (Blueprints)
        {"idPz": 13}, // All together now (Final)
        ],
      "wordweb":[],
      "jarvisStream" : {},
      "wordwebUnknown":[0],
      "currentPuzzle" : 0,
      "teamNum" : 1,
      "eveningBufferIndex" : 0
      }

team2    = {"name" : "War Machine",
      "key": "WARMACHINEROX",
      "puzzles" :
        [{"idPz": 0}, // Breakfast
        {"idPz": 1},  // Blueprints, all
        {"idPz": 3},  // Morning Rotation # 2
        // {"idPz": 15}, // Morning Rotation # 2 Item! (to alieviate routing issues slightly)
        {"idPz": 4},  // Morning Rotation # 3
        // {"idPz": 16}, // Morning Rotation # 3 Item! (to alieviate routing issues slightly)
        {"idPz": 5},  // Morning Rotation # 4
        // {"idPz": 17}, // Morning Rotation # 4 Item! (to alieviate routing issues slightly)
        {"idPz": 2},  // Morning Rotation # 1
        // {"idPz": 14}, // Morning Rotation # 1 Item! (to alieviate routing issues slightly)
        {"idPz": 6},  // All together now.
        {"idPz": 7},  // Lunch Time
        {"idPz": 9},  // Evening Rotation # 2
        {"idPz": 10}, // Evening Rotation # 3
        {"idPz": 11}, // Evening Rotation # 4
        {"idPz": 8},  // Evening Rotation # 1
        {"idPz": 12}, // All together now (Blueprints)
        {"idPz": 13}, // All together now (Final)
        ],
      "wordweb":[],
      "jarvisStream" : {},
      "wordwebUnknown":[0],
      "currentPuzzle" : 0,
      "teamNum" : 2,
      "eveningBufferIndex" : 0
      }

team3    = {"name" : "Hulkbuster",
      "key": "IRONSMASH",
      "puzzles" :
        [{"idPz": 0}, // Breakfast
        {"idPz": 1},  // Blueprints, all
        {"idPz": 4},  // Morning Rotation # 3
        // {"idPz": 16}, // Morning Rotation # 3 Item! (to alieviate routing issues slightly)
        {"idPz": 5},  // Morning Rotation # 4
        // {"idPz": 17}, // Morning Rotation # 4 Item! (to alieviate routing issues slightly)
        {"idPz": 2},  // Morning Rotation # 1
        // {"idPz": 14}, // Morning Rotation # 1 Item! (to alieviate routing issues slightly)
        {"idPz": 3},  // Morning Rotation # 2
        // {"idPz": 15}, // Morning Rotation # 2 Item! (to alieviate routing issues slightly)
        {"idPz": 6},  // All together now.
        {"idPz": 7},  // Lunch Time
        {"idPz": 10}, // Evening Rotation # 3
        {"idPz": 11}, // Evening Rotation # 4
        {"idPz": 8},  // Evening Rotation # 1
        {"idPz": 9},  // Evening Rotation # 2
        {"idPz": 12}, // All together now (Blueprints)
        {"idPz": 13}, // All together now (Final)
        ],
      "wordweb":[],
      "jarvisStream" : {},
      "wordwebUnknown":[0],
      "currentPuzzle" : 0,
      "teamNum" : 3,
      "eveningBufferIndex" : 0
      }

team4    = {"name" : "Mark I",
      "key": "OLDSKOOL",
      "puzzles" :
        [{"idPz": 0}, // Breakfast
        {"idPz": 1},  // Blueprints, all
        {"idPz": 5},  // Morning Rotation # 4
        // {"idPz": 17}, // Morning Rotation # 4 Item! (to alieviate routing issues slightly)
        {"idPz": 2},  // Morning Rotation # 1
        // {"idPz": 14}, // Morning Rotation # 1 Item! (to alieviate routing issues slightly)
        {"idPz": 3},  // Morning Rotation # 2
        // {"idPz": 15}, // Morning Rotation # 2 Item! (to alieviate routing issues slightly)
        {"idPz": 4},  // Morning Rotation # 3
        // {"idPz": 16}, // Morning Rotation # 3 Item! (to alieviate routing issues slightly)
        {"idPz": 6},  // All together now.
        {"idPz": 7},  // Lunch Time
        {"idPz": 11}, // Evening Rotation # 4
        {"idPz": 8},  // Evening Rotation # 1
        {"idPz": 9},  // Evening Rotation # 2
        {"idPz": 10}, // Evening Rotation # 3
        {"idPz": 12}, // All together now (Blueprints)
        {"idPz": 13}, // All together now (Final)
        ],
      "wordweb":[],
      "jarvisStream" : {},
      "wordwebUnknown":[0],
      "currentPuzzle" : 0,
      "teamNum" : 4,
      "eveningBufferIndex" : 0
      }

allPuzzles = [{"name": "Breakfast",     //0
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      // "showInput": false,
      "endCondition" : {"websocket": "breakfastOver"},
      // "puzzIntro": {"name": "<a href='www.skeenan.com'>Something to help, take it with you.</a>",
      //         ".mp3": null,
      //         "action": null},
      "hint": [{"name": "Welcome to breakfast, relax, eat some.",
            ".mp3": null,
            "trig": {'time': 10},
            "action": null}]
       },
       {"name": "Blueprints",       //1
      "desc": "Our first Puzzle!",
      "file": "./puzzles/puzzle1",
      "estTime": 40,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "isStatPuzzle": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "wrong": "Did you really think that was the right answer?",
              "menace": true,
              "insect": true,
              "pluto": true,
              "cable": true
            },
      "puzzIntro": {"name": "Go pick up physics quizzes",
              ".mp3": null,
              "action": null},
      "hint": [{"name": "This puzzle isn't about QR codes",
            // ".mp3": "./audio/puzzle1/hint1",
            "trig": {'time': 60*10},
            "text": "I can't see what you're doing from here, but have you tried to stack them?",
            "action": null},
            {"name": "Look for letters",
            // ".mp3": "./audio/puzzle1/hint1",
            "trig": {'time': 60*15},
            "text": "I can't see what you're doing from here, but have you tried to stack them?",
            "action": null},
            {"name": "You can use an anagram solver if you want",
            // ".mp3": "./audio/puzzle1/hint1",
            "trig": {'time': 60*20},
            "text": "I can't see what you're doing from here, but have you tried to stack them?",
            "action": null}]
       },
       {"name": "The Grid",         //2
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "isStatPuzzle": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "wolverine": true},
      "puzzIntro": {"name": "We need you at the Admissions conference room",
              ".mp3": null,
              "action": null},
      "hint": [{"name": "It's a Sudoku",
            // ".mp3": "./audio/puzzle2/hint1",
            "trig": {'time': 60*20},
            "action": null},
            {"name": "Oh look, semaphore!",
            // ".mp3": "./audio/puzzle2/hint1",
            "trig": {'time': 60*25},
            "action": null},
            {"name": "You should probably look at it from the side the flags are on",
            // ".mp3": "./audio/puzzle2/hint1",
            "trig": {'time': 60*30},
            "action": null}]
       },
       {"name": "The Arc",         //3
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "isStatPuzzle": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "Colston": true},
      "puzzIntro": {"name": "Eat",
              ".mp3": null,
              "action": null},
      "hint": []
       },
       {"name": "Lasers",         //4
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "isStatPuzzle": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "nefaria": true},
      "puzzIntro": {"name": "Spalding sub-basement",
              ".mp3": null,
              "action": null},
      "hint": [{"name": "If you give me power, I can give you information",
            // ".mp3": "./audio/puzzle2/hint1",
            "trig": {'time': 60*15},
            "action": null},
            {"name": "The dates are important",
            // ".mp3": "./audio/puzzle2/hint1",
            "trig": {'time': 60*15},
            "action": null},
            {"name": "Have you tried putting them in order?",
            // ".mp3": "./audio/puzzle2/hint1",
            "trig": {'time': 60*20},
            "action": null},
            {"name": "More information about the songs is better (feel free to use Google)",
            // ".mp3": "./audio/puzzle2/hint1",
            "trig": {'time': 60*25},
            "action": null}]
       },
       {"name": "Rebus",       //5
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "isStatPuzzle": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "Harold Hogan": true},
      "puzzIntro": {"name": "Lloyd Deck",
              ".mp3": null,
              "action": null},
      "hint": [{"name": "The number of the puzzle will prove of use",
            // ".mp3": "./audio/puzzle2/hint1",
            "trig": {'time':60*10},
            "action": null},
            {"name": "index puzzle answer by puzzle number",
            // ".mp3": "./audio/puzzle2/hint1",
            "trig": {'time':60*15},
            "action": null}]
       },
       {"name": "Squares",        //6 - Last before lunch
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "overlap": true,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "allSolveTogether": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "jhammer": true},
      "puzzIntro": {"name": "Everyone meet at the BBB front patio",
              ".mp3": null,
              "action": null},
      "hint": []
       },
       {"name": "Lunch",        //7 - Lunch
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "showInput": false,
      "endCondition" : {"websocket": "lunchOver"},
      // "responses": {"": "You could try to give me something, anything before you press enter you know.",
      //         "answer": true},
      // "puzzIntro": {"name": "Eat",
      //         ".mp3": null,
      //         "action": null},
      "hint": []
       },
       {"name": "Teamwork",       //8
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "endCondition" : {"websocket": "nextAfternoonPuzzle"},
      "isAfternoon" : true,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "stop hammer time!": true
            },
      "puzzIntro": {"name": "We need you at CDC 257",
              ".mp3": null,
              "action": null},
      "hint": []
       },
       {"name": "Laserz",       //9
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "endCondition" : {"websocket": "nextAfternoonPuzzle"},
      "isAfternoon" : true,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "answer": true},
      "puzzIntro": {"name": "Moore (070 - 2)",
              ".mp3": null,
              "action": null},
      "hint": []
       },
       {"name": "The Game",       //10
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "endCondition" : {"websocket": "nextAfternoonPuzzle"},
      "isAfternoon" : true,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "YAYYYYYYYYYyYYYyY": true},
      "puzzIntro": {"name": "A projector room close to home",
              ".mp3": null,
              "action": null},
      "hint": []
       },
       {"name": "The Web",        //11
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "endCondition" : {"websocket": "nextAfternoonPuzzle"},
      "overlap": true,
      "isAfternoon" : true,
      "overlap": true,
      "isWordWeb": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "answer": true},
      "puzzIntro": {"name": "",
              ".mp3": null,
              "action": null},
      "hint": []
       },
       {"name": "Take two on Blueprints",       //12
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "allSolveTogether": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "answer": true},
      // "puzzIntro": {"name": "Eat",
      //         ".mp3": null,
      //         "action": null},
      "hint": []
       },
       {"name": "This is it",     //13
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "answer": false}, //Can't have a "correct answer" for the last puzzle, or else crash
      // "puzzIntro": {"name": "Eat",
      //         ".mp3": null,
      //         "action": null},
      "hint": []
       },
       {"name": "The Mask",             //14
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "answer": true},
      // "puzzIntro": {"name": "Eat",
      //         ".mp3": null,
      //         "action": null},
      "hint": []
       },
       {"name": "The Glove",            //15
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "answer": true},
      // "puzzIntro": {"name": "Eat",
      //         ".mp3": null,
      //         "action": null},
      "hint": []
       },
       {"name": "The Core",             //16
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "answer": true},
      // "puzzIntro": {"name": "Eat",
      //         ".mp3": null,
      //         "action": null},
      "hint": []
       },
       {"name": "The Repulsor",         //17
      "desc": "Our second Puzzle!",
      "file": "./puzzles/puzzle2",
      "estTime": 60,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "answer": true},
      // "puzzIntro": {"name": "Eat",
      //         ".mp3": null,
      //         "action": null},
      "hint": []
       }
      ]

morningBuffers = [{"name": "First Square",      //0
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "dues": true,
              "birth": true,
              "oracle": true,
              "yolk": true
            },
      "puzzIntro": {"name": "<a href='squares/1987.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Second Square",               //1
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "unix": true,
              "choose": true,
              "him": true,
              "graft": true
            },
      "puzzIntro": {"name": "<a href='squares/2631.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Another Square",               //2
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "seer": true,
              "kraft": true,
              "eunuchs": true
            },
      "puzzIntro": {"name": "<a href='squares/3237.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "The fourth",               //3
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "paced": true,
              "idle": true,
              "paws": true,
              "tea": true
            },
      "puzzIntro": {"name": "<a href='squares/4126.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Num Five.",               //4
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "bode": true,
              "idyll": true,
              "grease": true,
              "laze": true
            },
      "puzzIntro": {"name": "<a href='squares/5346.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Square six start",               //5
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "lies": true,
              "ax": true,
              "tax": true,
              "bask": true
            },
      "puzzIntro": {"name": "<a href='squares/6987.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Square 7 begin",               //6
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "ail": true,
              "tacks": true,
              "yolk": true
            },
      "puzzIntro": {"name": "<a href='squares/7123.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Eight Squares In",               //7
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "cedar": true,
              "chorale": true,
              "marquis": true
            },
      "puzzIntro": {"name": "<a href='squares/8873.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Nine lives, nine squares",               //8
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "corral": true,
              "bruise": true,
              "sics": true,
              "pair": true
            },
      "puzzIntro": {"name": "<a href='squares/9314.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Ten Four",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "oohs": true,
              "six": true,
              "quire": true,
              "stayed": true
            },
      "puzzIntro": {"name": "<a href='squares/10242.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Square 11",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "want": true,
              "few": true,
              "avricle": true
            },
      "puzzIntro": {"name": "<a href='squares/11235.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "A Dozen!",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "pride": true,
              "staid": true,
              "paste": true,
              "woe": true
            },
      "puzzIntro": {"name": "<a href='squares/12198.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Lucky 13",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "reads": true,
              "place": true,
              "whoa": true,
              "bowed": true
            },
      "puzzIntro": {"name": "<a href='squares/13124.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "14 it is",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "profit": true,
              "yule": true,
              "basque": true,
              "plaice": true
            },
      "puzzIntro": {"name": "<a href='squares/14092.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "You're at 15!",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "lichen": true,
              "you'll": true,
              "ale": true
            },
      "puzzIntro": {"name": "<a href='squares/15098.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Sweet 16",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "feeder": true,
              "cere": true,
              "sorted": true
            },
      "puzzIntro": {"name": "<a href='squares/16981.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Boring 17",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "pare": true,
              "none": true,
              "chews": true,
              "sordid": true
            },
      "puzzIntro": {"name": "<a href='squares/17092.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "Old enough to go to War(machine)",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "nun": true,
              "cache": true,
              "ooze": true,
              "wave": true
            },
      "puzzIntro": {"name": "<a href='squares/18923.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "19",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "coin": true,
              "maid": true,
              "pryed": true,
              "waive": true
            },
      "puzzIntro": {"name": "<a href='squares/19238.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },
      {"name": "20",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "plait": true,
              "made": true,
              "reeds": true,
              "lynx": true
            },
      "puzzIntro": {"name": "<a href='squares/20.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },
      {"name": "21",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "links": true,
              "prophet": true,
              "floes": true,
              "rain": true
            },
      "puzzIntro": {"name": "<a href='squares/21.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },
      {"name": "22",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "root": true,
              "reign": true,
              "liken": true
            },
      "puzzIntro": {"name": "<a href='squares/22.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },
      {"name": "23",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "phew": true,
              "crewel": true,
              "tapir": true
            },
      "puzzIntro": {"name": "<a href='squares/23.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },
      {"name": "24",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "taper": true,
              "allowed": true
            },
      "puzzIntro": {"name": "<a href='squares/24.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },
      {"name": "25",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "cents": true,
              "ewe": true
            },
      "puzzIntro": {"name": "<a href='squares/25.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "26",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "jewel": true,
              "whore": true,
              "sense": true
            },
      "puzzIntro": {"name": "<a href='squares/26.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "27",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "cyclet": true,
              "liar": true,
              "joule": true
            },
      "puzzIntro": {"name": "<a href='squares/27.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "28",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "mood": true,
              "pause": true,
              "islet": true
            },
      "puzzIntro": {"name": "<a href='squares/28.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "29",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "epoch": true,
              "phlox": true,
              "want": true
            },
      "puzzIntro": {"name": "<a href='squares/29.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "30",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "mooed": true,
              "Greece": true,
              "word": true
            },
      "puzzIntro": {"name": "<a href='squares/30.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "31",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "acts": true,
              "whirred": true,
              "palate": true
            },
      "puzzIntro": {"name": "<a href='squares/31.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "32",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "maize": true,
              "pallette": true
            },
      "puzzIntro": {"name": "<a href='squares/32.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "33",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "you": true,
              "sine": true,
              "marqaee": true
            },
      "puzzIntro": {"name": "<a href='squares/33.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "34",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "brews": true,
              "massed": true,
              "hoar": true,
              "sign": true
            },
      "puzzIntro": {"name": "<a href='squares/34.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "35",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "potpourri": true,
              "doe": true,
              "epic": true
            },
      "puzzIntro": {"name": "<a href='squares/35.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "36",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "rabbit": true,
              "rose": true,
              "popery": true
            },
      "puzzIntro": {"name": "<a href='squares/36.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       },{"name": "37",               //9
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
              "rabbet": true,
              "illicit": true
            },
      "puzzIntro": {"name": "<a href='squares/37.jpg'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       } ]

eveningBuffers = [{"name": "To Find",      //0
      "desc": "Keep you computers open to await instruction.",
      "file": "./puzzles/puzzle1",
      "estTime": 30,
      "answerResponse": {"name": "", ".mp3": null},
      "isActive": false,
      "overlap": true,
      "showInput": false,
      "endCondition" : {"websocket": "breakfastOver"},
      "puzzIntro": {"name": "<a href='www.skeenan.com'>Something to help, take it with you.</a>",
              ".mp3": null,
              "action": null},
      "hint": []
       }]

morningBufferIndex = 0

stats = {}

adminSockets = {sockets: []};

teams = [team1, team2, team3, team4];

function initTeams() {
  for (var team in teams) {
    teams[team].aboutToStart = 0;
    teams[team].sockets = [];
    for (var aPuzzle in teams[team].puzzles) {
      aPuzzle = teams[team].puzzles[aPuzzle];
      aPuzzle.puzzle = allPuzzles[aPuzzle.idPz];
      aPuzzle.startTime = null;
      aPuzzle.elapsed = null;
      aPuzzle.hints = [];
    }
    startPuzzle(teams[team])
  }
}

function reloadAllPuzzles(){
  for (var team in teams) {
    for (var aPuzzle in teams[team].puzzles) {
      aPuzzle = teams[team].puzzles[aPuzzle];
      aPuzzle.puzzle = allPuzzles[aPuzzle.idPz];
    }
  }
}

function startPuzzle(team) {
  //Init Jarvis stream
  team.jarvisStream[team.currentPuzzle] = {"name": team.puzzles[team.currentPuzzle].puzzle.name, "desc": team.puzzles[team.currentPuzzle].puzzle.desc, "data": []}
  var nextIntro = team.puzzles[team.currentPuzzle].puzzle.puzzIntro
  if (team.puzzles[team.currentPuzzle].puzzIntro){
    nextIntro = team.puzzles[team.currentPuzzle].puzzIntro
  }
  if (nextIntro){
    newJarvisMessageOut(team, nextIntro)
  }
  if (team.puzzles[team.currentPuzzle].puzzle.name === "Squares"){
    for (var i = morningBufferIndex; i < morningBuffers.length; i++) {
      newJarvisMessageOut(team, morningBuffers[i].puzzIntro)
    };
  }
  if (team.puzzles[team.currentPuzzle].puzzle.name === "Lunch"){
    morningBufferIndex = morningBuffers.length
  }
  startPuzzleTimer(team)
}

function resaveAllTeams(){
  //Save all the teams
}

function logNewStat(team, statName, value, isIncrement){
  // if (!stats[statName]){
  //   stats[statName] = {1: 0, 2: 0, 3: 0, 4: 0}
  // }
  // if (isIncrement){
  //   stats[statName][team.teamNum] += value
  // } else {
  //   stats[statName][team.teamNum] = value
  // }
  // updateAllCompetitionData()
}
function logStatsOnTime(team){
  if (team.puzzles[team.currentPuzzle].puzzle.isStatPuzzle){
    logNewStat(team, team.puzzles[team.currentPuzzle].puzzle.name + " time", Math.floor(team.puzzles[team.currentPuzzle].elapsed/60), false)
  }
}

function startNextPuzzle(team){
  logStatsOnTime(team)

  team.puzzles[team.currentPuzzle].puzzle.isActive = false

  if (team.currentPuzzle === -1) {
    team.currentPuzzle = team.lastPuzzleIndex
  }
  if (team.puzzles[team.currentPuzzle + 1].puzzle.overlap || !team.puzzles[team.currentPuzzle + 1].puzzle.isActive) {
    if (team.puzzles[team.currentPuzzle].puzzle.isWordWeb){
      emitToAllTeams(team, "bootOffWeb", true)
    }
    team.currentPuzzle ++
    team.puzzles[team.currentPuzzle].puzzle.isActive = true
  } else {
    team.lastPuzzleIndex = team.currentPuzzle
    team.currentPuzzle = -1
    team.puzzles[-1] = {}
    team.puzzles[-1].puzzle = getNextBuffer(team)
  }
  startPuzzle(team)
}

function getNextBuffer(team){
  if (morningBufferIndex < morningBuffers.length){
    logNewStat(team, "Pieces Found", 1, true)
    output = morningBuffers[morningBufferIndex]
    morningBufferIndex ++
    return output
  } else {
    // I'm just going to assume that we're in the afternoon
    // if (team.eveningBufferIndex < eveningBuffers.length){
    //   output = eveningBuffers[team.eveningBufferIndex]
    //   team.eveningBufferIndex ++
    //   return output
    // } else {
    return {"name": "Error finding next puzzle. Let's say SEGFAULT",
      "responses": {"": "You could try to give me something, anything before you press enter you know.",
            "answer": true}}
    // }
  }
}

function startPuzzleTimer(team){
  if (team.timer == null){
    team.puzzles[team.currentPuzzle].elapsed = 0;
    team.timer = function(){
      if (typeof this.puzzles[this.currentPuzzle].elapsed === 'undefined'){
        return;
      }
      this.puzzles[this.currentPuzzle].elapsed ++;
      emitToAllTeams(this, 'tick', {'elapsed' : this.puzzles[this.currentPuzzle].elapsed})
      checkPuzzTimerHints(this);
    }
    var myVar=setInterval(function(){team.timer()},1000);
  }
  team.puzzles[team.currentPuzzle].start
}

function checkPuzzTimerHints(team){
  var outHint = null;
  var puzzHints = allPuzzles[team.currentPuzzle].hint;
  // var outHintIndex = 0;
  var isUpdated = false;
  for (var hint in puzzHints){
    if (puzzHints[hint].trig.time != null &&
        puzzHints[hint].trig.time == team.puzzles[team.currentPuzzle].elapsed) {
      outHint = puzzHints[hint];
      isUpdated = true;
      // isUpdated = (isUpdated || (hint != oldHints[outHintIndex]));
      // outHintIndex ++;
    }
  }
  if (isUpdated){
    newJarvisMessageOut(team, outHint)
  }
}

function sendAllPuzzleData(team){
  //TODO: Send all relevant puzzle data, how do we make sure client only
  // renders the most recent hint?
  var puzzleOut = constructAllPuzzleData(team);
  emitToAllTeams(team, 'jarvisUpdate', puzzleOut)
  emitToAllTeams(adminSockets, 'jarvisUpdate', puzzleOut)
}

function constructAllPuzzleData(team){
  out = {};
  out.name = team.name
  out.currentPuzzle = team.currentPuzzle
  out.currentPuzzleName = team.puzzles[team.currentPuzzle].puzzle.name
  out.jarvisStream = team.jarvisStream
  out.teamNum = team.teamNum
  out.showInput = team.puzzles[team.currentPuzzle].puzzle.showInput
  out.stats = stats
  return out
}

function updateAllCompetitionData(){
  try{
    var puzzleOut = {}
    for (team in teams){
      team = teams[team]
      puzzleOut = constructAllPuzzleData(team);
      emitToAllTeams(team, 'compUpdate', puzzleOut)
    }
    emitToAllTeams(adminSockets, 'jarvisUpdate', puzzleOut)
  } catch (err) {
    console.log(err)
  }
}


function newJarvisMessageOut(team, message){
    team.jarvisStream[team.currentPuzzle].data.push(message);
    // TODO: Persist!
    sendAllPuzzleData(team);
    emitToAllTeams(team, 'jarvisMessage', message)
}


if (teams[0].sockets == null) {
  initTeams()
}
reloadAllPuzzles();

module.exports.teams = teams;
module.exports.allPuzzles = allPuzzles;
module.exports.reloadAllPuzzles = reloadAllPuzzles;
module.exports.resaveAllTeams = resaveAllTeams;
module.exports.startPuzzle = startPuzzle;
module.exports.startNextPuzzle = startNextPuzzle;
module.exports.sendAllPuzzleData = sendAllPuzzleData;
module.exports.emitToAllTeams = emitToAllTeams;
module.exports.constructAllPuzzleData = constructAllPuzzleData;
module.exports.adminSockets = adminSockets;
module.exports.newJarvisMessageOut = newJarvisMessageOut;
module.exports.stats = stats;
module.exports.logNewStat = logNewStat;
