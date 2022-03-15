
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            fontWeight: 'bold'
        }
    }
})

const Banner = () => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.image}>
                <Typography>BLOG WEBSITE</Typography>
            </Box>
        </>
    )
}

export default Banner;