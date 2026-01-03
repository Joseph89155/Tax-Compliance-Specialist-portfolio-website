// Fix: Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Kenya Compliance' | 'Global Finance' | 'Tech & Innovation';
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}