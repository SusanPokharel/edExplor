
import React from 'react';
import { ApplicationPage } from './Common'; 
import applicationData from './data';

const Application = () => {
  return <ApplicationPage title="Applications" data={applicationData} link="/Applications/applications" color="bg-gray-100" />;
};

export default Application;
