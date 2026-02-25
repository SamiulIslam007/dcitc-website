-- Add gallery column to achievements table
ALTER TABLE achievements ADD COLUMN IF NOT EXISTS gallery TEXT[] DEFAULT '{}';
