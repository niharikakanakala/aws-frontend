import React from 'react';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  return (
    <div className="App">
      
      <AmplifySignOut />
      <h1>niha</h1>
      
    </div>
  );
}

export default withAuthenticator(App);
