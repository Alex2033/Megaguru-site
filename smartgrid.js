var smartgrid = require('smart-grid');

var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    oldSizeStyle: false,
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1170px', /* max-width оn very large screen */
        fields: '15px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1170px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '992px'
        },
        sm: {
            width: '768px'
        },
        xs: {
            width: '575px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};
 
smartgrid('src/less', settings);