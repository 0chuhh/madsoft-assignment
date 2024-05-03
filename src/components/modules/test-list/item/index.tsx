import { Card, CardContent, Grid, Typography } from '@mui/material';
import { ITest } from 'models/test';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export type ITestItemProps = Pick<ITest, 'id' | 'name' | 'description'>;

export const TestItem: FC<ITestItemProps> = ({ id, name, description }) => {
    return (
        <Grid item md={6} sm={12}>
            <Link to={`/tests/${id}`} style={{textDecoration:'none'}}>
                <Card>
                    <CardContent>
                        <Typography component="h3" variant='h3'>{name}</Typography>
                        <Typography color="text.secondary" gutterBottom>{description}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
};