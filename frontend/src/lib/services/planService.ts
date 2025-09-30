import { apiClient } from '../api';
import { Plan, PlanRequest } from '@/types/api';

export const planService = {
  /**
   * Get all subscription plans
   */
  async getAll(): Promise<Plan[]> {
    return apiClient.get<Plan[]>('/api/plans');
  },

  /**
   * Get a specific plan by code
   */
  async getByCode(code: string): Promise<Plan> {
    return apiClient.get<Plan>(`/api/plans/${code}`);
  },

  /**
   * Create a new plan (requires authentication)
   */
  async create(data: PlanRequest): Promise<Plan> {
    return apiClient.post<Plan>('/api/plans', data);
  },

  /**
   * Update an existing plan (requires authentication)
   */
  async update(code: string, data: PlanRequest): Promise<Plan> {
    return apiClient.put<Plan>(`/api/plans/${code}`, data);
  },

  /**
   * Delete a plan (requires authentication)
   */
  async delete(code: string): Promise<void> {
    return apiClient.delete<void>(`/api/plans/${code}`);
  },
};