// Section.tsx
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  section: {
    '&:hover $sectionHeading a': {
      display: 'block',
    },
  },
  sectionTitle: {
    fontSize: '1.25rem',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  sectionHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    '& a': {
      display: 'none',
      cursor: 'pointer',
    },
  },
}));

export const Section = (props: { children: React.ReactNode }) => {
  const classes = useStyles();
  return <Box className={classes.section}>{props.children}</Box>;
};

export const SectionTitle = (props: { children: React.ReactNode }) => {
  const classes = useStyles();
  return <Typography className={classes.sectionTitle}>{props.children}</Typography>;
};

export const SectionHeading = (props: { children: React.ReactNode }) => {
  const classes = useStyles();
  return <Box className={classes.sectionHeading}>{props.children}</Box>;
};

export default Section;
