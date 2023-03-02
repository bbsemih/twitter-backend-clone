//I created this function in order to get rid of
//multiple try-catch blocks.
export default fn => {
    return(req,res,next) => {
        fn(req,res,next).catch(next)
    }
};