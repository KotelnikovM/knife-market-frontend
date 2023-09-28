import { FavoriteBorderOutlined, Place } from '@mui/icons-material';
import { Box, Container, Input, Toolbar, Typography } from '@mui/material';
import Basket from './basket/basket';

function IdenticSearchBar() {
  return (
    <Toolbar sx={{ backgroundColor: '#ECF1F2', color: '#000000' }}>
      <Container
        component="div"
        maxWidth="xl"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mr: '5vh',
          }}
        >
          <Typography variant="h2">RadMax</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body2">радмаксовские</Typography>
            <svg
              width="60"
              height="12"
              viewBox="0 0 60 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.91748 7.35376C0.91748 7.35376 2.0437 6.80785 4.01897 6.07318C5.03675 6.56004 7.26733 7.57408 9.42728 8.19813C12.3506 9.04248 14.2993 8.91246 17.0277 8.91246C19.7558 8.91246 23.6535 8.45779 23.6535 8.45779C23.6535 8.45779 23.0688 6.31443 23.0038 4.7554C22.9391 3.19607 22.9391 2.93636 22.9391 2.93636C22.9391 2.93636 22.3541 5.14507 22.4841 6.31442C22.6141 7.48345 22.6141 7.87343 22.6141 7.87343C22.6141 7.87343 17.4824 8.39312 13.8446 8.00312C10.2069 7.61345 7.99825 7.22345 6.43922 6.70408C5.58018 6.41753 4.76084 6.17099 4.19804 6.00693C6.95391 4.99227 11.2666 3.64792 16.4427 2.87169C25.5369 1.50735 23.7181 1.96202 23.7181 1.96202C23.7181 1.96202 23.9132 1.57234 25.0822 1.44265C26.2515 1.31265 38.2041 0.727995 41.9071 0.987676C45.6098 1.24736 55.8083 1.76734 57.3023 2.74169C58.7964 3.71604 59.381 4.69038 58.9263 7.09375C58.4717 9.49744 57.5623 11.8361 56.7177 11.3162C55.8733 10.7965 53.0152 8.58812 50.2869 8.19813C47.5585 7.80845 44.5701 7.87345 43.3361 8.19813C42.1017 8.52312 40.0231 9.82215 39.0487 9.49747C38.0744 9.17279 36.1257 7.35376 34.5666 8.00343C33.0076 8.6531 32.9426 8.84779 32.2279 9.75714C31.5136 10.6668 30.5389 11.7062 29.7596 10.7318C28.9799 9.75715 27.5509 9.30247 26.3165 9.23747C25.0825 9.17278 23.9782 9.56246 23.6535 9.88714C23.3285 10.2121 22.8738 10.8615 22.8738 10.8615C22.8738 10.8615 20.8601 10.3421 18.5214 10.6018C16.183 10.8615 12.1556 11.0565 9.42728 10.5368C6.69891 10.0171 0.91748 7.35376 0.91748 7.35376ZM25.4722 8.13313C25.4722 8.13313 28.0709 7.67844 29.0452 8.39279C30.0196 9.10746 30.2143 9.69215 31.9683 8.26313C33.7223 6.83379 34.8263 5.79443 36.7753 6.83378C38.724 7.87344 39.6337 8.52281 41.5174 7.54845C43.4011 6.5741 47.4938 5.53476 50.9366 6.96378C54.3793 8.39281 57.0429 10.6665 57.5623 9.23747C58.082 7.80813 58.342 6.2491 55.6786 5.66474C53.0152 5.08007 49.0528 4.4304 45.4151 5.01507C41.7771 5.59974 41.1277 7.28846 39.6337 6.83378C38.1394 6.37911 36.5156 5.01508 34.6966 5.72944C32.8776 6.44411 31.3186 8.65279 29.8246 7.93812C28.3305 7.22377 27.2912 6.57411 26.3818 7.02878C25.4722 7.48346 25.4722 8.13313 25.4722 8.13313Z"
                fill="#1F1C21"
              />
            </svg>
            <Typography variant="body2">ножи</Typography>
          </Box>
        </Box>
        <Input
          placeholder="Поиск"
          sx={{
            paddingLeft: '2vh',
            // mr: '10vh',
            width: '377px',
            height: '41px',
            border: '1px solid darkgrey',
            borderRadius: '5px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            flexWrap: 'wrap-reverse',
          }}
        >
          <Basket />
          <FavoriteBorderOutlined sx={{ ml: '7vh' }} />
          <Box sx={{ ml: '7vh' }}>
            <Typography>8-800-777-49-67</Typography>
            <Typography sx={{ color: '#E8AA31' }}>Заказать звонок</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Place />
            <Typography>Москва</Typography>
          </Box>
        </Box>
      </Container>
    </Toolbar>
  );
}

export default IdenticSearchBar;
