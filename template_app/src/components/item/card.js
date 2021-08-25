import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, CardMedia, CardContent, CardActionArea, Grid }from '@material-ui/core'
import { Col } from 'react-bootstrap'

const useStyles = makeStyles({
    root: {
        width: '100%',
        boxShadow: '#cac7c7 0px 0px 5px 1px',
        borderRadius: '6px',
        backgroundColor: '#eeeeee',
        paddingTop: '5px',
        marginLeft: '1rem',
        marginBottom: '1rem',
        marginTop: '1rem'
    },
    media: {
        height: 140,
        backgroundSize: 'contain'
    },

})

export const CardItem = ({ item }) => {
    const classes = useStyles()
    const defaultImageLocation = '/missingimage.jpg'
    let modifiedLocation = item.ImageLocation
    if (modifiedLocation){
        modifiedLocation = `${productImageBase}${modifiedLocation}`
    }
    // Still neeed to style
    return (
        <Col lg={4} md={6} xl={3} className={classes.root}>
            <CardActionArea style={{height: '100%'}}>
                {modifiedLocation
                    ? <CardMedia
                        className={classes.media}
                        image={modifiedLocation || defaultImageLocation}
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