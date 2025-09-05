import React, { useState } from 'react';
import { Sidebar } from '../layout/Sidebar';
import { Overview } from './Overview';
import { IssuesList } from './IssuesList';
import { mockIssues } from '../../data/mockData';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { 
  Bell, 
  Search, 
  Filter,
  Download,
  Plus,
  Settings,
  Users,
  BarChart3,
  MapPin,
  Zap,
  Wrench
} from 'lucide-react';

export const MunicipalDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      
      case 'issues':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">All Issues</h2>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  New Issue
                </Button>
              </div>
            </div>
            <IssuesList issues={mockIssues} title="All Issues" />
          </div>
        );
      
      case 'departments':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Departments</h2>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Department
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Electricity Department', icon: Zap, issues: 12, active: 8, color: 'yellow' },
                { name: 'Public Works', icon: Wrench, issues: 18, active: 12, color: 'blue' },
                { name: 'Water & Sewage', icon: Users, issues: 9, active: 6, color: 'blue' },
                { name: 'Parks & Recreation', icon: MapPin, issues: 5, active: 3, color: 'green' },
                { name: 'Waste Management', icon: Users, issues: 7, active: 4, color: 'purple' },
                { name: 'Transportation', icon: Users, issues: 11, active: 7, color: 'red' }
              ].map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <Card key={index} hover>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{dept.name}</h3>
                          <p className="text-sm text-gray-600">Municipal Department</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Total Issues</span>
                          <Badge variant="default">{dept.issues}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Active Issues</span>
                          <Badge variant="warning">{dept.active}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Resolved</span>
                          <Badge variant="success">{dept.issues - dept.active}</Badge>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full mt-4" size="sm">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
            <Card>
              <CardContent className="p-8 text-center">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Detailed analytics and reporting features will be available in Part 3
                </p>
                <Badge variant="info">No Record</Badge>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'map':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Issue Map</h2>
            <Card>
              <CardContent className="p-8 text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">
                  Interactive map with issue locations and real-time updates
                </p>
                <Badge variant="info">No Record</Badge>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
            <Card>
              <CardContent className="p-8 text-center">
                <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">System Settings</h3>
                <p className="text-gray-600 mb-4">
                  Configure system preferences, user management, and notifications
                </p>
                <Badge variant="info">No Record</Badge>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Municipal Dashboard</h1>
              <p className="text-sm text-gray-600">
                Manage and monitor civic issues across the city
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
              
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <Filter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};