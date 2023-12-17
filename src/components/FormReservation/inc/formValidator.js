const reservationFormValidatorRules = [
    {
        id: 'date-input',
        validator: ( value , possibleValues = null ) => {

            const today         = new Date();
            const requestedDate = new Date( `${value} 23:59:59` )
            if ( requestedDate < today )  return false;
            return true;
        },
        message: 'Doc hasn\'t invented a time machine yet.'
    },
    {
        id: 'time-select',
        validator: ( value , possibleValues = null ) => {
            if( !possibleValues ) return false;

            const availableTime = possibleValues;
            if ( !availableTime.includes(value) )  return false;
            return true;
        },
        message: 'Please, choose correct time.'
    },
    {
        id: 'input-guests',
        validator: ( value , possibleValues = null ) => {
            if( !possibleValues ) return false;

            const { min, max } = possibleValues;
            if ( value > max || value < min ) return false;
            return true;
        },
        message: `Please, choose correct number of guests.`
    },
    {
        id: 'select-occassion',
        validator: ( value , possibleValues = null ) => {
            if( !possibleValues ) return false;

            if ( !possibleValues.includes(value) ) return false;
            return true;
        },
        message: 'Please, choose correct value'
    },
];

const isFieldValid = ( fieldID, fieldValue, possibleValues ) => {
    let isValid  = true;
    let messages = [];
    reservationFormValidatorRules.forEach( ( { id, validator, message } ) => {
        if ( fieldID === id ) {
            if( !validator(fieldValue,possibleValues)) {
                isValid = false;
                messages =[...messages, message ]
            }
        }
    })
    return [isValid, messages];
}


export default isFieldValid;
