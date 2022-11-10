import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { Grid } from "@material-ui/core";
import { useTrail, animated } from "react-spring";

const CardGallery = ({ imageURLs = [] }) => { 
    return (
        <Grid container justifyContent="flex-start" spacing={2} style={{ padding: 50 }}>
            {imageURLs.map(url => (
                <Grid item xs={12} sm={6} md={3}>
                    <ImageCard url={url} />
                </Grid>
            ))}
        </Grid>
    )
};
export default CardGallery;