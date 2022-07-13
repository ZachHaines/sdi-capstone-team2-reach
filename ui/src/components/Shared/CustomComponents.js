
/* eslint-disable */

import { Button, Card, Paper, Slider, TextField, Select } from "@mui/material";
import styled from "@emotion/styled";

const primaryTheme = {
  color1: '#006D77',
  color2: '#83C5BE',
  color3: '#EDF6F9',
  color4: '#FFDDD2',
  color5: '#E29578',
}

const notificationColors = {
  red: `#FFC7CE`,
  yellow: `#FFF1BA`,
  green: `#C6EFCE`,
}

const SurveyPaper = styled(Paper)(({theme}) => ({
  color: theme.color1,
  backgroundColor: theme.color4,
  padding: '2%',
  marginBottom: '1%',
}));

const SurveyCard = styled(Card)(({theme}) => ({
  color: theme.color1,
  backgroundColor: theme.color3,
  padding: '2%',
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
  fontSize: '20pt'

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
  fontFamily: 'ROBOTO',
}));

const capitalizeFirstLetter = (text) => {
  return text.substring(0,1).toUpperCase() + text.substring(1);
} 
const SurveySubmitButton = styled(Button)(({theme}) => ({
  color: theme.color1,
  backgroundColor: theme.color3,

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



export {primaryTheme, NameTypography, SurveySelect, CommentCard, SurveyTextField, SurveySlider, SurveyCard, capitalizeFirstLetter, SurveyPaper, SurveySubmitButton, SurveyTypography, notificationColors, TitleTypography, TitleCard};