import { Issue, DashboardStats } from '../types';

export const mockIssues: Issue[] = [
  {
    id: '1',
    title: 'Street Light Not Working on Main Street',
    description: 'The street light near the intersection of Main St and Oak Ave has been out for 3 days. This creates a safety hazard for pedestrians and drivers.',
    category: 'electricity',
    priority: 'high',
    status: 'open',
    location: {
      address: '123 Main Street, Downtown',
      coordinates: [40.7128, -74.0060]
    },
    reportedBy: {
      name: 'John Smith',
      phone: '(555) 123-4567',
      email: 'john.smith@email.com'
    },
    assignedTo: {
      department: 'electricity'
    },
    images: ['https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400'],
    createdAt: '2024-01-14T10:30:00Z',
    updatedAt: '2024-01-14T10:30:00Z',
    estimatedResolution: '2024-01-16T17:00:00Z'
  },
  {
    id: '2',
    title: 'Pothole on Elm Street',
    description: 'Large pothole causing damage to vehicles. Located near house number 456.',
    category: 'roads',
    priority: 'medium',
    status: 'in_progress',
    location: {
      address: '456 Elm Street, Residential Area',
      coordinates: [40.7589, -73.9851]
    },
    reportedBy: {
      name: 'Maria Garcia',
      phone: '(555) 987-6543'
    },
    assignedTo: {
      department: 'public_works',
      worker: 'Mike Johnson'
    },
    images: ['https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400'],
    createdAt: '2024-01-13T14:15:00Z',
    updatedAt: '2024-01-14T09:20:00Z',
    estimatedResolution: '2024-01-17T12:00:00Z'
  },
  {
    id: '3',
    title: 'Water Leak in City Park',
    description: 'Water main leak causing flooding in the northeast section of City Park.',
    category: 'water',
    priority: 'critical',
    status: 'in_progress',
    location: {
      address: 'City Park, Northeast Section',
      coordinates: [40.7831, -73.9712]
    },
    reportedBy: {
      name: 'Park Maintenance Staff',
      phone: '(555) 111-2222'
    },
    assignedTo: {
      department: 'water',
      worker: 'Sarah Wilson'
    },
    createdAt: '2024-01-14T08:45:00Z',
    updatedAt: '2024-01-14T11:30:00Z',
    estimatedResolution: '2024-01-15T16:00:00Z'
  },
  {
    id: '4',
    title: 'Overflowing Trash Bins',
    description: 'Multiple trash bins overflowing on Market Street. Attracting pests and creating unsanitary conditions.',
    category: 'waste',
    priority: 'medium',
    status: 'resolved',
    location: {
      address: 'Market Street, Business District',
      coordinates: [40.7505, -73.9934]
    },
    reportedBy: {
      name: 'Local Business Owner',
      phone: '(555) 444-5555'
    },
    assignedTo: {
      department: 'waste',
      worker: 'Tom Brown'
    },
    createdAt: '2024-01-12T16:20:00Z',
    updatedAt: '2024-01-13T10:15:00Z',
    resolvedAt: '2024-01-13T15:30:00Z'
  },
  {
    id: '5',
    title: 'Broken Playground Equipment',
    description: 'Swing set chains are broken at Riverside Park playground. Safety hazard for children.',
    category: 'parks',
    priority: 'high',
    status: 'open',
    location: {
      address: 'Riverside Park Playground',
      coordinates: [40.7282, -74.0776]
    },
    reportedBy: {
      name: 'Concerned Parent',
      phone: '(555) 777-8888'
    },
    createdAt: '2024-01-14T12:00:00Z',
    updatedAt: '2024-01-14T12:00:00Z',
    estimatedResolution: '2024-01-18T14:00:00Z'
  },
  {
    id: '6',
    title: 'Traffic Signal Malfunction',
    description: 'Traffic light stuck on red at the intersection of Pine St and Cedar Ave.',
    category: 'electricity',
    priority: 'critical',
    status: 'resolved',
    location: {
      address: 'Pine St & Cedar Ave Intersection',
      coordinates: [40.7614, -73.9776]
    },
    reportedBy: {
      name: 'Traffic Police',
      phone: '(555) 999-0000'
    },
    assignedTo: {
      department: 'electricity',
      worker: 'Alex Chen'
    },
    createdAt: '2024-01-13T07:30:00Z',
    updatedAt: '2024-01-13T09:45:00Z',
    resolvedAt: '2024-01-13T11:20:00Z'
  }
];

export const mockStats: DashboardStats = {
  totalIssues: 156,
  openIssues: 23,
  inProgressIssues: 18,
  resolvedIssues: 115,
  criticalIssues: 3,
  avgResolutionTime: 2.4,
  categoryBreakdown: {
    electricity: 45,
    water: 32,
    roads: 38,
    waste: 25,
    parks: 16
  },
  monthlyTrends: [
    { month: 'Aug', reported: 42, resolved: 38 },
    { month: 'Sep', reported: 38, resolved: 41 },
    { month: 'Oct', reported: 45, resolved: 43 },
    { month: 'Nov', reported: 52, resolved: 48 },
    { month: 'Dec', reported: 48, resolved: 52 },
    { month: 'Jan', reported: 31, resolved: 28 }
  ]
};