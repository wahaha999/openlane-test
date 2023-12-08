import { createTheme } from "@mui/material/styles";
import { favoriteColors, primaryColors } from "../libs/constant";

export const themeGenerator = (color: string) => {
  let index = favoriteColors.indexOf(color);
  index = index !== -1 ? index : 0;

  return createTheme({
    palette: {
      primary: {
        main: primaryColors[index],
      },
      secondary: {
        main: "#9C27B0",
      },
    },
    typography:{
        fontWeightBold:800,
        fontWeightRegular:600
    },
    components:{
      MuiButton:{
        styleOverrides:{
          root:{
            borderRadius:18,
            textTransform:'capitalize'
          }
        }
      }
    }
  }); 
}