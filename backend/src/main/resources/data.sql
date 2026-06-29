INSERT INTO job_openings (title, department, location, employment_type, description, vertical)
SELECT 'Performance Marketing Specialist', 'Marketing', 'Bengaluru (Hybrid)', 'Full-time',
'Plan and execute paid campaigns across Meta, Google, and programmatic channels for our brand clients.', 'The Dune Productions'
WHERE NOT EXISTS (SELECT 1 FROM job_openings WHERE title = 'Performance Marketing Specialist');

INSERT INTO job_openings (title, department, location, employment_type, description, vertical)
SELECT 'Video Editor / Motion Designer', 'Production', 'Bengaluru, On-site', 'Full-time',
'Edit branded content, reels, and ad films; own the post-production pipeline end to end.', 'The Dune Productions'
WHERE NOT EXISTS (SELECT 1 FROM job_openings WHERE title = 'Video Editor / Motion Designer');

INSERT INTO job_openings (title, department, location, employment_type, description, vertical)
SELECT 'Social Media Strategist', 'Marketing', 'Remote', 'Full-time',
'Own content calendars, community management, and growth strategy for client social accounts.', 'The Dune Productions'
WHERE NOT EXISTS (SELECT 1 FROM job_openings WHERE title = 'Social Media Strategist');

INSERT INTO job_openings (title, department, location, employment_type, description, vertical)
SELECT 'AI/ML Engineer', 'Engineering', 'Bengaluru (Hybrid)', 'Full-time',
'Design, train and deploy ML/LLM-based solutions for client automation and intelligence platforms.', 'Dunova Systems'
WHERE NOT EXISTS (SELECT 1 FROM job_openings WHERE title = 'AI/ML Engineer');

INSERT INTO job_openings (title, department, location, employment_type, description, vertical)
SELECT 'Conversational AI Developer', 'Engineering', 'Remote', 'Full-time',
'Build and fine-tune chatbot and voice-bot solutions integrated with enterprise systems.', 'Dunova Systems'
WHERE NOT EXISTS (SELECT 1 FROM job_openings WHERE title = 'Conversational AI Developer');

INSERT INTO job_openings (title, department, location, employment_type, description, vertical)
SELECT 'Full Stack Developer (Angular + Spring Boot)', 'Engineering', 'Bengaluru, On-site', 'Full-time',
'Build internal AI tooling and client-facing dashboards using Angular, Spring Boot, and PostgreSQL.', 'Dunova Systems'
WHERE NOT EXISTS (SELECT 1 FROM job_openings WHERE title = 'Full Stack Developer (Angular + Spring Boot)');
