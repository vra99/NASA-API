import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'app/reducers';
import { Grid } from '@mui/material';
import styled from 'styled-components';


export const Favorites = () => {
    const favorites = useSelector((state: RootState) => state.nasa.favorites);

    interface Image {
        url: string;
        title?: string;
        id?: number;
    }

    return (
        <div>
            <Grid container spacing={3} sx={{ m: "6rem" }} >
            { favorites &&
                favorites.map(({url, id, title}: Image) => (
                    <Grid item xs="auto" key={id}>
                        <Title> { title } </Title>
                        <Image src={url} />
                    </Grid>
                ))
            }
            </Grid>
        </div>
    )
}

const Image = styled.img`
    border-radius: 12px;
    position: relative;
    border: 1px solid #dddddd !important;
    height: 320px;
    width: 320px;
    max-width: 516px;
    max-height: 516px;
    `
const Title = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`
