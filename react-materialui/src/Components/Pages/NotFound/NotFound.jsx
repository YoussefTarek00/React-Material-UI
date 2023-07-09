
import { Box, Typography, useTheme } from "@mui/material"

const NotFound = () => {
  const theme = useTheme()
  return (
    <Box>
<Typography variant="h3" color={theme.palette.error.main}>
There Is No Design Yet
 <br/>
 <br/>
Please Try Again Later... 
</Typography>
    </Box>
  )
}

export default NotFound