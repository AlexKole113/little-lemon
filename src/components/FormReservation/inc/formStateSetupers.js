const formRequestLoadingState = () => ({ success: false, loading: true, error: false });
const formRequestSuccessState = () => ({ success: true, loading: false, error: false });
const formRequestErrorState   = () => ({ success: false, loading: false, error: true });

export {formRequestLoadingState, formRequestSuccessState, formRequestErrorState }
