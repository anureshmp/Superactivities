import { Grid, List, ListItem, ListItemText } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";

type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity: Activity | undefined;
}

export default function ActivityDashboard({activities, selectActivity, cancelSelectActivity, selectedActivity}: Props) {
  return (
    <Grid container spacing={3}>
        <Grid size={9}>
            <ActivityList activities={activities} selectActivity = {selectActivity}/>
        </Grid>
        <Grid size={5}>
          {selectedActivity && <ActivityDetail activity={selectedActivity}></ActivityDetail>}
        </Grid>
    </Grid>
  )
}

