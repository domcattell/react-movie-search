import {LIGHT_GREY} from '../../shared/constants/styleColours';
import responsiveSizes from '../../shared/responsiveSizes';

export default {
    root: {
        margin: "2em",
        backgroundColor: LIGHT_GREY,

        [responsiveSizes.down("md")]: {
            margin: "0",
            marginTop: "1em"
        }
    }
}