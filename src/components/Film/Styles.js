import responsiveSizes from '../../shared/responsiveSizes';

export default {
    root: {
        display: "flex",

        [responsiveSizes.down("sm")]: {
            display: "block"
        }
    }
}