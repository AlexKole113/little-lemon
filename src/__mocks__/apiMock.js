// https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js
// returns 404
// so..

const responseTimeModifier      = 2000;
const successAppearanceModifier = .95;

const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return () => (s = s * a % m) / m;
};

const fetchAPI = date => new Promise(( resolve, reject) => {
    const responseTime = Math.random() * responseTimeModifier;
    const isError      = Math.random() > successAppearanceModifier;

    setTimeout(()=>{
        if ( !isError ) {
            let data = [];
            let random = seededRandom(date.getDate());

            for(let i = 17; i <= 23; i++) {
                if(random() < 0.5) data.push(i + ':00');
                if(random() < 0.5) data.push(i + ':30');
            }
            resolve( { code: 200, message: 'Success', data } )
        } else {
            reject({code: 500, message: 'Error'})
        }
    },responseTime)

})

const submitAPI = formData => new Promise((resolve, reject) => {
    const responseTime = Math.random() * responseTimeModifier;
    const isError      = Math.random() > successAppearanceModifier;

    setTimeout(()=>{
        if (!isError) {
            resolve({code: 200, message: 'Success'})
        } else {
            reject({code: 500, message: 'Error'})
        }
    }, responseTime)
});

export {
    fetchAPI,
    submitAPI
};
