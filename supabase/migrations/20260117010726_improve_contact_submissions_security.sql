/*
  # Improve contact submissions security

  1. Changes
    - Drop the overly permissive RLS policy
    - Add a new policy with proper validation
    - Ensure required fields are not empty
    - Validate email format
    - Add reasonable length limits to prevent abuse
  
  2. Security
    - Replace `WITH CHECK (true)` with actual validation
    - Prevent empty submissions
    - Validate email format using PostgreSQL's email validation
*/

DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

CREATE POLICY "Allow valid contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL AND 
    length(trim(name)) >= 2 AND 
    length(name) <= 100 AND
    email IS NOT NULL AND 
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    length(email) <= 255 AND
    message IS NOT NULL AND 
    length(trim(message)) >= 10 AND 
    length(message) <= 2000 AND
    (phone IS NULL OR length(phone) <= 50)
  );