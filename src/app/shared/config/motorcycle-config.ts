import { InjectionToken } from '@angular/core';

// Config interface for motorcycle
export interface MotorcycleConfig {
  apiBaseUrl: string;
  defaultCategory: string;
}

// Create an Injection Token
export const MOTORCYCLE_CONFIG = new InjectionToken<MotorcycleConfig>('motorcycle.config');
