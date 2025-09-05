export interface User {
  id: string;
  name: string;
  email: string;
  role: 'municipal_admin' | 'department_head' | 'field_worker' | 'contractor';
  department?: string;
  avatar?: string;
  lastLogin?: string;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: 'electricity' | 'water' | 'roads' | 'waste' | 'parks' | 'other';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  location: {
    address: string;
    coordinates: [number, number];
  };
  reportedBy: {
    name: string;
    phone: string;
    email?: string;
  };
  assignedTo?: {
    department: string;
    worker?: string;
  };
  images?: string[];
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  estimatedResolution?: string;
}

export interface DashboardStats {
  totalIssues: number;
  openIssues: number;
  inProgressIssues: number;
  resolvedIssues: number;
  criticalIssues: number;
  avgResolutionTime: number;
  categoryBreakdown: Record<string, number>;
  monthlyTrends: Array<{
    month: string;
    reported: number;
    resolved: number;
  }>;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}