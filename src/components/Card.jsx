import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        width: '100%',
        borderRadius: 0,
    },
    containerRoot: {
        height: '100%'
    },
    header: {
        padding: '7px 15px 5px 10px',
        background: lightBlue[400]
    },
    words: {
        padding: '10px 15px'
    },
    img: {
        height: '100%',
        span: {
            width: 50
        }
    },
    sentence: {
        padding: '5px 20px 8px 10px'
    }
}));

export default function Card(props) {
    const { card, lang } = props;
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Grid className={classes.containerRoot} container direction="column" justify="space-between">
                <Grid className={classes.header} item>
                    <Grid container justify="space-between">
                        <Typography gutterBottom variant="body2" color="textSecondary">
                            #{card.number}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                            {lang}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid className={classes.words} container>
                        <Grid item xs={7}>
                            <Typography variant="h5" gutterBottom={false}>
                                {lang === 'en' ? card.word_en : card.word_ua}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textSecondary">
                                {lang === 'en' ? card.transcription : ''}
                            </Typography>
                        </Grid>
                        {lang === 'en' &&
                            <Grid item xs={5} >
                                <Grid className={classes.img} container alignItems="center" justify="center">
                                    <Icon
                                        className={'fa fa-' + card.icon}
                                        color="action"
                                        fontSize="large"
                                        style={{width: 50}}
                                    />
                                </Grid>
                            </Grid>
                        }
                    </Grid>
                </Grid>
                <Grid className={classes.sentence} item>
                    <Typography gutterBottom variant="body1" color="textSecondary">
                        {lang === 'en' ? card.sentence_en : card.sentence_ua}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}