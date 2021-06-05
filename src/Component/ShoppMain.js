import React, { forwardRef } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import FaceIcon from "@material-ui/icons/Face";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const ShoppMain = forwardRef(
  ({ id, nama, img, tanggalExp, desc, harga, jumlahStock }, ref) => {
    const classes = useStyles();
    return (
      <div ref={ref} key={id}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <FaceIcon />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={nama}
            subheader={`Harga: ${harga}`}
          />
          <Link to={`/detailCard/${id}`}>
            <CardMedia
              className={classes.media}
              image={img}
              title="Paella dish"
            />
          </Link>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Deskripsi: {desc}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
);
export default ShoppMain;
