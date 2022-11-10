import { useState } from 'react'
import { Grid, Card, CardMedia } from "@material-ui/core";

const ImageCard = ({ url, cardTextTitle = "Lorem Ipsum", cardTextBody = "Lorem ipsum dolor sit amet" }) => {
    const [isHovering, setIsHovering] = useState(false);

    const styles = {
        root: {
            position: "relative"
        },
        card: {
            borderRadius: 10
        },
        cardOverlayContainer: {
            visibility: isHovering ? "visible" : "hidden",
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(84, 93, 106, 0.4)",
            width: "100%",
            height: "100%",
            color: "white",
            position: "absolute",
            top: 0,
            left: 0,
            fontFamily: "sans-serif",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        cardOverlayTitle: {
            fontSize: 25,
            fontWeight: "bold"
        },
        cardOverlayBody: {
            fontSize: 15
        }
    }
    return (
        <div
            style={styles.root}
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
        >

            <Card style={styles.card}>
                <CardMedia
                    component="img"
                    image={url}
                />

            </Card>

            <div style={styles.cardOverlayContainer}>
                <div style={styles.cardOverlayTitle}>
                    {cardTextTitle}
                </div>
                <br />
                <div style={styles.cardOverlayBody}>
                    {cardTextBody}
                </div>
            </div>
        </div>
    )
};

export default ImageCard;