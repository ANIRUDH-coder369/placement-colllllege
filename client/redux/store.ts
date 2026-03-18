import { configureStore } from "@reduxjs/toolkit";
import { registerApi } from "./apis/auth.apis";
import { JOBPOSTApi } from "./apis/JOBPOST.apis";
import { StudentApi } from "./apis/Student";
import { ApplyApi } from "./apis/APPLY.apis";
import { adminAPi } from "./apis/Admin.apis";


const reduxStore = configureStore({
    reducer: {
        [registerApi.reducerPath]: registerApi.reducer,
        [JOBPOSTApi.reducerPath]: JOBPOSTApi.reducer,
        [StudentApi.reducerPath]: StudentApi.reducer,
        [ApplyApi.reducerPath]: ApplyApi.reducer,
        [adminAPi.reducerPath]: adminAPi.reducer,
    },
    middleware: def => def().concat(registerApi.middleware, JOBPOSTApi.middleware, StudentApi.middleware,
        ApplyApi.middleware,
        adminAPi.middleware
    )
})

export default reduxStore