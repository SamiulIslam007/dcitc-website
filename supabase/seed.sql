-- Insert sample achievements
INSERT INTO achievements (title, detail, year, image) VALUES
    ('National Robotics Championship Finalist', 'Ranked in the top 6 teams nationwide with an autonomous line-following bot.', '2025', '/hero.png'),
    ('Inter-College Hackathon Champions', 'Built an AI-powered attendance and analytics system in 24 hours.', '2024', '/hero.png'),
    ('Cybersecurity CTF Top 10', 'Secured a top 10 spot in a national capture-the-flag competition.', '2024', '/hero.png'),
    ('Web Engineering Excellence Award', 'Recognized for creating the most accessible college portal for disabled students.', '2024', '/hero.png'),
    ('AI Innovation Summit Winners', 'First place for developing an NLP tool specifically for Bengali script recognition.', '2023', '/hero.png'),
    ('IoT Smart City Prototype', 'Showcased an integrated smart waste management system at the National ICT Fair.', '2023', '/hero.png')
ON CONFLICT DO NOTHING;

-- Insert sample intels
INSERT INTO intels (slug, title, excerpt, content, tag, date, image) VALUES
    ('getting-started-with-dcitc', 'Getting Started with DCITC', 'How to join, what to expect, and how we operate as a tech squad.', 'This is a demo article explaining how a new member can get started with DCITC. Replace this with real content later.', 'Onboarding', 'Nov 2025', '/hero.png'),
    ('behind-the-robotics-lab', 'Behind the Robotics Lab', 'A peek into how we prototype bots, from CAD to code.', 'This is a demo article about what happens inside the robotics lab. Replace with stories, photos, and logs of your projects.', 'Robotics', 'Oct 2025', '/hero.png'),
    ('defending-the-digital-frontier', 'Defending the Digital Frontier', 'What our Cyber Security team practices to stay ahead of threats.', 'This is a demo article describing the cybersecurity mindset of the club. Swap this text for real write-ups later.', 'Cyber Security', 'Sep 2025', '/hero.png'),
    ('ai-ethics-and-society', 'The Future of AI Ethics', 'Exploring the balance between innovation and responsibility in the age of generative models.', 'Artificial intelligence is moving faster than regulation. We discuss how DCITC members should approach AI projects with an ethical mindset...', 'Artificial Intelligence', 'Aug 2025', '/hero.png'),
    ('web3-beyond-the-hype', 'Web3: More Than Just Crypto', 'Understanding the decentralized web architecture and its potential for secure applications.', 'Blockchain technology is often synonymous with currency, but the underlying mechanisms of Web3 offer much more...', 'Web Development', 'Jul 2025', '/hero.png'),
    ('embedded-systems-101', 'Microcontrollers and You', 'A beginners guide to Arduino, ESP32, and building your first hardware project.', 'Starting with hardware can be daunting. In this briefing, we break down the components of a typical embedded system...', 'Electronics', 'Jun 2025', '/hero.png')
ON CONFLICT DO NOTHING;
