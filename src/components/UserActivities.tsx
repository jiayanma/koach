import React from 'react';
import { Post } from '../types';

interface Props {
  activities: Post[];
  isLoading: boolean;
  error: string | null;
}

const UserActivities: React.FC<Props> = ({ activities, isLoading, error }) => {
  if (isLoading) return <div>Loading activities...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-activities">
      <h2>User Activities</h2>
      <div className="activities-list">
        {activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <h3>{activity.title}</h3>
            <p>{activity.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserActivities; 