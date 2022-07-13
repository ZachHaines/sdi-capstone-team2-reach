
/* eslint-disable */

import { Card, Paper } from "@mui/material";
import styled from "@emotion/styled";

const primaryTheme = {
  color1: '#006D77',
  color2: '#83C5BE',
  color3: '#EDF6F9',
  color4: '#FFDDD2',
  color5: '#E29578',

  
}

const MyHeaderPaper = styled(Paper)(({theme}) => ({

}));

const SurveyCard = styled(Card)(({theme}) => ({
  color: theme.color1,
  backgroundColor: theme.color3,
}));


export {primaryTheme, SurveyCard};