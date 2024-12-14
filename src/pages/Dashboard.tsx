import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserProfile from '../components/UserProfile';
import UserActivities from '../components/UserActivities';
import { User, Post } from '../types';

const Dashboard: React.FC = () => {
  const { userId = '1' } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [activities, setActivities] = useState<Post[]>([]);
  const [userLoading, setUserLoading] = useState(true);
  const [activitiesLoading, setActivitiesLoading] = useState(true);
  const [userError, setUserError] = useState<string | null>(null);
  const [activitiesError, setActivitiesError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setUserLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        setUserError('Failed to fetch user data');
      } finally {
        setUserLoading(false);
      }
    };

    const fetchActivities = async () => {
      try {
        setActivitiesLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setActivities(response.data);
      } catch (error) {
        setActivitiesError('Failed to fetch activities');
      } finally {
        setActivitiesLoading(false);
      }
    };

    fetchUser();
    fetchActivities();
  }, [userId]);

  return (
    <div className="dashboard">
      <UserProfile 
        user={user} 
        isLoading={userLoading} 
        error={userError} 
      />
      <UserActivities 
        activities={activities} 
        isLoading={activitiesLoading} 
        error={activitiesError} 
      />
    </div>
  );
};

export default Dashboard; 