




const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              joo: {
                main: "#647488",
              },
            }
          : {
              // palette values for dark mode
              joo: {
                main: "teal",
              },
            }),
      },
  });
  

  export default getDesignTokens;