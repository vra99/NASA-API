import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/reducers';
import { getRandomPicture } from 'app/actions/actions';
import { Images } from 'app/components';
import { Button, Box, CircularProgress, Container } from '@mui/material';
import styled from 'styled-components';


export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = () => {
  const [ loading, setLoading ] = useState(true);
  const image = useSelector((state: RootState) => state.nasa.image);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomPicture());
    setLoading(false);
  }, []);

  const Loading = () => (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  )

  return (
    <div>
      { loading ?
        ( 
          <Loading />
        ) : (
          image &&
            <Container maxWidth="md">
              <ImageContainer>
                <h1> {image.title} </h1>
                <Images image= {image}/>
              </ImageContainer>
              <Button 
                variant="outlined"
                onClick= {() => dispatch(getRandomPicture())}
              > 
                Next 
              </Button>
            </Container>
        )
      }
    </div>
  );
};

const ImageContainer = styled.div`
padding: 20px 0px;
`;

