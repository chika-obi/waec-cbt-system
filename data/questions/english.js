const englishQuestions = [
  {
    "id": 1,
    "question": "Choose the correct plural form of 'child'.",
    "options": ["Childs", "Children", "Childes", "Childrens"],
    "answer": "Children"
  },
  {
    "id": 2,
    "question": "Choose the correct sentence.",
    "options": [
      "He don’t like rice.",
      "He doesn’t likes rice.",
      "He doesn’t like rice.",
      "He don’t likes rice."
    ],
    "answer": "He doesn’t like rice."
  },
  {
    "id": 3,
    "question": "What is the opposite of 'brave'?",
    "options": ["Bold", "Cowardly", "Strong", "Fearless"],
    "answer": "Cowardly"
  },
  {
    "id": 4,
    "question": "Choose the correct spelling.",
    "options": ["Recieve", "Receive", "Receeve", "Receve"],
    "answer": "Receive"
  },
  {
    "id": 5,
    "question": "He arrived ___ the airport early.",
    "options": ["in", "on", "at", "by"],
    "answer": "at"
  },
  {
    "id": 6,
    "question": "Which of the following is a noun?",
    "options": ["Run", "Quickly", "Happiness", "Beautiful"],
    "answer": "Happiness"
  },
  {
    "id": 7,
    "question": "Choose the correct tense: She ___ to school every day.",
    "options": ["go", "going", "goes", "gone"],
    "answer": "goes"
  },
  {
    "id": 8,
    "question": "Which word is an adjective?",
    "options": ["Teacher", "Teach", "Teaching", "Intelligent"],
    "answer": "Intelligent"
  },
  {
    "id": 9,
    "question": "Choose the synonym of 'begin'.",
    "options": ["End", "Stop", "Start", "Finish"],
    "answer": "Start"
  },
  {
    "id": 10,
    "question": "Which of these is a verb?",
    "options": ["Table", "Chair", "Run", "Book"],
    "answer": "Run"
  },
  {
    "id": 11,
    "question": "The teacher asked ___ to submit our books.",
    "options": ["we", "us", "our", "ours"],
    "answer": "us"
  },
  {
    "id": 12,
    "question": "Choose the correct question tag: He is coming, ___?",
    "options": ["is he", "isn't he", "isn't it", "does he"],
    "answer": "isn't he"
  },
  {
    "id": 13,
    "question": "Which punctuation mark ends a question?",
    "options": ["Full stop", "Comma", "Question mark", "Colon"],
    "answer": "Question mark"
  },
  {
    "id": 14,
    "question": "Choose the correct word: She speaks ___ than her sister.",
    "options": ["loud", "louder", "loudest", "loudly"],
    "answer": "louder"
  },
  {
    "id": 15,
    "question": "Which word is a pronoun?",
    "options": ["John", "School", "They", "Teacher"],
    "answer": "They"
  },
  {
    "id": 16,
    "question": "Choose the antonym of 'rich'.",
    "options": ["Wealthy", "Prosperous", "Poor", "Lucky"],
    "answer": "Poor"
  },
  {
    "id": 17,
    "question": "The boy ___ the ball yesterday.",
    "options": ["kick", "kicks", "kicked", "kicking"],
    "answer": "kicked"
  },
  {
    "id": 18,
    "question": "Which of these is an adverb?",
    "options": ["Slow", "Slowness", "Slowly", "Slower"],
    "answer": "Slowly"
  },
  {
    "id": 19,
    "question": "Choose the correct spelling.",
    "options": ["Enviroment", "Environment", "Environmant", "Environement"],
    "answer": "Environment"
  },
  {
    "id": 20,
    "question": "What is the plural of 'mouse'?",
    "options": ["Mouses", "Mice", "Mousees", "Micess"],
    "answer": "Mice"
  },
  {
    "id": 21,
    "question": "Choose the correct word: I am good ___ mathematics.",
    "options": ["in", "on", "at", "with"],
    "answer": "at"
  },
  {
    "id": 22,
    "question": "Which of these is a conjunction?",
    "options": ["And", "Very", "Quick", "Because of"],
    "answer": "And"
  },
  {
    "id": 23,
    "question": "She bought ___ umbrella because it was raining.",
    "options": ["a", "an", "the", "some"],
    "answer": "an"
  },
  {
    "id": 24,
    "question": "Choose the correct sentence.",
    "options": [
      "She did not went home.",
      "She did not goes home.",
      "She did not go home.",
      "She did not going home."
    ],
    "answer": "She did not go home."
  },
  {
    "id": 25,
    "question": "Which word is correctly capitalized?",
    "options": ["nigeria", "Nigeria", "NIGERIA", "nIgeria"],
    "answer": "Nigeria"
  },
  {
    "id": 26,
    "question": "Choose the synonym of 'happy'.",
    "options": ["Sad", "Angry", "Joyful", "Tired"],
    "answer": "Joyful"
  },
  {
    "id": 27,
    "question": "The opposite of 'early' is?",
    "options": ["Soon", "Late", "Fast", "Quick"],
    "answer": "Late"
  },
  {
    "id": 28,
    "question": "Which of these is an interjection?",
    "options": ["Wow!", "Run", "Because", "Slowly"],
    "answer": "Wow!"
  },
  {
    "id": 29,
    "question": "Choose the correct word: The book belongs to ___.",
    "options": ["him", "he", "his", "himself"],
    "answer": "him"
  },
  {
    "id": 30,
    "question": "Which word means the same as 'assist'?",
    "options": ["Help", "Stop", "Delay", "Refuse"],
    "answer": "Help"
  },
  {
    "id": 31,
    "question": "She has ___ her assignment.",
    "options": ["finish", "finishing", "finished", "finishes"],
    "answer": "finished"
  },
  {
    "id": 32,
    "question": "Choose the correct plural of 'knife'.",
    "options": ["Knifes", "Knives", "Knifees", "Knivs"],
    "answer": "Knives"
  },
  {
    "id": 33,
    "question": "Which word is a preposition?",
    "options": ["Under", "Run", "Fast", "Happy"],
    "answer": "Under"
  },
  {
    "id": 34,
    "question": "Choose the correct spelling.",
    "options": ["Definately", "Definitely", "Definetely", "Definatelyy"],
    "answer": "Definitely"
  },
  {
    "id": 35,
    "question": "The teacher, as well as the students, ___ present.",
    "options": ["are", "were", "is", "have"],
    "answer": "is"
  },
  {
    "id": 36,
    "question": "Choose the antonym of 'accept'.",
    "options": ["Admit", "Refuse", "Agree", "Allow"],
    "answer": "Refuse"
  },
  {
    "id": 37,
    "question": "Which of these is a collective noun?",
    "options": ["Team", "Player", "Run", "Fast"],
    "answer": "Team"
  },
  {
    "id": 38,
    "question": "He speaks English ___ than I do.",
    "options": ["good", "better", "best", "well"],
    "answer": "better"
  },
  {
    "id": 39,
    "question": "Choose the correct word: The sun ___ in the east.",
    "options": ["rise", "rising", "rises", "rose"],
    "answer": "rises"
  },
  {
    "id": 40,
    "question": "Which sentence is in the future tense?",
    "options": [
      "I eat rice.",
      "I ate rice.",
      "I am eating rice.",
      "I will eat rice."
    ],
    "answer": "I will eat rice."
  },
  {
    "id": 41,
    "question": "Choose the correct plural of 'tooth'.",
    "options": ["Tooths", "Teeth", "Toothes", "Teet"],
    "answer": "Teeth"
  },
  {
    "id": 42,
    "question": "Which word is an abstract noun?",
    "options": ["Table", "Chair", "Honesty", "Pen"],
    "answer": "Honesty"
  },
  {
    "id": 43,
    "question": "Choose the correct word: She is afraid ___ dogs.",
    "options": ["of", "from", "with", "about"],
    "answer": "of"
  },
  {
    "id": 44,
    "question": "Which of these is a countable noun?",
    "options": ["Water", "Rice", "Book", "Sugar"],
    "answer": "Book"
  },
  {
    "id": 45,
    "question": "Choose the synonym of 'angry'.",
    "options": ["Happy", "Furious", "Calm", "Gentle"],
    "answer": "Furious"
  },
  {
    "id": 46,
    "question": "The boy ___ playing football now.",
    "options": ["is", "are", "was", "were"],
    "answer": "is"
  },
  {
    "id": 47,
    "question": "Which of these is a declarative sentence?",
    "options": [
      "Close the door!",
      "What is your name?",
      "I like English.",
      "Wow!"
    ],
    "answer": "I like English."
  },
  {
    "id": 48,
    "question": "Choose the correct spelling.",
    "options": ["Occassion", "Occasion", "Occassionn", "Ocassion"],
    "answer": "Occasion"
  },
  {
    "id": 49,
    "question": "Which word completes the sentence: He is ___ honest man.",
    "options": ["a", "an", "the", "some"],
    "answer": "an"
  },
  {
    "id": 50,
    "question": "Choose the correct antonym of 'victory'.",
    "options": ["Success", "Win", "Defeat", "Joy"],
    "answer": "Defeat"
  }
]
