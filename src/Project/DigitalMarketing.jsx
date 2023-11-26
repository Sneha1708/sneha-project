import React, { useState } from "react";
import {
  Button,
  Paper,
  Typography,
  Avatar,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const FreelancerDetails = ({
  name,
  experience,
  personsHired,
  imageUrl,
  biography,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [hireDialogOpen, setHireDialogOpen] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleHireNow = () => {
    setHireDialogOpen(true);
  };

  const handleConfirmHiring = () => {
    setHireDialogOpen(false);

    if (termsChecked) {
      alert(`Congratulations! ${name} is hired!`);
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  const handleDialogClose = () => {
    setHireDialogOpen(false);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item container xs={12} md={4} alignItems="center">
        <Avatar
          alt={name}
          src={imageUrl}
          sx={{ width: 80, height: 80, marginRight: 2 }}
        />
        <div>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">
            Experience: {experience} years
          </Typography>
          <Typography variant="subtitle1">
            Persons Hired: {personsHired}
          </Typography>
          <Button
            variant="contained"
            onClick={handleShowDetails}
            sx={{ marginTop: 2 }}
          >
            Show More Details
          </Button>
          &emsp;&emsp;
          <Button
            variant="contained"
            onClick={handleHireNow}
            sx={{ marginTop: 2 }}
          >
            Hire Now
          </Button>
        </div>
      </Grid>
      {showDetails && (
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: 20, marginTop: 10 }}>
            <Typography variant="h6">Biography:</Typography>
            <Typography>{biography}</Typography>
          </Paper>
        </Grid>
      )}

      <Dialog open={hireDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Contact Details</DialogTitle>
        <DialogContent>
          {/* Add contact details here */}
          <FormControlLabel
            control={
              <Checkbox
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
            }
            label="I accept the terms and conditions"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleConfirmHiring}>Confirm Hiring</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

// ... other imports

const DigitalMarketing = () => {
  return (
    <div>
      <FreelancerDetails
        name="Fathima"
        experience={6}
        personsHired={3}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHW3Vy1-oeLGeE7xoybQzImGHBOLp2zkekg&usqp=CAU"
        biography=""
      />

      <FreelancerDetails
        name="Lakshman"
        experience={7}
        personsHired={6}
        imageUrl="https://c1.wallpaperflare.com/preview/843/478/443/entrepreneurship-business-mindset-professional-corporate-man.jpg"
        biography=""
      />
      <FreelancerDetails
        name="Saranya"
        experience={3}
        personsHired={2}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAVFxR2aiSy7nifq0aiIod98FGa_AGRYPTA&usqp=CAU"
        biography=""
      />
      <FreelancerDetails
        name="Krish"
        experience={10}
        personsHired={12}
        imageUrl="data:image/jpeg;base64,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"
        biography=""
      />
      <FreelancerDetails
        name="Lavanya"
        experience={5}
        personsHired={6}
        imageUrl="https://media.istockphoto.com/id/1528491760/photo/young-businesswoman-posing-by-window.webp?b=1&s=170667a&w=0&k=20&c=4cx34JvWH-1F-NVzfmgwHEvkupIBYO_6GBjV_SI5oYY="
        biography=""
      />
      <FreelancerDetails
        name="Arun"
        experience={8}
        personsHired={12}
        imageUrl="data:image/jpeg;base64,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"
        biography=""
      />
    </div>
  );
};

export default DigitalMarketing;
