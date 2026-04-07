const differentQuestionSet = [
    // Set 1.
    [
        {
            Question: 'What is the capital of China?',
            Answer: [
                { text: 'Paris', correct: false },
                { text: 'WashingTone', correct: false },
                { text: 'Delhi', correct: false },
                { text: 'Begin', correct: true },
            ]
        },
        {
            Question: 'What is the nearest planet of Earth?',
            Answer: [
                { text: 'Jupiter', correct: false },
                { text: 'Venus', correct: true },
                { text: "Mars", correct: false },
                { text: "Neptune", correct: false },

            ]
        },
        {
            Question: 'who is the first Prim Minister of India?',
            Answer: [
                { text: 'Modi', correct: false },
                { text: 'Mahatma Gandhi', correct: false },
                { text: 'Jaharlal Neheru', correct: true },
                { text: 'Monmohan Singh', correct: false },
            ]
        },
        {
            Question: 'What is the largest Ocean on Earth?',
            Answer: [
                { text: 'Pacific', correct: true },
                { text: 'Atlantic', correct: false },
                { text: 'Indian_Sea', correct: false },
                { text: 'Arctic', correct: false }
            ]
        },
        {
            Question: 'Which this is not a programming Language?',
            Answer: [
                { text: 'java', correct: false },
                { text: 'Html', correct: true },
                { text: 'javascript', correct: false },
                { text: 'C', correct: false },
            ]
        },

    ],
    //set 2.
    [
        {
            Question: 'which is not a Green-House gas?',
            Answer: [
                { text: 'co2', correct: false },
                { text: 'CFC', correct: false },
                { text: 'N2', correct: true },
                { text: 'CO', correct: false },
            ]
        },
        {
            Question: 'what is the largest mammal in the Earth?',
            Answer: [
                { text: 'Man', correct: false },
                { text: 'Shark', correct: false },
                { text: 'Elephant', correct: false },
                { text: 'Whale', correct: true },
            ]
        },
        {
            Question: 'which color has the most frequency ? ',
            Answer: [
                { text: 'red', correct: false },
                { text: 'orange', correct: false },
                { text: 'violet', correct: true },
                { text: 'Yellow', correct: false },
            ]
        },
        {
            Question: 'who is the finance Minister of India?',
            Answer: [
                { text: 'Yogi', correct: false },
                { text: 'Mamata', correct: false },
                { text: 'Nitish', correct: false },
                { text: 'Nirmal Tie', correct: true },
            ]
        },
        {
            Question: 'After YouvRaj Singh, who is the next player hit 6 sixes in an over?',
            Answer: [
                { text: 'ABD', correct: false },
                { text: 'Krish Gayle', correct: false },
                { text: 'Kiran Pollard', correct: true },
                { text: 'Sanju Samson', correct: false },
            ]
        }
    ],

// set 3
    [
        {
            Question: 'What is the capital of China?',
            Answer: [
                { text: 'Paris', correct: false },
                { text: 'Washington', correct: false },
                { text: 'Delhi', correct: false },
                { text: 'Beijing', correct: true },
            ]
        },
        {
            Question: 'What is the nearest planet to Earth?',
            Answer: [
                { text: 'Jupiter', correct: false },
                { text: 'Venus', correct: true },
                { text: 'Mars', correct: false },
                { text: 'Neptune', correct: false },
            ]
        },
        {
            Question: 'Who was the first Prime Minister of India?',
            Answer: [
                { text: 'Modi', correct: false },
                { text: 'Mahatma Gandhi', correct: false },
                { text: 'Jawaharlal Nehru', correct: true },
                { text: 'Manmohan Singh', correct: false },
            ]
        },
        {
            Question: 'What is the largest ocean on Earth?',
            Answer: [
                { text: 'Pacific', correct: true },
                { text: 'Atlantic', correct: false },
                { text: 'Indian', correct: false },
                { text: 'Arctic', correct: false },
            ]
        },
        {
            Question: 'Which of these is NOT a programming language?',
            Answer: [
                { text: 'Java', correct: false },
                { text: 'HTML', correct: true },
                { text: 'JavaScript', correct: false },
                { text: 'C', correct: false },
            ]
        },
    ],

    // Set 4 - Science & Environment
    [
        {
            Question: 'Which is NOT a greenhouse gas?',
            Answer: [
                { text: 'CO2', correct: false },
                { text: 'CFC', correct: false },
                { text: 'N2', correct: true },
                { text: 'CO', correct: false },
            ]
        },
        {
            Question: 'What is the largest mammal on Earth?',
            Answer: [
                { text: 'Elephant', correct: false },
                { text: 'Shark', correct: false },
                { text: 'Giraffe', correct: false },
                { text: 'Blue Whale', correct: true },
            ]
        },
        {
            Question: 'Which color of light has the highest frequency?',
            Answer: [
                { text: 'Red', correct: false },
                { text: 'Orange', correct: false },
                { text: 'Violet', correct: true },
                { text: 'Yellow', correct: false },
            ]
        },
        {
            Question: 'Who is the Finance Minister of India (2024)?',
            Answer: [
                { text: 'Yogi Adityanath', correct: false },
                { text: 'Mamata Banerjee', correct: false },
                { text: 'Nitish Kumar', correct: false },
                { text: 'Nirmala Sitharaman', correct: true },
            ]
        },
        {
            Question: 'After Yuvraj Singh, who hit 6 sixes in an over in international cricket?',
            Answer: [
                { text: 'AB de Villiers', correct: false },
                { text: 'Chris Gayle', correct: false },
                { text: 'Kieron Pollard', correct: true },
                { text: 'Sanju Samson', correct: false },
            ]
        },
    ],

    // Set 5 - History
    [
        {
            Question: 'Who was the first President of the United States?',
            Answer: [
                { text: 'Abraham Lincoln', correct: false },
                { text: 'George Washington', correct: true },
                { text: 'Thomas Jefferson', correct: false },
                { text: 'John Adams', correct: false },
            ]
        },
        {
            Question: 'In which year did World War II end?',
            Answer: [
                { text: '1943', correct: false },
                { text: '1944', correct: false },
                { text: '1945', correct: true },
                { text: '1946', correct: false },
            ]
        },
        {
            Question: 'Who discovered penicillin?',
            Answer: [
                { text: 'Marie Curie', correct: false },
                { text: 'Louis Pasteur', correct: false },
                { text: 'Alexander Fleming', correct: true },
                { text: 'Isaac Newton', correct: false },
            ]
        },
        {
            Question: 'Which country was the first to land a man on the Moon?',
            Answer: [
                { text: 'Russia', correct: false },
                { text: 'China', correct: false },
                { text: 'USA', correct: true },
                { text: 'UK', correct: false },
            ]
        },
        {
            Question: 'The French Revolution began in which year?',
            Answer: [
                { text: '1776', correct: false },
                { text: '1789', correct: true },
                { text: '1800', correct: false },
                { text: '1815', correct: false },
            ]
        },
    ],

    // Set 6 - Geography
    [
        {
            Question: 'What is the longest river in the world?',
            Answer: [
                { text: 'Amazon', correct: false },
                { text: 'Yangtze', correct: false },
                { text: 'Nile', correct: true },
                { text: 'Mississippi', correct: false },
            ]
        },
        {
            Question: 'Which is the smallest country in the world?',
            Answer: [
                { text: 'Monaco', correct: false },
                { text: 'San Marino', correct: false },
                { text: 'Vatican City', correct: true },
                { text: 'Liechtenstein', correct: false },
            ]
        },
        {
            Question: 'Mount Everest is located in which mountain range?',
            Answer: [
                { text: 'Alps', correct: false },
                { text: 'Andes', correct: false },
                { text: 'Rockies', correct: false },
                { text: 'Himalayas', correct: true },
            ]
        },
        {
            Question: 'Which continent is the Sahara desert located in?',
            Answer: [
                { text: 'Asia', correct: false },
                { text: 'South America', correct: false },
                { text: 'Africa', correct: true },
                { text: 'Australia', correct: false },
            ]
        },
        {
            Question: 'What is the capital of Australia?',
            Answer: [
                { text: 'Sydney', correct: false },
                { text: 'Melbourne', correct: false },
                { text: 'Brisbane', correct: false },
                { text: 'Canberra', correct: true },
            ]
        },
    ],

    // Set 7 - Science
    [
        {
            Question: 'What is the chemical symbol for gold?',
            Answer: [
                { text: 'Go', correct: false },
                { text: 'Gd', correct: false },
                { text: 'Au', correct: true },
                { text: 'Ag', correct: false },
            ]
        },
        {
            Question: 'How many bones are in the adult human body?',
            Answer: [
                { text: '196', correct: false },
                { text: '206', correct: true },
                { text: '216', correct: false },
                { text: '226', correct: false },
            ]
        },
        {
            Question: 'What planet is known as the Red Planet?',
            Answer: [
                { text: 'Jupiter', correct: false },
                { text: 'Saturn', correct: false },
                { text: 'Mars', correct: true },
                { text: 'Venus', correct: false },
            ]
        },
        {
            Question: 'What is the speed of light (approx) in km/s?',
            Answer: [
                { text: '100,000', correct: false },
                { text: '200,000', correct: false },
                { text: '300,000', correct: true },
                { text: '400,000', correct: false },
            ]
        },
        {
            Question: 'Which gas do plants absorb from the atmosphere?',
            Answer: [
                { text: 'Oxygen', correct: false },
                { text: 'Nitrogen', correct: false },
                { text: 'Carbon Dioxide', correct: true },
                { text: 'Hydrogen', correct: false },
            ]
        },
    ],

    // Set 8 - Technology
    [
        {
            Question: 'Who is the founder of Microsoft?',
            Answer: [
                { text: 'Steve Jobs', correct: false },
                { text: 'Elon Musk', correct: false },
                { text: 'Bill Gates', correct: true },
                { text: 'Mark Zuckerberg', correct: false },
            ]
        },
        {
            Question: 'What does CPU stand for?',
            Answer: [
                { text: 'Central Processing Unit', correct: true },
                { text: 'Computer Processing Unit', correct: false },
                { text: 'Central Program Utility', correct: false },
                { text: 'Core Processing Unit', correct: false },
            ]
        },
        {
            Question: 'Which company developed the Android operating system?',
            Answer: [
                { text: 'Apple', correct: false },
                { text: 'Microsoft', correct: false },
                { text: 'Google', correct: true },
                { text: 'Samsung', correct: false },
            ]
        },
        {
            Question: 'What does HTML stand for?',
            Answer: [
                { text: 'Hyper Text Markup Language', correct: true },
                { text: 'High Text Markup Language', correct: false },
                { text: 'Hyper Transfer Markup Language', correct: false },
                { text: 'Hyper Text Machine Language', correct: false },
            ]
        },
        {
            Question: 'Which data structure uses LIFO (Last In First Out)?',
            Answer: [
                { text: 'Queue', correct: false },
                { text: 'Array', correct: false },
                { text: 'Stack', correct: true },
                { text: 'Linked List', correct: false },
            ]
        },
    ],

    // Set 9 - Sports
    [
        {
            Question: 'How many players are there in a cricket team?',
            Answer: [
                { text: '9', correct: false },
                { text: '10', correct: false },
                { text: '11', correct: true },
                { text: '12', correct: false },
            ]
        },
        {
            Question: 'Which country has won the most FIFA World Cup titles?',
            Answer: [
                { text: 'Germany', correct: false },
                { text: 'Argentina', correct: false },
                { text: 'Italy', correct: false },
                { text: 'Brazil', correct: true },
            ]
        },
        {
            Question: 'The Olympic Games are held every how many years?',
            Answer: [
                { text: '2 years', correct: false },
                { text: '3 years', correct: false },
                { text: '4 years', correct: true },
                { text: '5 years', correct: false },
            ]
        },
        {
            Question: 'In which sport is the term "Grand Slam" used?',
            Answer: [
                { text: 'Cricket', correct: false },
                { text: 'Tennis', correct: true },
                { text: 'Football', correct: false },
                { text: 'Basketball', correct: false },
            ]
        },
        {
            Question: 'Who holds the world record for 100m sprint?',
            Answer: [
                { text: 'Carl Lewis', correct: false },
                { text: 'Justin Gatlin', correct: false },
                { text: 'Usain Bolt', correct: true },
                { text: 'Asafa Powell', correct: false },
            ]
        },
    ],

    // Set 10 - Indian History
    [
        {
            Question: 'Who gave the slogan "Do or Die"?',
            Answer: [
                { text: 'Nehru', correct: false },
                { text: 'Subhas Chandra Bose', correct: false },
                { text: 'Mahatma Gandhi', correct: true },
                { text: 'Bhagat Singh', correct: false },
            ]
        },
        {
            Question: 'In which year did India gain independence?',
            Answer: [
                { text: '1945', correct: false },
                { text: '1946', correct: false },
                { text: '1947', correct: true },
                { text: '1948', correct: false },
            ]
        },
        {
            Question: 'Who was the first President of India?',
            Answer: [
                { text: 'Jawaharlal Nehru', correct: false },
                { text: 'Sardar Patel', correct: false },
                { text: 'Rajendra Prasad', correct: true },
                { text: 'S. Radhakrishnan', correct: false },
            ]
        },
        {
            Question: 'The Battle of Plassey was fought in which year?',
            Answer: [
                { text: '1747', correct: false },
                { text: '1757', correct: true },
                { text: '1767', correct: false },
                { text: '1777', correct: false },
            ]
        },
        {
            Question: 'Which movement was launched by Gandhi in 1930?',
            Answer: [
                { text: 'Non-Cooperation Movement', correct: false },
                { text: 'Quit India Movement', correct: false },
                { text: 'Salt March', correct: true },
                { text: 'Swadeshi Movement', correct: false },
            ]
        },
    ],

    // Set 11 - Mathematics
    [
        {
            Question: 'What is the value of Pi (approx)?',
            Answer: [
                { text: '3.14', correct: true },
                { text: '3.41', correct: false },
                { text: '3.12', correct: false },
                { text: '3.16', correct: false },
            ]
        },
        {
            Question: 'What is the square root of 144?',
            Answer: [
                { text: '11', correct: false },
                { text: '12', correct: true },
                { text: '13', correct: false },
                { text: '14', correct: false },
            ]
        },
        {
            Question: 'What is 15% of 200?',
            Answer: [
                { text: '25', correct: false },
                { text: '30', correct: true },
                { text: '35', correct: false },
                { text: '40', correct: false },
            ]
        },
        {
            Question: 'How many sides does a hexagon have?',
            Answer: [
                { text: '5', correct: false },
                { text: '6', correct: true },
                { text: '7', correct: false },
                { text: '8', correct: false },
            ]
        },
        {
            Question: 'What is the sum of angles in a triangle?',
            Answer: [
                { text: '90°', correct: false },
                { text: '180°', correct: true },
                { text: '270°', correct: false },
                { text: '360°', correct: false },
            ]
        },
    ],

    // Set 12 - Animals
    [
        {
            Question: 'Which animal is known as the Ship of the Desert?',
            Answer: [
                { text: 'Horse', correct: false },
                { text: 'Donkey', correct: false },
                { text: 'Camel', correct: true },
                { text: 'Elephant', correct: false },
            ]
        },
        {
            Question: 'Which is the fastest land animal?',
            Answer: [
                { text: 'Lion', correct: false },
                { text: 'Horse', correct: false },
                { text: 'Cheetah', correct: true },
                { text: 'Leopard', correct: false },
            ]
        },
        {
            Question: 'What is a group of lions called?',
            Answer: [
                { text: 'Herd', correct: false },
                { text: 'Pack', correct: false },
                { text: 'Pride', correct: true },
                { text: 'Flock', correct: false },
            ]
        },
        {
            Question: 'Which bird cannot fly?',
            Answer: [
                { text: 'Parrot', correct: false },
                { text: 'Eagle', correct: false },
                { text: 'Ostrich', correct: true },
                { text: 'Sparrow', correct: false },
            ]
        },
        {
            Question: 'How many hearts does an octopus have?',
            Answer: [
                { text: '1', correct: false },
                { text: '2', correct: false },
                { text: '3', correct: true },
                { text: '4', correct: false },
            ]
        },
    ],

    // Set 13 - World Capitals
    [
        {
            Question: 'What is the capital of Japan?',
            Answer: [
                { text: 'Osaka', correct: false },
                { text: 'Kyoto', correct: false },
                { text: 'Tokyo', correct: true },
                { text: 'Hiroshima', correct: false },
            ]
        },
        {
            Question: 'What is the capital of Brazil?',
            Answer: [
                { text: 'Rio de Janeiro', correct: false },
                { text: 'São Paulo', correct: false },
                { text: 'Brasília', correct: true },
                { text: 'Salvador', correct: false },
            ]
        },
        {
            Question: 'What is the capital of Canada?',
            Answer: [
                { text: 'Toronto', correct: false },
                { text: 'Vancouver', correct: false },
                { text: 'Montreal', correct: false },
                { text: 'Ottawa', correct: true },
            ]
        },
        {
            Question: 'What is the capital of Egypt?',
            Answer: [
                { text: 'Alexandria', correct: false },
                { text: 'Luxor', correct: false },
                { text: 'Cairo', correct: true },
                { text: 'Giza', correct: false },
            ]
        },
        {
            Question: 'What is the capital of South Korea?',
            Answer: [
                { text: 'Busan', correct: false },
                { text: 'Incheon', correct: false },
                { text: 'Seoul', correct: true },
                { text: 'Daegu', correct: false },
            ]
        },
    ],

    // Set 14 - Human Body
    [
        {
            Question: 'Which organ pumps blood in the human body?',
            Answer: [
                { text: 'Lungs', correct: false },
                { text: 'Liver', correct: false },
                { text: 'Heart', correct: true },
                { text: 'Kidney', correct: false },
            ]
        },
        {
            Question: 'Which is the largest organ in the human body?',
            Answer: [
                { text: 'Liver', correct: false },
                { text: 'Brain', correct: false },
                { text: 'Skin', correct: true },
                { text: 'Lungs', correct: false },
            ]
        },
        {
            Question: 'How many chromosomes does a normal human cell have?',
            Answer: [
                { text: '23', correct: false },
                { text: '44', correct: false },
                { text: '46', correct: true },
                { text: '48', correct: false },
            ]
        },
        {
            Question: 'Which vitamin is produced when skin is exposed to sunlight?',
            Answer: [
                { text: 'Vitamin A', correct: false },
                { text: 'Vitamin B', correct: false },
                { text: 'Vitamin C', correct: false },
                { text: 'Vitamin D', correct: true },
            ]
        },
        {
            Question: 'What is the hardest substance in the human body?',
            Answer: [
                { text: 'Bone', correct: false },
                { text: 'Nail', correct: false },
                { text: 'Tooth enamel', correct: true },
                { text: 'Cartilage', correct: false },
            ]
        },
    ],

    // Set 15 - Literature & Language
    [
        {
            Question: 'Who wrote "Romeo and Juliet"?',
            Answer: [
                { text: 'Charles Dickens', correct: false },
                { text: 'William Shakespeare', correct: true },
                { text: 'Jane Austen', correct: false },
                { text: 'Leo Tolstoy', correct: false },
            ]
        },
        {
            Question: 'In which language was the Ramayana originally written?',
            Answer: [
                { text: 'Hindi', correct: false },
                { text: 'Tamil', correct: false },
                { text: 'Sanskrit', correct: true },
                { text: 'Bengali', correct: false },
            ]
        },
        {
            Question: 'How many letters are in the English alphabet?',
            Answer: [
                { text: '24', correct: false },
                { text: '25', correct: false },
                { text: '26', correct: true },
                { text: '27', correct: false },
            ]
        },
        {
            Question: 'Who wrote "Harry Potter"?',
            Answer: [
                { text: 'Roald Dahl', correct: false },
                { text: 'J.K. Rowling', correct: true },
                { text: 'C.S. Lewis', correct: false },
                { text: 'Tolkien', correct: false },
            ]
        },
        {
            Question: 'What is a synonym for "happy"?',
            Answer: [
                { text: 'Sad', correct: false },
                { text: 'Angry', correct: false },
                { text: 'Joyful', correct: true },
                { text: 'Tired', correct: false },
            ]
        },
    ],

    // Set 16 - Space & Astronomy
    [
        {
            Question: 'How many planets are in our Solar System?',
            Answer: [
                { text: '7', correct: false },
                { text: '8', correct: true },
                { text: '9', correct: false },
                { text: '10', correct: false },
            ]
        },
        {
            Question: 'What is the largest planet in our Solar System?',
            Answer: [
                { text: 'Saturn', correct: false },
                { text: 'Neptune', correct: false },
                { text: 'Jupiter', correct: true },
                { text: 'Uranus', correct: false },
            ]
        },
        {
            Question: 'Which space agency launched the first satellite, Sputnik?',
            Answer: [
                { text: 'NASA', correct: false },
                { text: 'ISRO', correct: false },
                { text: 'ESA', correct: false },
                { text: 'Soviet Union (USSR)', correct: true },
            ]
        },
        {
            Question: 'What is a light year a measure of?',
            Answer: [
                { text: 'Time', correct: false },
                { text: 'Speed', correct: false },
                { text: 'Distance', correct: true },
                { text: 'Weight', correct: false },
            ]
        },
        {
            Question: 'Which planet has the most moons?',
            Answer: [
                { text: 'Jupiter', correct: false },
                { text: 'Saturn', correct: true },
                { text: 'Uranus', correct: false },
                { text: 'Neptune', correct: false },
            ]
        },
    ],

    // Set 17 - Indian Culture
    [
        {
            Question: 'Which dance form is associated with Tamil Nadu?',
            Answer: [
                { text: 'Kathak', correct: false },
                { text: 'Odissi', correct: false },
                { text: 'Bharatanatyam', correct: true },
                { text: 'Manipuri', correct: false },
            ]
        },
        {
            Question: 'What is the national animal of India?',
            Answer: [
                { text: 'Lion', correct: false },
                { text: 'Elephant', correct: false },
                { text: 'Bengal Tiger', correct: true },
                { text: 'Leopard', correct: false },
            ]
        },
        {
            Question: 'Diwali is the festival of?',
            Answer: [
                { text: 'Colors', correct: false },
                { text: 'Lights', correct: true },
                { text: 'Harvest', correct: false },
                { text: 'Water', correct: false },
            ]
        },
        {
            Question: 'Which instrument does Ravi Shankar play?',
            Answer: [
                { text: 'Tabla', correct: false },
                { text: 'Flute', correct: false },
                { text: 'Sitar', correct: true },
                { text: 'Sarod', correct: false },
            ]
        },
        {
            Question: 'Who wrote the Indian national anthem "Jana Gana Mana"?',
            Answer: [
                { text: 'Bankim Chandra', correct: false },
                { text: 'Sarojini Naidu', correct: false },
                { text: 'Rabindranath Tagore', correct: true },
                { text: 'Mahatma Gandhi', correct: false },
            ]
        },
    ],

    // Set 18 - Chemistry
    [
        {
            Question: 'What is the most abundant gas in Earth\'s atmosphere?',
            Answer: [
                { text: 'Oxygen', correct: false },
                { text: 'Carbon Dioxide', correct: false },
                { text: 'Nitrogen', correct: true },
                { text: 'Argon', correct: false },
            ]
        },
        {
            Question: 'What is the chemical formula for water?',
            Answer: [
                { text: 'H2O2', correct: false },
                { text: 'HO2', correct: false },
                { text: 'H2O', correct: true },
                { text: 'H3O', correct: false },
            ]
        },
        {
            Question: 'What is the pH value of pure water?',
            Answer: [
                { text: '5', correct: false },
                { text: '6', correct: false },
                { text: '7', correct: true },
                { text: '8', correct: false },
            ]
        },
        {
            Question: 'Which element has the atomic number 1?',
            Answer: [
                { text: 'Helium', correct: false },
                { text: 'Carbon', correct: false },
                { text: 'Hydrogen', correct: true },
                { text: 'Oxygen', correct: false },
            ]
        },
        {
            Question: 'What is the chemical symbol for iron?',
            Answer: [
                { text: 'Ir', correct: false },
                { text: 'In', correct: false },
                { text: 'Fe', correct: true },
                { text: 'Io', correct: false },
            ]
        },
    ],

    // Set 19 - Economics & Finance
    [
        {
            Question: 'What does GDP stand for?',
            Answer: [
                { text: 'Gross Domestic Product', correct: true },
                { text: 'General Development Plan', correct: false },
                { text: 'Global Domestic Production', correct: false },
                { text: 'Gross Development Plan', correct: false },
            ]
        },
        {
            Question: 'Which is the currency of Japan?',
            Answer: [
                { text: 'Won', correct: false },
                { text: 'Yuan', correct: false },
                { text: 'Yen', correct: true },
                { text: 'Ringgit', correct: false },
            ]
        },
        {
            Question: 'What is the stock exchange index of India called?',
            Answer: [
                { text: 'NASDAQ', correct: false },
                { text: 'Nifty / Sensex', correct: true },
                { text: 'Dow Jones', correct: false },
                { text: 'FTSE', correct: false },
            ]
        },
        {
            Question: 'Which organization regulates banks in India?',
            Answer: [
                { text: 'SEBI', correct: false },
                { text: 'IRDA', correct: false },
                { text: 'RBI', correct: true },
                { text: 'AMFI', correct: false },
            ]
        },
        {
            Question: 'Inflation means the value of money?',
            Answer: [
                { text: 'Increases', correct: false },
                { text: 'Stays the same', correct: false },
                { text: 'Decreases', correct: true },
                { text: 'Doubles', correct: false },
            ]
        },
    ],

    // Set 20 - Famous Inventions
    [
        {
            Question: 'Who invented the telephone?',
            Answer: [
                { text: 'Thomas Edison', correct: false },
                { text: 'Nikola Tesla', correct: false },
                { text: 'Alexander Graham Bell', correct: true },
                { text: 'Marconi', correct: false },
            ]
        },
        {
            Question: 'Who invented the light bulb?',
            Answer: [
                { text: 'Nikola Tesla', correct: false },
                { text: 'James Watt', correct: false },
                { text: 'Thomas Edison', correct: true },
                { text: 'Newton', correct: false },
            ]
        },
        {
            Question: 'Who invented the World Wide Web (WWW)?',
            Answer: [
                { text: 'Bill Gates', correct: false },
                { text: 'Tim Berners-Lee', correct: true },
                { text: 'Steve Jobs', correct: false },
                { text: 'Alan Turing', correct: false },
            ]
        },
        {
            Question: 'Which country invented paper?',
            Answer: [
                { text: 'India', correct: false },
                { text: 'Egypt', correct: false },
                { text: 'China', correct: true },
                { text: 'Greece', correct: false },
            ]
        },
        {
            Question: 'Who invented the aeroplane?',
            Answer: [
                { text: 'Henry Ford', correct: false },
                { text: 'Wright Brothers', correct: true },
                { text: 'Charles Lindbergh', correct: false },
                { text: 'Leonardo da Vinci', correct: false },
            ]
        },
    ],

    // Set 21 - Movies & Entertainment
    [
        {
            Question: 'Who directed the movie "Sholay"?',
            Answer: [
                { text: 'Yash Chopra', correct: false },
                { text: 'Ramesh Sippy', correct: true },
                { text: 'Manmohan Desai', correct: false },
                { text: 'Raj Kapoor', correct: false },
            ]
        },
        {
            Question: 'Which movie won the first Best Picture Oscar?',
            Answer: [
                { text: 'Gone with the Wind', correct: false },
                { text: 'Wings', correct: true },
                { text: 'Casablanca', correct: false },
                { text: 'All Quiet on the Western Front', correct: false },
            ]
        },
        {
            Question: 'Which streaming platform produces "Stranger Things"?',
            Answer: [
                { text: 'Amazon Prime', correct: false },
                { text: 'Disney+', correct: false },
                { text: 'Netflix', correct: true },
                { text: 'HBO', correct: false },
            ]
        },
        {
            Question: 'What is the highest-grossing film of all time (as of 2024)?',
            Answer: [
                { text: 'Avengers: Endgame', correct: false },
                { text: 'Titanic', correct: false },
                { text: 'Avatar', correct: true },
                { text: 'The Lion King', correct: false },
            ]
        },
        {
            Question: 'In which city is Bollywood based?',
            Answer: [
                { text: 'Delhi', correct: false },
                { text: 'Kolkata', correct: false },
                { text: 'Mumbai', correct: true },
                { text: 'Chennai', correct: false },
            ]
        },
    ],

    // Set 22 - Environment & Ecology
    [
        {
            Question: 'What is the main cause of the hole in the ozone layer?',
            Answer: [
                { text: 'CO2 emissions', correct: false },
                { text: 'CFCs (Chlorofluorocarbons)', correct: true },
                { text: 'Noise pollution', correct: false },
                { text: 'Acid rain', correct: false },
            ]
        },
        {
            Question: 'Which is the largest rainforest in the world?',
            Answer: [
                { text: 'Congo Rainforest', correct: false },
                { text: 'Daintree Rainforest', correct: false },
                { text: 'Amazon Rainforest', correct: true },
                { text: 'Sundarbans', correct: false },
            ]
        },
        {
            Question: 'What term describes the variety of life on Earth?',
            Answer: [
                { text: 'Ecosystem', correct: false },
                { text: 'Habitat', correct: false },
                { text: 'Biodiversity', correct: true },
                { text: 'Flora', correct: false },
            ]
        },
        {
            Question: 'Which gas is primarily responsible for global warming?',
            Answer: [
                { text: 'Oxygen', correct: false },
                { text: 'Nitrogen', correct: false },
                { text: 'Carbon Dioxide', correct: true },
                { text: 'Hydrogen', correct: false },
            ]
        },
        {
            Question: 'What does the "3 R\'s" of environment stand for?',
            Answer: [
                { text: 'Read, Recite, Repeat', correct: false },
                { text: 'Run, Ride, Race', correct: false },
                { text: 'Reduce, Reuse, Recycle', correct: true },
                { text: 'Renew, Repair, Reclaim', correct: false },
            ]
        },
    ],

    // Set 21 - World Religions
[
    {
        Question: 'Which is the holiest city in Islam?',
        Answer: [
            { text: 'Medina', correct: false },
            { text: 'Jerusalem', correct: false },
            { text: 'Mecca', correct: true },
            { text: 'Baghdad', correct: false },
        ]
    },
    {
        Question: 'Where was Buddhism founded?',
        Answer: [
            { text: 'China', correct: false },
            { text: 'Tibet', correct: false },
            { text: 'India', correct: true },
            { text: 'Japan', correct: false },
        ]
    },
    {
        Question: 'What is the holy book of Christianity?',
        Answer: [
            { text: 'Quran', correct: false },
            { text: 'Torah', correct: false },
            { text: 'Bible', correct: true },
            { text: 'Vedas', correct: false },
        ]
    },
    {
        Question: 'The Guru Granth Sahib is the holy scripture of which religion?',
        Answer: [
            { text: 'Hinduism', correct: false },
            { text: 'Jainism', correct: false },
            { text: 'Sikhism', correct: true },
            { text: 'Buddhism', correct: false },
        ]
    },
    {
        Question: 'How many pillars are there in Islam?',
        Answer: [
            { text: '4', correct: false },
            { text: '5', correct: true },
            { text: '6', correct: false },
            { text: '7', correct: false },
        ]
    },
],

// Set 22 - Famous Scientists
[
    {
        Question: 'Who proposed the theory of relativity?',
        Answer: [
            { text: 'Isaac Newton', correct: false },
            { text: 'Niels Bohr', correct: false },
            { text: 'Albert Einstein', correct: true },
            { text: 'Max Planck', correct: false },
        ]
    },
    {
        Question: 'Who is known as the father of computers?',
        Answer: [
            { text: 'Alan Turing', correct: false },
            { text: 'Charles Babbage', correct: true },
            { text: 'Bill Gates', correct: false },
            { text: 'John von Neumann', correct: false },
        ]
    },
    {
        Question: 'Who discovered gravity by observing a falling apple?',
        Answer: [
            { text: 'Galileo', correct: false },
            { text: 'Copernicus', correct: false },
            { text: 'Isaac Newton', correct: true },
            { text: 'Kepler', correct: false },
        ]
    },
    {
        Question: 'Marie Curie was the first woman to win the Nobel Prize in which field?',
        Answer: [
            { text: 'Chemistry', correct: false },
            { text: 'Medicine', correct: false },
            { text: 'Physics', correct: true },
            { text: 'Literature', correct: false },
        ]
    },
    {
        Question: 'Who developed the polio vaccine?',
        Answer: [
            { text: 'Louis Pasteur', correct: false },
            { text: 'Alexander Fleming', correct: false },
            { text: 'Jonas Salk', correct: true },
            { text: 'Edward Jenner', correct: false },
        ]
    },
],

// Set 23 - Indian Geography
[
    {
        Question: 'Which is the longest river in India?',
        Answer: [
            { text: 'Yamuna', correct: false },
            { text: 'Ganga', correct: true },
            { text: 'Godavari', correct: false },
            { text: 'Krishna', correct: false },
        ]
    },
    {
        Question: 'Which state has the longest coastline in India?',
        Answer: [
            { text: 'Kerala', correct: false },
            { text: 'Tamil Nadu', correct: false },
            { text: 'Gujarat', correct: true },
            { text: 'Andhra Pradesh', correct: false },
        ]
    },
    {
        Question: 'Which is the largest state in India by area?',
        Answer: [
            { text: 'Maharashtra', correct: false },
            { text: 'Madhya Pradesh', correct: false },
            { text: 'Rajasthan', correct: true },
            { text: 'Uttar Pradesh', correct: false },
        ]
    },
    {
        Question: 'The Sundarbans mangrove forest is located in which state?',
        Answer: [
            { text: 'Odisha', correct: false },
            { text: 'Assam', correct: false },
            { text: 'West Bengal', correct: true },
            { text: 'Kerala', correct: false },
        ]
    },
    {
        Question: 'Which city is known as the Pink City of India?',
        Answer: [
            { text: 'Jaipur', correct: true },
            { text: 'Jodhpur', correct: false },
            { text: 'Udaipur', correct: false },
            { text: 'Agra', correct: false },
        ]
    },
],

// Set 24 - Computer Science
[
    {
        Question: 'What does RAM stand for?',
        Answer: [
            { text: 'Read Access Memory', correct: false },
            { text: 'Random Access Memory', correct: true },
            { text: 'Rapid Application Memory', correct: false },
            { text: 'Read Application Mode', correct: false },
        ]
    },
    {
        Question: 'Which programming language is known as the backbone of the web?',
        Answer: [
            { text: 'Python', correct: false },
            { text: 'Java', correct: false },
            { text: 'JavaScript', correct: true },
            { text: 'Ruby', correct: false },
        ]
    },
    {
        Question: 'What does SQL stand for?',
        Answer: [
            { text: 'Structured Query Language', correct: true },
            { text: 'Simple Query Language', correct: false },
            { text: 'System Query Logic', correct: false },
            { text: 'Standard Query List', correct: false },
        ]
    },
    {
        Question: 'Which symbol is used for comments in Python?',
        Answer: [
            { text: '//', correct: false },
            { text: '/* */', correct: false },
            { text: '#', correct: true },
            { text: '--', correct: false },
        ]
    },
    {
        Question: 'What is the binary value of the decimal number 10?',
        Answer: [
            { text: '1000', correct: false },
            { text: '1010', correct: true },
            { text: '1100', correct: false },
            { text: '0110', correct: false },
        ]
    },
],

// Set 25 - World War History
[
    {
        Question: 'Which country was NOT part of the Allied Powers in WW2?',
        Answer: [
            { text: 'USA', correct: false },
            { text: 'UK', correct: false },
            { text: 'Italy', correct: true },
            { text: 'USSR', correct: false },
        ]
    },
    {
        Question: 'In which year did World War I begin?',
        Answer: [
            { text: '1912', correct: false },
            { text: '1914', correct: true },
            { text: '1916', correct: false },
            { text: '1918', correct: false },
        ]
    },
    {
        Question: 'What was the name of the first atomic bomb dropped on Japan?',
        Answer: [
            { text: 'Fat Man', correct: false },
            { text: 'Big Boy', correct: false },
            { text: 'Little Boy', correct: true },
            { text: 'Thin Man', correct: false },
        ]
    },
    {
        Question: 'Who was the German leader during World War II?',
        Answer: [
            { text: 'Kaiser Wilhelm', correct: false },
            { text: 'Otto von Bismarck', correct: false },
            { text: 'Adolf Hitler', correct: true },
            { text: 'Heinrich Himmler', correct: false },
        ]
    },
    {
        Question: 'The D-Day invasion took place on which beach in Normandy?',
        Answer: [
            { text: 'Utah Beach', correct: false },
            { text: 'Omaha Beach', correct: true },
            { text: 'Gold Beach', correct: false },
            { text: 'Sword Beach', correct: false },
        ]
    },
],

// Set 26 - Food & Nutrition
[
    {
        Question: 'Which vitamin is found in abundance in oranges?',
        Answer: [
            { text: 'Vitamin A', correct: false },
            { text: 'Vitamin B', correct: false },
            { text: 'Vitamin C', correct: true },
            { text: 'Vitamin D', correct: false },
        ]
    },
    {
        Question: 'Which nutrient is the primary source of energy for the body?',
        Answer: [
            { text: 'Protein', correct: false },
            { text: 'Fat', correct: false },
            { text: 'Carbohydrates', correct: true },
            { text: 'Vitamins', correct: false },
        ]
    },
    {
        Question: 'Which food item is the richest source of protein?',
        Answer: [
            { text: 'Rice', correct: false },
            { text: 'Eggs', correct: true },
            { text: 'Bread', correct: false },
            { text: 'Apple', correct: false },
        ]
    },
    {
        Question: 'Biryani is a famous dish originally from which cuisine?',
        Answer: [
            { text: 'Chinese', correct: false },
            { text: 'Thai', correct: false },
            { text: 'Mughal/Persian', correct: true },
            { text: 'Italian', correct: false },
        ]
    },
    {
        Question: 'Which mineral is most important for strong bones?',
        Answer: [
            { text: 'Iron', correct: false },
            { text: 'Sodium', correct: false },
            { text: 'Calcium', correct: true },
            { text: 'Potassium', correct: false },
        ]
    },
],

// Set 27 - Music
[
    {
        Question: 'How many strings does a standard guitar have?',
        Answer: [
            { text: '4', correct: false },
            { text: '5', correct: false },
            { text: '6', correct: true },
            { text: '7', correct: false },
        ]
    },
    {
        Question: 'Which Indian singer is known as the Nightingale of India?',
        Answer: [
            { text: 'Asha Bhosle', correct: false },
            { text: 'Lata Mangeshkar', correct: true },
            { text: 'Shreya Ghoshal', correct: false },
            { text: 'Kavita Krishnamurthy', correct: false },
        ]
    },
    {
        Question: 'Who composed the famous symphony "Fur Elise"?',
        Answer: [
            { text: 'Mozart', correct: false },
            { text: 'Bach', correct: false },
            { text: 'Beethoven', correct: true },
            { text: 'Chopin', correct: false },
        ]
    },
    {
        Question: 'What does BPM stand for in music?',
        Answer: [
            { text: 'Bass Per Minute', correct: false },
            { text: 'Beats Per Minute', correct: true },
            { text: 'Bars Per Measure', correct: false },
            { text: 'Bass Per Measure', correct: false },
        ]
    },
    {
        Question: 'Which music genre originated in Jamaica?',
        Answer: [
            { text: 'Jazz', correct: false },
            { text: 'Blues', correct: false },
            { text: 'Reggae', correct: true },
            { text: 'Soul', correct: false },
        ]
    },
],

// Set 28 - Physics
[
    {
        Question: 'What is the SI unit of force?',
        Answer: [
            { text: 'Watt', correct: false },
            { text: 'Joule', correct: false },
            { text: 'Newton', correct: true },
            { text: 'Pascal', correct: false },
        ]
    },
    {
        Question: 'What type of energy does a moving object possess?',
        Answer: [
            { text: 'Potential energy', correct: false },
            { text: 'Chemical energy', correct: false },
            { text: 'Kinetic energy', correct: true },
            { text: 'Nuclear energy', correct: false },
        ]
    },
    {
        Question: 'Which law states that every action has an equal and opposite reaction?',
        Answer: [
            { text: 'Newton\'s First Law', correct: false },
            { text: 'Newton\'s Second Law', correct: false },
            { text: 'Newton\'s Third Law', correct: true },
            { text: 'Ohm\'s Law', correct: false },
        ]
    },
    {
        Question: 'What is the unit of electric current?',
        Answer: [
            { text: 'Volt', correct: false },
            { text: 'Ohm', correct: false },
            { text: 'Ampere', correct: true },
            { text: 'Watt', correct: false },
        ]
    },
    {
        Question: 'Sound travels fastest through which medium?',
        Answer: [
            { text: 'Air', correct: false },
            { text: 'Water', correct: false },
            { text: 'Solid', correct: true },
            { text: 'Vacuum', correct: false },
        ]
    },
],

// Set 29 - Famous Leaders
[
    {
        Question: 'Who was the first female Prime Minister of the UK?',
        Answer: [
            { text: 'Theresa May', correct: false },
            { text: 'Margaret Thatcher', correct: true },
            { text: 'Angela Merkel', correct: false },
            { text: 'Jacinda Ardern', correct: false },
        ]
    },
    {
        Question: 'Nelson Mandela was the President of which country?',
        Answer: [
            { text: 'Nigeria', correct: false },
            { text: 'Kenya', correct: false },
            { text: 'South Africa', correct: true },
            { text: 'Zimbabwe', correct: false },
        ]
    },
    {
        Question: 'Who was the first woman to become Prime Minister of India?',
        Answer: [
            { text: 'Sarojini Naidu', correct: false },
            { text: 'Sonia Gandhi', correct: false },
            { text: 'Indira Gandhi', correct: true },
            { text: 'Pratibha Patil', correct: false },
        ]
    },
    {
        Question: 'Who led the Cuban Revolution?',
        Answer: [
            { text: 'Che Guevara', correct: false },
            { text: 'Fidel Castro', correct: true },
            { text: 'Hugo Chavez', correct: false },
            { text: 'Simon Bolivar', correct: false },
        ]
    },
    {
        Question: 'Abraham Lincoln was the __ President of the United States?',
        Answer: [
            { text: '14th', correct: false },
            { text: '15th', correct: false },
            { text: '16th', correct: true },
            { text: '17th', correct: false },
        ]
    },
],

// Set 30 - Indian Economy
[
    {
        Question: 'What is India\'s currency called?',
        Answer: [
            { text: 'Taka', correct: false },
            { text: 'Rupee', correct: true },
            { text: 'Rupiah', correct: false },
            { text: 'Dinar', correct: false },
        ]
    },
    {
        Question: 'In which year was the GST implemented in India?',
        Answer: [
            { text: '2015', correct: false },
            { text: '2016', correct: false },
            { text: '2017', correct: true },
            { text: '2018', correct: false },
        ]
    },
    {
        Question: 'Which Five Year Plan introduced the concept of self-reliance in India?',
        Answer: [
            { text: '3rd Plan', correct: false },
            { text: '4th Plan', correct: false },
            { text: '5th Plan', correct: true },
            { text: '6th Plan', correct: false },
        ]
    },
    {
        Question: 'India is the world\'s largest producer of which crop?',
        Answer: [
            { text: 'Wheat', correct: false },
            { text: 'Rice', correct: false },
            { text: 'Milk', correct: true },
            { text: 'Cotton', correct: false },
        ]
    },
    {
        Question: 'Which city is known as the IT capital of India?',
        Answer: [
            { text: 'Mumbai', correct: false },
            { text: 'Delhi', correct: false },
            { text: 'Bengaluru', correct: true },
            { text: 'Hyderabad', correct: false },
        ]
    },
],

// Set 31 - Human Psychology
[
    {
        Question: 'Who is known as the father of modern psychology?',
        Answer: [
            { text: 'Carl Jung', correct: false },
            { text: 'Sigmund Freud', correct: true },
            { text: 'B.F. Skinner', correct: false },
            { text: 'William James', correct: false },
        ]
    },
    {
        Question: 'What is the term for fear of heights?',
        Answer: [
            { text: 'Arachnophobia', correct: false },
            { text: 'Claustrophobia', correct: false },
            { text: 'Acrophobia', correct: true },
            { text: 'Xenophobia', correct: false },
        ]
    },
    {
        Question: 'Maslow\'s hierarchy of needs has how many levels?',
        Answer: [
            { text: '4', correct: false },
            { text: '5', correct: true },
            { text: '6', correct: false },
            { text: '7', correct: false },
        ]
    },
    {
        Question: 'Which part of the brain is responsible for memory?',
        Answer: [
            { text: 'Cerebellum', correct: false },
            { text: 'Frontal Lobe', correct: false },
            { text: 'Hippocampus', correct: true },
            { text: 'Medulla', correct: false },
        ]
    },
    {
        Question: 'What is the term for learning by observing others?',
        Answer: [
            { text: 'Classical Conditioning', correct: false },
            { text: 'Operant Conditioning', correct: false },
            { text: 'Observational Learning', correct: true },
            { text: 'Insight Learning', correct: false },
        ]
    },
],

// Set 32 - World Currencies
[
    {
        Question: 'What is the currency of the United Kingdom?',
        Answer: [
            { text: 'Euro', correct: false },
            { text: 'Dollar', correct: false },
            { text: 'Pound Sterling', correct: true },
            { text: 'Franc', correct: false },
        ]
    },
    {
        Question: 'Which currency is used in China?',
        Answer: [
            { text: 'Yen', correct: false },
            { text: 'Won', correct: false },
            { text: 'Yuan (Renminbi)', correct: true },
            { text: 'Baht', correct: false },
        ]
    },
    {
        Question: 'The Euro is used by how many countries (approx)?',
        Answer: [
            { text: '15', correct: false },
            { text: '20', correct: true },
            { text: '25', correct: false },
            { text: '30', correct: false },
        ]
    },
    {
        Question: 'What is the currency of Saudi Arabia?',
        Answer: [
            { text: 'Dinar', correct: false },
            { text: 'Dirham', correct: false },
            { text: 'Riyal', correct: true },
            { text: 'Pound', correct: false },
        ]
    },
    {
        Question: 'Bitcoin is an example of which type of currency?',
        Answer: [
            { text: 'Fiat currency', correct: false },
            { text: 'Commodity money', correct: false },
            { text: 'Cryptocurrency', correct: true },
            { text: 'Reserve currency', correct: false },
        ]
    },
],

// Set 33 - Famous Monuments
[
    {
        Question: 'In which country is the Eiffel Tower located?',
        Answer: [
            { text: 'Italy', correct: false },
            { text: 'Spain', correct: false },
            { text: 'France', correct: true },
            { text: 'Germany', correct: false },
        ]
    },
    {
        Question: 'Who built the Taj Mahal?',
        Answer: [
            { text: 'Akbar', correct: false },
            { text: 'Humayun', correct: false },
            { text: 'Shah Jahan', correct: true },
            { text: 'Aurangzeb', correct: false },
        ]
    },
    {
        Question: 'The Great Wall of China was primarily built to protect against whom?',
        Answer: [
            { text: 'Mongols', correct: true },
            { text: 'Romans', correct: false },
            { text: 'Japanese', correct: false },
            { text: 'Persians', correct: false },
        ]
    },
    {
        Question: 'In which city is the Colosseum located?',
        Answer: [
            { text: 'Athens', correct: false },
            { text: 'Paris', correct: false },
            { text: 'Rome', correct: true },
            { text: 'Madrid', correct: false },
        ]
    },
    {
        Question: 'What is the famous leaning tower located in?',
        Answer: [
            { text: 'Venice', correct: false },
            { text: 'Milan', correct: false },
            { text: 'Pisa', correct: true },
            { text: 'Florence', correct: false },
        ]
    },
],

// Set 34 - Indian Constitution
[
    {
        Question: 'When was the Indian Constitution adopted?',
        Answer: [
            { text: '15 August 1947', correct: false },
            { text: '26 January 1949', correct: false },
            { text: '26 November 1949', correct: true },
            { text: '26 January 1950', correct: false },
        ]
    },
    {
        Question: 'Who is known as the father of the Indian Constitution?',
        Answer: [
            { text: 'Jawaharlal Nehru', correct: false },
            { text: 'Mahatma Gandhi', correct: false },
            { text: 'B.R. Ambedkar', correct: true },
            { text: 'Sardar Patel', correct: false },
        ]
    },
    {
        Question: 'How many Fundamental Rights are guaranteed by the Indian Constitution?',
        Answer: [
            { text: '5', correct: false },
            { text: '6', correct: true },
            { text: '7', correct: false },
            { text: '8', correct: false },
        ]
    },
    {
        Question: 'Which article of the Indian Constitution abolishes untouchability?',
        Answer: [
            { text: 'Article 14', correct: false },
            { text: 'Article 15', correct: false },
            { text: 'Article 17', correct: true },
            { text: 'Article 19', correct: false },
        ]
    },
    {
        Question: 'The Indian Constitution is the longest written constitution of how many countries?',
        Answer: [
            { text: 'Any country', correct: true },
            { text: 'Any democracy', correct: false },
            { text: 'Any federal country', correct: false },
            { text: 'Any Asian country', correct: false },
        ]
    },
],

// Set 35 - Oceans & Seas
[
    {
        Question: 'How many oceans are there on Earth?',
        Answer: [
            { text: '4', correct: false },
            { text: '5', correct: true },
            { text: '6', correct: false },
            { text: '7', correct: false },
        ]
    },
    {
        Question: 'What is the deepest point in the ocean?',
        Answer: [
            { text: 'Java Trench', correct: false },
            { text: 'Puerto Rico Trench', correct: false },
            { text: 'Mariana Trench', correct: true },
            { text: 'Tonga Trench', correct: false },
        ]
    },
    {
        Question: 'Which ocean is the smallest in the world?',
        Answer: [
            { text: 'Indian Ocean', correct: false },
            { text: 'Southern Ocean', correct: false },
            { text: 'Arctic Ocean', correct: true },
            { text: 'Atlantic Ocean', correct: false },
        ]
    },
    {
        Question: 'The Bay of Bengal is part of which ocean?',
        Answer: [
            { text: 'Pacific Ocean', correct: false },
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: true },
            { text: 'Arctic Ocean', correct: false },
        ]
    },
    {
        Question: 'What percentage of Earth\'s surface is covered by water?',
        Answer: [
            { text: '51%', correct: false },
            { text: '61%', correct: false },
            { text: '71%', correct: true },
            { text: '81%', correct: false },
        ]
    },
],

// Set 36 - Art & Painting
[
    {
        Question: 'Who painted the Mona Lisa?',
        Answer: [
            { text: 'Michelangelo', correct: false },
            { text: 'Raphael', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Caravaggio', correct: false },
        ]
    },
    {
        Question: 'The famous painting "Starry Night" was painted by?',
        Answer: [
            { text: 'Pablo Picasso', correct: false },
            { text: 'Claude Monet', correct: false },
            { text: 'Vincent van Gogh', correct: true },
            { text: 'Salvador Dali', correct: false },
        ]
    },
    {
        Question: 'What art style is Pablo Picasso famous for?',
        Answer: [
            { text: 'Impressionism', correct: false },
            { text: 'Surrealism', correct: false },
            { text: 'Cubism', correct: true },
            { text: 'Realism', correct: false },
        ]
    },
    {
        Question: 'The Sistine Chapel ceiling was painted by whom?',
        Answer: [
            { text: 'Leonardo da Vinci', correct: false },
            { text: 'Raphael', correct: false },
            { text: 'Michelangelo', correct: true },
            { text: 'Donatello', correct: false },
        ]
    },
    {
        Question: 'Which Indian painter is famous for his paintings of women in sarees?',
        Answer: [
            { text: 'Raja Ravi Varma', correct: true },
            { text: 'Amrita Sher-Gil', correct: false },
            { text: 'M.F. Husain', correct: false },
            { text: 'Nandalal Bose', correct: false },
        ]
    },
],

// Set 37 - Plants & Botany
[
    {
        Question: 'What is the process by which plants make their own food called?',
        Answer: [
            { text: 'Respiration', correct: false },
            { text: 'Transpiration', correct: false },
            { text: 'Photosynthesis', correct: true },
            { text: 'Germination', correct: false },
        ]
    },
    {
        Question: 'Which part of the plant conducts water from roots to leaves?',
        Answer: [
            { text: 'Phloem', correct: false },
            { text: 'Cortex', correct: false },
            { text: 'Xylem', correct: true },
            { text: 'Epidermis', correct: false },
        ]
    },
    {
        Question: 'What is the world\'s largest flower?',
        Answer: [
            { text: 'Sunflower', correct: false },
            { text: 'Lotus', correct: false },
            { text: 'Rafflesia', correct: true },
            { text: 'Titan Arum', correct: false },
        ]
    },
    {
        Question: 'Which gas is released by plants during photosynthesis?',
        Answer: [
            { text: 'Carbon Dioxide', correct: false },
            { text: 'Nitrogen', correct: false },
            { text: 'Oxygen', correct: true },
            { text: 'Hydrogen', correct: false },
        ]
    },
    {
        Question: 'What is the national flower of India?',
        Answer: [
            { text: 'Rose', correct: false },
            { text: 'Jasmine', correct: false },
            { text: 'Lotus', correct: true },
            { text: 'Marigold', correct: false },
        ]
    },
],

// Set 38 - Social Media & Internet
[
    {
        Question: 'In which year was Facebook founded?',
        Answer: [
            { text: '2002', correct: false },
            { text: '2003', correct: false },
            { text: '2004', correct: true },
            { text: '2005', correct: false },
        ]
    },
    {
        Question: 'What does URL stand for?',
        Answer: [
            { text: 'Universal Resource Locator', correct: false },
            { text: 'Uniform Resource Locator', correct: true },
            { text: 'Unique Resource Link', correct: false },
            { text: 'Universal Reference Link', correct: false },
        ]
    },
    {
        Question: 'Which country has the most internet users?',
        Answer: [
            { text: 'USA', correct: false },
            { text: 'India', correct: false },
            { text: 'China', correct: true },
            { text: 'Brazil', correct: false },
        ]
    },
    {
        Question: 'What does the "@" symbol represent in an email address?',
        Answer: [
            { text: 'Account', correct: false },
            { text: 'At', correct: true },
            { text: 'Address', correct: false },
            { text: 'Application', correct: false },
        ]
    },
    {
        Question: 'Which company owns Instagram?',
        Answer: [
            { text: 'Google', correct: false },
            { text: 'Twitter', correct: false },
            { text: 'Meta (Facebook)', correct: true },
            { text: 'Apple', correct: false },
        ]
    },
],

// Set 39 - Natural Disasters
[
    {
        Question: 'What instrument measures the intensity of an earthquake?',
        Answer: [
            { text: 'Barometer', correct: false },
            { text: 'Thermometer', correct: false },
            { text: 'Seismograph', correct: true },
            { text: 'Anemometer', correct: false },
        ]
    },
    {
        Question: 'What is the center of a hurricane called?',
        Answer: [
            { text: 'Core', correct: false },
            { text: 'Eye', correct: true },
            { text: 'Heart', correct: false },
            { text: 'Nucleus', correct: false },
        ]
    },
    {
        Question: 'A tsunami is caused by which natural event?',
        Answer: [
            { text: 'Volcanic eruption on land', correct: false },
            { text: 'Strong winds', correct: false },
            { text: 'Underwater earthquake', correct: true },
            { text: 'Heavy rainfall', correct: false },
        ]
    },
    {
        Question: 'The Richter scale measures which natural disaster?',
        Answer: [
            { text: 'Tornado', correct: false },
            { text: 'Flood', correct: false },
            { text: 'Earthquake', correct: true },
            { text: 'Volcanic eruption', correct: false },
        ]
    },
    {
        Question: 'Which country experiences the most earthquakes in the world?',
        Answer: [
            { text: 'USA', correct: false },
            { text: 'Indonesia', correct: false },
            { text: 'Japan', correct: true },
            { text: 'Chile', correct: false },
        ]
    },
],

// Set 40 - Bollywood
[
    {
        Question: 'Who is known as the Shahenshah of Bollywood?',
        Answer: [
            { text: 'Shah Rukh Khan', correct: false },
            { text: 'Salman Khan', correct: false },
            { text: 'Amitabh Bachchan', correct: true },
            { text: 'Dilip Kumar', correct: false },
        ]
    },
    {
        Question: 'Which Bollywood film was the first to win an Oscar?',
        Answer: [
            { text: 'Mother India', correct: false },
            { text: 'Salaam Bombay', correct: false },
            { text: 'Lagaan', correct: false },
            { text: 'None yet', correct: true },
        ]
    },
    {
        Question: 'Who composed the music for the film "Dilwale Dulhania Le Jayenge"?',
        Answer: [
            { text: 'A.R. Rahman', correct: false },
            { text: 'Jatin-Lalit', correct: true },
            { text: 'R.D. Burman', correct: false },
            { text: 'Shankar-Ehsaan-Loy', correct: false },
        ]
    },
    {
        Question: 'Which actress is known as the dream girl of Bollywood?',
        Answer: [
            { text: 'Rekha', correct: false },
            { text: 'Madhuri Dixit', correct: false },
            { text: 'Hema Malini', correct: true },
            { text: 'Sridevi', correct: false },
        ]
    },
    {
        Question: 'The film "3 Idiots" is based on which novel?',
        Answer: [
            { text: 'Two States', correct: false },
            { text: 'Five Point Someone', correct: true },
            { text: 'Half Girlfriend', correct: false },
            { text: 'Revolution 2020', correct: false },
        ]
    },
],

// Set 41 - World Leaders (Current Era)
[
    {
        Question: 'Who is the Secretary-General of the United Nations (2024)?',
        Answer: [
            { text: 'Ban Ki-moon', correct: false },
            { text: 'Kofi Annan', correct: false },
            { text: 'António Guterres', correct: true },
            { text: 'Boutros Boutros-Ghali', correct: false },
        ]
    },
    {
        Question: 'Who is the head of the World Health Organization (WHO)?',
        Answer: [
            { text: 'Margaret Chan', correct: false },
            { text: 'Tedros Adhanom Ghebreyesus', correct: true },
            { text: 'Gro Harlem Brundtland', correct: false },
            { text: 'Lee Jong-wook', correct: false },
        ]
    },
    {
        Question: 'Which country has a permanent veto power in the UN Security Council?',
        Answer: [
            { text: 'Germany', correct: false },
            { text: 'Japan', correct: false },
            { text: 'India', correct: false },
            { text: 'France', correct: true },
        ]
    },
    {
        Question: 'The G20 is a group of how many major economies?',
        Answer: [
            { text: '18', correct: false },
            { text: '19', correct: false },
            { text: '20', correct: true },
            { text: '21', correct: false },
        ]
    },
    {
        Question: 'India hosted the G20 summit in which year?',
        Answer: [
            { text: '2021', correct: false },
            { text: '2022', correct: false },
            { text: '2023', correct: true },
            { text: '2024', correct: false },
        ]
    },
],

// Set 42 - Human Rights & Law
[
    {
        Question: 'When is International Human Rights Day observed?',
        Answer: [
            { text: 'October 10', correct: false },
            { text: 'November 20', correct: false },
            { text: 'December 10', correct: true },
            { text: 'January 26', correct: false },
        ]
    },
    {
        Question: 'The Universal Declaration of Human Rights was adopted in which year?',
        Answer: [
            { text: '1945', correct: false },
            { text: '1946', correct: false },
            { text: '1948', correct: true },
            { text: '1950', correct: false },
        ]
    },
    {
        Question: 'What does PIL stand for in the Indian legal system?',
        Answer: [
            { text: 'Personal Interest Litigation', correct: false },
            { text: 'Public Interest Litigation', correct: true },
            { text: 'Private Interest Law', correct: false },
            { text: 'Public Institute of Law', correct: false },
        ]
    },
    {
        Question: 'What is the minimum age to vote in India?',
        Answer: [
            { text: '16', correct: false },
            { text: '17', correct: false },
            { text: '18', correct: true },
            { text: '21', correct: false },
        ]
    },
    {
        Question: 'Which court is the highest court in India?',
        Answer: [
            { text: 'High Court', correct: false },
            { text: 'District Court', correct: false },
            { text: 'Supreme Court', correct: true },
            { text: 'Session Court', correct: false },
        ]
    },
],

// Set 43 - Space Missions
[
    {
        Question: 'Which was the first mission to successfully land on the Moon?',
        Answer: [
            { text: 'Apollo 10', correct: false },
            { text: 'Apollo 11', correct: true },
            { text: 'Apollo 12', correct: false },
            { text: 'Apollo 8', correct: false },
        ]
    },
    {
        Question: 'India\'s first Moon mission was called?',
        Answer: [
            { text: 'Mangalyaan', correct: false },
            { text: 'Chandrayaan-1', correct: true },
            { text: 'Aditya L1', correct: false },
            { text: 'Gaganyaan', correct: false },
        ]
    },
    {
        Question: 'Which planet did the Mars Rover "Curiosity" land on?',
        Answer: [
            { text: 'Venus', correct: false },
            { text: 'Jupiter', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Saturn', correct: false },
        ]
    },
    {
        Question: 'Elon Musk\'s space company is called?',
        Answer: [
            { text: 'Blue Origin', correct: false },
            { text: 'Virgin Galactic', correct: false },
            { text: 'SpaceX', correct: true },
            { text: 'Rocket Lab', correct: false },
        ]
    },
    {
        Question: 'The International Space Station orbits Earth at approximately what altitude?',
        Answer: [
            { text: '100 km', correct: false },
            { text: '200 km', correct: false },
            { text: '400 km', correct: true },
            { text: '800 km', correct: false },
        ]
    },
],

// Set 44 - Indian Sports
[
    {
        Question: 'Who is known as the Flying Sikh of India?',
        Answer: [
            { text: 'P.T. Usha', correct: false },
            { text: 'Milkha Singh', correct: true },
            { text: 'Abhinav Bindra', correct: false },
            { text: 'Leander Paes', correct: false },
        ]
    },
    {
        Question: 'Which Indian cricketer has the most international centuries?',
        Answer: [
            { text: 'Virat Kohli', correct: false },
            { text: 'Sourav Ganguly', correct: false },
            { text: 'Sachin Tendulkar', correct: true },
            { text: 'Rohit Sharma', correct: false },
        ]
    },
    {
        Question: 'In which year did India win their first Cricket World Cup?',
        Answer: [
            { text: '1979', correct: false },
            { text: '1983', correct: true },
            { text: '1987', correct: false },
            { text: '1992', correct: false },
        ]
    },
    {
        Question: 'Which Indian won the first individual Olympic gold medal?',
        Answer: [
            { text: 'Leander Paes', correct: false },
            { text: 'Rajyavardhan Rathore', correct: false },
            { text: 'Abhinav Bindra', correct: true },
            { text: 'Sushil Kumar', correct: false },
        ]
    },
    {
        Question: 'Badminton player P.V. Sindhu represents which Indian state?',
        Answer: [
            { text: 'Karnataka', correct: false },
            { text: 'Tamil Nadu', correct: false },
            { text: 'Telangana', correct: true },
            { text: 'Kerala', correct: false },
        ]
    },
],

// Set 45 - Mathematics Advanced
[
    {
        Question: 'What is the factorial of 5 (5!)?',
        Answer: [
            { text: '60', correct: false },
            { text: '100', correct: false },
            { text: '120', correct: true },
            { text: '150', correct: false },
        ]
    },
    {
        Question: 'What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ?',
        Answer: [
            { text: '11', correct: false },
            { text: '12', correct: false },
            { text: '13', correct: true },
            { text: '14', correct: false },
        ]
    },
    {
        Question: 'What is 2 to the power of 10?',
        Answer: [
            { text: '512', correct: false },
            { text: '1024', correct: true },
            { text: '2048', correct: false },
            { text: '256', correct: false },
        ]
    },
    {
        Question: 'Which of these numbers is a prime number?',
        Answer: [
            { text: '21', correct: false },
            { text: '25', correct: false },
            { text: '29', correct: true },
            { text: '33', correct: false },
        ]
    },
    {
        Question: 'What is the area of a circle with radius 7? (use π = 22/7)',
        Answer: [
            { text: '144', correct: false },
            { text: '154', correct: true },
            { text: '164', correct: false },
            { text: '174', correct: false },
        ]
    },
],

// Set 46 - Famous Quotes & Authors
[
    {
        Question: 'Who said "Be the change you wish to see in the world"?',
        Answer: [
            { text: 'Nehru', correct: false },
            { text: 'Nelson Mandela', correct: false },
            { text: 'Mahatma Gandhi', correct: true },
            { text: 'Abraham Lincoln', correct: false },
        ]
    },
    {
        Question: 'Who wrote "The Alchemist"?',
        Answer: [
            { text: 'Gabriel Garcia Marquez', correct: false },
            { text: 'Paulo Coelho', correct: true },
            { text: 'Haruki Murakami', correct: false },
            { text: 'Isabel Allende', correct: false },
        ]
    },
    {
        Question: 'Who wrote "Wings of Fire" (autobiography)?',
        Answer: [
            { text: 'Narendra Modi', correct: false },
            { text: 'Vikram Sarabhai', correct: false },
            { text: 'A.P.J. Abdul Kalam', correct: true },
            { text: 'C.V. Raman', correct: false },
        ]
    },
    {
        Question: 'Who wrote "1984"?',
        Answer: [
            { text: 'Aldous Huxley', correct: false },
            { text: 'H.G. Wells', correct: false },
            { text: 'George Orwell', correct: true },
            { text: 'Ray Bradbury', correct: false },
        ]
    },
    {
        Question: 'The phrase "Elementary, my dear Watson" is associated with?',
        Answer: [
            { text: 'James Bond', correct: false },
            { text: 'Hercule Poirot', correct: false },
            { text: 'Sherlock Holmes', correct: true },
            { text: 'Inspector Morse', correct: false },
        ]
    },
],

// Set 47 - Diseases & Medicine
[
    {
        Question: 'Which disease is caused by a deficiency of Vitamin C?',
        Answer: [
            { text: 'Rickets', correct: false },
            { text: 'Pellagra', correct: false },
            { text: 'Scurvy', correct: true },
            { text: 'Beriberi', correct: false },
        ]
    },
    {
        Question: 'What does HIV stand for?',
        Answer: [
            { text: 'Human Immunity Virus', correct: false },
            { text: 'Human Immunodeficiency Virus', correct: true },
            { text: 'High Immunity Virus', correct: false },
            { text: 'Human Infection Virus', correct: false },
        ]
    },
    {
        Question: 'Which organ is affected by Hepatitis?',
        Answer: [
            { text: 'Kidney', correct: false },
            { text: 'Lungs', correct: false },
            { text: 'Liver', correct: true },
            { text: 'Heart', correct: false },
        ]
    },
    {
        Question: 'What is the most common blood group in humans?',
        Answer: [
            { text: 'A+', correct: false },
            { text: 'B+', correct: false },
            { text: 'O+', correct: true },
            { text: 'AB+', correct: false },
        ]
    },
    {
        Question: 'Which disease is caused by the Plasmodium parasite?',
        Answer: [
            { text: 'Typhoid', correct: false },
            { text: 'Dengue', correct: false },
            { text: 'Malaria', correct: true },
            { text: 'Cholera', correct: false },
        ]
    },
],

// Set 48 - Time & Calendar
[
    {
        Question: 'How many days are in a leap year?',
        Answer: [
            { text: '364', correct: false },
            { text: '365', correct: false },
            { text: '366', correct: true },
            { text: '367', correct: false },
        ]
    },
    {
        Question: 'Which month has the fewest days?',
        Answer: [
            { text: 'January', correct: false },
            { text: 'April', correct: false },
            { text: 'February', correct: true },
            { text: 'November', correct: false },
        ]
    },
    {
        Question: 'How many seconds are in one hour?',
        Answer: [
            { text: '1800', correct: false },
            { text: '2400', correct: false },
            { text: '3600', correct: true },
            { text: '4800', correct: false },
        ]
    },
    {
        Question: 'What is the 7th month of the year?',
        Answer: [
            { text: 'June', correct: false },
            { text: 'July', correct: true },
            { text: 'August', correct: false },
            { text: 'September', correct: false },
        ]
    },
    {
        Question: 'How many weeks are there in a year?',
        Answer: [
            { text: '48', correct: false },
            { text: '50', correct: false },
            { text: '52', correct: true },
            { text: '54', correct: false },
        ]
    },
],

// Set 49 - Miscellaneous Fun Facts
[
    {
        Question: 'How many colors are in a rainbow?',
        Answer: [
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '7', correct: true },
            { text: '8', correct: false },
        ]
    },
    {
        Question: 'Which is the only planet that rotates clockwise?',
        Answer: [
            { text: 'Mars', correct: false },
            { text: 'Jupiter', correct: false },
            { text: 'Venus', correct: true },
            { text: 'Saturn', correct: false },
        ]
    },
    {
        Question: 'How many sides does a Rubik\'s cube have?',
        Answer: [
            { text: '4', correct: false },
            { text: '5', correct: false },
            { text: '6', correct: true },
            { text: '8', correct: false },
        ]
    },
    {
        Question: 'Which country has the most natural lakes?',
        Answer: [
            { text: 'Russia', correct: false },
            { text: 'USA', correct: false },
            { text: 'Canada', correct: true },
            { text: 'Brazil', correct: false },
        ]
    },
    {
        Question: 'A snail can sleep for how many years at a stretch?',
        Answer: [
            { text: '1 year', correct: false },
            { text: '2 years', correct: false },
            { text: '3 years', correct: true },
            { text: '5 years', correct: false },
        ]
    },
],

// Set 50 - General Science
[
    {
        Question: 'What is the powerhouse of the cell?',
        Answer: [
            { text: 'Nucleus', correct: false },
            { text: 'Ribosome', correct: false },
            { text: 'Mitochondria', correct: true },
            { text: 'Golgi body', correct: false },
        ]
    },
    {
        Question: 'Which planet is closest to the Sun?',
        Answer: [
            { text: 'Venus', correct: false },
            { text: 'Earth', correct: false },
            { text: 'Mercury', correct: true },
            { text: 'Mars', correct: false },
        ]
    },
    {
        Question: 'What is the chemical symbol for sodium?',
        Answer: [
            { text: 'So', correct: false },
            { text: 'Sd', correct: false },
            { text: 'Na', correct: true },
            { text: 'Sn', correct: false },
        ]
    },
    {
        Question: 'Which part of the eye gives it its color?',
        Answer: [
            { text: 'Pupil', correct: false },
            { text: 'Retina', correct: false },
            { text: 'Iris', correct: true },
            { text: 'Cornea', correct: false },
        ]
    },
    {
        Question: 'What is the boiling point of water in Celsius?',
        Answer: [
            { text: '90°C', correct: false },
            { text: '95°C', correct: false },
            { text: '100°C', correct: true },
            { text: '110°C', correct: false },
        ]
    },
],

];

export default differentQuestionSet;