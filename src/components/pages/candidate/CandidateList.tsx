import React, { Component } from 'react'
import { Box, Grid, Paper, styled, FormControl } from '@mui/material';
import "../../../assets/css/signup.css";
import { CandidateTable } from "../../orgenisms/CandidateTable/CandidateTable";
export default class CandidateList extends Component {
  render() {
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    const checkboxLabel = {msg: 'Remember Me'};

    return (
      <> 
        <CandidateTable candidates={[]} />
      </>
    )
  }
}
