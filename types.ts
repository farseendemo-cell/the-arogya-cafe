import React from 'react';

export interface MenuItem {
  name: string;
  description?: string;
  isSpicy?: boolean;
  isSignature?: boolean;
  price?: string;
}

export interface MenuCategory {
  title: string;
  icon?: React.ReactNode;
  items: MenuItem[];
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  source: 'Google' | 'Zomato' | 'Swiggy' | 'Local Guide';
}

export interface NavLink {
  path: string;
  label: string;
}