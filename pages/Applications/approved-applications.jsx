// PendingApplications.js
import React from 'react';
import { ApplicationPage } from './Common'; 
import applicationData from './data';

const ApprovedApplications = () => {
  const approvedApplications = applicationData.filter((app) => app.status === 'Approved');
  return <ApplicationPage title="Approved Applications" data={approvedApplications} link="/Applications/approved-applications" color="bg-green-100" />;
};

export default ApprovedApplications;