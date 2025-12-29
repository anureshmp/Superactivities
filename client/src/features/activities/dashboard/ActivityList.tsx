import Box from "@mui/material/Box";
import { Activity } from "react";
import ActivityCard from "./ActivityCard";

type Props = {
    activities: Activity[]
}

export default function ActivityList(props: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {props.activities.map(activity =>(
            <ActivityCard key={activity.id} activity={activity}/>
        ))}
    </Box>
  )
}
