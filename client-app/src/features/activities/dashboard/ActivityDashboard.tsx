import React from 'react'
import { Grid } from 'semantic-ui-react'
import ActitivityDetails from '../details/ActitivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    
    const { selectedActivity, editMode} = activityStore;
  return (
    <Grid>
        <Grid.Column width="10">
            <ActivityList />
        </Grid.Column>
        <Grid.Column width='6'>
        {selectedActivity && !editMode && <ActitivityDetails />}
        {editMode && <ActivityForm />}
        
            
        </Grid.Column>
    </Grid>
  )
});
