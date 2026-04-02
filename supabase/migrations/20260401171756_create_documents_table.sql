/*
  # Create documents table for ServiceLocal

  1. New Tables
    - `documents`
      - `id` (uuid, primary key)
      - `title` (text) - Document name
      - `description` (text) - Document description
      - `category` (text) - Category of document
      - `price` (integer) - Price in rupees
      - `razorpay_link` (text) - Razorpay payment link
      - `download_link` (text) - Google Drive download link (hidden)
      - `is_featured` (boolean) - Featured on homepage
      - `download_count` (integer) - Track popular documents
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `documents` table
    - Add policy for public read access (no auth required)
*/

CREATE TABLE IF NOT EXISTS documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  price integer DEFAULT 9,
  razorpay_link text NOT NULL,
  download_link text NOT NULL,
  is_featured boolean DEFAULT false,
  download_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view documents"
  ON documents
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_documents_category ON documents(category);
CREATE INDEX IF NOT EXISTS idx_documents_featured ON documents(is_featured);
CREATE INDEX IF NOT EXISTS idx_documents_download_count ON documents(download_count DESC);