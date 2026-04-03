-- Intake Forms Table
CREATE TABLE IF NOT EXISTS intake_forms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth TEXT,
  location TEXT,
  reason_for_seeking TEXT,
  current_experience TEXT,
  previous_experience TEXT,
  medical_care TEXT,
  medication TEXT,
  injuries_or_sensitivities TEXT,
  stress_response TEXT,
  comfortable_with_touch TEXT,
  emotional_patterns TEXT,
  intentions TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_email ON intake_forms(email);
CREATE INDEX IF NOT EXISTS idx_created_at ON intake_forms(created_at);
