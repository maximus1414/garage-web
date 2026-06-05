import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zxburqccarnlnquntstb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4YnVycWNjYXJubG5xdW50c3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0NzU4NjcsImV4cCI6MjA5NDA1MTg2N30.fzd4gggXN9iLr0SElB3rhewa7i4acUlcOlNOYCUOiO8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)