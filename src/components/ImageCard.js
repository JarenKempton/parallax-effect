import { useState } from 'react'
import { Grid, Card, CardMedia } from "@material-ui/core";

const ImageCard = ({ url, cardTextTitle = "Lorem Ipsum", cardTextBody = "Lorem ipsum dolor sit amet" }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div style={{ position: "relative" }} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>

            <Card style={{ borderRadius: 10 }}>
                <CardMedia
                    component="img"
                    image={url}
                />

            </Card>

            <div style={{ visibility: isHovering ? "visible" : "hidden", backdropFilter: "blur(5px)", backgroundColor: "rgba(84, 93, 106, 0.4)", width: "100%", height: "100%", color: "white", position: "absolute", top: 0, left: 0, fontFamily: "sans-serif", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ fontSize: 25, fontWeight: "bold" }}>
                    {cardTextTitle}
                </div>
                <br />
                <div style={{ fontSize: 15 }}>
                    {cardTextBody}
                </div>
            </div>
        </div>
    )
};

export default ImageCard;