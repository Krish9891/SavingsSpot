import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Deal } from "../../app/models/deal";

interface Props{
    deal:Deal
}

export default function DealCard({deal}:Props)
{
    return(
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor:'decondary.main'}}>
                        {deal.title.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={deal.title}
                titleTypographyProps={{
                  sx:{fontWeight:'bold', color:'primary.main'}
                }}
              />
      <CardMedia
        sx={{ height: 140, backgroundSize:'container', bgcolor:'primaty.light' }}
        image="http://picsum.photos/200"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
          {deal.currentPrice}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {deal.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
    )

}