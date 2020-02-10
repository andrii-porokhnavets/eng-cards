import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from "./Card";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        height: '297mm',
        width: '210mm',
        padding: '5mm'
    },
    card: {
        height: '16.66666%'
    }
}));

export default function Page(props) {
    const {cards} = props;
    const classes = useStyles();

    const uaCards = cards.reduce((accum, card, key) => {
        let newKey = key;
        if (key % 3 === 0) {
            newKey = key + 2
        } else if (key % 3 === 2) {
            newKey = key - 2
        }

        accum[newKey] = card;

        return accum
    }, []);

    return (
        <div>
            <Grid className={classes.root} container spacing={0}>
                {cards.map(card => (
                    <Grid key={card.number} className={classes.card} item xs={4}>
                        <Card card={card}
                              lang={'en'}
                        />
                    </Grid>
                ))}
            </Grid>
            <Grid className={classes.root} container spacing={0}>
                {uaCards.map(card => (
                    <Grid key={card.number} className={classes.card} item xs={4}>
                        <Card card={card}
                              lang={'ua'}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}