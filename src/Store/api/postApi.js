import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../utils/constants"


export const postApi = createApi({
    reducerPath: "post",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        createPost: builder.mutation({
            query: (params) => ({
                method: "POST",
                params
            }),
            invalidatesTags: ["post"]
        })
    })

})

export const { useCreatePostMutation } = postApi