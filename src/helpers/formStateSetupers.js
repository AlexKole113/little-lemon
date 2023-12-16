const formRequestLoadingState = () => ({ success: false, loading: true, error: false , sent: false });
const formRequestSuccessState = () => ({ success: true, loading: false, error: false , sent: false });
const formRequestErrorState   = () => ({ success: false, loading: false, error: true , sent: false });
const formCompleteState       = () => ({ success: false, loading: false, error: false , sent: true });

export {formRequestLoadingState, formRequestSuccessState, formRequestErrorState, formCompleteState}
