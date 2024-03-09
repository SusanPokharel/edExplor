
import React from 'react';
import { ApplicationPage } from './Common'; 
import applicationData from './data';

const PendingApplications = () => {
  const pendingApplications = applicationData.filter((app) => app.status === 'Pending');
  return <ApplicationPage title="Pending Applications" data={pendingApplications} link="/Applications/pending-applications" color="bg-blue-100" />;
};

export default PendingApplications;