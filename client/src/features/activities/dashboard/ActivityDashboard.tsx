import { Grid, List, ListItem, ListItemText } from "@mui/material";
import ActivityList from "./ActivityList";

type Props = {
    activities: Activity[]
}

export default function ActivityDashboard(props: Props) {
  return (
    <Grid container>
        <Grid size={9}>
            <ActivityList activities={props.activities}/>
        </Grid>
    </Grid>
  )
}

