import React from "react";
import { Card, CardContent, Typography, CardActions, Button, CardMedia, IconButton } from "@mui/material";
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined'; // Import the Save icon

function GCard({ title, description, imageUrl, onAction, onSave }) {
  return (
    
    <Card sx={{ display: 'flex', padding: '20px', margin: 2, position: 'relative' }} >
      <CardMedia
        component="img"
        sx={{ width: 100, height: 180 }}
        image={imageUrl}
        alt={title}
      />
      <CardContent sx={{ flex: '1 0 auto', textAlign:'left',overflow:true }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography 
        variant="body2" 
        color="text.secondary"
          sx={{ 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            display: '-webkit-box', 
            WebkitLineClamp: 3, // Limits to 3 lines
            WebkitBoxOrient: 'vertical' 
          }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onAction}>Learn More</Button>
      </CardActions>
      <IconButton
        sx={{ position: 'absolute', top: 10, right: 10 }} // Position the save icon
        onClick={onSave}
      >
        <TurnedInNotOutlinedIcon />
      </IconButton>
    </Card>
  );
}

export default GCard;
