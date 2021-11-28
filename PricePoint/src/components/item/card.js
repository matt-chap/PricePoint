import React from 'react'
import { Typography, CardContent, CardActionArea, Grid } from '@material-ui/core'
import { Col } from 'react-bootstrap'

export const CardItem = ({ item }) => {

    // Still neeed to style
    return (
        <Col lg={4} md={6} xl={3} >
            <CardActionArea style={{ height: '100%' }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" style={{ fontSize: '1.5rem' }}>
                                {item.Name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" noWrap style={{ fontSize: '.75rem' }}>
                                {item.Description}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Col>
    )
}