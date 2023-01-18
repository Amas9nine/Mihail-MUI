import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
    const { name, price, setOrder, poster } = props;

    return (
        <Grid item xs={12} md={4} >
            <Card sx={{ height: "100%" }}>
                <CardMedia
                    component="img"
                    image={poster}
                    alt={name}
                    tittle={name}
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h6"
                        className='card-title'
                    >
                        {name}
                    </Typography>
                    <Typography>Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="text"
                        color="error"
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;