
import React from 'react';
import { ApplicationPage } from './Common';
import applicationData from './data';

const RejectedApplications = () => {
  const rejectedApplications = applicationData.filter((app) => app.status === 'Pending');
  return <ApplicationPage title="Rejected Applications" data={rejectedApplications} link="/Rejected/rejected-applications" color="bg-red-100" />;
};

export default RejectedApplications;