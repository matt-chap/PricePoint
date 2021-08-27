import React from 'react'
import { Typography, CardMedia, CardContent, CardActionArea, Grid }from '@material-ui/core'
import { Col } from 'react-bootstrap'

export const CardItem = ({ item }) => {

    // Still neeed to style
    return (
        <Col lg={4} md={6} xl={3} >
            <CardActionArea style={{height: '100%'}}>
                {modifiedLocation
                    ? <CardMedia
                        image={item.ImageLocation}
                        title={item.Name}
                        style={{opacity: !modifiedLocation ? '0.25' : null}}
                    />
                    : <div 
                        style={{
                            minHeight: '140px', backgroundColor: 'white', 
                            padding: '20px', textAlign: 'center',
                            borderRadius: '10px', marginTop: '5px',
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        >
                        <h2>{item.Name}</h2>
                    </div>
                }
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" style={{fontSize: '1.5rem'}}>
                                {item.Name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" noWrap style={{fontSize: '.75rem'}}>
                                {item.Description}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Col>
    )
}