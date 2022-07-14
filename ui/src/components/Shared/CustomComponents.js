
/* eslint-disable */

import { Button, Card, Paper, Slider, TextField, Select, Typography } from "@mui/material";
import styled from "@emotion/styled";

const primaryTheme = {
  color1: '#006D77DD',
  color2: '#83C5BEDD',
  color3: '#EDF6F9DD',
  color4: '#FFDDD2DD',
  color5: '#E29578DD',
}

const notificationColors = {
  red: `#FFC7CE`,
  yellow: `#FFF1BA`,
  green: `#C6EFCE`,
}

const SurveyPaper = styled(Paper)(({theme}) => ({
  color: theme.color1,
  backgroundColor: theme.color3,
  padding: '2%',
  marginBottom: '1%',
}));

const SurveyCard = styled(Card)(({theme}) => ({
  color: theme.color1,
  backgroundColor: theme.color3,
  padding: '3%',
  marginBottom: '1%',
}));


const SurveyTypography = styled(Card)(({theme}) => ({
  color: theme.color1,
  backgroundColor: theme.color3,
  fontSize: '28pt'

}));
const NameTypography = styled(Card)(({theme}) => ({
  color: theme.color1,
  backgroundColor: theme.color3,
  fontSize: '20pt',
  cursor: 'pointer',
  transition: '0.6s',
  '&:hover': {
    color: theme.color3,
    backgroundColor: theme.color1,
    cursor: 'pointer',
    transition: '0.6s',
  },
}));
const TitleTypography = styled(Card)(({theme}) => ({
  color: theme.color3,
  backgroundColor: theme.color1,
  fontSize: '36pt',
  padding: '2%',
  marginBottom: '1%',
}));

const TitleCard = styled(Card)(({theme}) => ({
  color: theme.color3,
  backgroundColor: theme.color1,
  padding: '2%',
  marginBottom: '1%',
  width:'auto',
  height:'20%',
}));

const capitalizeFirstLetter = (text) => {
  return text.substring(0,1).toUpperCase() + text.substring(1);
} 
const SurveySubmitButton = styled(Button)(({theme}) => ({
  color: theme.color1,
  backgroundColor: theme.color3,
  fontWeight: 700,
  boxShadow: `0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)`,
  '&:hover': {
    color: theme.color3,
    backgroundColor: theme.color1,
  },
  // '&:active': {
  //   color: theme.color3,
  //   backgroundColor: theme.color1,
  // },
  // '&:focus': {
  //   color: theme.color3,
  //   backgroundColor: theme.color1,
  //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  // },
}));
const SurveySlider = styled(Slider)(({theme}) => ({
  color: theme.color1,

}));
const SurveyTextField = styled(TextField)(({theme}) => ({
  color: theme.color1,
  '& label.Mui-focused': {
    color: theme.color1,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.color2,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.color1,
    },
    '&:hover fieldset': {
      borderColor: theme.color1,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.color1,
      color: theme.color1,
    },
  },
}));
const SurveySelect = styled(Select)(({theme}) => ({
  color: theme.color1,
  '& label.Mui-focused': {
    color: theme.color1,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.color2,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.color1,
    },
    '&:hover fieldset': {
      borderColor: theme.color1,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.color1,
      color: theme.color1,
    },
  },
}));
const CommentCard = styled(Card)(({theme}) => ({
  color: theme.color1,
  backgroundColor: theme.color2,
  padding: '2%',
  marginBottom: '1%',
}));

const SignedInAsTypography = styled(Typography)(({theme}) => ({
  color: theme.color3,
  backgroundColor: theme.color1,
  fontSize: '12pt',
  padding: '2%',
  marginBottom: '1%',
}));


export {primaryTheme, NameTypography, SignedInAsTypography, SurveySelect, CommentCard, SurveyTextField, SurveySlider, SurveyCard, capitalizeFirstLetter, SurveyPaper, SurveySubmitButton, SurveyTypography, notificationColors, TitleTypography, TitleCard};