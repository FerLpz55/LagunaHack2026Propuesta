export interface UserProfile {
  id: number;
  user_id: string;
  name: string;
  business_name?: string;
  industry?: string;
  level: 'principiante' | 'intermedio' | 'avanzado';
  avatar_url?: string;
  created_at: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: 'principiante' | 'intermedio' | 'avanzado';
  duration_hours: number;
  thumbnail_url: string;
  created_at: string;
}

export interface Lesson {
  id: number;
  course_id: number;
  title: string;
  content_text: string;
  video_url: string;
  order_index: number;
  created_at: string;
}

export interface Enrollment {
  id: number;
  user_id: string;
  course_id: number;
  enrolled_at: string;
  completed: boolean;
}