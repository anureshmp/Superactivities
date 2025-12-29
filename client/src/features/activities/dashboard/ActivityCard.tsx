import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"

type Props = {
    activity: Activity
}

export default function ActivityCard(props: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
        <CardContent>
            <Typography variant="h5">
                {props.activity.title}
            </Typography>
            <Typography sx={{color: 'text.secondary', mb: 1}}>
                {props.activity.title}
            </Typography>
            <Typography variant="body2">
                {props.activity.description}
            </Typography>
            <Typography variant="subtitle1">
                {props.activity.city}/{props.activity.venue}
            </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-between', pb:2 }}>
            <Chip label={props.activity.category} variant="outlined"/>
            <Button size="medium" variant="contained">View</Button>
        </CardActions>
    </Card>
  )
}

