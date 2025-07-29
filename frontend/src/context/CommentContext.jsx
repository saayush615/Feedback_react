import { createContext } from "react";

const CommentContext = createContext({
    triggerRefresh: false,
    comments: []
})

export default CommentContext;