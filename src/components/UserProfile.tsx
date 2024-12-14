import React from 'react';
import { User } from '../types';

interface Props {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const UserProfile: React.FC<Props> = ({ user, isLoading, error }) => {
  if (isLoading) return <div>Loading user profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
};

export default UserProfile; 