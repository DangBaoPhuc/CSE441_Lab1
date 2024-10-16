

import React from 'react';

import Employee from './employee';
import EmployeeDetail from './employee_detail';
import { View } from 'react-native';


function App(): React.JSX.Element {
  return (
    <View>
    <Employee name='Dang Bao Phuc' age='21' ocupation='IT'/>
    <EmployeeDetail />

   </View>
  );
}



export default App;
