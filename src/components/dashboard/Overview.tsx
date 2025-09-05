import React from 'react';
import { StatsCard } from './StatsCard';
import { IssuesList } from './IssuesList';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { mockStats, mockIssues } from '../../data/mockData';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Users,
  MapPin
} from 'lucide-react';

export const Overview: React.FC = () => {
  const recentIssues = mockIssues.slice(0, 5);
  const criticalIssues = mockIssues.filter(issue => issue.priority === 'critical');

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Issues"
          value={mockStats.totalIssues}
          change={{ value: 12, type: 'increase' }}
          icon={AlertTriangle}
          color="blue"
        />
        <StatsCard
          title="Open Issues"
          value={mockStats.openIssues}
          change={{ value: 8, type: 'decrease' }}
          icon={Clock}
          color="red"
        />
        <StatsCard
          title="Resolved This Month"
          value={mockStats.resolvedIssues}
          change={{ value: 15, type: 'increase' }}
          icon={CheckCircle}
          color="green"
        />
        <StatsCard
          title="Avg Resolution Time"
          value={`${mockStats.avgResolutionTime} days`}
          change={{ value: 5, type: 'decrease' }}
          icon={TrendingUp}
          color="purple"
        />
      </div>

      {/* Charts and Recent Issues */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Breakdown */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Issues by Category</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(mockStats.categoryBreakdown).map(([category, count]) => {
                const percentage = (count / mockStats.totalIssues) * 100;
                return (
                  <div key={category} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {category}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-8">{count}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Quick Stats</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <div>
                    <p className="font-medium text-red-900">Critical Issues</p>
                    <p className="text-sm text-red-700">Require immediate attention</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-red-600">
                  {criticalIssues.length}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-900">Active Departments</p>
                    <p className="text-sm text-blue-700">Currently handling issues</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-medium text-green-900">Coverage Areas</p>
                    <p className="text-sm text-green-700">Districts monitored</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-green-600">12</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Issues */}
      <IssuesList 
        issues={recentIssues} 
        title="Recent Issues" 
        showFilters={false}
      />
    </div>
  );
};