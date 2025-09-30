// Type definitions matching backend DTOs

export interface Plan {
  id: number;
  code: string;
  name: string;
  priceMonthly: number;
  maxUsers: number;
  description: string;
}

export interface PlanRequest {
  code: string;
  name: string;
  priceMonthly: number;
  maxUsers: number;
  description: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topic: string;
  content: string;
  // Add more fields as needed
}

export interface Game {
  id: number;
  title: string;
  description: string;
  type: string;
  difficulty: string;
  // Add more fields as needed
}

export interface ApiError {
  message: string;
  status: number;
}