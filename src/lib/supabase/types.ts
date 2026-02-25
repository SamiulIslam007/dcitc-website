export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      achievements: {
        Row: {
          id: number
          title: string
          detail: string
          year: string
          image: string
          gallery: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          title: string
          detail: string
          year: string
          image: string
          gallery?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          title?: string
          detail?: string
          year?: string
          image?: string
          gallery?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      intels: {
        Row: {
          id: number
          slug: string
          title: string
          excerpt: string
          content: string
          tag: string
          date: string
          image: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          slug: string
          title: string
          excerpt: string
          content: string
          tag: string
          date: string
          image: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          slug?: string
          title?: string
          excerpt?: string
          content?: string
          tag?: string
          date?: string
          image?: string
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
