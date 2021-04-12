import React from "react";

const LessonContext = React.createContext();

export const LessonProvider = LessonContext.Provider;
export const LessonConsumer = LessonContext.Consumer;
export default LessonContext;