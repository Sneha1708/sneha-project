// import React from "react";

// const Photography = () => {
//   return (
//     <div style={{ color: "blueviolet" }}>
//       Photograpghy
//       <p> Name:Sowmiya</p>
//       <p>Experience: 3 years</p>
//       <p>Projects Done: 5</p>
//       <p>email: Sowmiya12@gmail.com</p>
//       <p>Contact:798367718</p>
//       <br></br>
//     </div>
//   );
// };

// export default Photography;

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
    console.log("handleConfirmHiring function is called");
    console.log("termsChecked:", termsChecked);

    if (termsChecked) {
      console.log(`Congratulations! ${name} is hired!`);
      setHireDialogOpen(false);
    } else {
      console.log("Please accept the terms and conditions.");
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

const LogoDesign = () => {
  return (
    <div>
      <FreelancerDetails
        name="seema sen"
        experience={3}
        personsHired={6}
        imageUrl="https://media.istockphoto.com/id/933431904/photo/business-woman-meeting-with-colleagues-in-the-office.jpg?s=2048x2048&w=is&k=20&c=PA1XYewS3UyFDLD-Kss7iNWLrOODNBx_cvF7UJYKwOs="
        biography=""
      />
      <FreelancerDetails
        name="Sophian Sam"
        experience={5}
        personsHired={11}
        imageUrl="https://media.istockphoto.com/id/1415537841/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.webp?b=1&s=170667a&w=0&k=20&c=nGiCN1ZsKYIiMT6KzP2u2EWCGDvxIw114qZrKbPbMik="
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Sowmiya"
        experience={5}
        personsHired={16}
        imageUrl="https://media.istockphoto.com/id/1288011772/photo/staying-in-touch-with-friends-around-the-globe.jpg?s=612x612&w=0&k=20&c=OOy7tZ_G3HqkvIH4IiJb2skmwL_zvNGNSj3smXVzHWI="
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Ram"
        experience={8}
        personsHired={11}
        imageUrl="https://media.istockphoto.com/id/1449299278/photo/image-of-video-editor-working-with-footage-and-post-production-montage-in-creative-office.jpg?s=612x612&w=0&k=20&c=V_YAUXy3vEKHxjxx-ztH_lfuYjRwk4nu7auxgzTJpZ0="
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Prithika"
        experience={3}
        personsHired={4}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaTZgEjw_Z4oX5omk7fTyJKpt6mLZp5EEugP5SPBcFx6YTqT7NEVSipCrdG8VxndbPmM&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Asim Dev"
        experience={5}
        personsHired={9}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaMSbzi0bpN_wZaURB13vCm5S3Pt5-1OCvw&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Vikashni"
        experience={6}
        personsHired={4}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNwU5wbDwTvH3YT9LyiEn-eSPqQIPMBUC-g&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Awithsa"
        experience={4}
        personsHired={5}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mI1UXyKNAewAZ9aPFu1OfH_moGvmR5HX5A&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Harish"
        experience={3}
        personsHired={5}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8ekz3bc7ZwPtIK8kQd9hs9cafBEM0r5ipQ&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Cathrine"
        experience={9}
        personsHired={10}
        imageUrl="https://media.istockphoto.com/id/1217967906/photo/customer-making-credit-card-payment-at-cashier-counter-in-clothing-store-at-shopping-mall.jpg?s=612x612&w=0&k=20&c=RsS0OIwSpt2EkjD8YqwO5czdszDiFyfMLCbwtAV2i_8="
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default LogoDesign;
