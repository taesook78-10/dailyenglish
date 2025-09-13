// topics.js
// 전역 사용: window.TOPICS
// Day 1~10: 20문장씩 완비
// Day 11~100: 라벨만 생성(추가 작성 시 lines 채워 넣으면 됩니다)

(function () {
  const FILLED_TOPICS = [
    {
      key: 'coffee-tea-habits',
      label: '☕ Coffee & Tea Habits',
      lines: [
        "I can’t start my day without a cup of coffee.",
        "Do you usually drink coffee or tea in the morning?",
        "I like my coffee black, no sugar or cream.",
        "This café makes the best latte in town.",
        "Do you want to grab a coffee after work?",
        "I usually have iced coffee in the summer.",
        "I’ve been trying to switch to green tea lately.",
        "How many cups of coffee do you usually drink a day?",
        "I love the smell of freshly ground beans.",
        "Can I get a refill, please?",
        "I sometimes add almond milk instead of dairy.",
        "Do you prefer espresso or drip coffee?",
        "Tea helps me relax before bedtime.",
        "What’s your favorite coffee shop around here?",
        "I can’t drink coffee late at night or I won’t sleep.",
        "Have you tried cold brew before?",
        "I usually buy coffee beans and brew at home.",
        "Let’s meet for coffee this weekend.",
        "I don’t like my coffee too sweet.",
        "A cup of tea is perfect on a rainy day."
      ]
    },
    {
      key: 'commuting-to-work',
      label: '🚇 Commuting to Work',
      lines: [
        "I usually take the subway to work.",
        "Traffic is so bad during rush hour.",
        "How long does your commute take?",
        "I like to listen to podcasts on the way.",
        "I sometimes read a book during my commute.",
        "Do you drive or take public transportation?",
        "The bus was late again this morning.",
        "I try to leave early to avoid traffic.",
        "Commuting takes up too much of my day.",
        "The train is always packed at 8 a.m.",
        "I wish I could work from home more often.",
        "I carpool with coworkers sometimes.",
        "I usually grab breakfast on the way.",
        "The commute is shorter on Fridays.",
        "I missed my train and had to wait.",
        "I check my emails during my commute.",
        "The express train saves a lot of time.",
        "My commute is stressful but necessary.",
        "I prefer biking when the weather is nice.",
        "Do you like your commute, or is it stressful?"
      ]
    },
    {
      key: 'grocery-shopping',
      label: '🛒 Grocery Shopping',
      lines: [
        "I need to make a shopping list before I go.",
        "Where is the produce section?",
        "Are these apples on sale today?",
        "Do you want to come grocery shopping with me?",
        "I usually shop on weekends.",
        "Let’s grab some snacks for the party.",
        "Do you prefer paper or plastic bags?",
        "I like to buy organic vegetables.",
        "Can I pay with my card here?",
        "I forgot to bring coupons.",
        "The store is always crowded on Sundays.",
        "Could you grab some milk on the way home?",
        "We need to buy bread and eggs.",
        "Is there a self-checkout counter?",
        "I usually buy groceries online.",
        "The prices have gone up a lot lately.",
        "I like to cook, so I buy fresh ingredients.",
        "Let’s split the grocery bill.",
        "Do you want to try a new brand of cereal?",
        "Don’t forget to grab some water bottles."
      ]
    },
    {
      key: 'cooking-at-home',
      label: '🍳 Cooking at Home',
      lines: [
        "Do you like cooking?",
        "I usually cook dinner at home during the week.",
        "What’s your favorite dish to make?",
        "Let’s try a new recipe tonight.",
        "I need to buy some spices for this dish.",
        "Cooking at home saves money.",
        "I learned this recipe from my mom.",
        "Do you want to help me in the kitchen?",
        "I usually prep meals for the week.",
        "The food smells really good!",
        "Be careful, the pan is hot.",
        "I don’t cook often, but I like baking.",
        "Could you cut the vegetables, please?",
        "I like to experiment with new flavors.",
        "What should we cook for dinner?",
        "Let’s have a barbecue this weekend.",
        "I enjoy cooking for my friends.",
        "I need to clean up the kitchen after cooking.",
        "Homemade food tastes better.",
        "Do you prefer cooking or eating out?"
      ]
    },
    {
      key: 'dining-out-restaurants',
      label: '🍽 Dining Out & Restaurants',
      lines: [
        "Do you want to eat out tonight?",
        "Let’s try that new restaurant downtown.",
        "Can we get a table for two, please?",
        "Do you have a reservation?",
        "What’s the special today?",
        "I’ll have the chicken, please.",
        "Can we get the check?",
        "The service was really good.",
        "I love this restaurant’s atmosphere.",
        "Do you prefer fast food or fine dining?",
        "Let’s order some appetizers first.",
        "Do you want to split the bill?",
        "This place is always crowded.",
        "I like trying new cuisines.",
        "The food took a long time to come out.",
        "What’s your favorite restaurant?",
        "I think I’ll order dessert.",
        "The menu looks really good.",
        "Could you recommend something?",
        "Let’s come back here again sometime."
      ]
    },
    {
      key: 'household-chores',
      label: '🧹 Household Chores',
      lines: [
        "I need to do the laundry today.",
        "Could you wash the dishes, please?",
        "The living room needs vacuuming.",
        "I’ll take out the trash.",
        "Cleaning is my least favorite chore.",
        "Let’s divide the chores fairly.",
        "I forgot to water the plants.",
        "Can you help me fold the clothes?",
        "The bathroom needs cleaning.",
        "I usually clean on Saturdays.",
        "I need to dust the shelves.",
        "Did you mop the floor?",
        "The kitchen gets dirty so quickly.",
        "Let’s change the bed sheets.",
        "The house looks great after cleaning.",
        "I don’t mind doing laundry.",
        "Who usually does the chores at your place?",
        "Let’s do a deep clean this weekend.",
        "Keeping the house tidy is hard.",
        "I need to organize my closet."
      ]
    },
    {
      key: 'home-organization',
      label: '🏡 Home Organization',
      lines: [
        "I need to organize my closet.",
        "Let’s tidy up the living room.",
        "I want to declutter my desk.",
        "Do you use storage boxes?",
        "I need to donate old clothes.",
        "Organizing makes me feel relaxed.",
        "The garage is a mess.",
        "Let’s rearrange the furniture.",
        "Do you use labels for storage?",
        "I keep my books by category.",
        "Could you help me move this shelf?",
        "I should throw away things I don’t use.",
        "The kitchen pantry needs cleaning.",
        "I want to make more space at home.",
        "Organizing takes a lot of time.",
        "I like minimalist design.",
        "I need to file my papers.",
        "Do you use any apps for organizing?",
        "A tidy home makes me happy.",
        "Let’s make a to-do list for organizing."
      ]
    },
    {
      key: 'morning-routines',
      label: '🌅 Morning Routines',
      lines: [
        "I usually wake up at 7 a.m.",
        "Do you eat breakfast every morning?",
        "I check my phone right after waking up.",
        "I like to exercise in the morning.",
        "Do you drink coffee or tea in the morning?",
        "I make my bed first thing in the morning.",
        "I usually take a shower before work.",
        "Do you listen to music in the morning?",
        "I prepare lunch before leaving.",
        "I read the news while eating breakfast.",
        "I brush my teeth after breakfast.",
        "My mornings are always rushed.",
        "I like slow mornings on weekends.",
        "I get ready while listening to the radio.",
        "I plan my day in the morning.",
        "I need to wake up earlier.",
        "Do you meditate in the morning?",
        "I set multiple alarms.",
        "My morning routine helps me stay focused.",
        "I often skip breakfast."
      ]
    },
    {
      key: 'evening-routines',
      label: '🌙 Evening Routines',
      lines: [
        "I usually get home around 7 p.m.",
        "Do you cook dinner every night?",
        "I like to watch TV in the evening.",
        "I sometimes go for a walk after dinner.",
        "I check my emails before bed.",
        "I like to read a book in the evening.",
        "I usually take a shower at night.",
        "Do you spend time with family in the evening?",
        "I drink tea before bed.",
        "I try not to use my phone before sleeping.",
        "I like to play games in the evening.",
        "My evenings are usually busy.",
        "I often do chores at night.",
        "I watch movies on Friday nights.",
        "I prepare clothes for the next day.",
        "I like to write in my journal at night.",
        "I usually sleep around midnight.",
        "I sometimes call friends in the evening.",
        "I listen to music before sleeping.",
        "Evenings help me relax."
      ]
    },
    {
      key: 'weekends-at-home',
      label: '🎉 Weekends at Home',
      lines: [
        "I like to sleep in on weekends.",
        "Do you usually stay home or go out?",
        "I like to cook a big breakfast on Saturdays.",
        "I spend time watching movies on weekends.",
        "I usually clean the house on Sundays.",
        "I like to read books at home.",
        "Sometimes I invite friends over.",
        "Do you play games on weekends?",
        "I enjoy gardening on Saturdays.",
        "I like to relax on the couch.",
        "I spend time with my family.",
        "I often catch up on laundry.",
        "I sometimes bake on weekends.",
        "Do you usually order food on weekends?",
        "I love taking naps on Sundays.",
        "I often listen to music at home.",
        "I try new recipes on weekends.",
        "Weekends are perfect for hobbies.",
        "I sometimes binge-watch TV shows.",
        "I like to keep weekends slow and easy."
      ]
    }
  ];

  // Day 11 ~ Day 100: 라벨만(빈 lines) — 필요 시 순차적으로 채워 넣으세요
  const REMAINING_LABELS = [
    // 11~20 사람·관계
    "Making Small Talk","Meeting New People","Talking with Neighbors","Friendships",
    "Dating & Relationships","Family Gatherings","Raising Children","Parenting Challenges",
    "Celebrations & Holidays","Neighborly Help",
    // 21~30 직장·학업
    "Job Interviews","Workplace Communication","Office Etiquette","Remote Work & Zoom Meetings",
    "Career Goals","Work–Life Balance","School Memories","College Life","Study Habits","Giving Presentations",
    // 31~40 이동·여행
    "Driving & Traffic","Public Transportation","Car Maintenance","Domestic Travel",
    "International Travel","Airports & Flights","Hotels & Accommodation","Tourist Attractions",
    "Travel Planning","Travel Experiences",
    // 41~50 소비·경제
    "Shopping for Clothes","Online Shopping","Budgeting Money","Saving & Investing","Paying Bills",
    "Using Credit Cards","Financial Goals","Negotiating Prices","Luxury vs. Necessity","Grocery Prices Rising",
    // 51~60 취미·여가
    "Watching Movies","TV Shows & Series","Favorite Music","Concerts & Festivals","Reading Books",
    "Playing Video Games","Board Games & Cards","Hobbies & Crafts","Gardening","Photography",
    // 61~70 건강·스포츠
    "Exercising at the Gym","Jogging & Running","Yoga & Meditation","Playing Sports","Watching Sports",
    "Healthy Eating","Dieting & Weight Loss","Sleep Habits","Visiting the Doctor","Mental Health",
    // 71~80 사회·문화
    "Social Media","News & Current Events","Politics (Light Conversation)","Environmental Issues","Volunteering",
    "Community Events","Religion & Beliefs","Cultural Differences","Immigration Stories","Diversity & Inclusion",
    // 81~90 생활환경
    "Renting an Apartment","Buying a House","Moving Homes","Neighborhood Safety","Weather Small Talk",
    "Natural Disasters","Pets & Animals","Urban vs. Rural Life","Local Restaurants","Public Services",
    // 91~100 미래·자기개발
    "Personal Goals","Time Management","Learning New Skills","Career Changes","Retirement Plans",
    "Dreams & Ambitions","Future Technology","Artificial Intelligence","Climate Change Future","Plans for the Weekend"
  ];

  const slug = (s) =>
    s.toLowerCase()
     .replace(/&/g, 'and')
     .replace(/[–—]/g, '-')
     .replace(/[^a-z0-9]+/g, '-')
     .replace(/^-+|-+$/g, '');

  const SKELETON_TOPICS = REMAINING_LABELS.map((label) => ({
    key: slug(label),
    label,
    lines: [] // 추후 20문장씩 채우세요
  }));

  window.TOPICS = [...FILLED_TOPICS, ...SKELETON_TOPICS];
})();
