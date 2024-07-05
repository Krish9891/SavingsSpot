import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Deal } from "../../app/models/deal";


export default function DealDetails(){
    const {dealId} = useParams<{dealId:string}>();
    const [deal, setDeal] = useState<Deal | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://localhost:7012/api/Deals/${dealId}`)
        .then(response => setDeal(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, [dealId])

    if(loading) return <h3>Loading..</h3>
    if(!deal) return <h3>No deal found</h3>
    return(
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={deal.url} alt={deal.title} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{deal.title}</Typography>
                <Divider sx={{mb:2}}/>
                <Typography variant='h4' color='secondary'>{deal.currentPrice}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>{deal.title}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{deal.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>MRP</TableCell>
                                <TableCell>{deal.mrp}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Price</TableCell>
                                <TableCell>{deal.currentPrice}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Discount</TableCell>
                                <TableCell>{deal.discount}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

