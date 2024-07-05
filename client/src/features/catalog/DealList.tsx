import { Grid } from "@mui/material";
import { Deal } from "../../app/models/deal";
import DealCard from "./DealCard";

interface Props{
    deals: Deal[];
}

export default function DealList({deals}:Props){
    return(
        <Grid container spacing ={4}>
                 {deals.map(deal=> ( 
                    <Grid item xs={3}  key={deal.dealId}>
                        <DealCard deal={deal}/>
                    </Grid>
                ))}
        </Grid>
    )
}